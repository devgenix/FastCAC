"use client";

import React from "react";
import { WhatsApp } from "./Icons";
import { waLink } from "@/lib/whatsapp";

interface BusinessNameCardProps {
  name: string;
  domain: string;
  category: string;
  tagline: string;
  isPremium?: boolean;
}

export const BusinessNameCard = ({ 
  name, 
  domain, 
  category, 
  tagline,
  isPremium = false 
}: BusinessNameCardProps) => {
  const whatsappUrl = waLink(`Hi, I'm interested in the business name: ${name} (${domain})`);

  return (
    <div className={`
      group relative p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full border
      ${isPremium 
        ? 'bg-white dark:bg-surface-container border-primary/20 shadow-sm' 
        : 'bg-white dark:bg-surface-container border-outline/10 shadow-sm'
      }
    `}>
      {/* Minimal Background Element */}
      <div className="absolute -right-2 -top-2 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-headline font-bold uppercase tracking-wider rounded-full">
            {category}
          </span>
          {isPremium && (
            <span className="text-[10px] font-headline font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              PREMIUM
            </span>
          )}
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl lg:text-3xl font-headline font-black italic tracking-tight text-on-surface mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <code className="text-sm font-mono text-primary/70 mb-4 block">
            {domain}
          </code>

          <p className="text-sm text-on-surface/50 font-body leading-relaxed line-clamp-2">
            {tagline}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-outline/5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            <WhatsApp className="w-4 h-4" />
            Get This Name
          </a>
        </div>
      </div>
    </div>
  );
};
