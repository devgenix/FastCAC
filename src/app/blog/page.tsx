import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FastCAC Blog — Scaling Your Business in Nigeria",
  description: "Expert guides on branding, business registration, and scaling your startup in Nigeria from the team at FastCAC.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/blog-index-seo.png",
        width: 1200,
        height: 630,
        alt: "FastCAC Blog — Scaling Your Business in Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastCAC Blog — Scaling Your Business in Nigeria",
    description: "Expert guides on branding, business registration, and scaling your startup in Nigeria.",
    images: ["/images/blog/blog-index-seo.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-surface">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
        ]}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-48 lg:pb-32 bg-surface-container/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-[1320px] section-px mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-[2.5rem] lg:text-8xl font-headline font-black italic tracking-tighter leading-[1] mb-8">
              Grow Your <span className="text-primary italic">Business</span> Fast.
            </h1>
            <p className="text-xl lg:text-2xl text-on-surface/50 font-body leading-relaxed">
              Expert insights on registration, branding, and modern business setup in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="section-py relative z-10 -mt-20 lg:-mt-32">
        <div className="max-w-[1320px] section-px mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
