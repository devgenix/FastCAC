"use client";

import Image from "next/image";
import { Check, Search, Shield, Rocket, Globe, Verified, Zap } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────────────────────
   CHECKLIST SECTION — Split Big Card + Icon Checklist
   ─────────────────────────────────────────────────────────────────────────── */

const CHECKLIST_ITEMS = [
  {
    icon: Verified,
    title: "Official CAC Certificate",
    desc: "Government-issued CAC Business number and digital seal. Your business is legally recognized within 7 days.",
  },
  {
    icon: Globe,
    title: "Professional Business Website",
    desc: "A professional business website, matching .com.ng or .ng domain, all set up and ready to use.",
  },
  {
    icon: Zap,
    title: "Logo & Brand Kit",
    desc: "A professional logo and brand color palette designed to make your business look credible from day one.",
  },
  {
    icon: Shield,
    title: "Dedicated Support Team",
    desc: "Direct access to our experts after launch — for banking, compliance, and whatever comes next.",
  },
];

export function ChecklistSection() {
  return (
    <section className="section-py bg-white" id="whats-included">
      <div className="max-w-[1320px] section-px mx-auto">

        {/* Section label */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-7xl font-headline italic tracking-tight leading-[1.05] max-w-3xl">
            One package.{" "}
            <span className="relative inline-block">
              Everything you need
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 5.5 Q75 1 150 5.5 Q225 10 299 5.5"
                  stroke="var(--color-secondary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}to open for business.
          </h2>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-stretch">

          {/* LEFT — Big feature card */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-surface-container min-h-[360px] lg:min-h-[560px] flex flex-col justify-end group">
            <Image
              src="/images/checklist_cac.webp"
              alt="Official CAC Certificate"
              width={660}
              height={560}
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 w-full h-full"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Text content */}
            <div className="relative z-10 p-6 lg:p-10">
              <h3 className="text-white font-headline italic text-3xl lg:text-5xl leading-tight mb-2">
                Official CAC<br />Certificate
              </h3>
              <p className="text-white/60 font-body text-sm lg:text-base leading-relaxed max-w-sm">
                Government-issue, legally yours within 7 business days.
              </p>
            </div>
          </div>

          {/* RIGHT — Checklist stack */}
          <div className="flex flex-col gap-4">
            {CHECKLIST_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group flex items-start gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl bg-surface-container border border-outline/5 hover:border-secondary/20 hover:bg-secondary/5 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon badge */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-outline/10 flex items-center justify-center group-hover:border-secondary/30 group-hover:bg-secondary/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h4 className="font-headline italic text-xl lg:text-2xl leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-on-surface/70 font-body text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Check mark */}
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-outline/10 flex items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-on-surface/60 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              );
            })}

            {/* Bottom "all-in" callout */}
            <div className="mt-2 rounded-2xl border border-dashed border-secondary/30 bg-secondary/5 px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-secondary" />
              </div>
              <p className="font-body text-sm text-on-surface/70">
                <span className="font-semibold text-on-surface">All of this</span> — business name, logo, website, CAC certificate, and support — is bundled into every FastCAC package. No hidden fees. No government office visits.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────────────────────────────────
   HOW IT WORKS — Vertical Stepped Timeline
   ─────────────────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    phase: "01",
    tag: "Name",
    title: "Pick or Request a Business Name",
    description:
      "Tell us your business idea and we'll suggest 5 unique, CAC-available names with matching domains — or choose from our curated ready-to-register list. Done within 24 hours.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1738929813802-94d64b2a9ea8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "from-emerald-50 to-transparent",
  },
  {
    phase: "02",
    tag: "We Build & Register",
    title: "We Handle Everything",
    description:
      "We file your CAC registration (government fees included), design your logo and brand kit, build your website, set up your domain and business email, social media accounts and even your Corporate Bank Account(depends on package) — all at once. You don't lift a finger.",
    icon: Shield,
    image: "/images/step2_registering.webp",
    accent: "from-sky-50 to-transparent",
  },
  {
    phase: "03",
    tag: "Launch",
    title: "You're Open for Business",
    description:
      "Within days, you'll have your official CAC certificate, a live website, a professional logo, and TIN (Tax Identification Number) — everything you need to start trading.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "from-violet-50 to-transparent",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-white overflow-hidden">
      <div className="max-w-[1320px] section-px mx-auto">

        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-xl">
          <h2 className="text-4xl lg:text-6xl font-headline tracking-tighter leading-[0.9] mb-4">
            How FastCAC Works
          </h2>
          <p className="text-lg lg:text-xl text-on-surface/70 font-body leading-snug">
            Three steps. We do the work.{" "}
            <span className="text-on-surface font-medium underline decoration-secondary decoration-2 underline-offset-4">
              You get a running business.
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl lg:rounded-3xl overflow-hidden border border-outline/5 hover:border-secondary/15 bg-surface-container transition-all duration-300 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} lg:min-h-[320px] cursor-pointer`}
              >
                {/* Text content */}
                <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center gap-4">
                  {/* Mobile icon + phase row */}
                  <div className="flex items-center gap-3 lg:hidden">
                    <span className="w-9 h-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-secondary" />
                    </span>
                    <span className="font-mono text-xs text-on-surface/60 tracking-widest uppercase">
                      Step {step.phase}
                    </span>
                  </div>

                  <h3 className="font-headline italic text-3xl lg:text-[2.8rem] leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-on-surface/70 font-body text-base lg:text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>

                  {/* Check indicator */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-body text-on-surface/70">
                      {index === 0 && "Name options in 24 hrs"}
                      {index === 1 && "CAC + logo + website — all handled"}
                      {index === 2 && "Live & legal in 7 business days"}
                    </span>
                  </div>
                </div>

                {/* Image panel */}
                <div
                  className={`relative w-full lg:w-[45%] aspect-[16/9] lg:aspect-auto bg-gradient-to-br ${step.accent} overflow-hidden flex-shrink-0`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={595}
                    height={335}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
