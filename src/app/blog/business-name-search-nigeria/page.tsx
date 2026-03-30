import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Name Search Nigeria: How to Check Availability in 2026",
  description: "Learn how to perform a CAC name search in Nigeria. Tips for choosing a unique business name and using the FastCAC availability tool.",
  alternates: {
    canonical: "/blog/business-name-search-nigeria",
  },
  openGraph: {
    images: [
      {
        url: "/blog-business-search.png",
        width: 1200,
        height: 630,
        alt: "Business Name Search Nigeria 2026 | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-25T00:00:00.000Z",
    authors: ["FastCAC Operations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Name Search Nigeria 2026: Check Availability Fast",
    description: "Your guide to finding the perfect, available business name.",
    images: ["/blog-business-search.png"],
  },
};

export default function BlogPostPage() {
  // ... (keep jsonLd as is)
  const jsonLd = { /* ... */ }; 

  const tocItems = [
    { id: "why-search", text: "1. Why You Must Search First" },
    { id: "cac-portal-search", text: "2. Using the CAC Public Search" },
    { id: "fastcac-search", text: "3. FastCAC Name Availability Tool" },
    { id: "naming-rules", text: "4. Prohibited & Restricted Names" },
    { id: "reservation-tips", text: "5. Tips for 100% Approval" },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "Business Name Search Nigeria: How to Check Availability in 2026", item: "/blog/business-name-search-nigeria" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Business Name Search Nigeria: How to Check Availability (2026)"
        description="Don't waste money on a rejected application. Learn how to verify your business name's availability before starting your CAC registration."
        image="/blog-business-search.png"
        date="March 25, 2026"
        readTime="4 min read"
        tocItems={tocItems}
        author={{
          name: "FastCAC Ops",
          role: "Registration Analysts",
          bio: "Processing thousands of name reservations every month.",
          avatar: "/logo.png"
        }}
      >
        <div className="space-y-12">
          <section id="why-search" className="scroll-mt-32">
            <p className="text-xl leading-relaxed">
              Before you spend a single Naira on CAC registration, you must ensure your chosen name isn't 
              already taken. 2026 has seen a surge in new registrations, making unique names harder to find. 
              Searching first is the only way to avoid rejection and "Query" delays.
            </p>
          </section>

          <section id="cac-portal-search" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">1. Using the CAC Public Search</h2>
            <p>The CAC provides a public search portal that allows you to see existing companies:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li>Visit the <strong>CAC Public Search</strong> website.</li>
              <li>Enter your proposed name in the search bar.</li>
              <li>If matches appear, your name is likely unavailable.</li>
              <li>Note that "similar" names can also be rejected.</li>
            </ul>
          </section>

          <section id="fastcac-search" className="scroll-mt-32 space-y-6 bg-secondary/5 p-8 rounded-3xl border border-secondary/10">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">2. FastCAC Name Availability Tool</h2>
            <p>
              The official portal can be slow or technical. We've built a <strong>Names Marketplace</strong> where 
              you can browse pre-vetted or trending business name ideas.
            </p>
            <div className="pt-4">
              <Link href="/names" className="px-6 py-3 bg-secondary text-on-secondary rounded-full font-bold hover:scale-105 transition-transform inline-block">
                Check Availability Tool →
              </Link>
            </div>
          </section>

          <section id="naming-rules" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">3. Prohibited & Restricted Names</h2>
            <p>In 2026, the CAC continues to restrict certain words unless specialized permission is granted:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Prohibited:</strong> Identical names, offensive words, or names suggesting government patronage (e.g., "National", "Federal").</li>
              <li><strong>Restricted:</strong> Words like "Chamber of Commerce", "Group", "Holding", and "Foundation" require special approval.</li>
            </ul>
          </section>

          <section id="reservation-tips" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">4. Tips for 100% Approval</h2>
            <p>Use these strategies to ensure your name reservation is approved the first time:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Be Unique:</strong> Add a prefix or suffix that makes the name distinct (e.g., "Lagos Green Logistics" instead of just "Green Logistics").</li>
              <li><strong>Two Options:</strong> Always provide two distinct name options in your reservation request.</li>
              <li><strong>Check Domain Names:</strong> Ensure the .com or .ng domain is also available for your brand.</li>
            </ul>
          </section>

          <section id="ctas" className="flex flex-col md:flex-row gap-6 border-t border-primary/10 pt-12">
            <div className="flex-1">
              <h4 className="font-bold mb-2">Done searching?</h4>
              <p className="text-sm opacity-70 mb-4">You've found the perfect name. Now let's make it legal.</p>
              <Link href="/" className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold inline-block">
                Start Registration
              </Link>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-2">Need Inspiration?</h4>
              <p className="text-sm opacity-70 mb-4">Browse our curated list of available business names.</p>
              <Link href="/names" className="text-primary font-bold hover:underline">
                Explore Name Marketplace →
              </Link>
            </div>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
