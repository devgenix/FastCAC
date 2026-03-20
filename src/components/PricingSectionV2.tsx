"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Check, Info, Plus, Minus, ShieldCheck, Zap } from "@/components/Icons";

type PackageType = "starter" | "pro" | "loaded" | "custom";

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

export const PricingSectionV2 = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("starter");
  const [expandedSection, setExpandedSection] = useState<string | null>("website");

  // Custom configuration state
  const [config, setConfig] = useState({
    namingDfy: false,
    websiteName: true,
    branding: "basic" as "basic" | "premium",
    cacType: "business" as "business" | "limited",
    pages: 1,
  });

  // Pricing constants (Naira)
  const PRICES = {
    STARTER: 100000,
    PRO_BASE: 250000, // Adjusted for premium feel
    LOADED_BASE: 500000,
    NAMING_DFY: 15000,
    WEBSITE_NAME: 20000,
    BRANDING_BASIC: 20000,
    BRANDING_PREMIUM: 50000,
    CAC_BUSINESS_NAME: 80000,
    CAC_PRIVATE_LIMITED: 120000,
    PAGE_PRICE: 50000,
  };

  const calculateTotal = useMemo(() => {
    if (selectedPackage === "starter") return PRICES.STARTER;
    if (selectedPackage === "pro") return PRICES.PRO_BASE;
    if (selectedPackage === "loaded") return PRICES.LOADED_BASE;

    // Custom calculation
    let total = 0;
    if (config.namingDfy) total += PRICES.NAMING_DFY;
    if (config.websiteName) total += PRICES.WEBSITE_NAME;
    
    total += config.branding === "premium" ? PRICES.BRANDING_PREMIUM : PRICES.BRANDING_BASIC;
    total += config.cacType === "limited" ? PRICES.CAC_PRIVATE_LIMITED : PRICES.CAC_BUSINESS_NAME;
    total += config.pages * PRICES.PAGE_PRICE;
    
    return total;
  }, [selectedPackage, config, PRICES]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace("NGN", "₦");
  };

  const handlePackageSelect = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    // When selecting a package, reset custom config if needed or just sync
    if (pkg === "starter") {
      setConfig({
        namingDfy: false,
        websiteName: true,
        branding: "basic",
        cacType: "business",
        pages: 0,
      });
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="pricing-v2" className="pt-24 pb-32 bg-white overflow-hidden font-body">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* 1. HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Start Your Business <br className="md:hidden" /> in Nigeria
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Name, website name, and CAC — all handled for you.
          </p>
        </div>

        {/* 2. PACKAGE SELECTION (Mobile Carousel / Desktop Grid) */}
        <div className="relative mb-20">
          <div className="flex overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 gap-6 px-4 -mx-4 md:px-0 md:mx-0">
            
            {/* Card 1: STARTER */}
            <div 
              onClick={() => handlePackageSelect("starter")}
              className={`flex-shrink-0 w-[85%] snap-center md:w-auto cursor-pointer group relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 
                ${selectedPackage === "starter" 
                  ? "border-[#008751] bg-[#008751]/5 shadow-[0_20px_40px_rgba(0,135,81,0.1)] scale-[1.02]" 
                  : "border-slate-100 bg-white hover:border-slate-200"}`}
            >
              {selectedPackage === "starter" && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#008751] text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full z-10">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
                  <div className="text-3xl font-black text-slate-900">{formatPrice(PRICES.STARTER)}</div>
                </div>

                <div className="space-y-3">
                  <FeatureItem text="Business Name" />
                  <FeatureItem text="Website Name" />
                  <FeatureItem text="CAC Registration" />
                  <FeatureItem text="Logo + Brand Colors" />
                </div>

                <button className={`w-full h-12 rounded-xl font-bold transition-all
                  ${selectedPackage === "starter" 
                    ? "bg-[#008751] text-white shadow-lg shadow-[#008751]/20" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                  {selectedPackage === "starter" ? "Selected" : "Select Starter"}
                </button>
              </div>
            </div>

            {/* Card 2: BUSINESS PRO */}
            <div 
              onClick={() => handlePackageSelect("pro")}
              className={`flex-shrink-0 w-[85%] snap-center md:w-auto cursor-pointer group relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 
                ${selectedPackage === "pro" 
                  ? "border-[#008751] bg-[#008751]/5 shadow-[0_20px_40px_rgba(0,135,81,0.1)] scale-[1.02]" 
                  : "border-slate-100 bg-white hover:border-slate-200"}`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Business Pro</h3>
                  <div className="text-3xl font-black text-slate-900">{formatPrice(PRICES.PRO_BASE)}</div>
                </div>

                <div className="space-y-3">
                  <FeatureItem text="Everything in Starter" />
                  <FeatureItem text="Corporate Email Setup" />
                  <FeatureItem text="Tax ID (TIN) Generation" />
                  <FeatureItem text="1-Page Professional Site" />
                </div>

                <button className={`w-full h-12 rounded-xl font-bold transition-all
                  ${selectedPackage === "pro" 
                    ? "bg-[#008751] text-white shadow-lg shadow-[#008751]/20" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                  {selectedPackage === "pro" ? "Selected" : "Select Business Pro"}
                </button>
              </div>
            </div>

            {/* Card 3: FULLY LOADED */}
            <div 
              onClick={() => handlePackageSelect("loaded")}
              className={`flex-shrink-0 w-[85%] snap-center md:w-auto cursor-pointer group relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 
                ${selectedPackage === "loaded" 
                  ? "border-[#008751] bg-[#008751]/5 shadow-[0_20px_40px_rgba(0,135,81,0.1)] scale-[1.02]" 
                  : "border-slate-100 bg-white hover:border-slate-200"}`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Fully Loaded</h3>
                  <div className="text-3xl font-black text-slate-900">{formatPrice(PRICES.LOADED_BASE)}</div>
                </div>

                <div className="space-y-3">
                  <FeatureItem text="Digital Presence + Legal" />
                  <FeatureItem text="5-Page Growth Website" />
                  <FeatureItem text="Social Media Branding" />
                  <FeatureItem text="Priority Processing" />
                </div>

                <button className={`w-full h-12 rounded-xl font-bold transition-all
                  ${selectedPackage === "loaded" 
                    ? "bg-[#008751] text-white shadow-lg shadow-[#008751]/20" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                  {selectedPackage === "loaded" ? "Selected" : "Go Fully Loaded"}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. QUICK DIVIDER */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center px-4">
            Or customize your setup
          </span>
          <div className="h-px w-20 bg-slate-100 mt-4"></div>
        </div>

        {/* 4. CUSTOM CONFIGURATOR (Accordion-based) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto pb-24">
          
          <div className="lg:col-span-8 space-y-4">
            
            {/* Section: Naming */}
            <AccordionSection 
              title="🧠 Naming" 
              isOpen={expandedSection === "naming"}
              onClick={() => toggleSection("naming")}
              status={config.namingDfy ? "Active" : "Standard"}
            >
              <div className="p-6 space-y-4 bg-slate-50/50 rounded-3xl mt-2 border border-slate-100">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex gap-4 items-center">
                    <div className={`w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center
                      ${config.namingDfy ? "bg-[#008751] border-[#008751]" : "border-slate-200 bg-white"}`}>
                      {config.namingDfy && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Done-for-you naming</span>
                      <span className="text-xs text-slate-500">We research 3 available names for you</span>
                    </div>
                  </div>
                  <span className="font-black text-slate-900">{formatPrice(PRICES.NAMING_DFY)}</span>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={config.namingDfy} 
                    onChange={() => {
                      setSelectedPackage("custom");
                      setConfig(p => ({ ...p, namingDfy: !p.namingDfy }));
                    }} 
                  />
                </label>
              </div>
            </AccordionSection>

            {/* Section: Website Name */}
            <AccordionSection 
              title="🌐 Website Name" 
              isOpen={expandedSection === "website"}
              onClick={() => toggleSection("website")}
              status={config.websiteName ? "Included" : "None"}
            >
              <div className="p-6 space-y-4 bg-slate-50/50 rounded-3xl mt-2 border border-slate-100">
                <div className="flex items-center justify-between group">
                  <div className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-md bg-[#008751] border-2 border-[#008751] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Secure website name</span>
                      <span className="text-xs text-slate-500">.com or .ng domain (1 year)</span>
                    </div>
                  </div>
                  <span className="font-black text-slate-900">{formatPrice(PRICES.WEBSITE_NAME)}</span>
                </div>
              </div>
            </AccordionSection>

            {/* Section: Branding */}
            <AccordionSection 
              title="🎨 Branding" 
              isOpen={expandedSection === "branding"}
              onClick={() => toggleSection("branding")}
              status={config.branding === "premium" ? "Premium" : "Basic"}
            >
              <div className="p-6 space-y-6 bg-slate-50/50 rounded-3xl mt-2 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <RadioOption 
                    active={config.branding === "basic"}
                    onClick={() => {
                      setSelectedPackage("custom");
                      setConfig(p => ({ ...p, branding: "basic" }));
                    }}
                    title="Basic"
                    price={PRICES.BRANDING_BASIC}
                    desc="Logo + brand colors"
                  />
                  <RadioOption 
                    active={config.branding === "premium"}
                    onClick={() => {
                      setSelectedPackage("custom");
                      setConfig(p => ({ ...p, branding: "premium" }));
                    }}
                    title="Premium"
                    price={PRICES.BRANDING_PREMIUM}
                    desc="Full identity + guidelines"
                  />
                </div>
              </div>
            </AccordionSection>

            {/* Section: Registration */}
            <AccordionSection 
              title="🏢 Business Registration" 
              isOpen={expandedSection === "registration"}
              onClick={() => toggleSection("registration")}
              status={config.cacType === "limited" ? "Limited" : "Business Name"}
            >
              <div className="p-6 space-y-6 bg-slate-50/50 rounded-3xl mt-2 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <RadioOption 
                    active={config.cacType === "business"}
                    onClick={() => {
                      setSelectedPackage("custom");
                      setConfig(p => ({ ...p, cacType: "business" }));
                    }}
                    title="Business Name"
                    price={PRICES.CAC_BUSINESS_NAME}
                    desc="For sole traders"
                  />
                  <RadioOption 
                    active={config.cacType === "limited"}
                    onClick={() => {
                      setSelectedPackage("custom");
                      setConfig(p => ({ ...p, cacType: "limited" }));
                    }}
                    title="Private Limited"
                    price={PRICES.CAC_PRIVATE_LIMITED}
                    desc="Limited by shares"
                  />
                </div>
              </div>
            </AccordionSection>

            {/* Section: Website */}
            <AccordionSection 
              title="💻 Website" 
              isOpen={expandedSection === "website-builder"}
              onClick={() => toggleSection("website-builder")}
              status={`${config.pages} Pages`}
            >
              <div className="p-6 space-y-4 bg-slate-50/50 rounded-3xl mt-2 border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Additional Pages</span>
                    <span className="text-xs text-slate-500">{formatPrice(PRICES.PAGE_PRICE)} per page</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-1 rounded-xl border border-slate-200">
                    <button 
                      onClick={() => {
                        setSelectedPackage("custom");
                        setConfig(p => ({ ...p, pages: Math.max(1, p.pages - 1) }));
                      }}
                      className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-black w-8 text-center">{config.pages}</span>
                    <button 
                      onClick={() => {
                        setSelectedPackage("custom");
                        setConfig(p => ({ ...p, pages: p.pages + 1 }));
                      }}
                      className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AccordionSection>

          </div>

          {/* Desktop Summary Sidebar (Visible only on Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
              <h4 className="text-[10px] uppercase font-black text-[#008751] tracking-[0.2em] mb-6">Investment Summary</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-sm text-slate-400 capitalize">{selectedPackage} Package</span>
                  <span className="font-bold">{formatPrice(calculateTotal)}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3 h-3 text-[#008751]" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3 h-3 text-[#008751]" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3 h-3 text-[#008751]" />
                    <span>3–7 day processing</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-1 text-right">Grand Total</div>
                <div className="text-4xl font-black text-right tracking-tight">{formatPrice(calculateTotal)}</div>
              </div>

              <button className="w-full bg-[#008751] hover:bg-[#007345] text-white py-5 rounded-2xl font-black text-lg transition-all active:scale-[0.98] shadow-lg shadow-[#008751]/20">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 5. STICKY BOTTOM BAR (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        
        {/* Trust microcopy just above the bar */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-2 flex items-center justify-center gap-6 border-t border-slate-100">
          <TrustItem text="Secure payment" />
          <TrustItem text="No hidden fees" />
        </div>

        <div className="bg-slate-900 border-t border-white/10 px-6 py-5 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <div>
            <span className="text-[10px] uppercase font-black text-white/40 tracking-widest block mb-0.5">Grand Total</span>
            <span className="text-2xl font-black text-white tracking-tight">{formatPrice(calculateTotal)}</span>
          </div>
          <button className="bg-[#008751] text-white px-8 py-4 rounded-xl font-bold h-14 min-w-[180px] shadow-lg active:scale-95 transition-all text-sm uppercase tracking-wider">
            Pay Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// UI Subcomponents
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-[#008751]/10 flex items-center justify-center shrink-0">
      <Check className="w-3 h-3 text-[#008751]" strokeWidth={4} />
    </div>
    <span className="text-sm text-slate-600 font-medium">{text}</span>
  </div>
);

const TrustItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 opacity-60">
    <div className="w-1.5 h-1.5 rounded-full bg-[#008751]"></div>
    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider whitespace-nowrap">{text}</span>
  </div>
);

const AccordionSection = ({ 
  title, 
  status, 
  isOpen, 
  onClick, 
  children 
}: { 
  title: string, 
  status: string, 
  isOpen: boolean, 
  onClick: () => void, 
  children: React.ReactNode 
}) => (
  <div className="border-b border-slate-100 pb-4">
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between text-left py-4 px-2 rounded-2xl transition-all
        ${isOpen ? "bg-white" : "hover:bg-slate-50"}`}
    >
      <div className="flex gap-4 items-center">
        <span className="text-lg font-bold text-slate-900">{title}</span>
        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-black uppercase text-slate-400 tracking-wider">
          {status}
        </span>
      </div>
      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
      {children}
    </div>
  </div>
);

const RadioOption = ({ 
  active, 
  onClick, 
  title, 
  price, 
  desc 
}: { 
  active: boolean, 
  onClick: () => void, 
  title: string, 
  price: number, 
  desc: string 
}) => (
  <div 
    onClick={onClick}
    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all
      ${active 
        ? "border-[#008751] bg-[#008751]/5 shadow-sm" 
        : "border-white bg-white hover:border-slate-200"}`}
  >
    <div className="flex justify-between items-start mb-2">
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${active ? "border-[#008751]" : "border-slate-200"}`}>
        {active && <div className="w-2.5 h-2.5 rounded-full bg-[#008751]" />}
      </div>
      <span className="font-black text-slate-900 text-sm">
        {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(price).replace("NGN", "₦")}
      </span>
    </div>
    <span className="text-sm font-bold text-slate-900 block">{title}</span>
    <span className="text-[10px] text-slate-500 font-medium">{desc}</span>
  </div>
);
