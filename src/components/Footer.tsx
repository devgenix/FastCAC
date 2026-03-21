"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Verified, Rocket, Shield, Globe } from "@/components/Icons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="bg-surface-container rounded-[2rem] p-10 lg:p-24 text-center relative overflow-hidden border border-outline/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-7xl font-headline italic tracking-tight leading-[1.1]">
              Ready to Own Your <br /> Business{" "}
              <span className="underline decoration-secondary decoration-4 underline-offset-8">Today?</span>
            </h2>
            <p className="text-lg lg:text-xl text-on-surface/50 mb-12 max-w-xl mx-auto font-body">
              Join 1,200+ Nigerian founders who got their business name, logo, website, and CAC certificate — in 5 days or less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={waLink(WA_MESSAGES.finalCTA)} target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary text-on-secondary hover:bg-secondary/90 h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase transition-all shadow-xl shadow-secondary/10">
                  Start My Business Now
                </Button>
              </Link>
              <Link href={waLink(WA_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-outline/10 h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase hover:bg-surface-container-low transition-all">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 mt-12 border-t border-outline/5 opacity-40">
              <div className="flex items-center gap-2">
                <Verified className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Official CAC Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">5-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Secure Payment</span>
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
    <footer className="bg-white border-t border-outline/5 pt-16 pb-8">
      <div className="max-w-[1320px] section-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline italic tracking-tighter">
              <span className="text-primary">Fast</span>
              <span className="opacity-60">CAC</span>
            </div>
            <p className="text-on-surface/40 text-sm leading-relaxed font-body">
              Nigeria's fastest way to get your business registered, branded, and online — in 5 days.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Ecosystem</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><a className="hover:text-secondary transition-colors" href="#how-it-works">How it Works</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#pricing-v3">Packages</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#whats-included">What's Included</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Legal</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Terms of Use</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] mb-6 uppercase tracking-[0.2em] opacity-30">Contact</h5>
            <ul className="space-y-3 text-sm text-on-surface/60 font-body">
              <li>
                <a href="mailto:hello@fastcac.ng" className="hover:text-secondary transition-colors">hello@fastcac.ng</a>
              </li>
              <li>
                <Link
                  href={waLink(WA_MESSAGES.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  +234 816 312 8234
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono opacity-20 uppercase tracking-widest">
            © 2025 FastCAC / Engineered in Nigeria
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
