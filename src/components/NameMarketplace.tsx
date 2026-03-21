"use client";

import React, { useState, useMemo } from "react";
import { BUSINESS_NAMES_DATA, CATEGORIES, BusinessName } from "@/lib/names-data";
import { Search, Zap } from "./Icons";
import { NameGrid } from "./NameGrid";
import { BusinessNameCard } from "./BusinessNameCard";

export function NameMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNames = useMemo(() => {
    return BUSINESS_NAMES_DATA.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-surface">
      {/* Interactive Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-container-low border-b border-outline/5">
        {/* Clean Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary-foreground),transparent)] opacity-20" />
        
        <div className="max-w-[1320px] section-px mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-headline font-bold mb-8">
            <Zap className="w-3 h-3" />
            <span>CURATED BUSINESS IDENTITIES</span>
          </div>
          
          <h1 className="text-4xl lg:text-8xl font-headline font-black italic tracking-tighter leading-[0.9] mb-8">
            The <span className="text-gradient-green">Name</span> <br className="hidden lg:block" />
            Marketplace
          </h1>
          
          <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body mb-12">
            Browse our curated collection of brandable business names, complete with 
            premium domains and industry-specific taglines.
          </p>

          {/* Professional Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-[1.2rem] p-1.5 pl-6 shadow-sm transition-all">
              <Search className="w-5 h-5 text-on-surface/40" />
              <input 
                type="text"
                placeholder="Search by keyword, industry or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-body px-4 py-2 text-on-surface placeholder:text-on-surface/20"
              />
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-on-surface/5 text-[10px] font-headline font-bold text-on-surface/40 uppercase tracking-widest mr-2">
                Real-time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Marketplace Content */}
      <section className="py-12 lg:py-20 relative">
        <div className="max-w-[1320px] mx-auto section-px">
          
          {/* Top Picked Section - Only show when not searching */}
          {searchQuery === "" && selectedCategory === "All" && (
            <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight mb-2">
                    TOP PICKED <span className="text-primary italic">FOR YOU</span>
                  </h2>
                  <p className="text-on-surface/50 font-body text-sm">
                    Our most brandable, high-potential business identities.
                  </p>
                </div>
              </div>
              
              {/* Desktop Horizontal Scroll */}
              <div className="hidden lg:block relative overflow-hidden group/scroll">
                <div className="flex gap-6 w-max animate-scroll-horizontal pause-on-hover py-4">
                  {[...BUSINESS_NAMES_DATA.filter(n => n.isPremium), ...BUSINESS_NAMES_DATA.filter(n => n.isPremium)].map((item, index) => (
                    <div key={`featured-desktop-${index}`} className="w-[320px]">
                      <BusinessNameCard {...item} />
                    </div>
                  ))}
                </div>
                {/* Gradients for smooth fade */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
              </div>

              {/* Mobile Horizontal Snap Carousel */}
              <div className="lg:hidden -mx-6 relative overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 px-6 py-4">
                {BUSINESS_NAMES_DATA.filter(n => n.isPremium).map((item, index) => (
                  <div key={`featured-mobile-${index}`} className="snap-center shrink-0 w-[85vw]">
                    <BusinessNameCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sticky Category Tabs */}
          <div className="sticky top-20 z-40 mb-12 py-4 bg-surface/80 backdrop-blur-md -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-2 p-1 bg-surface-container-high/50 rounded-2xl w-max mx-auto border border-outline/5 backdrop-blur-sm">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      px-6 py-3 rounded-xl text-sm font-headline font-bold transition-all whitespace-nowrap
                      ${selectedCategory === cat 
                        ? 'bg-white dark:bg-surface text-primary shadow-lg scale-[1.02]' 
                        : 'text-on-surface/40 hover:text-on-surface/70 hover:bg-white/50 dark:hover:bg-white/5'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-12 border-b border-outline/5 pb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl lg:text-2xl font-headline font-black tracking-tight">
                {selectedCategory === "All" ? "ALL NAMES" : `${selectedCategory.toUpperCase()} NAMES`}
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-headline font-bold">
                {filteredNames.length} RESULTS
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 text-xs font-body text-on-surface/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Updated daily for availability
            </div>
          </div>

          {/* The Grid */}
          <NameGrid names={filteredNames} />
        </div>
      </section>
    </div>
  );
}
