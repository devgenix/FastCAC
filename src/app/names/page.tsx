import React from "react";
import Link from "next/link";
import { BusinessNameCard } from "@/components/BusinessNameCard";
import { NameGrid } from "@/components/NameGrid";
import { FinalCTA } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/names",
  },
};

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

export default function NamesPage() {
  const scrollItems = [...BUSINESS_NAMES, ...BUSINESS_NAMES, ...BUSINESS_NAMES];

  return (
    <div className="min-h-screen">
      <div className="section-py">
        <div className="max-w-[1320px] section-px mx-auto text-center space-y-6">
          <h1 className="text-[2.2rem] lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
            Find the Perfect{" "}
            <span className="text-primary italic">Business Name</span>
          </h1>
          <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body">
            Stuck on what to call your business? Browse our curated list of available names 
            and get registered in minutes.
          </p>
        </div>
      </div>

      <section className="section-py bg-surface-container-low overflow-hidden">
        <div className="max-w-[1320px] section-px mb-12 flex justify-between items-end mx-auto">
          <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight flex items-center gap-3">
            TOP PICKED NAMES
          </h2>
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
      </section>
      
      <NameGrid />

      <FinalCTA />
    </div>
  );
}
