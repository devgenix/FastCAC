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
    <div
      className={`fixed transition-all duration-300 z-[100] cursor-pointer group flex flex-row items-center gap-3
        ${isStickyVisible && isHomepage
          ? "bottom-[140px]"
          : "bottom-8 lg:bottom-12"
        }
        right-4 lg:right-12`}
    >
      <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
        <div className="bg-surface-container-high border border-outline/10 px-4 py-2 rounded-2xl shadow-xl">
          <p className="text-on-surface font-headline font-bold text-sm tracking-tight italic">
            Need help? <span className="text-[#25D366]">Chat with us</span>
          </p>
        </div>
      </div>

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
    </div>
  );
}
