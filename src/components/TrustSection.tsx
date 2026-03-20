import React from 'react';
import { Verified, Globe, Search, Edit } from './Icons';

export function TrustSection() {
  const offerings = [
    { name: "Business Names", icon: Search },
    { name: "Logo", icon: Edit },
    { name: "Website", icon: Globe },
    { name: "CAC Registration", icon: Verified },
  ];

  return (
    <section className="py-12 border-y border-outline/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 opacity-60">
          <span className="text-xs font-body tracking-[0.2em] uppercase opacity-70 whitespace-nowrap">
            Created for Nigerian Entrepreneurs
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {offerings.map((item, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-default">
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="font-headline italic text-lg tracking-tight text-on-surface">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
