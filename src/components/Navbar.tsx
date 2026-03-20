"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { WhatsApp, ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 transition-all duration-300">
      <div 
        className={cn(
          "flex justify-between items-center transition-all duration-500 pointer-events-auto",
          isScrolled 
            ? "w-[95%] max-w-[800px] bg-white/70 backdrop-blur-xl border border-outline/10 rounded-lg section-px py-2 shadow-sm"
            : "w-full max-w-[1440px] bg-transparent section-px py-4"
        )}
      >
        <Link 
          href="/" 
          className={cn(
            "font-headline transition-all duration-300",
            isScrolled ? "text-xl tracking-tight" : "text-2xl tracking-tighter"
          )}
        >
          <span className="text-primary">Fast</span>
          <span className="text-on-surface opacity-80">CAC</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            href="#how-it-works" 
            className="text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Process
          </Link>
          <Link 
            href="#pricing" 
            className="text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Packages
          </Link>
          <a 
            href="https://wa.me/2348120000000"
            target="_blank"
            className="flex items-center gap-1.5 text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            <WhatsApp className="w-4 h-4 fill-current" />
            Support
          </a>
          {isScrolled && (
            <Button 
              className="transition-all duration-300 rounded-full font-medium h-9 text-xs px-4 group bg-primary text-white"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>

        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <div className="w-6 h-6 flex items-center justify-center font-bold text-2xl">×</div>
          ) : (
            <div className="space-y-1.5">
              <div className="w-5 h-0.5 bg-current opacity-70"></div>
              <div className="w-5 h-0.5 bg-current opacity-70"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - TBD refinement */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-6 flex flex-col gap-8 pointer-events-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-headline tracking-tighter" onClick={() => setIsMenuOpen(false)}>
              Fast<span className="opacity-60">CAC</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-3xl">&times;</button>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            <Link href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Process</Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Packages</Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          </div>
          <Button className="bg-primary w-full rounded-full py-6 h-auto text-lg">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
