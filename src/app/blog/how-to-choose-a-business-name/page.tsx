import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

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

  const tocItems = [
    { id: "the-importance", text: "The Importance of Naming" },
    { id: "top-tips", text: "Our Top Tips" },
    { id: "simple", text: "1. Keep it Simple" },
    { id: "availability", text: "2. Check Availability" },
    { id: "long-term", text: "3. Think Long-term" },
    { id: "unique", text: "4. Make it Unique" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Branding Team",
    role: "Expert Advisory",
    bio: "We help thousands of entrepreneurs across Nigeria launch their dreams. Our team specializes in regulatory compliance and brand identity.",
    avatar: "", // Initials will be used
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How to Choose a Great Business Name"
        description="Excerpts and tips from our branding experts to help you build a lasting identity for your next venture."
        image="/images/blog/how-to-choose-a-business-name.png"
        date="March 21, 2024"
        readTime="5 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="the-importance" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Choosing a name is the first step toward building a brand. It's more than just a label; 
              it's the foundation of your business identity and the first thing your customers will interact with.
              A strong name conveys your values, sets your aesthetic tone, and establishes immediate credibility.
            </p>
          </section>
          
          <section id="top-tips" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              Our Top Tips for <span className="text-primary italic">Success</span>
            </h2>
            <p className="text-lg">
              Navigating the naming process can be daunting. Here are four essential principles from our team 
              at FastCAC to guide your decision-making and ensure your brand stands out from day one:
            </p>

            <div className="space-y-12 mt-12">
              <div id="simple" className="scroll-mt-32 p-8 rounded-3xl bg-surface-container/20 border border-outline/5 transition-all hover:bg-surface-container/40">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 italic">1. Keep it Simple</h3>
                <p className="text-on-surface/70 leading-relaxed">
                  Your business name should be easy to spell, easy to remember, and easy to say. 
                  Complexity creates friction. If people can't pronounce it, they'll struggle to recommend it, 
                  and word-of-mouth is the most powerful marketing tool you have. Think of brands like Apple, Tesla, or Zoom.
                </p>
              </div>

              <div id="availability" className="scroll-mt-32 p-8 rounded-3xl bg-surface-container/20 border border-outline/5 transition-all hover:bg-surface-container/40">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 italic">2. Check for Availability</h3>
                <p className="text-on-surface/70 leading-relaxed">
                  Ensure the name isn't already taken by another company in Nigeria (via CAC) or has an unavailable domain. 
                  Consistency across your social media handles and web address is key for a professional digital presence.
                  We recommend checking availability across @handles before committing.
                </p>
              </div>

              <div id="long-term" className="scroll-mt-32 p-8 rounded-3xl bg-surface-container/20 border border-outline/5 transition-all hover:bg-surface-container/40">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 italic">3. Think Long-term</h3>
                <p className="text-on-surface/70 leading-relaxed">
                  Don't pick something too narrow if you plan to expand your services later. 
                  "Lagos Web Design" might feel right today, but it could limit you if you expansion to digital marketing or other cities.
                  Pick a name that can grow with your long-term vision and scale effortlessly.
                </p>
              </div>

              <div id="unique" className="scroll-mt-32 p-8 rounded-3xl bg-surface-container/20 border border-outline/5 transition-all hover:bg-surface-container/40">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 italic">4. Make it Unique</h3>
                <p className="text-on-surface/70 leading-relaxed">
                  Avoid generic names that blend in with competitors. You want a name that stands out in a crowded marketplace.
                  Abstract names often work well because they allow you to define the brand's meaning entirely 
                  (like Amazon or Starbucks), rather than relying on descriptive words.
                </p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Your name is the starting point of your entrepreneurial journey. Take your time, test your ideas 
              with friends and potential customers, and once you've found the perfect fit, don't wait to lock it in.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
