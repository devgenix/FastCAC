"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers = new Map();
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-100px 0px -40% 0px",
      threshold: 0,
    });

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-32 h-fit max-w-[200px]">
      <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-6">Contents</div>
      <nav className="space-y-4 pr-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-all duration-300 border-l-2 pl-4 py-1",
              activeId === item.id
                ? "text-primary border-primary font-bold"
                : "text-on-surface/40 border-outline/10 hover:text-on-surface/60 hover:border-outline/40"
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
