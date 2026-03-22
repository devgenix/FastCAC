"use client";

import React, { useState, useMemo } from "react";
import { BUSINESS_NAMES_DATA, CATEGORIES, BusinessName } from "@/lib/name-data";
import { Search, Zap, X } from "./Icons";
import { NameGrid } from "./NameGrid";
import { BusinessNameCard } from "./BusinessNameCard";
import { HeaderToggle } from "@/components/HeaderToggle";

export function NameMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
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
    const scrollSpeed = 0.6; // slightly faster for premium feel

    const autoScroll = () => {
      if (!isHoveredRef.current && !isInteractingRef.current) {
        container.scrollLeft += scrollSpeed;
        
        // Reset scroll position for infinite loop (content is tripled)
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
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  // Initialize scroll position to the middle for infinite feel
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
    <div className="min-h-screen">
    <HeaderToggle sticky={false} />
      {/* Interactive Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden low border-b border-outline/5">
        <div className="max-w-[1320px] section-px mx-auto relative z-10 text-center">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2.2rem] lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
                        Find your next{" "}
                        <span className="text-primary italic inline-flex flex-col h-[1.1em] overflow-hidden align-bottom">
                          <span key={words[wordIndex]} className="animate-[fade-up_0.5s_ease-out_forwards]">
                            {words[wordIndex]}
                          </span>
                        </span>{" "}
                        Name
                    </h1>

                    <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body">
                        Stuck on what to call your business? Browse our curated list of available names 
                        and get registered in minutes.
                    </p>
                </div>

                {/* Professional Search Bar */}
                <div className="relative group">
                    <div className="relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-[1.2rem] p-1.5 pl-6 shadow-sm transition-all">
                    <Search className="w-5 h-5 text-on-surface/40" />
                    <input 
                        type="text"
                        placeholder="Search by keyword, industry or name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg font-body px-4 py-2 text-on-surface placeholder:text-on-surface/20"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-on-surface/5 text-on-surface/40 hover:text-on-surface/70 transition-all mr-2 group/clear animate-in fade-in zoom-in duration-200"
                            aria-label="Clear search"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
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
                <div 
                  ref={desktopScrollRef}
                  className="flex gap-6 overflow-x-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing select-none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseUpOrLeave}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseMove={handleMouseMove}
                >
                  {[...BUSINESS_NAMES_DATA.filter(n => n.isPremium), ...BUSINESS_NAMES_DATA.filter(n => n.isPremium), ...BUSINESS_NAMES_DATA.filter(n => n.isPremium)].map((item, index) => (
                    <div key={`featured-desktop-${index}`} className="w-[320px] shrink-0">
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
          <div className="sticky top-0 z-40 mb-12 py-4 bg-surface/80 backdrop-blur-md -mx-6 px-6 lg:mx-0 lg:px-0">
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









// import React from "react";
// import Link from "next/link";
// import { BusinessNameCard } from "@/components/BusinessNameCard";
// import { NameGrid } from "@/components/NameGrid";
// import { FinalCTA } from "@/components/Footer";
// import { Metadata } from "next";
// import { HeaderToggle } from "@/components/HeaderToggle";
// import { BUSINESS_NAMES_DATA } from "@/lib/name-data";

// export const metadata: Metadata = {
//   alternates: {
//     canonical: "/names",
//   },
// };

// export default function NamesPage() {
//   // Use premium names for this section
//   const premiumNames = BUSINESS_NAMES_DATA.filter(n => n.isPremium);
//   // Duplicate list to ensure smooth infinite scroll on desktop
//   const scrollItems = [...premiumNames, ...premiumNames, ...premiumNames];

//   return (
//     <div className="min-h-screen">
//       <HeaderToggle sticky={false} />
//       <div className="section-py">
//         <div className="max-w-[1320px] section-px mx-auto text-center space-y-6 pt-20">
//           <h1 className="text-[2.2rem] lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
//             Find the Perfect{" "}
//             <span className="text-primary italic">Business Name</span>
//           </h1>
//           <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body">
//             Stuck on what to call your business? Browse our curated list of available names 
//             and get registered in minutes.
//           </p>
//         </div>
//       </div>

//       <section className="section-py bg-surface-container-low overflow-hidden">
//         <div className="max-w-[1320px] section-px mb-12 flex justify-between items-end mx-auto">
//           <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight flex items-center gap-3">
//             {title}
//           </h2>
//           {showViewAll && (
//             <Link 
//               href="/names"
//               className="hidden lg:flex text-sm font-headline font-bold text-primary hover:opacity-70 transition-opacity items-center gap-2 group/link"
//             >
//               View All Names <span className="group-hover/link:translate-x-1 transition-transform">→</span>
//             </Link>
//           )}
//         </div>

//         {/* Desktop Horizontal Scroll */}
//         <div className="hidden lg:block max-w-[1320px] mx-auto section-px">
//           <div className="relative overflow-hidden">
//             <div className="flex gap-6 w-max animate-scroll-horizontal pause-on-hover py-4">
//               {scrollItems.map((item, index) => (
//                 <div key={`desktop-${index}`} className="w-[300px]">
//                   <BusinessNameCard {...item} />
//                 </div>
//               ))}
//             </div>
//             {/* Gradients for smooth fade */}
//             <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
//             <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />
//           </div>
//         </div>

//         {/* Mobile Horizontal Snap Carousel */}
//         <div className="lg:hidden relative overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 px-6 py-4">
//           {BUSINESS_NAMES_DATA.filter(n => n.isPremium).map((item, index) => (
//             <div key={`mobile-${index}`} className="snap-center shrink-0 w-[85vw]">
//               <BusinessNameCard {...item} />
//             </div>
//           ))}
//         </div>
//       </section>
      
//       <NameGrid />

//       <FinalCTA />
//     </div>
//   );
// }
