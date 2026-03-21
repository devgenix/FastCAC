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
      "I had been putting off registering my business for 2 years because I didn't know where to start. FastCAC did everything in 5 days. I now have my CAC cert, logo, website, and professional email. It felt like magic.",
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
      "I needed my business set up fast before a big contract. FastCAC delivered in exactly 5 days. Everything was perfect — the logo, the website, the business name. 10/10, no complaints whatsoever.",
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

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            1,200+ businesses
            <br className="hidden md:block" />
            <span className="text-[#00A859]"> started and counting.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Nigerian entrepreneurs in every industry trust FastCAC to get them registered, branded, and online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <div className="text-5xl leading-none font-black text-[#00A859]/20 select-none">
                "
              </div>

              <p className="text-slate-700 text-base leading-relaxed font-medium flex-grow -mt-4">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
