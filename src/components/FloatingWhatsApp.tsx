"use client"

import React from 'react';
import Link from 'next/link';
import { WhatsApp } from './Icons';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group">
      <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity whitespace-nowrap">
        <p className="text-[#075E54] font-medium text-sm">Need help?</p>
      </div>
      <Link
        href="https://wa.me/234XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        aria-label="Chat on WhatsApp"
      >
        {/* Notification Ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366]"></span>
        </span>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90 border-2 border-white/20">
          <WhatsApp className="w-8 h-8 fill-current" />
        </div>
      </Link>
    </div>
  );
}
