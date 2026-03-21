"use client";

import React from "react";

const rows = [
  { label: "Business Name Search", fastcac: "Included", diy: "Manual (hours of research)" },
  { label: "CAC Registration", fastcac: "We file it all", diy: "You queue at the office" },
  { label: "Government Fees", fastcac: "Included in price", diy: "Extra — varies by name" },
  { label: "Professional Logo", fastcac: "Included", diy: "Hire a designer (₦30k–₦80k extra)" },
  { label: "Business Website", fastcac: "Included", diy: "Hire a developer (₦100k+ extra)" },
  { label: "Business Email", fastcac: "Included", diy: "Set up yourself or pay monthly" },
  { label: "Domain (.com.ng)", fastcac: "Included", diy: "Find and buy separately" },
  { label: "Time to completion", fastcac: "5 business days", diy: "4–12 weeks" },
  { label: "Stress level", fastcac: "Zero", diy: "High" },
];

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            FastCAC vs the hard way.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Going solo means sourcing a designer, a developer, and navigating CAC registration on your own — and paying for each separately.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm md:text-base font-body">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left p-5 md:p-7 text-slate-400 font-semibold text-xs uppercase tracking-widest w-[40%]">
                  What you need
                </th>
                <th className="p-5 md:p-7 text-center w-[30%]">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-[#00A859] font-black text-base md:text-lg">FastCAC</span>
                    <span className="text-xs text-slate-400 font-medium font-mono">₦100k all-in</span>
                  </div>
                </th>
                <th className="p-5 md:p-7 text-center w-[30%]">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-slate-400 font-black text-base md:text-lg">DIY / Lawyers</span>
                    <span className="text-xs text-slate-400 font-medium font-mono">₦200k–₦400k+</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-50 last:border-0 transition-colors hover:bg-slate-50/50 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                  }`}
                >
                  <td className="p-5 md:p-7 font-semibold text-slate-700">
                    {row.label}
                  </td>
                  <td className="p-5 md:p-7 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#00A859]/10 flex items-center justify-center text-[#00A859] text-xs font-black shrink-0">
                        ✓
                      </span>
                      <span className="text-[#00A859] font-semibold text-sm">{row.fastcac}</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-7 text-center">
                    <span className="text-slate-400 text-sm">{row.diy}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          *DIY costs are estimates based on current Nigerian market rates.
        </p>
      </div>
    </section>
  );
}
