"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BUSINESS_NAMES_DATA, CATEGORIES, BusinessName } from "@/lib/name-data";
import { Search, Zap, X, Globe } from "./Icons";
import { NameGrid } from "./NameGrid";
import { BusinessNameCard } from "./BusinessNameCard";
import { HeaderToggle } from "@/components/HeaderToggle";
import { searchCacAction } from "@/app/actions";
import { CacCompany, CacSearchType } from "@/lib/cac-search";
import { CacResultsList } from "./CacResultsList";

export function NameMarketplace() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchMode, setSearchMode] = useState<'our-names' | 'cac'>(
    (searchParams.get('type') === 'cac' ? 'cac' : 'our-names') as 'our-names' | 'cac'
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cacSearchType, setCacSearchType] = useState<CacSearchType>('ALL');
  const [cacResults, setCacResults] = useState<CacCompany[]>([]);
  const [isCacLoading, setIsCacLoading] = useState(false);
  const [hasSearchedCac, setHasSearchedCac] = useState(false);

  // Auto-search logic for CAC mode if 'q' is in URL
  useEffect(() => {
    const q = searchParams.get('q');
    if (q && searchMode === 'cac' && !hasSearchedCac) {
      setSearchQuery(q);
      const performSearch = async () => {
        setIsCacLoading(true);
        setHasSearchedCac(true);
        const result = await searchCacAction(q, cacSearchType);
        setCacResults(result.success ? result.data : []);
        setIsCacLoading(false);
      };
      performSearch();
    } else if (q && searchMode === 'our-names') {
      setSearchQuery(q);
    }
  }, [searchParams, searchMode, cacSearchType, hasSearchedCac]);
  const searchResultsRef = React.useRef<HTMLDivElement>(null);

  const triggerCacSearch = useCallback(async (name: string) => {
    setSearchMode('cac');
    setSearchQuery(name);
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', 'cac');
    params.set('q', name);
    router.push(`?${params.toString()}`, { scroll: false });

    // Trigger search
    setIsCacLoading(true);
    setHasSearchedCac(true);
    const result = await searchCacAction(name, cacSearchType);
    setCacResults(result.success ? result.data : []);
    setIsCacLoading(false);

    // Scroll to results
    setTimeout(() => {
      searchResultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, [searchParams, router, cacSearchType]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wordIndex, setWordIndex] = useState(0);

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
    // ✅ No overflow-x-hidden here — would break sticky
    <div className="min-h-screen">
      <HeaderToggle sticky={false} />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-outline/5">
        {/* ✅ overflow-hidden scoped only to hero for any decorative overflow */}
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
      {/* ✅ overflow-x-clip here — blocks horizontal scroll without breaking sticky */}
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

            {/* Desktop Horizontal Scroll — overflow-hidden scoped here only */}
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
                    <BusinessNameCard {...item} onSearchCac={triggerCacSearch} />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
            </div>

            {/* Mobile Snap Carousel — overflow scoped here only */}
            <div className="relative lg:hidden overflow-hidden -mx-6 px-6">
              <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 py-4">
                {BUSINESS_NAMES_DATA.filter((n) => n.isPremium).map(
                  (item, index) => (
                    <div
                      key={`featured-mobile-${index}`}
                      className="snap-center shrink-0 w-[85vw]"
                    >
                      <BusinessNameCard {...item} onSearchCac={triggerCacSearch} />
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

          {/* ✅ Sticky section — works now because no overflow on ancestors */}
          <div ref={searchResultsRef} className="sticky top-2 z-40 mb-12">
            {/* Search Bar & Mode Toggle */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Mode Toggle */}
              <div className="flex p-1.5 bg-white dark:bg-surface-container border border-outline/10 rounded-xl shadow-sm md:w-auto w-full">
                <button
                  onClick={() => {
                    setSearchMode('our-names');
                    setSearchQuery("");
                    setCacResults([]);
                    setHasSearchedCac(false);
                    const params = new URLSearchParams(searchParams.toString());
                    params.delete('type');
                    params.delete('q');
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-headline font-bold transition-all whitespace-nowrap ${
                    searchMode === 'our-names'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface/40 hover:text-on-surface/60'
                  }`}
                >
                  Our Names
                </button>
                <button
                  onClick={() => {
                    setSearchMode('cac');
                    setSearchQuery("");
                    setCacResults([]);
                    setHasSearchedCac(false);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('type', 'cac');
                    params.delete('q');
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-headline font-bold transition-all whitespace-nowrap ${
                    searchMode === 'cac'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface/40 hover:text-on-surface/60'
                  }`}
                >
                  CAC Public Search
                </button>
              </div>

              {/* Search input with classification dropdown for CAC */}
              <div className="flex-1 relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-xl p-1.5 shadow-sm transition-all gap-2 px-4">
                <Search className="w-5 h-5 text-on-surface/40 shrink-0" />
                
                {searchMode === 'cac' && (
                  <select
                    value={cacSearchType}
                    onChange={(e) => setCacSearchType(e.target.value as CacSearchType)}
                    className="bg-transparent border-none outline-none focus:ring-0 text-xs font-headline font-bold text-primary py-0 pl-0 pr-6 appearance-none cursor-pointer border-r border-outline/5"
                  >
                    <option value="ALL">ALL</option>
                    <option value="BUSINESS NAME">BUSINESS NAME</option>
                    <option value="COMPANY">COMPANY</option>
                    <option value="INCORPORATED TRUSTEE">IT</option>
                    <option value="LIMITED LIABILITY">LL</option>
                    <option value="LIMITED LIABILITY PARTNERSHIP">LLP</option>
                  </select>
                )}

                <input
                  type="text"
                  placeholder={searchMode === 'our-names' ? "Search by keyword, industry or name..." : "Entity name, RC number, or AV code..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={async (e) => {
                    if (e.key === 'Enter' && searchMode === 'cac' && searchQuery.trim().length >= 3) {
                      setIsCacLoading(true);
                      setHasSearchedCac(true);
                      const result = await searchCacAction(searchQuery, cacSearchType);
                      setCacResults(result.success ? result.data : []);
                      setIsCacLoading(false);
                    }
                  }}
                  className="flex-1 min-w-0 bg-transparent border-none outline-none focus:ring-0 text-base font-body py-2 text-on-surface placeholder:text-on-surface/20"
                />

                {searchMode === 'cac' && (
                  <button
                    disabled={searchQuery.trim().length < 3 || isCacLoading}
                    onClick={async () => {
                      setIsCacLoading(true);
                      setHasSearchedCac(true);
                      const result = await searchCacAction(searchQuery, cacSearchType);
                      setCacResults(result.success ? result.data : []);
                      setIsCacLoading(false);
                    }}
                    className={`shrink-0 flex items-center justify-center h-10 px-6 rounded-lg text-white transition-all font-headline font-bold text-sm ${
                      searchQuery.trim().length < 3 || isCacLoading 
                        ? 'bg-on-surface/20 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20'
                    }`}
                  >
                    {isCacLoading ? '...' : 'Search'}
                  </button>
                )}

                {searchQuery && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSearchQuery("");
                      if (searchMode === 'cac') {
                        setCacResults([]);
                        setHasSearchedCac(false);
                      }
                    }}
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl hover:bg-on-surface/5 text-on-surface/40 hover:text-on-surface/70 transition-all animate-in fade-in zoom-in duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Tabs (Only if in our-names mode) */}
            {searchMode === 'our-names' && (
              <div className="bg-surface/80 backdrop-blur-md py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="overflow-x-auto no-scrollbar">
                  <div className="flex gap-2 p-1 bg-surface-container-high/50 rounded-2xl w-full border border-outline/5 backdrop-blur-sm">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`
                          flex-1 px-4 py-3 rounded-xl text-sm font-headline font-bold transition-all whitespace-nowrap
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
            <NameGrid names={filteredNames} onSearchCac={triggerCacSearch} />
          ) : (
            <div className="mt-8">
              {hasSearchedCac ? (
                <CacResultsList results={cacResults} isLoading={isCacLoading} />
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
