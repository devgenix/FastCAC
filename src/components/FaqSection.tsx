"use client";

import React, { useState } from "react";
import Link from "next/link";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const faqs = [
  {
    q: "Is this 100% legitimate CAC registration?",
    a: "Yes, absolutely. We file directly with the Corporate Affairs Commission (CAC) — the official Nigerian government body for business registration. You receive an official CAC certificate with a unique registration number that is verifiable on the CAC public portal.",
  },
  {
    q: "Do I need to go to a government office?",
    a: "No. The entire process is done online and remotely. You don't visit any office, fill any paper forms, or queue anywhere. We handle all the government interactions on your behalf.",
  },
  {
    q: "What documents do I need to provide?",
    a: "Mostly basic details (Name, DOB, Address, Phone) and business information. For documents, we just need a valid government ID (NIN, Driver's Licence, or International Passport), your signature, and a passport photograph. We'll provide a clear checklist of everything required once we begin.",
  },
  {
    q: "What happens if my business name is rejected by CAC?",
    a: "Name rejection is rare because we check CAC availability before recommending names. However, if your chosen name is rejected, we will suggest alternative names and re-submit at no extra cost until your name is approved.",
  },
  {
    q: "Are government fees included in the price?",
    a: "Yes. The price you see is all-inclusive. Government filing fees stamp duty, and any other government charges are already factored in. No hidden extras.",
  },
  {
    q: "What exactly does the website look like?",
    a: "The Starter package includes a professional 1-page business website with your company details, branding, and contact information. The Business Pro package upgrades this to a multi-page website. All websites are mobile-friendly and go live on your custom domain.",
  },
  {
    q: "What is the starting price for registration?",
    a: "Our basic Business Name registration starts at just ₦40,000. This includes all government fees, your official CAC certificate, and your Tax Identification Number (TIN).",
  },
  {
    q: "What's the difference between the ₦40k and ₦100k packages?",
    a: "The ₦40k package is for CAC registration only. The ₦100k Starter Bundle includes registration PLUS a professional logo, a 1-page business website, and a custom domain. Alternatively, you can choose a Limited Company (Ltd) registration for ₦100k.",
  },
  {
    q: "Does the registration include a TIN?",
    a: "Yes. Every registration package — whether Business Name (₦40k) or Ltd Company (₦100k+) — automatically generates a Tax Identification Number (TIN). It is included in your official CAC certificate.",
  },
  {
    q: "What is the difference between Business Name and Limited Company (Ltd)?",
    a: "A Business Name (₦40k) is ideal for sole traders and small shops. A Limited Company (Ltd) (₦100k-₦200k) creates a separate legal entity, which is better for raising investment, bidding for large contracts, and protecting personal assets.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes! If you start with basic registration now, you can always come back to us later for logo design, website development, or upgrading your business structure as you grow.",
  },
  {
    q: "Can I get a refund if I change my mind?",
    a: "We begin processing your registration immediately after payment. Because government fees are non-refundable once submitted, we are unable to offer refunds after the process begins. However, if we are unable to register your business for any reason, you will receive a full refund.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 px-4">
            Everything you need to know.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  openIndex === i
                    ? "border-primary/30 bg-emerald-50/50 shadow-sm"
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <button
                  id={`faq-btn-${i}`}
                  className="w-full text-left flex items-center justify-between gap-4 p-6 cursor-pointer focus-visible:outline-none focus-visible:bg-primary/5 transition-colors"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-black text-slate-900 text-base leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 text-sm ${
                      openIndex === i
                        ? "border-primary text-primary rotate-45"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-6 text-slate-600 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-600 font-medium text-center">
            Still unsure?{" "}
            <Link
              href={waLink(WA_MESSAGES.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Chat with us on WhatsApp →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
