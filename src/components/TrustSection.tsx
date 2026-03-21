import React from 'react';
import { Verified, Globe, Search, Edit } from './Icons';

export function TrustSection() {
  const offerings = [
    { name: "Unique Business Name", icon: Search },
    { name: "Logo & Brand Identity", icon: Edit },
    { name: "Professional Website", icon: Globe },
    { name: "Official CAC Certificate", icon: Verified },
  ];

  return (
    <section className="py-12 border-y border-outline/5">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {offerings.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 group cursor-default">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-headline italic text-lg tracking-tight text-on-surface font-semibold">
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
