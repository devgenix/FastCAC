"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WhatsApp, ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalLen, setTotalLen] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const pathname = usePathname();
  const isBlogPost = pathname && pathname.startsWith("/blog/") && pathname !== "/blog";

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
        setScrollProgress(winScroll / height);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPost]);

  // How many px of the stroke to draw
  const drawLen = totalLen > 0 ? scrollProgress * totalLen : 0;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 transition-all duration-300 max-w-[1320px] mx-auto">
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
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              /*
               * viewBox matches the pill's real pixel dimensions so that
               * SVG coordinates map 1-to-1 with rendered pixels.
               * The path's rx value (9) mirrors the pill's border-radius.
               *
               * Width  = pill offsetWidth  (e.g. 760 for max-w-[800px] at 95%)
               * Height = pill offsetHeight (e.g. 46 — adjust to match yours)
               *
               * If the pill size changes, update these two numbers and the
               * path coordinates below to match.
               */
              viewBox="0 0 760 46"
              fill="none"
              // No preserveAspectRatio="none" — default (xMidYMid meet) keeps
              // the coordinate space undistorted so getTotalLength() is accurate.
            >
              <path
                ref={pathRef}
                /*
                 * Same shape as the pill container (rounded-lg ≈ rx 8–9).
                 * Starts at the top-centre and traces anti-clockwise so the
                 * stroke begins at 12 o'clock and fills leftward then around.
                 *
                 * M cx,0          — top centre
                 * L rx,0          — top-left straight edge
                 * Q 0,0 0,rx      — top-left corner
                 * Q 0,h rx,h      — bottom-left corner (h = height, rx = radius)
                 * L (w-rx),h      — bottom-right straight edge
                 * Q w,h w,(h-rx)  — bottom-right corner
                 * Q w,0 (w-rx),0  — top-right corner
                 * L cx,0          — back to start
                 */
                d="M 380,0 L 9,0 Q 0,0 0,9 Q 0,46 9,46 L 751,46 Q 760,46 760,37 Q 760,0 751,0 L 380,0"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                // Drive the stroke with real perimeter units — no pathLength tricks
                strokeDasharray={
                  totalLen > 0 ? `${drawLen} ${totalLen}` : "0 9999"
                }
              />
            </svg>
          </div>
        )}

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
            href="#pricing"
            className="text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Pricing
          </Link>
          <Link
            href="/names"
            className="text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Business Names
          </Link>
          <Link
            href="/blog"
            className="text-on-surface/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Blog
          </Link>
          {isScrolled && (
            <Link
              href={waLink(WA_MESSAGES.navbar)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="transition-all duration-300 rounded-full font-medium h-9 text-xs px-4 group bg-primary text-white">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-on-surface p-2"
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
              <div className="w-5 h-0.5 bg-current opacity-70" />
              <div className="w-5 h-0.5 bg-current opacity-70" />
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
              className="text-2xl font-headline tracking-tighter"
              onClick={() => setIsMenuOpen(false)}
            >
              Fast<span className="opacity-60">CAC</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-headline italic tracking-tight">
            <Link
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link href="/names" onClick={() => setIsMenuOpen(false)}>
              Business Names
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
          <Link
            href={waLink(WA_MESSAGES.mobileMenu)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
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
