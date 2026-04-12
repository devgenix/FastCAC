import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog";

interface MorePostsProps {
  currentSlug: string;
}

export function MorePosts({ currentSlug }: MorePostsProps) {
  // Take top 3 most recent posts excluding current one
  const recommendedPosts = BLOG_POSTS
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);

  if (recommendedPosts.length === 0) return null;

  return (
    <section className="mt-16 space-y-8 animate-fade-up [animation-delay:800ms]">
      <div className="flex items-center gap-4">
        <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase whitespace-nowrap">
          More <span className="text-primary">Stories</span>
        </h3>
        <div className="h-[2px] flex-grow bg-outline/10"></div>
      </div>

      <div className="grid gap-8">
        {recommendedPosts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group block space-y-4"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-outline/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:-translate-y-1">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface/50">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-outline" />
                <span>{post.category}</span>
              </div>
              <h4 className="font-headline font-black italic text-base leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>

      <Link 
        href="/blog"
        className="block w-full py-4 rounded-xl border border-outline/20 text-center font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-surface-container-high transition-all"
      >
        View Archive
      </Link>
    </section>
  );
}
