import { Button } from "@/components/ui/button";
import { Verified, Rocket, Shield, Globe } from "@/components/Icons";

export function FinalCTA() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1440px] mx-auto section-px">
        <div className="bg-surface-container rounded-[2rem] p-10 lg:p-24 text-center relative overflow-hidden border border-outline/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
              Ready to <span className="text-primary underline decoration-primary/20 underline-offset-8">start your business?</span>
            </h2>
            <p className="text-lg lg:text-xl text-on-surface/50 mb-12 max-w-xl mx-auto font-body">
              Join 1,200+ entrepreneurs who launched their dreams with FastCAC this year. No stress, no confusion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-primary text-white hover:bg-primary/90 h-16 px-12 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 text-lg">
                Get Started (₦100k)
              </Button>
              <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 h-16 px-12 rounded-2xl font-bold transition-all h-auto text-lg">
                Start Naming (₦15k)
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 mt-12 border-t border-outline/5 opacity-40">
              <div className="flex items-center gap-2">
                <Verified className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">OFFICIAL_AGENT</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">5_DAY_PROTOCOL</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">ENCRYPTED_PAYMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-outline/5 pt-16 pb-8 section-px">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline italic tracking-tighter">
              <span className="text-primary">Fast</span>
              <span className="opacity-60">CAC</span>
            </div>
            <p className="text-on-surface/40 text-sm leading-relaxed font-body">
              The operating system for Nigerian startups. From idea to registered entity in 5 days.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Ecosystem</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><a className="hover:text-secondary transition-colors" href="#how-it-works">How it Works</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Legal_Protocol</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Terms of Use</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Communication</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li className="flex items-center gap-2">
                hello@fastcac.ng
              </li>
              <li className="flex items-center gap-2">
                +234 812 000 0000
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono opacity-20 uppercase tracking-widest">
            © 2024 FastCAC / ENGINEERED_IN_NIGERIA
          </p>
          <div className="flex gap-6 opacity-20 hover:opacity-100 transition-opacity">
            <span className="font-mono text-[10px] uppercase cursor-pointer">Twitter</span>
            <span className="font-mono text-[10px] uppercase cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
