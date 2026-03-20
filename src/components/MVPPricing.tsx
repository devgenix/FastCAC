"use client";

import React from "react";
import { Check, ShieldCheck, Zap, Info } from "@/components/Icons";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace("NGN", "₦");
};

export const MVPPricing = () => {
  return (
    <section id="mvp-pricing" className="py-20 bg-slate-50 overflow-hidden font-body">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Choose Your Launch Path
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Simple, transparent pricing to get your business legal and online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            title="Starter"
            price={100000}
            badge="Most Popular"
            features={[
              "Business Name Registration",
              "Website Domain (.com/.ng)",
              "Logo Design (Basic)",
              "Business Email Setup",
            ]}
            cta="Choose Starter"
            highlighted
          />
          <PricingCard
            title="Business Pro"
            price={180000}
            features={[
              "Everything in Starter",
              "Tax ID (TIN) Registration",
              "Multi-page Website",
              "Social Media Identity",
            ]}
            cta="Choose Pro"
          />
          <PricingCard
            title="Full Setup"
            price={300000}
            isPlus
            features={[
              "Private Limited Registration",
              "Corporate Bank Opening",
              "SCUML/Regulatory Filing",
              "3-Month Legal Support",
            ]}
            cta="Get Full Setup"
          />
        </div>

        {/* Custom Naming Consultation */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Naming Consultation</h3>
            <p className="text-slate-500">Struggling with a name? We'll find 3 unique, available names for you.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 min-w-[200px]">
            <div className="text-3xl font-black text-slate-900">{formatPrice(15000)}</div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
              Start Naming
            </button>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 opacity-50">
          <TrustElement icon={<Zap className="w-5 h-5" />} text="3–7 Day Delivery" />
          <TrustElement icon={<ShieldCheck className="w-5 h-5" />} text="Secure Payment" />
          <TrustElement icon={<Info className="w-5 h-5" />} text="No Hidden Fees" />
          <TrustElement icon={<Check className="w-5 h-5" />} text="Full CAC Support" />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, cta, badge, highlighted, isPlus }: any) => (
  <div className={`p-10 rounded-[2.5rem] border-2 flex flex-col h-full transition-all duration-300
    ${highlighted ? "border-[#008751] bg-white shadow-xl scale-[1.05] z-10" : "border-slate-100 bg-white"}`}>
    {badge && (
      <div className="bg-[#008751] text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full self-start mb-6">
        {badge}
      </div>
    )}
    <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
    <div className="mb-8">
      <span className="text-4xl font-black text-slate-900">{formatPrice(price)}</span>
      {isPlus && <span className="text-2xl font-black text-slate-400 ms-1">+</span>}
    </div>
    <div className="space-y-4 mb-10 flex-grow">
      {features.map((f: string, i: number) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#008751]/10 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#008751]" strokeWidth={4} />
          </div>
          <span className="text-sm text-slate-600 font-bold">{f}</span>
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-xl font-bold transition-all
      ${highlighted ? "bg-[#008751] text-white shadow-lg" : "bg-slate-50 text-slate-900 hover:bg-slate-100"}`}>
      {cta}
    </button>
  </div>
);

const TrustElement = ({ icon, text }: any) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="text-slate-900">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{text}</span>
  </div>
);
