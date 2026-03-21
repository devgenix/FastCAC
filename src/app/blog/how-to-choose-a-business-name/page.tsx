import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose a Great Business Name | FastCAC Blog",
  description: "Choosing a name is the first step toward building a brand. Learn how to pick a name that is simple, unique, and long-term from the team at FastCAC.",
  alternates: {
    canonical: "https://fastcac.com/blog/how-to-choose-a-business-name",
  },
  openGraph: {
    title: "How to Choose a Great Business Name | FastCAC",
    description: "Expert branding tips on picking a business name that lasts. Simple, unique, and memorable strategies.",
    url: "https://fastcac.com/blog/how-to-choose-a-business-name",
    siteName: "FastCAC",
    type: "article",
    publishedTime: "2024-03-21T00:00:00.000Z",
    authors: ["FastCAC Branding Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Great Business Name | FastCAC Blog",
    description: "Expert tips on picking a business name that lasts. Simple, unique, and memorable strategies.",
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Choose a Great Business Name",
    "description": "Choosing a name is the first step toward building a brand. Learn how to pick a name that is simple, unique, and long-term from the team at FastCAC.",
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
    "datePublished": "2024-03-21T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/how-to-choose-a-business-name"
    }
  };

  return (
    <div className="section-py min-h-[70vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-[800px] section-px mx-auto">
        <header className="mb-12 text-center">
          <div className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">Naming Guide</div>
          <h1 className="text-4xl lg:text-6xl font-headline font-black italic tracking-tight leading-[1.1] mb-6">
            How to Choose a <br />
            <span className="text-primary italic">Great Business Name</span>
          </h1>
          <p className="text-xl text-on-surface/60 font-body">
            Excerpts and tips from our branding experts to help you build a lasting identity.
          </p>
        </header>

        <div className="prose prose-lg font-body text-on-surface/70 space-y-8">
          <p className="leading-relaxed">
            Choosing a name is the first step toward building a brand. It's more than just a label; 
            it's the foundation of your business identity and the first thing your customers will interact with.
          </p>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-headline font-bold text-on-surface italic">Our Top Tips</h2>
            <p>
              Here are a few essential tips from our team at FastCAC to guide your decision-making process:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Keep it Simple:</strong> Easy to spell, easy to remember, and easy to say. 
                If people can't pronounce it, they'll struggle to recommend it.
              </li>
              <li>
                <strong>Check for Availability:</strong> Ensure the name isn't already taken by another company or domain. 
                Consistency across your social media handles and web address is key.
              </li>
              <li>
                <strong>Think Long-term:</strong> Don't pick something too narrow if you plan to expand your services later. 
                Pick a name that can grow with your vision.
              </li>
              <li>
                <strong>Make it Unique:</strong> Avoid generic names that blend in with competitors. 
                You want a name that stands out in a crowded marketplace.
              </li>
            </ul>
          </div>

          <div className="bg-surface-container/50 p-8 rounded-2xl border border-outline/10 mt-12">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Ready to start?</h3>
            <p className="mb-6">
              Once you've found the perfect name, we can help you register it and get your business up and running in just 5 days.
            </p>
            <a 
              href="/names" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-headline font-bold hover:opacity-90 transition-opacity"
            >
              Browse Available Names
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
