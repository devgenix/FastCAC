import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustSection } from "@/components/TrustSection";
import { ArrowRight } from "@/components/Icons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaText?: string;
  waMessage?: string;
}

export function Hero({ title, subtitle, ctaText, waMessage }: HeroProps) {
  const defaultTitle = (
    <>
      Business Name, Website &amp; CAC —
      <span className="italic font-mono"> For &#x20A6;100k</span>
    </>
  );

  const defaultSubtitle = (
    <>
      Registered, branded, and online in{" "}
      <span className="font-mono text-on-surface font-bold">5 business days</span>
      {" "}— no office visits, no paperwork, no stress.
    </>
  );

  return (
    <>
      <section className="relative section-py overflow-hidden">
        <div className="w-full max-w-[1320px] section-px mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 py-12 lg:py-0">

            {/* Image — shown first on mobile, second on desktop */}
            <div className="flex-1 relative w-full h-full lg:min-h-[400px] order-first lg:order-last">
              <div className="relative w-full h-full aspect-[2550/3300] lg:h-[600px] lg:aspect-[2550/3300] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 transition-all duration-700 hover:scale-[1.02]">
                <Image
                  src="https://res.cloudinary.com/dzaxzeuh5/image/upload/v1774103154/hero1_ggu55q.jpg"
                  alt="Nigerian entrepreneur receiving their CAC certificate, business logo, and website from FastCAC"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 660px"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text — shown second on mobile, first on desktop */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-last lg:order-first">
              <h1 className="text-4xl lg:text-6xl font-headline leading-[0.9] text-on-surface">
                {title || defaultTitle}
              </h1>
              <p className="text-xl lg:text-2xl text-on-surface/60 max-w-xl leading-snug font-body">
                {subtitle || defaultSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={waLink(waMessage || WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full bg-primary text-white hover:opacity-90 px-8 py-6 h-auto rounded-full font-medium text-lg shadow-xl shadow-black/5 transition-all active:scale-95 group">
                    {ctaText || "Get My Business Started — ₦100k"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={waLink(WA_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-outline/10 px-8 py-6 h-auto rounded-full font-medium text-base hover:bg-surface-container transition-all">
                    Got questions? Chat on WhatsApp →
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
