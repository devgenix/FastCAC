"use client";

import React from "react";
import { Check } from "@/components/Icons";

interface NameDetailsSectionProps {
  name: string;
}

export function NameDetailsSection({ name }: NameDetailsSectionProps) {
  return (
    <section className="section-py bg-surface-container/30">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-headline font-black italic tracking-tight mb-6">
                Why <span className="text-primary italic">"{name}"</span> is a Great Choice
              </h2>
              <p className="text-xl text-on-surface/70 font-body leading-relaxed">
                This name has been pre-vetted by our branding experts for high recall, 
                cultural relevance, and digital-first presence in the Nigerian market.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-headline font-bold text-on-surface">Brand Value Assessment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Highly Memorable",
                  "Short & Punchy",
                  "Domain available",
                  "Industry Versatile",
                  "Modern Sounding",
                  "SEO Friendly",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-outline/5 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="font-body font-medium text-on-surface/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-outline/10 shadow-2xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl text-primary" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em]">Current Status</span>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-2xl font-headline font-black text-on-surface">AVAILABLE FOR CLAIM</span>
                </div>
              </div>

              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-body text-on-surface/70">CAC Availability</span>
                  <span className="text-sm font-mono font-bold text-primary">CLEAR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-body text-on-surface/70">Domain (.com.ng)</span>
                  <span className="text-sm font-mono font-bold text-primary">READY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-body text-on-surface/70">Trademark Risk</span>
                  <span className="text-sm font-mono font-bold text-primary">LOW</span>
                </div>
              </div>

              <p className="text-sm text-on-surface/65 font-body font-normal leading-snug">
                Claiming this name starts the registration process immediately. We will reserve 
                the name with CAC and secure your domain within 24 hours of payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
