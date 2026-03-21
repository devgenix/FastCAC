import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

export const metadata: Metadata = {
  title: "Everything You Need to Know About CAC Registration | FastCAC Blog",
  description: "A complete guide on the requirements, process, and benefits of registering your business with the Corporate Affairs Commission.",
  alternates: {
    canonical: "/blog/cac-registration-guide",
  },
  openGraph: {
    title: "Everything You Need to Know About CAC Registration | FastCAC",
    description: "Complete guide to CAC registration in Nigeria. Requirements, process, and benefits explained.",
    url: "https://fastcac.com/blog/cac-registration-guide",
    siteName: "FastCAC",
    type: "article",
    publishedTime: "2024-03-20T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything You Need to Know About CAC Registration | FastCAC Blog",
    description: "Complete guide to CAC registration in Nigeria.",
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Everything You Need to Know About CAC Registration",
    "description": "A complete guide on the requirements, process, and benefits of registering your business with the Corporate Affairs Commission.",
    "author": {
      "@type": "Organization",
      "name": "FastCAC",
      "url": "https://fastcac.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastCAC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastcac.com/logo.png"
      }
    },
    "datePublished": "2024-03-20T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/cac-registration-guide"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "requirements", text: "Registration Requirements" },
    { id: "benefits", text: "Benefits of Registration" },
    { id: "process", text: "The FastCAC Process" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our legal team specializes in Nigerian corporate law and has helped thousands of businesses register with the CAC efficiently.",
    avatar: "", // Initials will be used
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Everything You Need to Know About CAC Registration"
        description="A comprehensive guide to navigating the Corporate Affairs Commission registration process in Nigeria."
        image="/blog-cac-guide.webp"
        date="March 20, 2024"
        readTime="8 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Registering your business with the Corporate Affairs Commission (CAC) is the most critical 
              step for any entrepreneur in Nigeria. It transforms your idea into a legitimate legal entity, 
              opening doors to banking, contracts, and investor trust.
            </p>
          </section>
          
          <section id="requirements" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              Registration <span className="text-primary italic">Requirements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Valid ID</h3>
                <p className="text-sm text-on-surface/70">NIN, International Passport, or Voter's Card.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-sm text-on-surface/70">A physical business address in Nigeria.</p>
              </div>
            </div>
          </section>

          <section id="benefits" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Benefits</h2>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>Open a corporate bank account</li>
              <li>Apply for government grants and loans</li>
              <li>Brand protection under Nigerian law</li>
              <li>Enhanced credibility with global partners</li>
            </ul>
          </section>

          <section id="process" className="scroll-mt-32">
             <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">The FastCAC Process</h2>
             <p className="leading-relaxed text-on-surface/70">
               At FastCAC, we simplify the entire journey. From name reservation to final certificate delivery, 
               our automated system and legal experts handle the heavy lifting so you can focus on building your business.
             </p>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Don't leave your business in the shadows. Get registered today and start building on a solid legal foundation.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
