"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Check } from "@/components/Icons";

export function TestimonialsFAQ() {
  const faqs = [
    {
      question: "How long does the registration take?",
      answer: "Typically, the CAC registration process takes between 3 to 7 business days, depending on name availability and government processing times."
    },
    {
      question: "What documents do I need to provide?",
      answer: "You'll need to provide your full name, valid ID (NIN/Passport/DL), address, and 3 proposed business names."
    },
    {
      question: "Is the payment secure?",
      answer: "Yes, all payments are processed through encrypted, industry-standard gateways like Paystack or Flutterwave."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! You can start with a basic company registration and add a website or branding services at any time."
    }
  ];

  const testimonials = [
    {
      name: "Chinedu Okechukwu",
      role: "Founder, TechLaunch NG",
      text: "FastCAC made registering my startup incredibly easy. I was legal and online in less than a week!"
    },
    {
      name: "Amina Yusuf",
      role: "Creative Director",
      text: "The branding and website services they offered were professional and saved me so much time."
    }
  ];

  return (
    <section id="testimonials-faq" className="section-py bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto section-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Testimonials */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl lg:text-5xl font-headline italic tracking-tight mb-4">What Our Clients <br/> <span>Are Saying</span></h2>
              <p className="text-on-surface/50 font-body">Real stories from entrepreneurs who launched with us.</p>
            </div>
            
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                  <p className="text-lg text-on-surface font-body italic mb-6">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl lg:text-5xl font-headline italic tracking-tight mb-4">Frequently Asked <br/> <span>Questions</span></h2>
              <p className="text-on-surface/50 font-body">Everything you need to know about our process.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-100 rounded-2xl overflow-hidden px-6">
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
