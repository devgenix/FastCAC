import React from "react";
import { BusinessNamesSection } from "@/components/BusinessNamesSection";
import { NameGrid } from "@/components/NameGrid";
import { FinalCTA } from "@/components/Footer";

export default function NamesPage() {
  return (
    <div className="min-h-screen">
      <div className="section-py pb-0">
        <div className="max-w-[1320px] section-px mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
            Find the Perfect <br />
            <span className="text-primary italic">Business Name</span>
          </h1>
          <p className="text-lg lg:text-xl text-on-surface/50 max-w-2xl mx-auto font-body">
            Stuck on what to call your business? Browse our curated list of available names 
            and get registered in minutes.
          </p>
        </div>
      </div>

      <BusinessNamesSection title="TOP PICKED NAMES" showViewAll={false} />
      
      <NameGrid />

      <FinalCTA />
    </div>
  );
}
