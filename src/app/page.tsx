import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { HowItWorks, ChecklistSection } from "@/components/FeatureSections";
import { PricingSection } from "@/components/PricingSection";
import { MVPPricing } from "@/components/MVPPricing";
import { PricingSectionV2 } from "@/components/PricingSectionV2";
import { PricingSectionV3 } from "@/components/PricingSectionV3";
import { TestimonialsFAQ } from "@/components/TestimonialsFAQ"
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20">
      <Navbar />
      <FloatingWhatsApp />
      <Hero />
      <TrustSection />
      <ChecklistSection />
      
      <div className="space-y-32 py-20 bg-slate-50">
        <div className="px-6 text-center">
          <h2 className="text-5xl font-black text-slate-900">Version Comparison</h2>
          <p className="text-slate-500 mt-4">Compare all pricing iterations below</p>
        </div>

        <div className="border-t-4 border-dashed border-slate-200 pt-20">
          <div className="text-center mb-10">
            <span className="bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Version 1: Original Configurator</span>
          </div>
          <PricingSection />
        </div>

        <div className="border-t-4 border-dashed border-slate-200 pt-20">
          <div className="text-center mb-10">
            <span className="bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Version 2: MVP Layout</span>
          </div>
          <MVPPricing />
        </div>

        <div className="border-t-4 border-dashed border-slate-200 pt-20">
          <div className="text-center mb-10">
            <span className="bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Version 3: Current New Design (V2)</span>
          </div>
          <PricingSectionV2 />
        </div>

        <div className="border-t-4 border-dashed border-slate-200 pt-20">
          <div className="text-center mb-10">
            <span className="bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Version 4: Refined Mobile-First (V3)</span>
          </div>
          <PricingSectionV3 />
        </div>
      </div>

      <TestimonialsFAQ />
      <Footer />
    </main>
  );
}

