import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer, FinalCTA } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HowItWorks, ChecklistSection } from "@/components/FeatureSections";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";

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
      <ComparisonSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
