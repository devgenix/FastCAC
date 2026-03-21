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
    desc: "Government-issued RC number and digital seal. Your business is legally recognized within 5 days.",
  },
  {
    icon: Globe,
    title: "Business Domain & Professional Email",
    desc: "Your .com.ng or .ng domain plus a matching business email — set up and ready to use.",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-mono text-xs tracking-widest uppercase mb-4">
            What You Get
          </span>
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
              src="/images/checklist_cac.png"
              alt="Official CAC Certificate"
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Text content */}
            <div className="relative z-10 p-6 lg:p-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary text-xs font-mono tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Included in every package
              </span>
              <h3 className="text-white font-headline italic text-3xl lg:text-5xl leading-tight mb-2">
                Official CAC<br />Certificate
              </h3>
              <p className="text-white/60 font-body text-sm lg:text-base leading-relaxed max-w-sm">
                Government-issued, RC number registered. Legally yours within 5 business days.
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
                  className="group flex items-start gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl bg-surface-container border border-outline/5 hover:border-secondary/20 hover:bg-secondary/5 transition-all duration-300 cursor-default"
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
                    <p className="text-on-surface/50 font-body text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Check mark */}
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-outline/10 flex items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-on-surface/30 group-hover:text-white transition-colors duration-300" />
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
    image: "/images/step1_naming_1773936257689.png",
    accent: "from-emerald-50 to-transparent",
  },
  {
    phase: "02",
    tag: "We Build & Register",
    title: "We Handle Everything",
    description:
      "We file your CAC registration (government fees included), design your logo and brand kit, build your website, and set up your domain and business email — all at once. You don't lift a finger.",
    icon: Shield,
    image: "/images/step2_securing_1773936272478.png",
    accent: "from-sky-50 to-transparent",
  },
  {
    phase: "03",
    tag: "Launch",
    title: "You're Open for Business",
    description:
      "Within 5 business days, you'll have your official CAC certificate, a live website, a professional logo, and a business email — everything you need to start trading.",
    icon: Rocket,
    image: "/images/step3_launching_1773936288714.png",
    accent: "from-violet-50 to-transparent",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-white overflow-hidden">
      <div className="max-w-[1320px] section-px mx-auto">

        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-mono text-xs tracking-widest uppercase mb-5">
            The Process
          </span>
          <h2 className="text-4xl lg:text-8xl font-headline tracking-tighter leading-[0.9] mb-4">
            How FastCAC <br />
            <span className="italic">Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-on-surface/50 font-body leading-snug">
            Three steps. We do the work.{" "}
            <span className="text-on-surface font-medium underline decoration-secondary decoration-2 underline-offset-4">
              You get a running business.
            </span>
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[2.6rem] top-10 bottom-10 w-px bg-outline/10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 lg:gap-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              return (
                <div key={index} className="relative lg:grid lg:grid-cols-[5.5rem_1fr] lg:gap-0 group">

                  {/* ── LEFT: Phase number + icon (desktop timeline spine) ── */}
                  <div className="hidden lg:flex flex-col items-center pt-1">
                    {/* Phase bubble */}
                    <div className="relative z-10 w-[5rem] h-[5rem] rounded-2xl border-2 border-outline/10 bg-white group-hover:border-secondary/30 group-hover:bg-secondary/5 transition-all duration-300 flex flex-col items-center justify-center gap-0.5 shadow-sm">
                      <span className="font-mono text-[10px] text-on-surface/30 tracking-widest">STEP</span>
                      <span className="font-headline text-2xl font-bold leading-none text-on-surface/80 group-hover:text-secondary transition-colors duration-300">
                        {step.phase}
                      </span>
                    </div>
                    {/* Spacer that grows to fill the card height */}
                    {index < STEPS.length - 1 && (
                      <div className="flex-1 w-px bg-transparent" />
                    )}
                  </div>

                  {/* ── RIGHT: Step card ── */}
                  <div
                    className={`lg:ml-8 lg:mb-12 rounded-2xl lg:rounded-3xl overflow-hidden border border-outline/5 group-hover:border-secondary/15 bg-surface-container transition-all duration-300 flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } lg:min-h-[320px]`}
                  >
                    {/* Text content */}
                    <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center gap-4">
                      {/* Mobile phase + tag row */}
                      <div className="flex items-center gap-3 lg:hidden">
                        <span className="w-9 h-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-secondary" />
                        </span>
                        <span className="font-mono text-xs text-on-surface/40 tracking-widest uppercase">
                          {step.tag} — {step.phase}
                        </span>
                      </div>

                      {/* Desktop tag */}
                      <div className="hidden lg:flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/15 text-secondary font-mono text-xs tracking-widest uppercase">
                          <Icon className="w-3.5 h-3.5" />
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="font-headline italic text-3xl lg:text-[2.8rem] leading-tight tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-on-surface/55 font-body text-base lg:text-lg leading-relaxed max-w-md">
                        {step.description}
                      </p>

                      {/* Check indicators */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-body text-on-surface/50">
                          {index === 0 && "Name options in 24 hrs"}
                          {index === 1 && "CAC + logo + website — all handled"}
                          {index === 2 && "Live & legal in 5 business days"}
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
                        fill
                        sizes="(max-width: 1024px) 100vw, 580px"
                        className="object-cover"
                      />
                      {/* Large phase number watermark */}
                      <span className="absolute bottom-4 right-5 font-headline font-bold text-[5rem] leading-none text-white/10 select-none pointer-events-none">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
