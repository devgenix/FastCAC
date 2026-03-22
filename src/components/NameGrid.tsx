"use client";

import React from "react";
import { BusinessNameCard } from "./BusinessNameCard";

const ALL_NAMES = [
  { name: "Paylio", domain: "paylio.com", category: "Fintech", tagline: "Fast, modern payments for Africa" },
  { name: "Zestly", domain: "zestly.ng", category: "E-commerce", tagline: "Fresh brand for your online store" },
  { name: "KudaSoft", domain: "kudasoft.com", category: "SaaS", tagline: "Next-gen enterprise solutions" },
  { name: "FarmBrim", domain: "farmbrim.com", category: "AgriTech", tagline: "Digitizing agricultural value chains" },
  { name: "HealthQ", domain: "healthq.ng", category: "HealthTech", tagline: "Smart healthcare management" },
  { name: "EduSpark", domain: "eduspark.com", category: "EdTech", tagline: "Igniting the future of learning" },
  { name: "SwiftKash", domain: "swiftkash.com", category: "Fintech", tagline: "Seamless micro-lending platform" },
  { name: "GlowMart", domain: "glowmart.ng", category: "Retail", tagline: "Your neighborhood digital superstore" },
  { name: "TechNova", domain: "technova.com", category: "IT Services", tagline: "Scalable cloud infrastructure for all" },
  { name: "PureAqua", domain: "pureaqua.ng", category: "Manufacturing", tagline: "Premium bottled water production" },
  { name: "BioGenix", domain: "biogenix.com", category: "Health", tagline: "Advanced diagnostics and lab services" },
  { name: "SolarBeam", domain: "solarbeam.ng", category: "Energy", tagline: "Accessible solar power for homes" },
];

export function NameGrid() {
  return (
    <section className="section-py bg-surface">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl lg:text-4xl font-headline font-black tracking-tight mb-4">
            ALL AVAILABLE NAMES
          </h2>
          <p className="text-on-surface/60 font-body max-w-xl">
            Explore our full directory of hand-picked business names. Each name is vetted for 
            brandability and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_NAMES.map((item) => (
            <BusinessNameCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
