"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";

import { NameGrid } from "./NameGrid";
import { searchCacAction } from "@/app/actions";
import { CacResultsList, getStatusIcon } from "./CacResultsList";
import { BusinessNameCard } from "./BusinessNameCard";
import { HeaderToggle } from "@/components/HeaderToggle";
import { CacCompany, CacSearchType } from "@/lib/cac-search";
import { Search, Zap, X, Globe, ChevronDown, Check, ArrowRight, Info, Loader2 } from "./Icons";
import { BUSINESS_NAMES_DATA, CATEGORIES, BusinessName } from "@/lib/name-data";

export function NameMarketplace() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Scroll to search section on initial land if searching or from certain actions
  useEffect(() => {
    // Check if we should scroll (either via hash or if a search is active)
    if (typeof window !== 'undefined' && (window.location.hash === '#names-search' || searchParams.get('q'))) {
      const element = document.getElementById('names-search');
      if (element) {
        // Delay slightly to allow Suspense/hydration to settle
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);
  
  const [searchMode, setSearchMode] = useState<'our-names' | 'cac'>(
    (searchParams.get('type') === 'cac' ? 'cac' : 'our-names') as 'our-names' | 'cac'
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cacSearchType, setCacSearchType] = useState<CacSearchType>(
    (searchParams.get('classification') as CacSearchType) || 'ALL'
  );
  const [cacResults, setCacResults] = useState<CacCompany[]>([]);
  const [isCacLoading, setIsCacLoading] = useState(false);
  const [hasSearchedCac, setHasSearchedCac] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<CacCompany | null>(null);
  const [verifyingName, setVerifyingName] = useState<string | null>(null);
  
  // Track to avoid race conditions and redundant searches
  const lastProcessedQueryRef = useRef<string | null>(null);

  // Auto-search logic for CAC mode if 'q' is in URL
  useEffect(() => {
    const q = searchParams.get('q');
    
    // If q is missing, but we still think we have searched, clear it
    if (!q) {
      if (hasSearchedCac) {
        setCacResults([]);
        setHasSearchedCac(false);
      }
      // Only clear searchQuery if we just came from having a query in the URL
      if (lastProcessedQueryRef.current !== null) {
        setSearchQuery("");
        lastProcessedQueryRef.current = null;
      }
      return;
    }

    if (searchMode === 'cac' && q !== lastProcessedQueryRef.current) {
      setSearchQuery(q);
      const performSearch = async () => {
        setIsCacLoading(true);
        setHasSearchedCac(true);
        setVerifyingName(q);
        lastProcessedQueryRef.current = q;
        const result = await searchCacAction(q, cacSearchType);
        const results = result.success ? result.data : [];
        setCacResults(results);
        setSelectedCompany(results.length > 0 ? results[0] : null);
        setIsCacLoading(false);
        setVerifyingName(null);
      };
      performSearch();
    } else if (searchMode === 'our-names' && q !== lastProcessedQueryRef.current) {
      setSearchQuery(q);
      lastProcessedQueryRef.current = q;
    }
  }, [searchParams, searchMode, cacSearchType, hasSearchedCac]);

  const searchResultsRef = React.useRef<HTMLDivElement>(null);

  const triggerCacSearch = useCallback(async (name: string) => {
    setSearchMode('cac');
    setSearchQuery(name);
    setIsClassificationOpen(false);
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', 'cac');
    params.set('q', name);
    router.push(`?${params.toString()}`, { scroll: false });

    // Trigger search
    setIsCacLoading(true);
    setHasSearchedCac(true);
    setVerifyingName(name);
    lastProcessedQueryRef.current = name;
    const result = await searchCacAction(name, cacSearchType);
    const results = result.success ? result.data : [];
    setCacResults(results);
    setSelectedCompany(results.length > 0 ? results[0] : null);
    setIsCacLoading(false);
    setVerifyingName(null);

    // Scroll to results
    setTimeout(() => {
      searchResultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, [searchParams, router, cacSearchType]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wordIndex, setWordIndex] = useState(0);
  const [isClassificationOpen, setIsClassificationOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const words = useMemo(() => ["Business", "Startup", "NGO", "Enterprise", "Agency", "Brand"], []);

  const desktopScrollRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isInteracting, setIsInteracting] = React.useState(false);
  const isInteractingRef = React.useRef(false);
  const isHoveredRef = React.useRef(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  React.useEffect(() => {
    const container = desktopScrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.6;

    const autoScroll = () => {
      if (!isHoveredRef.current && !isInteractingRef.current) {
        container.scrollLeft += scrollSpeed;
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const filteredNames = useMemo(() => {
    return BUSINESS_NAMES_DATA.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  React.useEffect(() => {
    const container = desktopScrollRef.current;
    if (container) {
      setTimeout(() => {
        const singleSetWidth = container.scrollWidth / 3;
        container.scrollLeft = singleSetWidth;
      }, 100);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isInteractingRef.current = true;
    setIsInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStartX(e.pageX - (desktopScrollRef.current?.offsetLeft || 0));
    setScrollLeft(desktopScrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUpOrLeave = () => {
    isHoveredRef.current = false;
    setIsHovered(false);
    if (isInteractingRef.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        setIsInteracting(false);
      }, 2000);
    }
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsHovered(true);
  };

  // Click outside to close classification dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsClassificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isInteractingRef.current) return;
    e.preventDefault();
    const x = e.pageX - (desktopScrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="min-h-screen">
      <HeaderToggle sticky={false} />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-outline/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" />
        <div className="max-w-[1320px] section-px mx-auto relative z-10 text-center">
          <div className="space-y-12">
            <div className="flex flex-col gap-4 max-w-5xl mx-auto">
              <h1 className="text-[2.2rem] lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
                Find your next{" "}
                <span className="text-primary italic inline-flex flex-col h-[1.1em] overflow-hidden align-bottom">
                  <span
                    key={words[wordIndex]}
                    className="animate-[fade-up_0.5s_ease-out_forwards]"
                  >
                    {words[wordIndex]}
                  </span>
                </span>{" "}
                Name
              </h1>
              <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body">
                Stuck on what to call your business? Browse our curated list of
                available names and get registered in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Marketplace Content */}
      <section className="py-12 lg:py-20 relative overflow-x-clip">
        <div className="max-w-[1320px] mx-auto section-px">

          {/* Top Picked Section - Always Visible */}
          <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight mb-2">
                  TOP PICKED{" "}
                  <span className="text-primary italic">FOR YOU</span>
                </h2>
                <p className="text-on-surface/50 font-body text-sm">
                  Our most brandable, high-potential business identities.
                </p>
              </div>
            </div>

            {/* Desktop Horizontal Scroll */}
            <div className="hidden lg:block relative overflow-hidden group/scroll">
              <div
                ref={desktopScrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing select-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseUpOrLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUpOrLeave}
                onMouseMove={handleMouseMove}
              >
                {[
                  ...BUSINESS_NAMES_DATA.filter((n) => n.isPremium),
                  ...BUSINESS_NAMES_DATA.filter((n) => n.isPremium),
                  ...BUSINESS_NAMES_DATA.filter((n) => n.isPremium),
                ].map((item, index) => (
                  <div key={`featured-desktop-${index}`} className="w-[320px] shrink-0">
                    <BusinessNameCard 
                      {...item} 
                      onSearchCac={triggerCacSearch} 
                      isVerifying={verifyingName === item.name}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
            </div>

            {/* Mobile Snap Carousel */}
            <div className="relative lg:hidden overflow-hidden -mx-6 px-6">
              <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 py-4">
                {BUSINESS_NAMES_DATA.filter((n) => n.isPremium).map(
                  (item, index) => (
                    <div
                      key={`featured-mobile-${index}`}
                      className="snap-center shrink-0 w-[85vw]"
                    >
                      <BusinessNameCard 
                        {...item} 
                        onSearchCac={triggerCacSearch} 
                        isVerifying={verifyingName === item.name}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 border-b border-outline/5 pb-6 gap-3">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight">
                {selectedCategory === "All"
                  ? "AVAILABLE NAMES"
                  : `${selectedCategory.toUpperCase()} NAMES`}
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-headline font-bold">
                {filteredNames.length} RESULTS
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-2 text-sm font-body text-on-surface/40">
              Our names are updated daily for availability
            </div>
          </div>

          {/* Sticky section */}
          <div id="names-search" ref={searchResultsRef} className="sticky top-2 z-40 mb-12 scroll-mt-32">
            {/* Row 1: Search Bar & Mode Toggle */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Mode Toggle */}
              <div className="flex p-1.5 bg-white dark:bg-surface-container border border-outline/10 rounded-xl shadow-sm md:w-auto w-full">
                <button
                  onClick={() => {
                    const currentQ = searchParams.get('q');
                    setSearchMode('our-names');
                    setSearchQuery("");
                    setCacResults([]);
                    setHasSearchedCac(false);
                    lastProcessedQueryRef.current = currentQ;
                    const params = new URLSearchParams(searchParams.toString());
                    params.delete('type');
                    params.delete('q');
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-headline font-bold transition-all whitespace-nowrap cursor-pointer ${
                    searchMode === 'our-names'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface/40 hover:text-on-surface/60'
                  }`}
                >
                  Our Names
                </button>
                <button
                  onClick={() => {
                    const currentQ = searchParams.get('q');
                    setSearchMode('cac');
                    setSearchQuery("");
                    setCacResults([]);
                    setHasSearchedCac(false);
                    lastProcessedQueryRef.current = currentQ;
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('type', 'cac');
                    params.delete('q');
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-headline font-bold transition-all whitespace-nowrap cursor-pointer ${
                    searchMode === 'cac'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface/40 hover:text-on-surface/60'
                  }`}
                >
                  Search CAC
                </button>
              </div>

              {/* Search input with classification dropdown for CAC */}
              <div className="flex-1 relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-2xl p-1.5 md:p-2 shadow-sm transition-all gap-1.5 md:gap-2 px-3 md:px-4 min-h-[56px] md:min-h-[64px]">
                {searchMode === 'cac' && (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsClassificationOpen(!isClassificationOpen)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-on-surface/5 transition-colors text-xs font-headline font-bold text-primary whitespace-nowrap border-r border-outline/10 mr-1 cursor-pointer"
                    >
                      <span className="hidden sm:inline">{cacSearchType === 'ALL' ? 'ALL CATEGORIES' : (cacSearchType === 'LIMITED LIABILITY PARTNERSHIP' ? 'LL Partnership' : (cacSearchType === 'LIMITED LIABILITY' ? 'Limited Liability' : (cacSearchType === 'COMPANY' ? 'Company' : (cacSearchType === 'BUSINESS NAME' ? 'Business Name' : (cacSearchType === 'INCORPORATED TRUSTEE' ? 'IT (Incorp. Trustee)' : cacSearchType)))))}</span>
                      <span className="sm:hidden">{cacSearchType === 'ALL' ? 'ALL' : (cacSearchType === 'LIMITED LIABILITY PARTNERSHIP' ? 'LLT' : (cacSearchType === 'LIMITED LIABILITY' ? 'LL' : (cacSearchType === 'COMPANY' ? 'COM' : (cacSearchType === 'BUSINESS NAME' ? 'BN' : (cacSearchType === 'INCORPORATED TRUSTEE' ? 'IT' : cacSearchType)))))}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isClassificationOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isClassificationOpen && (
                      <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-surface-container border border-outline/10 rounded-2xl shadow-xl z-50 py-2 animate-in fade-in zoom-in-95 duration-200">
                        {(['ALL', 'BUSINESS NAME', 'COMPANY', 'INCORPORATED TRUSTEE', 'LIMITED LIABILITY', 'LIMITED LIABILITY PARTNERSHIP'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setCacSearchType(type as CacSearchType);
                              setIsClassificationOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-xs font-headline font-bold flex items-center justify-between transition-colors hover:bg-on-surface/5 cursor-pointer ${
                              cacSearchType === type ? 'text-primary' : 'text-on-surface/60'
                            }`}
                          >
                            <span>{
                              type === 'INCORPORATED TRUSTEE' ? 'IT (Incorp. Trustee)' : 
                              type === 'BUSINESS NAME' ? 'Business Name (BN)' : 
                              type === 'COMPANY' ? 'Company (COM)' : 
                              type === 'LIMITED LIABILITY' ? 'Limited Liability (LL)' : 
                              type === 'LIMITED LIABILITY PARTNERSHIP' ? 'LL Partnership (LLT)' : 
                              type === 'ALL' ? 'All Categories' : type
                            }</span>
                            {cacSearchType === type && <Check className="w-3.5 h-3.5" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <input
                  type="text"
                  placeholder={searchMode === 'our-names' ? "Search by keyword, industry or name..." : "Entity name, RC number, or AV code..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchMode === 'cac' && searchQuery.trim().length >= 3) {
                      triggerCacSearch(searchQuery);
                    }
                  }}
                  className="flex-1 min-w-0 bg-transparent border-none outline-none focus:ring-0 text-base md:text-lg font-body py-2 md:py-3 text-on-surface placeholder:text-on-surface/20"
                />

                {/* Close Button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const currentQ = searchParams.get('q');
                      setSearchQuery("");
                      setCacResults([]);
                      setHasSearchedCac(false);
                      lastProcessedQueryRef.current = currentQ; 
                      const params = new URLSearchParams(searchParams.toString());
                      params.delete('q');
                      router.push(`?${params.toString()}`, { scroll: false });
                    }}
                    className="p-2 hover:bg-on-surface/5 rounded-full text-on-surface/30 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Desktop Search Button */}
                {searchMode === 'cac' && (
                  <button
                    disabled={searchQuery.trim().length < 3 || isCacLoading}
                    onClick={() => triggerCacSearch(searchQuery)}
                    className={`
                      hidden sm:flex items-center justify-center h-12 px-6 rounded-xl text-white text-sm font-headline font-bold transition-all
                      ${searchQuery.trim().length < 3 || isCacLoading 
                        ? 'bg-on-surface/20 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'}
                    `}
                  >
                    {isCacLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Search <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                )}

                {/* Mobile Search Button */}
                {searchMode === 'cac' && (
                  <button
                    disabled={searchQuery.trim().length < 3 || isCacLoading}
                    onClick={() => triggerCacSearch(searchQuery)}
                    className={`
                      sm:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white transition-all active:scale-95
                      ${searchQuery.trim().length < 3 || isCacLoading 
                        ? 'bg-on-surface/10 text-on-surface/30 cursor-not-allowed' 
                        : 'bg-primary shadow-lg shadow-primary/20 cursor-pointer'}
                    `}
                  >
                    {isCacLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Row 2: Mobile Sticky Chips (CAC) */}
            {searchMode === 'cac' && hasSearchedCac && cacResults.length > 0 && (
              <div className="lg:hidden animate-in fade-in slide-in-from-top-2 duration-300 mb-4">
                <div className="bg-surface/90 backdrop-blur-md border border-outline/10 rounded-2xl p-3 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-[10px] font-headline font-bold text-on-surface/40 uppercase tracking-wider">
                      Search Results ({cacResults.length})
                    </span>
                    {cacResults.length > 1 && (
                      <span className="text-[10px] font-body text-on-surface/30 italic">
                        Scroll right to see all
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {cacResults.map((company, index) => (
                      <button 
                        key={`${company.rcNumber}-${index}-mobile-sticky`}
                        onClick={() => setSelectedCompany(company)}
                        className={`shrink-0 px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all border whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                          selectedCompany?.approvedName === company.approvedName 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]' 
                            : 'bg-surface-container border-outline/5 text-on-surface/60'
                        }`}
                      >
                        {getStatusIcon(company.status, true)}
                        {company.approvedName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Row 2: Category Tabs (Our Names) */}
            {searchMode === 'our-names' && (
              <div className="bg-surface/80 backdrop-blur-md py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="overflow-x-auto no-scrollbar">
                  <div className="flex gap-2 p-1 bg-surface-container-high/50 rounded-2xl w-full border border-outline/5 backdrop-blur-sm">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`
                          flex-1 px-4 py-3 rounded-xl text-sm font-headline font-bold transition-all cursor-pointer whitespace-nowrap
                          ${selectedCategory === cat
                            ? "bg-white dark:bg-surface text-primary shadow-lg scale-[1.02]"
                            : "text-on-surface/40 hover:text-on-surface/70 hover:bg-white/50 dark:hover:bg-white/5"}
                        `}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Display */}
          {searchMode === 'our-names' ? (
            <NameGrid 
              names={filteredNames} 
              onSearchCac={triggerCacSearch} 
              verifyingName={verifyingName}
            />
          ) : (
            <div className="mt-8">
              {hasSearchedCac ? (
                <CacResultsList 
                  results={cacResults} 
                  isLoading={isCacLoading} 
                  selectedCompany={selectedCompany}
                  setSelectedCompany={setSelectedCompany}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-20 gap-6 text-center animate-in fade-in duration-700">
                  <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center border border-primary/10 shadow-inner">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <div className="max-w-md space-y-2">
                    <h3 className="text-2xl font-headline font-black tracking-tight">CAC Public Search</h3>
                    <p className="text-on-surface/50 font-body leading-relaxed">
                      Enter a company name above to check its status in the official Corporate Affairs Commission database.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-headline font-bold text-on-surface/30 uppercase tracking-widest pt-4">
                    <span className="flex items-center gap-1.5"><Zap className="w-3 h-3"/> Fast Access</span>
                    <span className="w-1 h-1 bg-on-surface/20 rounded-full"/>
                    <span className="flex items-center gap-1.5"><Globe className="w-3 h-3"/> Real-time Connection</span>
                    <span className="w-1 h-1 bg-on-surface/20 rounded-full"/>
                    <span className="flex items-center gap-1.5"><Search className="w-3 h-3"/> Accurate Data</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
