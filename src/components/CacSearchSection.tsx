
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Globe, ArrowRight } from './Icons';

export function CacSearchSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 3) {
      router.push(`/names?type=cac&q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto section-px relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <h2 className="text-3xl lg:text-4xl font-headline font-black tracking-tight leading-tight">
              Is your desired business name <span className="text-primary italic">already taken?</span>
            </h2>
            <p className="text-on-surface/60 font-body text-lg">
              Check if your desired name is registered with the Corporate Affairs Commission (CAC) in real-time.
            </p>
          </div>

          <form onSubmit={handleSearch} className="w-full max-w-lg">
            <div className="relative flex items-center bg-white dark:bg-surface-container border border-outline focus-within:border-primary rounded-2xl p-2 shadow-xl shadow-primary/5 transition-all group">
              <div className="pl-4">
                <Search className="w-6 h-6 text-on-surface/30 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Entity name, RC number, or AV code..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border-none outline-none focus:ring-0 text-lg font-body py-4 px-4 text-on-surface placeholder:text-on-surface/20"
              />
              <button
                type="submit"
                disabled={query.trim().length < 3}
                className={`
                  hidden sm:flex items-center justify-center h-14 px-8 rounded-xl text-white font-headline font-bold transition-all
                  ${query.trim().length < 3 
                    ? 'bg-on-surface/20 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'}
                `}
              >
                Search CAC <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            {/* Mobile search button */}
            <button
               type="submit"
               disabled={query.trim().length < 3}
               className={`
                 sm:hidden w-full mt-4 flex items-center justify-center py-4 rounded-xl text-white font-headline font-bold transition-all
                 ${query.trim().length < 3 
                   ? 'bg-on-surface/20 cursor-not-allowed' 
                   : 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20'}
               `}
             >
               Search CAC Official Records
             </button>
            <p className="mt-4 text-center lg:text-left text-[10px] font-body text-on-surface/40 flex items-center justify-center lg:justify-start gap-2 italic">
              <Info className="w-3 h-3" /> Search results are pulled directly from the official CAC public repository.
            </p>
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
