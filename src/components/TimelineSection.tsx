"use client";

import React from "react";

const days = [
  {
    day: "Day 1",
    label: "Pick Your Name",
    description:
      "You tell us your business idea. We send you 5 unique, CAC-available name suggestions with matching domains. You pick one — or choose from our ready-to-register list.",
    color: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textAccent: "text-emerald-600",
  },
  {
    day: "Days 2–3",
    label: "We File Everything",
    description:
      "We submit your CAC registration application with all required documents and government fees included. Our team begins designing your logo and brand identity simultaneously.",
    color: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    textAccent: "text-sky-600",
  },
  {
    day: "Day 4",
    label: "Your Brand & Website",
    description:
      "While we follow up on your CAC filing, we build your professional website and set up your business email. You review and approve your brand kit — logo, colors, and fonts.",
    color: "from-violet-400 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    textAccent: "text-violet-600",
  },
  {
    day: "Day 5",
    label: "You're Open for Business",
    description:
      "Your official CAC certificate is delivered. Your live website goes online. Your business email is active. You receive everything in one clean handoff — ready to trade.",
    color: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    textAccent: "text-orange-600",
  },
];

export function TimelineSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-primary opacity-80 mb-4 font-mono">
            The 5-Day Promise
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            What happens after
            <br className="hidden md:block" />
            <span className="text-[#00A859]"> you say yes.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            No chasing. No delays. A clear, 5-day process — you watch, we deliver.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />

          {days.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10">
              {/* Circle */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-black shadow-lg mb-6 font-mono`}
              >
                {i + 1}
              </div>

              <div
                className={`${item.bg} ${item.border} border rounded-2xl p-6 w-full`}
              >
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${item.textAccent} font-mono`}>
                  {item.day}
                </p>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-0 relative">
          {/* Vertical line */}
          <div className="absolute left-[1.75rem] top-7 bottom-7 w-px bg-slate-200 z-0" />

          {days.map((item, i) => (
            <div key={i} className="flex gap-6 relative z-10 pb-8 last:pb-0">
              {/* Circle */}
              <div className="shrink-0">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm font-black shadow-lg font-mono`}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className={`${item.bg} ${item.border} border rounded-2xl p-5 flex-1`}
              >
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${item.textAccent} font-mono`}>
                  {item.day}
                </p>
                <h3 className="text-base font-black text-slate-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
