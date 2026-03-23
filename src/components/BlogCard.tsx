"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

export function BlogCard({ post, priority = false }: { post: BlogPost, priority?: boolean }) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-outline/50 rounded-xl overflow-hidden shadow-sm transition-all duration-500"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={640}
          height={360}
          priority={priority}
          className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90"
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
        
        <div className="flex items-center gap-2 text-xs font-headline font-bold text-on-surface group-hover:text-primary transition-all duration-300">
          <span className="relative">
            Read Article 
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
}
