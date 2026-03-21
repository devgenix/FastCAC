import { Hero } from "@/components/Hero";
import { FaqSection } from "@/components/FaqSection";
import { FinalCTA } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorks, ChecklistSection } from "@/components/FeatureSections";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  return (
    <div className="selection:bg-primary/20 pb-36 md:pb-0">
      <Hero />
      <ChecklistSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCTA />
    </div>
  );
}
