import { Button } from "@/components/ui/button";
import Image from "next/image";

const names = [
  { name: "PaySwift", domain: "payswift.ng", tag: "Fintech", desc: "The future of peer-to-peer liquidity." },
  { name: "AgroScale", domain: "agroscale.com", tag: "Agriculture", desc: "Modern supply chains for modern farms." },
  { name: "HealthLoom", domain: "healthloom.ng", tag: "Healthcare", desc: "Weaving technology into patient care." },
  { name: "Buildr", domain: "buildr.com.ng", tag: "Proptech", desc: "Simplified construction management." },
];

export function NameGrid() {
  return (
    <section className="section-py max-w-[1440px] mx-auto section-px">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-on-surface">Ready-to-Own Names</h2>
          <p className="text-on-surface-variant">Skip the brainstorming. These business names come with matched .com/.ng domains and a branding headstart.</p>
        </div>
        <div className="text-sm font-medium text-on-surface-variant/70 italic px-4 py-2 bg-surface-container rounded-full">
          First come, first served.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {names.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-tertiary/10 text-tertiary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <span className="w-1 h-1 bg-tertiary rounded-full"></span> 1 Available
            </div>
            <h4 className="text-2xl font-extrabold text-on-surface mb-1">{item.name}</h4>
            <p className="text-primary text-sm font-medium mb-4">{item.domain}</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs bg-surface-container px-2 py-1 rounded text-on-surface-variant">{item.tag}</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 italic">"{item.desc}"</p>
            <Button className="w-full bg-secondary-container text-white py-6 h-auto rounded-xl font-bold hover:brightness-105 transition-all">
              Buy Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CustomNaming() {
  return (
    <section className="section-py bg-slate-100/50">
      <div className="max-w-5xl mx-auto section-px bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Get a Custom Name & Branding</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            None of the ready-made names fit? Our naming experts will work with you to develop 5 premium brand options tailored to your industry.
          </p>
          <div className="flex flex-col gap-4">
            <Button className="bg-secondary-container text-white px-8 py-4 h-auto rounded-xl font-bold text-lg hover:brightness-110 transition-all text-center">
              Start Naming Consultation
            </Button>
            <p className="text-xs text-on-surface-variant/60 flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-outlined text-[14px]">history</span>
              Risk-free: 100% refund policy if you don't like any of our names.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-inner bg-slate-50 relative">
          <Image 
            src="/images/landing/occasions/birthday.png" 
            alt="Happy entrepreneur with certificate" 
            fill
            className="object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
