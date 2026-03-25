"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WhatsApp, ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { waLink, WA_MESSAGES, getNameMessage } from "@/lib/whatsapp";
import { useHeader } from "./HeaderContext";


export function Navbar() {
  const { isSticky } = useHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalLen, setTotalLen] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const pathname = usePathname();
  const isBlogPost = pathname && pathname.startsWith("/blog/") && pathname !== "/blog";
  const isNamePage = pathname && pathname.startsWith("/names/") && pathname !== "/names";
  const selectedName = isNamePage 
    ? pathname.split("/")[2]
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") 
    : null;

  // Measure the path's real perimeter whenever the pill becomes visible
  useEffect(() => {
    if (isScrolled && isBlogPost && pathRef.current) {
      setTotalLen(pathRef.current.getTotalLength());
    }
  }, [isScrolled, isBlogPost]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isBlogPost) {
        const winScroll = window.scrollY;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        setScrollProgress(winScroll / height || 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPost]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // How many px of the stroke to draw
  const drawLen = totalLen > 0 ? scrollProgress * totalLen : 0;

  return (
    <nav className={cn(
      "left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 transition-all duration-300 max-w-[1320px] mx-auto",
      isSticky ? "fixed top-0" : "absolute"
    )}>
      <div
        className={cn(
          "flex justify-between items-center transition-all duration-500 pointer-events-auto p-2 relative",
          isScrolled
            ? "w-[95%] max-w-[800px] bg-white/70 backdrop-blur-xl border border-outline/10 rounded-lg shadow-sm"
            : "w-full max-w-[1320px] section-px bg-transparent"
        )}
      >
        {/* Progress Border SVG — only on blog posts when scrolled */}
        {isScrolled && isBlogPost && (
          <div className="absolute -inset-[3px] pointer-events-none overflow-visible rounded-lg">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="24"
                ry="24"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - (scrollProgress * 100)}
                style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
              />
            </svg>
          </div>
        )}

        <Link
          href="/"
          className={cn(
            "font-headline transition-all duration-300 cursor-pointer",
            isScrolled ? "text-xl tracking-tight" : "text-2xl tracking-tighter"
          )}
        >
          <span className="text-primary">Fast</span>
          <span className="text-on-surface opacity-80">CAC</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#pricing"
            className="text-on-surface/70 hover:text-primary transition-colors font-medium text-sm cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href="/names"
            className="text-on-surface/70 hover:text-primary transition-colors font-medium text-sm cursor-pointer"
          >
            Business Names
          </Link>
          <Link
            href="/blog"
            className="text-on-surface/70 hover:text-primary transition-colors font-medium text-sm cursor-pointer"
          >
            Blog
          </Link>
          {isScrolled && (
            <Link
              href={selectedName ? waLink(getNameMessage(selectedName, "starter")) : waLink(WA_MESSAGES.navbar)}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button className="transition-all duration-300 rounded-full font-medium h-9 text-xs px-4 group bg-primary text-white">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-on-surface p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <div
              className="w-6 h-6 flex items-center justify-center font-bold text-2xl"
              aria-hidden="true"
            >
              ×
            </div>
          ) : (
            <div className="space-y-1.5" aria-hidden="true">
              <div className="w-5 h-0.5 bg-current" />
              <div className="w-5 h-0.5 bg-current" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 bg-white z-[60] p-6 flex flex-col gap-8 pointer-events-auto"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-headline tracking-tighter cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Fast<span className="opacity-70">CAC</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl cursor-pointer"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-headline italic tracking-tight">
            <Link
              href="#pricing"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link href="/names" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Business Names
            </Link>
            <Link
              href="/blog"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
          <Link
            href={selectedName ? waLink(getNameMessage(selectedName, "starter")) : waLink(WA_MESSAGES.mobileMenu)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button className="bg-primary w-full rounded-full py-6 h-auto text-lg">
              Get Started →
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
