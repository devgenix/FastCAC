"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "@/components/Icons";
import { BusinessNameCard } from "./BusinessNameCard";
import { BUSINESS_NAMES_DATA } from "@/lib/names-data";

interface BusinessNamesSectionProps {
  title?: string;
  showViewAll?: boolean;
}

export function BusinessNamesSection({ 
  title = "AVAILABLE BUSINESS NAMES", 
  showViewAll = true 
}: BusinessNamesSectionProps) {
  // Use premium names for this section
  const premiumNames = BUSINESS_NAMES_DATA.filter(n => n.isPremium);
  // Duplicate list to ensure smooth infinite scroll on desktop
  const scrollItems = [...premiumNames, ...premiumNames, ...premiumNames];

  return (
    <section className="section-py bg-surface-container-low overflow-hidden">
      <div className="max-w-[1320px] section-px mb-12 flex justify-between items-end mx-auto">
        <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight flex items-center gap-3">
          {title}
        </h2>
        {showViewAll && (
          <Link 
            href="/names"
            className="hidden lg:flex text-sm font-headline font-bold text-primary hover:opacity-70 transition-opacity items-center gap-2 group/link"
          >
            View All Names <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        )}
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden lg:block max-w-[1320px] mx-auto section-px">
        <div className="relative overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-horizontal pause-on-hover py-4">
            {scrollItems.map((item, index) => (
              <div key={`desktop-${index}`} className="w-[300px]">
                <BusinessNameCard {...item} />
              </div>
            ))}
          </div>
          {/* Gradients for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Mobile Horizontal Snap Carousel */}
      <div className="lg:hidden relative overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 px-6 py-4">
        {BUSINESS_NAMES_DATA.filter(n => n.isPremium).map((item, index) => (
          <div key={`mobile-${index}`} className="snap-center shrink-0 w-[85vw]">
            <BusinessNameCard {...item} />
          </div>
        ))}
      </div>

      {/* Mobile-only link */}
      {showViewAll && (
        <div className="lg:hidden mt-8 section-px flex justify-center">
          <Link 
            href="/names"
            className="text-sm font-headline font-bold text-primary hover:opacity-70 transition-opacity flex items-center gap-2 group/link"
          >
            View All Names <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
