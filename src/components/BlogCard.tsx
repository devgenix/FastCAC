"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-outline/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={640}
          height={360}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-mono font-bold text-primary uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-bold text-on-surface/65 uppercase tracking-[0.2em]">
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-on-surface/20" />
          <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em]">
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-2xl font-headline font-black italic text-on-surface leading-tight mb-4 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-on-surface/70 font-body text-sm leading-relaxed line-clamp-3 mb-8 flex-1">
          {post.description}
        </p>
        
        <div className="flex items-center gap-2 text-xs font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
          Read Article 
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
