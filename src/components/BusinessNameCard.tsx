"use client";

import React from "react";
import Link from "next/link";

interface BusinessNameCardProps {
  name: string;
  domain: string;
  category: string;
  tagline: string;
}

export const BusinessNameCard = ({ name, domain, category, tagline }: BusinessNameCardProps) => (
  <Link
    href={`/names/${name.toLowerCase().replace(/\s+/g, '-')}`}
    className="w-full bg-white border border-outline/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden block"
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
    <div className="space-y-4 relative z-10">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-2xl font-headline font-bold text-on-surface">{name}</h3>
          <span className="text-[10px] font-mono tracking-widest text-primary/60 uppercase mt-1.5 shrink-0">{category}</span>
        </div>
        <p className="text-primary font-mono text-sm">{domain}</p>
      </div>
      <p className="text-sm text-on-surface/60 font-body leading-snug h-10 line-clamp-2">
        {tagline}
      </p>
      <div className="w-full bg-on-surface text-white py-3 rounded-xl font-headline text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-primary transition-colors">
        <span>👉 Claim This Name</span>
      </div>
    </div>
  </Link>
);
