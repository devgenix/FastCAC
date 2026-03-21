"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "@/components/Icons";
import { BusinessNameCard } from "./BusinessNameCard";

const BUSINESS_NAMES = [
  {
    name: "Paylio",
    domain: "paylio.com",
    category: "Fintech",
    tagline: "Fast, modern payments for Africa",
  },
  {
    name: "Zestly",
    domain: "zestly.ng",
    category: "E-commerce",
    tagline: "Fresh brand for your online store",
  },
  {
    name: "KudaSoft",
    domain: "kudasoft.com",
    category: "SaaS",
    tagline: "Next-gen enterprise solutions",
  },
  {
    name: "FarmBrim",
    domain: "farmbrim.com",
    category: "AgriTech",
    tagline: "Digitizing agricultural value chains",
  },
  {
    name: "HealthQ",
    domain: "healthq.ng",
    category: "HealthTech",
    tagline: "Smart healthcare management",
  },
  {
    name: "EduSpark",
    domain: "eduspark.com",
    category: "EdTech",
    tagline: "Igniting the future of learning",
  },
];

interface BusinessNamesSectionProps {
  title?: string;
  showViewAll?: boolean;
}

export function BusinessNamesSection({ 
  title = "AVAILABLE BUSINESS NAMES", 
  showViewAll = true 
}: BusinessNamesSectionProps) {
  // Duplicate list to ensure smooth infinite scroll
  const scrollItems = [...BUSINESS_NAMES, ...BUSINESS_NAMES, ...BUSINESS_NAMES];

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
              <BusinessNameCard key={`desktop-${index}`} {...item} />
            ))}
          </div>
          {/* Gradients for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Mobile Vertical Scroll */}
      <div className="lg:hidden relative h-[600px] overflow-hidden">
        <div className="flex flex-col gap-6 h-max animate-scroll-vertical pause-on-hover py-4">
          {scrollItems.map((item, index) => (
            <div key={`mobile-${index}`} className="section-px">
              <BusinessNameCard {...item} />
            </div>
          ))}
        </div>
        {/* Gradients for smooth fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-container-low to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent z-10 pointer-events-none" />
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
