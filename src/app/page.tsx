import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { FaqSection } from "@/components/FaqSection";
import { Footer, FinalCTA } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorks, ChecklistSection } from "@/components/FeatureSections";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20">
      <Navbar />
      <FloatingWhatsApp />
      <Hero />
      <ChecklistSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
