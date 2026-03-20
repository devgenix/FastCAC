import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrustSection } from "@/components/TrustSection";
import { ArrowRight, Verified } from "@/components/Icons";

export function Hero() {
  return (
    <>
      <section className="relative section-py overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto section-px relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 py-12 lg:py-0">

            {/* Image — shown first on mobile, second on desktop */}
            <div className="flex-1 relative w-full h-full lg:min-h-[400px] order-first lg:order-last ">
              <div className="relative w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 transition-all duration-700 hover:scale-[1.02]">
                <Image
                  src="/images/hero.png"
                  alt="FastCAC Interface Preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover lg:object-contain"
                />
              </div>
            </div>

            {/* Text — shown second on mobile, first on desktop */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-last lg:order-first">
              <h1 className="text-4xl lg:text-6xl font-headline leading-[0.9] text-on-surface">
                Start Your Business <br />
                <span className="italic">in 5 Days</span>
              </h1>
              <p className="text-xl lg:text-2xl text-on-surface/60 max-w-xl leading-snug font-body">
                Name, Domain & CAC certificate included. The all-in-one registration engine for Nigerian founders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary text-white hover:opacity-90 px-8 py-6 h-auto rounded-full font-medium text-lg shadow-xl shadow-black/5 transition-all active:scale-95 group">
                  Setup Your Business
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

          </div>
          <div className="hidden lg:block">
            <TrustSection />
          </div>
        </div>
      </section>
    </>
  );
}
