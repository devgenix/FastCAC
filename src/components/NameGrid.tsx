"use client";

import React from "react";
import { BusinessNameCard } from "./BusinessNameCard";
import { BusinessName } from "@/lib/name-data";

interface NameGridProps {
  names: BusinessName[];
}

export function NameGrid({ names }: NameGridProps) {
  if (names.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-on-surface/40 font-body text-lg italic">
          No names found matching your search. Try another keyword!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {names.map((item) => (
        <BusinessNameCard key={item.name} {...item} />
      ))}
    </div>
  );
}
