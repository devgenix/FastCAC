"use client";

import React, { useState, useMemo } from "react";
import { Check, Info, Plus, Minus, ShieldCheck, Zap } from "@/components/Icons";

type PackageType = "starter" | "pro" | "full" | "custom";

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("starter");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const [config, setConfig] = useState({
    naming: false,
    websiteName: true,
    branding: "basic" as "basic" | "premium",
    cacType: "business" as "business" | "limited",
    pages: 1,
  });

  const PRICES = {
    starter: 100000,
    pro: 150000,
    full: 450000,
    naming: 15000,
    websiteName: 20000,
    brandingBasic: 20000,
    brandingPremium: 50000,
    cacBusiness: 80000,
    cacLimited: 120000,
    pagePrice: 50000,
  };

  const calculateTotal = useMemo(() => {
    if (selectedPackage === "starter") return PRICES.starter;
    if (selectedPackage === "pro") return PRICES.pro;
    if (selectedPackage === "full") return PRICES.full;

    let total = 0;
    if (config.naming) total += PRICES.naming;
    if (config.websiteName) total += PRICES.websiteName;
    total += config.branding === "premium" ? PRICES.brandingPremium : PRICES.brandingBasic;
    total += config.cacType === "limited" ? PRICES.cacLimited : PRICES.cacBusiness;
    total += config.pages * PRICES.pagePrice;
    return total;
  }, [selectedPackage, config, PRICES]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price).replace("NGN", "₦");
  };

  return (
    <section id="legacy-pricing" className="py-24 bg-white font-body border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Pricing Plans (V1)</h2>
          <p className="text-slate-500">The original modular pricing experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <LegacyCard 
            title="Starter" 
            price={PRICES.starter} 
            active={selectedPackage === "starter"} 
            onClick={() => setSelectedPackage("starter")}
          />
          <LegacyCard 
            title="Business Pro" 
            price={PRICES.pro} 
            active={selectedPackage === "pro"} 
            onClick={() => setSelectedPackage("pro")}
          />
          <LegacyCard 
            title="Full Setup" 
            price={PRICES.full} 
            active={selectedPackage === "full"} 
            onClick={() => setSelectedPackage("full")}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-black text-slate-900 mb-4">Custom Configuration</h3>
            <ConfigSection 
              title="Business Naming" 
              price={PRICES.naming} 
              active={config.naming} 
              onToggle={() => { setConfig({ ...config, naming: !config.naming }); setSelectedPackage("custom"); }}
            />
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-bold block">Website Pages</span>
                <span className="text-xs text-slate-400">{formatPrice(PRICES.pagePrice)} per extra page</span>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => { setConfig({...config, pages: Math.max(1, config.pages - 1)}); setSelectedPackage("custom"); }} className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">-</button>
                <span className="font-bold">{config.pages}</span>
                <button onClick={() => { setConfig({...config, pages: config.pages + 1}); setSelectedPackage("custom"); }} className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">+</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-8 rounded-3xl sticky top-24">
              <h4 className="text-sm font-black text-[#008751] uppercase mb-4">Total Investment</h4>
              <div className="text-3xl font-black mb-8">{formatPrice(calculateTotal)}</div>
              <button className="w-full bg-[#008751] text-white py-4 rounded-xl font-bold">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegacyCard = ({ title, price, active, onClick }: any) => (
  <div onClick={onClick} className={`p-8 rounded-3xl border-2 cursor-pointer transition-all ${active ? "border-[#008751] bg-[#008751]/5" : "border-slate-100"}`}>
    <h3 className="font-black mb-2">{title}</h3>
    <div className="text-2xl font-black">{new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(price).replace("NGN", "₦")}</div>
  </div>
);

const ConfigSection = ({ title, price, active, onToggle }: any) => (
  <div onClick={onToggle} className={`p-6 rounded-2xl border-2 cursor-pointer flex items-center justify-between ${active ? "border-[#008751] bg-[#008751]/5" : "border-slate-100"}`}>
    <span className="font-bold">{title}</span>
    <span className="font-black text-slate-500">{new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(price).replace("NGN", "₦")}</span>
  </div>
);
