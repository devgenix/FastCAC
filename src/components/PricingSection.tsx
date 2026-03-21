"use client";

import Link from "next/link";
import { Check } from "@/components/Icons";
import React, { useState, useEffect } from "react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

type PackageType = "starter" | "pro" | "full";

const PRICES = {
  starter: 100000,
  pro: 200000,
  full: 400000,
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace("NGN", "₦");
};

const PACKAGE_CONFIG: Record<PackageType, {
  title: string;
  cta: string;
  stickyLabel: string;
  waMessage: string;
  stickyMessage: string;
  badge?: string;
  highlighted?: boolean;
  isPlus?: boolean;
  features: string[];
}> = {
  starter: {
    title: "Name, Logo, Website & CAC",
    cta: "Get Started — ₦100,000",
    stickyLabel: "Get Started",
    waMessage: WA_MESSAGES.pricingStarter,
    stickyMessage: WA_MESSAGES.stickyStarter,
    badge: "Most Popular",
    highlighted: true,
    features: [
      "CAC-registered Business Name",
      "Official CAC Certificate + TIN",
      "Professional Logo & Brand Colors",
      "1-page Business Website",
      "Business Domain (.com.ng / .ng)",
    ],
  },
  pro: {
    title: "Everything in Starter, Plus More",
    cta: "Start Pro — ₦200,000",
    stickyLabel: "Start Pro",
    waMessage: WA_MESSAGES.pricingPro,
    stickyMessage: WA_MESSAGES.stickyPro,
    features: [
      "Everything in Starter+",
      "Business Email (yourname@yourbiz.com)",
      "Multi-page Professional Website",
      "Social Media Profile Setup",
      "Business Domain (.com)",
    ],
  },
  full: {
    title: "Full Company, Fully Done",
    cta: "Go All-In — ₦400,000",
    stickyLabel: "Go All-In",
    waMessage: WA_MESSAGES.pricingFull,
    stickyMessage: WA_MESSAGES.stickyFull,
    isPlus: true,
    features: [
      "Everything in Business Pro+",
      "CAC Company Incorporation (Ltd)",
      "Premium Brand Identity Package",
      "Corporate Bank Account Opening",
    ],
  },
};

export const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("starter");
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Show sticky CTA once the user scrolls past the Hero (~400px)
  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const selected = PACKAGE_CONFIG[selectedPackage];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative font-body">
      <div className="max-w-[1320px] section-px mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Join{" "}
            <span className="text-[#00A859]">1,200+ businesses.</span>
            <br className="hidden md:block" />
            Start from &#x20A6;100k.
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium">
            Name, logo, website &amp; CAC registration — all done for you. Government fees included. No hidden charges.
          </p>
        </div>

        {/* PACKAGE CARDS */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 mb-12">
          {(Object.entries(PACKAGE_CONFIG) as [PackageType, typeof PACKAGE_CONFIG["starter"]][]).map(([type, config]) => (
            <PricingCard
              key={type}
              type={type}
              title={config.title}
              price={PRICES[type]}
              badge={config.badge}
              features={config.features}
              cta={config.cta}
              waMessage={config.waMessage}
              isSelected={selectedPackage === type}
              onSelect={() => setSelectedPackage(type)}
              highlighted={config.highlighted}
              isPlus={config.isPlus}
            />
          ))}
        </div>

        {/* SECONDARY CTA — WhatsApp consult */}
        <div className="text-center mt-6 text-sm text-slate-400">
          Not sure which package?{" "}
          <Link
            href={waLink(WA_MESSAGES.consultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A859] font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </Link>
        </div>
      </div>

      {/* STICKY BOTTOM CTA (Mobile) — shows globally after hero */}
      <div className={`fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-500 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]
        ${isStickyVisible ? "translate-y-0" : "translate-y-full"}`}>
        <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-slate-100 backdrop-blur-xl bg-white/90">
          <div>
            <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest block mb-0.5 font-mono">
              {selectedPackage === "full" ? "Starting at" : "Start for only:"}
            </span>
            <div className="text-2xl font-black text-slate-900 tracking-tight font-mono">
              {formatPrice(PRICES[selectedPackage])}
            </div>
          </div>
          <Link href={waLink(selected.stickyMessage)} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#00A859] text-white px-8 py-5 rounded-xl font-black shadow-[0_8px_20px_rgba(0,168,89,0.3)] active:scale-95 transition-all text-sm uppercase tracking-wider">
              {selected.stickyLabel} →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  type,
  title,
  price,
  features,
  cta,
  waMessage,
  isSelected,
  onSelect,
  badge,
  highlighted,
  isPlus,
}: {
  type: PackageType;
  title: string;
  price: number;
  features: string[];
  cta: string;
  waMessage: string;
  isSelected: boolean;
  onSelect: () => void;
  badge?: string;
  highlighted?: boolean;
  isPlus?: boolean;
}) => (
  <div
    onClick={onSelect}
    className={`relative p-8 md:p-10 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 flex flex-col h-full
      ${isSelected
        ? "border-[#00A859] bg-[#00A859]/5 shadow-[0_20px_40px_rgba(0,168,89,0.1)] scale-[1.02]"
        : "border-slate-100 bg-white hover:border-slate-200"}`}
  >
    {badge && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#00A859] text-white text-[11px] uppercase font-black px-5 py-2 rounded-full z-10 shadow-lg shadow-[#00A859]/20 font-mono">
        {badge}
      </div>
    )}

    <div className="mb-10">
      <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-mono">{formatPrice(price)}</span>
        {isPlus && <span className="text-2xl font-black text-slate-400 font-mono">+</span>}
      </div>
    </div>

    <div className="space-y-4 mb-12 flex-grow">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#00A859] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" strokeWidth={4} />
          </div>
          <span className="text-slate-600 font-semibold">{feature}</span>
        </div>
      ))}
    </div>

    <Link
      href={waLink(waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={`w-full py-5 rounded-2xl font-black transition-all active:scale-[0.98] text-lg
          ${isSelected
            ? "bg-[#00A859] text-white shadow-xl shadow-[#00A859]/30"
            : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
      >
        {cta}
      </button>
    </Link>
  </div>
);
