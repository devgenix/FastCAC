"use client";

import React from "react";
import Link from "next/link";

interface BusinessNameCardProps {
  name: string;
  domain: string;
  category: string;
  tagline: string;
  onSearchCac?: (name: string) => void;
  isVerifying?: boolean;
  logo?: string;
}

import { Search, Loader2 } from "./Icons";

export const BusinessNameCard = ({ 
  name, 
  domain, 
  category, 
  tagline, 
  onSearchCac,
  isVerifying,
  logo
}: BusinessNameCardProps) => (
  <div className="w-full bg-white border border-outline/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden block">
    {/* Main Link that covers the card */}
    <Link
      href={`/names/${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="absolute inset-0 z-0"
      aria-label={`View details for ${name}`}
    />
    
    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
    
    {/* Content overlay */}
    <div className="space-y-4 relative z-10 pointer-events-none">
      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            {logo && (
              <img src={logo} alt={`${name} logo`} className="w-8 h-8 rounded-md object-cover border border-outline/10 shrink-0 bg-surface/50" />
            )}
            <h3 className="text-2xl font-headline font-bold text-on-surface">{name}</h3>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-primary/60 uppercase mt-1.5 shrink-0">{category}</span>
        </div>
        <p className="text-primary font-mono text-sm mt-1">{domain}</p>
      </div>
      <p className="text-sm text-on-surface/60 font-body leading-snug h-10 line-clamp-2">
        {tagline}
      </p>
      
      {/* Footer buttons (interactive) */}
      <div className="flex gap-2 pointer-events-auto">
        <Link 
          href={`/names/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex-1 bg-on-surface text-white py-3 rounded-xl font-headline text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors relative z-20"
        >
          <span>👉 Claim This Name</span>
        </Link>
        {onSearchCac && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSearchCac(name);
            }}
            disabled={isVerifying}
            className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm relative z-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            title={`Search "${name}" on CAC`}
          >
            {isVerifying ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  </div>
);
