"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsApp } from './Icons';
import { waLink, WA_MESSAGES } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === '/';

  return (
    <div className={`fixed left-8 z-[70] flex flex-row items-center gap-3 group transition-all duration-500
      ${(isStickyVisible && isHomepage) ? "bottom-[112px] md:bottom-8" : "bottom-8"}`}>
      <Link
        href={waLink(WA_MESSAGES.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] lg:animate-ping opacity-40 hidden lg:block"></span>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90 border-2 border-white/20">
          <WhatsApp className="w-8 h-8 fill-current" />
        </div>
      </Link>

      <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity whitespace-nowrap">
        <p className="text-[#075E54] font-medium text-sm">Need help?</p>
      </div>
    </div>
  );
}
