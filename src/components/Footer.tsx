"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Verified, Rocket, Shield, Globe } from "@/components/Icons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { usePathname } from "next/navigation";

export function FinalCTA() {
  const pathname = usePathname();
  const isNamesPage = pathname === "/names";
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="bg-surface-container rounded-[1rem] p-6 lg:p-12 text-center relative overflow-hidden border border-outline/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
              Start Your Business{" "}
              <span className="underline decoration-secondary decoration-4 underline-offset-8">Today</span>
            </h2>
            <p className="text-lg lg:text-xl text-on-surface/70 mb-12 max-w-2xl mx-auto font-body">
              Get your business name, logo, website, and CAC certificate <span className="font-mono text-secondary font-bold"> — in 5 days or less for ₦100,000</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={waLink(WA_MESSAGES.finalCTA)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-secondary text-on-secondary hover:bg-secondary/90 h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase transition-all shadow-xl shadow-secondary/10">
                  Start My Business Now
                </Button>
              </Link>
              <Link 
                href={isNamesPage ? waLink(WA_MESSAGES.businessName) : "/names"} 
                target={isNamesPage ? "_blank" : undefined}
                rel={isNamesPage ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase transition-all border-outline/20 hover:bg-surface-container-high">
                  {isNamesPage ? "I want a business name" : "Get Business Names"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-outline/5 pt-16 pb-8">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline italic tracking-tighter">
              <span className="text-primary">Fast</span>
              <span className="opacity-60">CAC</span>
            </div>
            <p className="text-on-surface/65 text-sm leading-relaxed font-body">
              Nigeria's fastest way to get your business registered, branded, and online — in 5 days.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-60">Ecosystem</h3>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><a className="hover:text-secondary transition-colors cursor-pointer" href="#how-it-works">How it Works</a></li>
              <li><a className="hover:text-secondary transition-colors cursor-pointer" href="#pricing">Packages</a></li>
              <li><a className="hover:text-secondary transition-colors cursor-pointer" href="#whats-included">What's Included</a></li>
              <li><Link className="hover:text-secondary transition-colors cursor-pointer" href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-60">Legal</h3>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><Link className="hover:text-secondary transition-colors cursor-pointer" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-secondary transition-colors cursor-pointer" href="/terms">Terms of Use</Link></li>
              <li><Link className="hover:text-secondary transition-colors cursor-pointer" href="/names">Business Names</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-60">Contact</h3>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li>
                <a href="mailto:hello@fastcac.com" className="hover:text-secondary transition-colors cursor-pointer">hello@fastcac.com</a>
              </li>
              <li>
                <Link
                  href={waLink(WA_MESSAGES.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  +234 816 312 8234
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest">
            © {new Date().getFullYear()} FastCAC
          </p>
          <div className="flex gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <a href="#" className="font-mono text-[10px] uppercase cursor-pointer hover:text-secondary" aria-label="FastCAC on X (Twitter)">Twitter</a>
            <a href="#" className="font-mono text-[10px] uppercase cursor-pointer hover:text-secondary" aria-label="FastCAC on LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
