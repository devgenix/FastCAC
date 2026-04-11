"use client";

import React from "react";
import Link from "next/link";
import { Search, Loader2 } from "./Icons";

interface BusinessNameCardProps {
  name: string;
  domain: string;
  category: string;
  tagline: string;
  onSearchCac?: (name: string) => void;
  isVerifying?: boolean;
  logo?: string;
  slug?: string;
}

export const BusinessNameCard = ({ 
  name, 
  domain, 
  category, 
  tagline, 
  onSearchCac,
  isVerifying,
  logo,
  slug
}: BusinessNameCardProps) => (
  <div className="w-full h-full bg-white border border-outline/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col">
    {/* Main Link that covers the card */}
    <Link
      href={`/names/${slug || name.toLowerCase().replace(/\s+/g, '-')}`}
      className="absolute inset-0 z-0"
      aria-label={`View details for ${name}`}
    />
    
    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
    
    {/* Image Header */}
    <div className="h-40 w-full bg-surface-container relative shrink-0 overflow-hidden border-b border-outline/5 pointer-events-none">
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-white">
          <span className="text-5xl font-headline font-black text-primary/10 select-none">
            {name.substring(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-outline/5">
        <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">{category}</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6 space-y-4 relative z-10 pointer-events-none flex-1 flex flex-col">
      <div>
        <h3 className="text-2xl font-headline font-bold text-on-surface line-clamp-1">{name}</h3>
        <p className="text-primary font-mono text-sm mt-1">{domain}</p>
      </div>
      
      <p className="text-sm text-on-surface/60 font-body leading-snug flex-1 line-clamp-2 md:line-clamp-none">
        {tagline}
      </p>
      
      {/* Footer buttons (interactive) */}
      <div className="flex gap-2 pointer-events-auto pt-2 mt-auto">
        <Link 
          href={`/names/${slug || name.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex-1 bg-on-surface text-white py-3 rounded-xl font-headline text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors relative z-20"
        >
          <span>👉 Get Name</span>
        </Link>
        {onSearchCac && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSearchCac(name);
            }}
            disabled={isVerifying}
            className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm relative z-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
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
