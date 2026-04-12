"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TableOfContents } from "./TableOfContents";
import { MorePosts } from "./MorePosts";
import { AuthorBio } from "./AuthorBio";
import { ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface BlogPostLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
  date: string;
  readTime: string;
  tocItems: { id: string; text: string }[];
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
}

export function BlogPostLayout({
  children,
  title,
  description,
  image,
  date,
  readTime,
  tocItems,
  author,
}: BlogPostLayoutProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() || "";
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <article className="max-w-[1440px] mx-auto section-px">
        <a 
          href="/blog" 
          className="inline-flex items-center text-sm font-mono text-on-surface/65 hover:text-primary transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform mr-2">←</span>
          Back to Blog
        </a>

        {/* Hero Section */}
        <header className="max-w-[1000px] mx-auto mb-16 lg:mb-24 text-center">
          <h1 className="text-4xl lg:text-7xl font-headline font-black italic tracking-tighter leading-[1] mb-8 animate-fade-up">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-on-surface/70 font-body max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:200ms]">
            {description}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm font-mono text-on-surface/65 animate-fade-up [animation-delay:400ms]">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-outline" />
            <span>{readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        {image && (
          <div className="max-w-[1000px] mx-auto mb-16 lg:mb-24 animate-fade-up [animation-delay:600ms]">
            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-outline/10 shadow-2xl shadow-primary/5">
              <Image
                src={image} 
                alt={title} 
                width={1000}
                height={563}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          {/* LEFT SIDEBAR: Navigation (TOC) */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-7 prose prose-lg prose-primary max-w-none font-body text-on-surface/80">
            {children}
            
            <hr className="my-16 border-outline/10" />

            {/* Author Section */}
            <div id="author" className="mb-16">
              <AuthorBio author={author} />
            </div>

            {/* CTA Section - Blog Card Style */}
            <div className="mt-16 bg-surface-container rounded-[2rem] p-8 lg:p-12 text-center relative overflow-hidden border border-outline/10 shadow-2xl shadow-primary/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl lg:text-5xl font-headline italic tracking-tight leading-[1.1]">
                  Start Your Business{" "}
                  <span className="underline decoration-primary decoration-4 underline-offset-8">Today</span>
                </h2>
                <p className="text-lg lg:text-xl text-on-surface/70 mb-12 max-w-2xl mx-auto font-body">
                  Get your business name, logo, website, and CAC certificate <span className="font-mono text-secondary font-bold"> — starting from ₦40,000</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="https://wa.me/2348163128234?text=I want to start my business now" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <button className="w-full bg-primary text-white hover:bg-primary/90 h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase transition-all shadow-xl shadow-primary/10">
                      Start My Business Now
                    </button>
                  </a>
                  <a href="/names" className="w-full sm:w-auto">
                    <button className="w-full bg-white text-on-surface border border-outline/20 hover:bg-surface-container-high h-14 px-10 rounded-xl font-mono text-xs tracking-widest uppercase transition-all">
                      Get Business Names
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
 
          {/* RIGHT SIDEBAR: More Stories */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>
              <MorePosts currentSlug={currentSlug} />
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
