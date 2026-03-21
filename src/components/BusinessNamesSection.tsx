"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "@/components/Icons";

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

const BusinessNameCard = ({ name, domain, category, tagline }: typeof BUSINESS_NAMES[0]) => (
  <div className="w-full lg:w-[300px] flex-shrink-0 bg-white border border-outline/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
    <div className="space-y-4 relative z-10">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-mono tracking-widest text-primary/60 uppercase">{category}</span>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      <div>
        <h3 className="text-2xl font-headline font-bold text-on-surface">{name}</h3>
        <p className="text-primary font-mono text-sm">{domain}</p>
      </div>
      <p className="text-sm text-on-surface/60 font-body leading-snug h-10 line-clamp-2">
        {tagline}
      </p>
      <button className="w-full bg-on-surface text-white py-3 rounded-xl font-headline text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors group/btn">
        <span>👉 Claim This Name</span>
      </button>
    </div>
  </div>
);

export function BusinessNamesSection() {
  // Duplicate list to ensure smooth infinite scroll
  const scrollItems = [...BUSINESS_NAMES, ...BUSINESS_NAMES, ...BUSINESS_NAMES];

  return (
    <section className="section-py bg-surface-container-low overflow-hidden">
      <div className="max-w-[1320px] section-px mb-12 flex justify-between items-end mx-auto">
        <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight flex items-center gap-3">
          AVAILABLE BUSINESS NAMES
        </h2>
        <Link 
          href="/names"
          className="hidden lg:flex text-sm font-headline font-bold text-primary hover:opacity-70 transition-opacity items-center gap-2 group/link"
        >
          View All Names <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden lg:block max-w-[1320px] mx-auto section-px">
        <div className="relative group overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-horizontal pause-on-hover">
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
      <div className="lg:hidden relative h-[600px] overflow-hidden group">
        <div className="flex flex-col gap-6 h-max animate-scroll-vertical pause-on-hover">
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
      <div className="lg:hidden mt-8 section-px flex justify-center">
        <Link 
          href="/names"
          className="text-sm font-headline font-bold text-primary hover:opacity-70 transition-opacity flex items-center gap-2 group/link"
        >
          View All Names <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
}
