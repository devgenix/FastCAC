import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustSection } from "@/components/TrustSection";
import { ArrowRight, Verified } from "@/components/Icons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Hero() {
  return (
    <>
      <section className="relative section-py overflow-hidden">
        <div className="w-full max-w-[1320px] section-px mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 py-12 lg:py-0">

            {/* Image — shown first on mobile, second on desktop */}
            <div className="flex-1 relative w-full h-full lg:min-h-[400px] order-first lg:order-last">
              <div className="relative w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 transition-all duration-700 hover:scale-[1.02]">
                <img
                  src="/images/hero.png"
                  alt="Nigerian entrepreneur receiving their CAC certificate, business logo, and website from FastCAC"
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
            </div>

            {/* Text — shown second on mobile, first on desktop */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-last lg:order-first">
              <h1 className="text-4xl lg:text-6xl font-headline leading-[0.9] text-on-surface">
                Business Name, Logo,
                <br />
                Website &amp; CAC —
                <br />
                <span className="italic">Done for You.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-on-surface/60 max-w-xl leading-snug font-body">
                We handle your business name, brand identity, website, and full CAC registration — so you don't have to. Ready in 5 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={waLink(WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-white hover:opacity-90 px-8 py-6 h-auto rounded-full font-medium text-lg shadow-xl shadow-black/5 transition-all active:scale-95 group">
                    Get My Business Started — ₦100k
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={waLink(WA_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-outline/10 px-8 py-6 h-auto rounded-full font-medium text-base hover:bg-surface-container transition-all">
                    Talk to us first
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Trust section — visible on ALL screen sizes */}
          <TrustSection />
        </div>
      </section>
    </>
  );
}
