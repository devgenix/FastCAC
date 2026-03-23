"use client";

import React from "react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Founder, AdeStyle Clothing",
    location: "Lagos",
    avatar: "AO",
    color: "from-pink-400 to-rose-500",
    quote:
      "I had been putting off registering my business for 2 years because I didn't know where to start. FastCAC did everything in 7 days. I now have my CAC cert, logo, website, and professional email. It felt like magic.",
  },
  {
    name: "Emeka Nwosu",
    role: "CEO, TechBridge Solutions",
    location: "Abuja",
    avatar: "EN",
    color: "from-blue-400 to-indigo-500",
    quote:
      "Other agencies wanted ₦80k just for CAC filing, then another ₦150k for a website, and another ₦50k for a logo. FastCAC gave me all of that for ₦100k. The quality is genuinely premium. Highly recommend.",
  },
  {
    name: "Fatima Bello",
    role: "Owner, Verde Agro Farms",
    location: "Kano",
    avatar: "FB",
    color: "from-emerald-400 to-teal-500",
    quote:
      "My business was operating informally for years. FastCAC made the whole registration process stress-free. The team was responsive on WhatsApp at every step. My investors now take me seriously with my CAC certificate.",
  },
  {
    name: "Chukwudi Eze",
    role: "Founder, Speedy Courier NG",
    location: "Port Harcourt",
    avatar: "CE",
    color: "from-violet-400 to-purple-500",
    quote:
      "I needed my business set up fast before a big contract. FastCAC delivered in exactly 7 days. Everything was perfect — the logo, the website, the business name. 10/10, no complaints whatsoever.",
  },
  {
    name: "Oluwaseun Afolabi",
    role: "Director, Prestige Properties",
    location: "Lagos",
    avatar: "OA",
    color: "from-amber-400 to-orange-500",
    quote:
      "What impressed me most was that government fees were already included. No hidden charges, no surprises. I paid once and got everything. This is how business services should work in Nigeria.",
  },
  {
    name: "Ngozi Umeh",
    role: "Owner, NaturalKinks Beauty",
    location: "Enugu",
    avatar: "NU",
    color: "from-rose-400 to-pink-500",
    quote:
      "As a woman starting my first business, I was afraid of the process. FastCAC literally held my hand through everything — from picking a business name to receiving my certificate. I didn't visit any government office.",
  },
];

const TestimonialCard = ({
  name,
  role,
  location,
  avatar,
  color,
  quote,
}: (typeof testimonials)[0]) => (
  <div className="w-full lg:w-[400px] flex-shrink-0 bg-white border border-outline/10 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    {/* Quote mark */}
    <div className="text-4xl leading-none font-black text-secondary/20 select-none font-headline">
      "
    </div>
    <p className="text-on-surface/70 text-sm font-body leading-relaxed flex-grow -mt-3">
      {quote}
    </p>
    <div className="flex items-center gap-3 pt-3 border-t border-outline/5">
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-black shrink-0`}
      >
        {avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-on-surface font-headline">{name}</p>
        <p className="text-xs text-on-surface/65 font-body">
          {role} · {location}
        </p>
      </div>
    </div>
  </div>
);

export function TestimonialsSection() {
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="section-py bg-surface-container-low overflow-hidden">
      {/* Header */}
      <div className="max-w-[1320px] section-px mx-auto mb-12">
        <h2 className="text-2xl lg:text-3xl font-headline font-black tracking-tight">
          1,200+ BUSINESSES STARTED AND COUNTING
        </h2>
        <p className="mt-2 text-on-surface/70 font-body text-sm lg:text-base">
          Nigerian entrepreneurs in every industry trust FastCAC to get them registered, branded, and online.
        </p>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden lg:block max-w-[1320px] mx-auto section-px" aria-label="Customer Testimonials">
        <div className="relative group overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-horizontal pause-on-hover" role="list">
            {scrollItems.map((item, index) => (
              <div key={`desktop-${index}`} role="listitem" aria-hidden={index >= testimonials.length}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Mobile Vertical Scroll */}
      <div className="lg:hidden relative h-[600px] overflow-hidden group" aria-label="Customer Testimonials">
        <div className="flex flex-col gap-6 h-max animate-scroll-vertical pause-on-hover" role="list">
          {scrollItems.map((item, index) => (
            <div key={`mobile-${index}`} className="section-px" role="listitem" aria-hidden={index >= testimonials.length}>
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-container-low to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
