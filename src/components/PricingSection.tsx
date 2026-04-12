"use client";

import Link from "next/link";
import { Check } from "@/components/Icons";
import React, { useState, useEffect } from "react";
import { waLink, WA_MESSAGES, getNameMessage } from "@/lib/whatsapp";

type PackageType = "registration" | "starter" | "full";

const PRICES = {
  registration: 40000,
  starter: 100000,
  full: 200000,
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
  subOptions?: {
    id: string;
    label: string;
    features: string[];
    waMessage: string;
    stickyMessage: string;
  }[];
}> = {
  registration: {
    title: "CAC Registration Only",
    cta: "Register Now — ₦40,000",
    stickyLabel: "Register Now",
    waMessage: WA_MESSAGES.pricingRegistration,
    stickyMessage: WA_MESSAGES.stickyRegistration,
    features: [
      "CAC-registered Business Name",
      "Official CAC Certificate + TIN",
      "Digital Certificate Delivery",
      "Government Fees Included",
    ],
  },
  starter: {
    title: "Starter Bundle",
    cta: "Claim Offer — ₦100,000",
    stickyLabel: "Claim Offer",
    waMessage: WA_MESSAGES.pricingStarter,
    stickyMessage: WA_MESSAGES.stickyStarter,
    badge: "Most Popular",
    highlighted: true,
    features: [], // Handled by subOptions
    subOptions: [
      {
        id: "starter",
        label: "Biz Name + Web",
        waMessage: WA_MESSAGES.pricingStarter,
        stickyMessage: WA_MESSAGES.stickyStarter,
        features: [
          "Registered Business Name",
          "Professional Logo & Branding",
          "1-page Business Website",
          "Business Domain (.com.ng / .ng)",
          "Official CAC Cert + TIN",
        ],
      },
      {
        id: "ltd_only",
        label: "Company (Ltd) Only",
        waMessage: WA_MESSAGES.pricingLtdOnly,
        stickyMessage: WA_MESSAGES.stickyLtdOnly,
        features: [
            "CAC Company Incorporation (Ltd)",
            "Official CAC Certificate + TIN",
            "Certified True Copies (CTC)",
            "Memo & Articles of Association",
            "Government Fees Included",
        ],
      },
    ],
  },
  full: {
    title: "Full Company, Fully Done",
    cta: "Go All-In — ₦200,000",
    stickyLabel: "Go All-In",
    waMessage: WA_MESSAGES.pricingFull,
    stickyMessage: WA_MESSAGES.stickyFull,
    isPlus: false,
    features: [
      "Everything in Company Ltd Package",
      "Premium Brand Identity Package",
      "Multi-page Professional Website",
      "Business Email (yourname@yourbiz.com)",
      "Corporate Bank Account Opening",
    ],
  },
};

export const PricingSection = ({ selectedName }: { selectedName?: string }) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("starter");
  const [activeSubOption, setActiveSubOption] = useState<string>("starter");
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
  const currentSubOption = selected.subOptions?.find(opt => opt.id === activeSubOption);

  const getWaLink = (packageType: PackageType, defaultMessage: string) => {
    let typeToUse: string = packageType;
    if (packageType === "starter") {
      typeToUse = activeSubOption;
    }

    if (selectedName) {
      return waLink(getNameMessage(selectedName, typeToUse));
    }
    return waLink(defaultMessage);
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative font-body">
      <div className="max-w-[1320px] section-px mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 px-4">
            Join{" "}
            <span className="text-primary">1,200+ businesses.</span>
            <br className="hidden md:block" />
            Start from &#x20A6;40k.
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
            Name, logo, website &amp; CAC registration — all done for you. Government fees included. No hidden charges.
          </p>
        </div>

        {/* PACKAGE CARDS */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-6 mb-12">
          {(Object.entries(PACKAGE_CONFIG) as [PackageType, typeof PACKAGE_CONFIG["starter"]][]).map(([type, config]) => (
            <PricingCard
              key={type}
              type={type}
              title={config.title}
              price={PRICES[type]}
              badge={config.badge}
              features={config.subOptions ? (config.subOptions.find(o => o.id === activeSubOption)?.features || []) : config.features}
              cta={config.cta}
              waLink={getWaLink(type, config.subOptions ? (config.subOptions.find(o => o.id === activeSubOption)?.waMessage || config.waMessage) : config.waMessage)}
              isSelected={selectedPackage === type}
              onSelect={() => setSelectedPackage(type)}
              highlighted={config.highlighted}
              isPlus={config.isPlus}
              subOptions={config.subOptions}
              activeSubOption={activeSubOption}
              onSubOptionSelect={setActiveSubOption}
            />
          ))}
        </div>

        {/* SECONDARY CTA — WhatsApp consult */}
        <div className="text-center mt-6 text-sm text-slate-600">
          Not sure which package?{" "}
          <Link
            href={selectedName ? waLink(getNameMessage(selectedName, "consultation")) : waLink(WA_MESSAGES.consultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </Link>
        </div>
      </div>

      {/* STICKY BOTTOM CTA (Mobile) — shows globally after hero */}
      <div className={`fixed bottom-0 left-0 right-0 z-[60] transition-all duration-500 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]
        ${isStickyVisible ? "translate-y-0" : "translate-y-full"}`}>
        <div className="bg-white/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-t border-slate-100">
          <div>
            <span className="text-[10px] uppercase font-black text-slate-600 tracking-widest block mb-0.5 font-mono">
              {selectedPackage === "full" ? "Starting at" : "Start for only:"}
            </span>
            <div className="text-2xl font-black text-slate-900 tracking-tight font-mono">
              {formatPrice(PRICES[selectedPackage])}
            </div>
          </div>
          <Link href={getWaLink(selectedPackage, currentSubOption?.stickyMessage || selected.stickyMessage)} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-8 py-5 rounded-xl font-black shadow-[0_8px_20px_rgba(0,122,65,0.3)] active:scale-95 transition-all text-sm uppercase tracking-wider">
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
  waLink,
  isSelected,
  onSelect,
  badge,
  highlighted,
  isPlus,
  subOptions,
  activeSubOption,
  onSubOptionSelect,
}: {
  type: PackageType;
  title: string;
  price: number;
  features: string[];
  cta: string;
  waLink: string;
  isSelected: boolean;
  onSelect: () => void;
  badge?: string;
  highlighted?: boolean;
  isPlus?: boolean;
  subOptions?: any[];
  activeSubOption?: string;
  onSubOptionSelect?: (id: string) => void;
}) => (
  <div
    onClick={onSelect}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect();
      }
    }}
    role="button"
    tabIndex={0}
    aria-pressed={isSelected}
    className={`relative p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-2 cursor-pointer transition-all duration-300 flex flex-col h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20
      ${isSelected
        ? "border-primary bg-primary/5 shadow-[0_20px_40px_rgba(0,122,65,0.1)] scale-[1.02]"
        : "border-slate-100 bg-white hover:border-slate-200"}`}
  >
    {badge && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-[11px] uppercase font-black px-5 py-2 rounded-full z-10 shadow-lg shadow-primary/20 font-mono">
        {badge}
      </div>
    )}

    <div className="mb-6 md:mb-10">
      <h3 className="text-lg md:text-xl font-bold text-slate-500 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-6xl font-black text-primary tracking-tight font-mono">{formatPrice(price)}</span>
        {isPlus && <span className="text-2xl md:text-3xl font-black text-slate-400 font-mono">+</span>}
      </div>
    </div>

    {subOptions && (
      <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
        {subOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={(e) => {
              e.stopPropagation();
              onSubOptionSelect?.(opt.id);
              onSelect();
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              activeSubOption === opt.id
                ? "bg-white text-primary shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    )}

    <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-grow">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" strokeWidth={4} />
          </div>
          <span className="text-slate-600 font-semibold text-sm md:text-base">{feature}</span>
        </div>
      ))}
    </div>

    <Link
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={`w-full py-5 rounded-2xl font-black transition-all active:scale-[0.98] text-lg
          ${isSelected
            ? "bg-primary text-white shadow-xl shadow-primary/30"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
      >
        {cta}
      </button>
    </Link>
  </div>
);
