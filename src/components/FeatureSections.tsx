import Image from "next/image";
import { Search, Shield, Rocket, Check } from "@/components/Icons";

export function HowItWorks() {
  const steps = [
    {
      title: "Pick or Request a Name",
      description: "Choose from our curated names or let us create one for you.",
      icon: Search,
      image: "/images/step1_naming_1773936257689.png",
      tag: "PHASE_01"
    },
    {
      title: "We Secure Everything",
      description: "We register your domain and handle your CAC business registration.",
      icon: Shield,
      image: "/images/step2_securing_1773936272478.png",
      tag: "PHASE_02"
    },
    {
      title: "You Launch",
      description: "Within 5 business days, you'll receive your official CAC certificate, domain and brand ready to go.",
      icon: Rocket,
      image: "/images/step3_launching_1773936288714.png",
      tag: "PHASE_03"
    }
  ];

  return (
    <section id="how-it-works" className="section-py bg-white relative">
      <div className="max-w-[1440px] mx-auto section-px">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Sticky Content */}
          <div className="lg:w-[40%] lg:sticky lg:top-40 h-fit space-y-6">
            <h2 className="text-4xl lg:text-7xl font-headline tracking-tight leading-[0.95]">
              How FastCAC <br/> <span className="italic">Works</span>
            </h2>
            <p className="text-lg lg:text-xl text-on-surface/50 font-body leading-snug max-w-sm">
              Three simple steps to go from idea to <span className="text-on-surface font-medium underline decoration-secondary decoration-2 underline-offset-4">an operating business</span>.
            </p>
          </div>

          {/* Right Side: Scrollable Content */}
          <div className="lg:w-[60%] space-y-20 lg:space-y-40">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-5xl font-headline italic tracking-tight">{step.title}</h3>
                    <p className="text-lg lg:text-xl text-on-surface/60 leading-relaxed font-body max-w-xl">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="relative aspect-[16/10] bg-surface-container rounded-2xl overflow-hidden border border-outline/5 shadow-2xl shadow-black/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent" />
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChecklistSection() {
  const items = [
    { 
      title: "Official CAC Certificate", 
      desc: "Full RC number and official government digital seal issued within 5 days.",
      image: "/images/checklist_cac.png"
    },
    { 
      title: "Custom Domain (.com.ng/.ng)", 
      desc: "1-year registration for your matching business website and emails.",
      image: "/images/checklist_domain.png"
    },
    { 
      title: "Minimalist Visual Identity", 
      desc: "A vector-ready logo designed to scale with your startup.",
      image: "/images/checklist_logo.png"
    },
    { 
      title: "Priority Support Pipeline", 
      desc: "Direct access to our registration experts for post-launch compliance.",
      image: "/images/checklist_support.png"
    },
  ];

  return (
    <section className="section-py bg-white">
      <div className="max-w-[1440px] mx-auto section-px">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-32">
          <h2 className="text-3xl lg:text-7xl font-headline italic tracking-tight leading-[1.1] mb-6">
            Everything You Need <br/> <span>to Be "Open for Business"</span>
          </h2>
          <p className="text-base lg:text-xl text-on-surface/50 font-body max-w-xl mx-auto">
            From legal identity to digital presence, we secure the foundation of your Nigerian startup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col rounded-[1rem] bg-surface-container border border-outline/5 hover:border-outline/10 transition-all group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h4 className="font-headline text-2xl lg:text-3xl mb-3 italic">{item.title}</h4>
                <p className="text-on-surface/50 text-sm lg:text-base leading-relaxed font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
