"use client";

import React, { useState, useEffect } from "react";
import { Check, Zap, ShieldCheck, Info } from "@/components/Icons";

type PackageType = "starter" | "pro" | "full";

const PRICES = {
  starter: 100000,
  pro: 180000,
  full: 300000, // Starting price
  naming: 15000,
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace("NGN", "₦");
};

export const PricingSectionV3 = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("starter");
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Monitor scroll to show/hide sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById("pricing-v3");
      if (!pricingSection) return;

      const rect = pricingSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      // Show sticky CTA when pricing section is in view
      setIsStickyVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pricing-v3" className="py-20 md:py-32 bg-white relative font-body">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Start Your Business <br className="hidden md:block" /> in Nigeria
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium">
            Name, website name, and CAC — all handled for you in days.
          </p>
        </div>

        {/* PACKAGE STACK */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 mb-12">
          
          {/* STARTER CARD */}
          <PricingCard
            type="starter"
            title="Starter"
            price={PRICES.starter}
            badge="Most Popular"
            features={[
              "Business Name",
              "Website Name (.com or .ng)",
              "CAC Registration",
              "Logo + Brand Colors",
            ]}
            cta="Get Started"
            isSelected={selectedPackage === "starter"}
            onSelect={() => setSelectedPackage("starter")}
            highlighted
          />

          {/* BUSINESS PRO CARD */}
          <PricingCard
            type="pro"
            title="Business Pro"
            price={PRICES.pro}
            features={[
              "Everything in Starter+",
              "Corporate Email Setup",
              "TIN Registration",
              "Social Media Setups",
            ]}
            cta="Start Pro"
            isSelected={selectedPackage === "pro"}
            onSelect={() => setSelectedPackage("pro")}
          />

          {/* FULL SETUP CARD */}
          <PricingCard
            type="full"
            title="Full Setup"
            price={PRICES.full}
            isPlus
            features={[
              "Bespoke Business Plan",
              "Bank Account Opening",
              "3 Months Support",
              "Priority Processing",
            ]}
            cta="Go All-In"
            isSelected={selectedPackage === "full"}
            onSelect={() => setSelectedPackage("full")}
          />
        </div>

        {/* SECONDARY CTA: NAMING SERVICE */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Need help choosing a name?</h3>
              <p className="text-slate-600 font-medium">We'll create 5 name ideas for your business in 24 hours.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 min-w-[200px]">
              <div className="text-3xl font-black text-slate-900 underline decoration-[#00A859] decoration-4 underline-offset-4">
                {formatPrice(PRICES.naming)}
              </div>
              <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95">
                Start Naming
              </button>
            </div>
          </div>
        </div>

        {/* TRUST ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-70 mb-12">
          <TrustBadge icon={<Zap className="w-5 h-5" />} text="3–7 day processing" />
          <TrustBadge icon={<ShieldCheck className="w-5 h-5" />} text="Secure payments" />
          <TrustBadge icon={<Info className="w-5 h-5" />} text="No hidden fees" />
        </div>

      </div>

      {/* STICKY BOTTOM CTA (Mobile) */}
      <div className={`fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-500 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)] 
        ${isStickyVisible ? "translate-y-0" : "translate-y-full"}`}>
        <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-slate-100 backdrop-blur-xl bg-white/90">
          <div>
            <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest block mb-0.5">
              {selectedPackage === "full" ? "Starting at" : "Investment"}
            </span>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {formatPrice(selectedPackage === "starter" ? PRICES.starter : selectedPackage === "pro" ? PRICES.pro : PRICES.full)}
            </div>
          </div>
          <button className="bg-[#00A859] text-white px-8 py-5 rounded-xl font-black shadow-[0_8px_20px_rgba(0,168,89,0.3)] active:scale-95 transition-all text-sm uppercase tracking-wider">
            Get Started
          </button>
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
  isSelected, 
  onSelect, 
  badge, 
  highlighted,
  isPlus
}: { 
  type: PackageType;
  title: string;
  price: number;
  features: string[];
  cta: string;
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
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#00A859] text-white text-[11px] uppercase font-black px-5 py-2 rounded-full z-10 shadow-lg shadow-[#00A859]/20">
        {badge}
      </div>
    )}

    <div className="mb-10">
      <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{formatPrice(price)}</span>
        {isPlus && <span className="text-2xl font-black text-slate-400">+</span>}
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

    <button 
      className={`w-full py-5 rounded-2xl font-black transition-all active:scale-[0.98] text-lg
        ${isSelected 
          ? "bg-[#00A859] text-white shadow-xl shadow-[#00A859]/30" 
          : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
    >
      {cta}
    </button>
  </div>
);

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-[#00A859]">{icon}</div>
    <span className="text-sm font-black text-slate-800 uppercase tracking-widest">{text}</span>
  </div>
);
