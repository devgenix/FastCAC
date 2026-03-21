import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer, FinalCTA } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BusinessNamesSection } from "@/components/BusinessNamesSection";
import { HowItWorks, ChecklistSection } from "@/components/FeatureSections";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20">
      <Navbar />
      <FloatingWhatsApp />
      <Hero />
      <BusinessNamesSection />
      <ChecklistSection />
      <HowItWorks />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
