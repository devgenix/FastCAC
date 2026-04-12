"use client";

import React, { useState } from "react";
import { Twitter, Linkedin, Facebook, WhatsApp, LinkIcon, Check } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface BlogShareProps {
  title: string;
}

export function BlogShare({ title }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareOptions = [
    {
      name: "X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "hover:text-[#000000] hover:bg-[#000000]/5",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/5",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/5",
    },
    {
      name: "WhatsApp",
      icon: WhatsApp,
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
      color: "hover:text-[#25D366] hover:bg-[#25D366]/5",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-t border-outline/10">
      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-on-surface/40">
        Share post
      </h3>
      <div className="flex flex-wrap gap-2">
        {shareOptions.map((option) => (
          <a
            key={option.name}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-xl border border-outline/10 text-on-surface/60 transition-all duration-300",
              option.color
            )}
            title={`Share on ${option.name}`}
          >
            <option.icon className="w-5 h-5" />
          </a>
        ))}
        <button
          onClick={handleCopy}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-xl border border-outline/10 transition-all duration-300",
            copied 
              ? "bg-primary text-white border-primary" 
              : "text-on-surface/60 hover:text-primary hover:bg-primary/5 hover:border-primary/20"
          )}
          title="Copy Link"
        >
          {copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
