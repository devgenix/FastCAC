
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Globe, ArrowRight, ChevronDown, Check } from './Icons';
import { CacSearchType } from '@/lib/cac-search';

export function CacSearchSection() {
  const [query, setQuery] = useState('');
  const [cacSearchType, setCacSearchType] = useState<CacSearchType>('ALL');
  const [isClassificationOpen, setIsClassificationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Click outside to close classification dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsClassificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 3) {
      router.push(`/names?type=cac&q=${encodeURIComponent(query)}&classification=${encodeURIComponent(cacSearchType)}#names-search`);
    }
  };

  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10 relative">
      {/* Decorative background elements - isolated in overflow-hidden container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1320px] mx-auto section-px relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-headline font-black tracking-tight leading-tight px-4 lg:px-0">
              Is your business name <span className="text-primary italic">already taken?</span>
            </h2>
            <p className="text-on-surface/60 font-body text-base lg:text-lg px-6 lg:px-0 opacity-80 max-w-lg mx-auto lg:mx-0">
              Browse our marketplace of curated names, let us help you find or create the perfect identity for your new venture, or verify any name with the CAC in real-time.
            </p>
          </div>

          <form onSubmit={handleSearch} className="w-full max-w-2xl space-y-4">
            <div className="relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-2xl p-1.5 shadow-xl shadow-primary/5 transition-all group gap-2">
              {/* Custom Classification Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsClassificationOpen(!isClassificationOpen)}
                  className="flex items-center gap-1.5 px-2 sm:px-3 py-2 rounded-xl hover:bg-on-surface/5 transition-colors text-[10px] sm:text-xs font-headline font-bold text-primary whitespace-nowrap border-r border-outline/10 mr-1 cursor-pointer"
                >
                  <span className="hidden sm:inline">{cacSearchType === 'ALL' ? 'ALL CATEGORIES' : (cacSearchType === 'LIMITED LIABILITY PARTNERSHIP' ? 'LL Partnership' : (cacSearchType === 'LIMITED LIABILITY' ? 'Limited Liability' : (cacSearchType === 'COMPANY' ? 'Company' : (cacSearchType === 'BUSINESS NAME' ? 'Business Name' : (cacSearchType === 'INCORPORATED TRUSTEE' ? 'IT (Incorp. Trustee)' : cacSearchType)))))}</span>
                  <span className="sm:hidden">{cacSearchType === 'ALL' ? 'ALL' : (cacSearchType === 'LIMITED LIABILITY PARTNERSHIP' ? 'LLT' : (cacSearchType === 'LIMITED LIABILITY' ? 'LL' : (cacSearchType === 'COMPANY' ? 'COM' : (cacSearchType === 'BUSINESS NAME' ? 'BN' : (cacSearchType === 'INCORPORATED TRUSTEE' ? 'IT' : cacSearchType)))))}</span>
                  <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${isClassificationOpen ? 'rotate-180' : ''}`} />
                </button>

                {isClassificationOpen && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-surface-container border border-outline/10 rounded-xl shadow-2xl z-50 py-2 animate-in fade-in zoom-in-95 duration-200">
                    {(['ALL', 'BUSINESS NAME', 'COMPANY', 'INCORPORATED TRUSTEE', 'LIMITED LIABILITY', 'LIMITED LIABILITY PARTNERSHIP'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setCacSearchType(type as CacSearchType);
                          setIsClassificationOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-xs font-headline font-bold flex items-center justify-between transition-colors hover:bg-on-surface/5 cursor-pointer ${
                          cacSearchType === type ? 'text-primary' : 'text-on-surface/60'
                        }`}
                      >
                        <span>{
                          type === 'INCORPORATED TRUSTEE' ? 'IT (Incorp. Trustee)' : 
                          type === 'BUSINESS NAME' ? 'Business Name (BN)' : 
                          type === 'COMPANY' ? 'Company (COM)' : 
                          type === 'LIMITED LIABILITY' ? 'Limited Liability (LL)' : 
                          type === 'LIMITED LIABILITY PARTNERSHIP' ? 'LL Partnership (LLT)' : 
                          type === 'ALL' ? 'All Categories' : type
                        }</span>
                        {cacSearchType === type && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Entity name, RC number..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border-none outline-none focus:ring-0 text-base font-body py-3 px-2 text-on-surface placeholder:text-on-surface/20"
              />
              
              {/* Desktop Search Button Inside Field */}
              <button
                type="submit"
                disabled={query.trim().length < 3}
                className={`
                  hidden sm:flex items-center justify-center h-12 px-6 rounded-xl text-white text-sm font-headline font-bold transition-all
                  ${query.trim().length < 3 
                    ? 'bg-on-surface/20 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'}
                `}
              >
                Search <Search className="ml-2 w-4 h-4" />
              </button>

              {/* Mobile Right Arrow Button Inside Field */}
              <button
                type="submit"
                disabled={query.trim().length < 3}
                className={`
                  sm:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white transition-all active:scale-95
                  ${query.trim().length < 3 
                    ? 'bg-on-surface/10 text-on-surface/30 cursor-not-allowed' 
                    : 'bg-primary shadow-lg shadow-primary/20 cursor-pointer'}
                `}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <p className="px-2 text-[10px] font-body text-on-surface/40 flex items-center gap-1.5 italic">
              <Info className="w-3 h-3 flex-shrink-0" /> <span className="flex-1">Data provided by the Corporate Affairs Commission.</span>
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pro Tip Card */}
              <div className="p-4 rounded-xl bg-white border border-outline/10 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <div className="p-1 px-2 rounded-md bg-primary/10 text-[9px] font-mono font-black uppercase tracking-widest">Guide</div>
                  <span className="text-[10px] font-black uppercase tracking-tight font-headline">Naming Suffixes</span>
                </div>
                <p className="text-[10px] text-on-surface/60 leading-relaxed font-medium font-body">
                  For Business Names, use <span className="text-on-surface font-bold">Ventures</span> or <span className="text-on-surface font-bold">Enterprises</span>. 
                  For companies, use <span className="text-on-surface font-bold">Limited</span> or <span className="text-on-surface font-bold">Ltd</span>.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => router.push('/names#names-search')}
                className="w-full flex items-center justify-center p-4 rounded-xl border border-primary/20 bg-primary/5 text-primary text-sm font-headline font-bold transition-all hover:bg-primary/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                Find or Create a Custom Name <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
