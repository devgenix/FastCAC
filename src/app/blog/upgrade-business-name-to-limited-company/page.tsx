import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How to Upgrade from Business Name to Limited Liability Company (Ltd) | FastCAC Blog",
  description: "Growing beyond a sole proprietorship? Learn the step-by-step process of upgrading your business structure for tenders, investment, and limited liability.",
  alternates: {
    canonical: "/blog/upgrade-business-name-to-limited-company",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/upgrade_to_ltd_thumbnail_1776000372562.png",
        width: 1200,
        height: 630,
        alt: "Upgrading from Business Name to Ltd Company | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-22T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrading Your Nigerian Business: BN to Ltd",
    description: "The complete 2026 guide to transitioning from a Business Name to a Limited Company.",
    images: ["/images/blog/upgrade_to_ltd_thumbnail_1776000372562.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Upgrade from Business Name to Limited Liability Company (Ltd)",
    "description": "The strategic move from a Business Name to an Ltd company. Discover the benefits, the costs, and the exact CAC conversion process.",
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
    "datePublished": "2026-04-22T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/upgrade-business-name-to-limited-company"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "why-upgrade", text: "1. Why Scale Your Structure?" },
    { id: "conversion", text: "2. The Conversion Process" },
    { id: "naming", text: "3. Keeping Your Brand Name" },
    { id: "cost", text: "4. Cost and Timeline" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "We help small businesses scale into corporate giants by managing complex structural transitions and legal re-classification.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "How to Upgrade from Business Name to Ltd", item: "/blog/upgrade-business-name-to-limited-company" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How to Upgrade from Business Name to Ltd"
        description="Transitioning from a sole proprietorship to a corporate entity to unlock institutional growth."
        image="/images/blog/upgrade_to_ltd_thumbnail_1776000372562.png"
        date="April 22, 2026"
        readTime="6 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Starting small is a virtue, but staying small can be a liability. 
              As your business begins bidding for government tenders, seeking venture capital, 
              or operating in high-risk sectors, the &quot;Business Name&quot; structure becomes 
              a bottleneck. Upgrading to a Limited Liability Company (Ltd) is the logical 
              next step in your entrepreneurial journey.
            </p>
          </section>

          <section id="why-upgrade" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. Why <span className="text-primary italic">Scale Your Structure?</span>
            </h2>
            <p className="text-lg leading-relaxed">
              While a Business Name (Enterprise) is cheap to start, it offers no separation between the 
              owner and the business. Here is why successful owners upgrade:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Limited Liability</h3>
                <p className="text-sm text-on-surface/70">Protect your personal assets (cars, house) from business debts and lawsuits.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Investor Ready</h3>
                <p className="text-sm text-on-surface/70">Institutional investors and banks only deal with Ltd companies when issuing equity or large loans.</p>
              </div>
            </div>
          </section>
          
          <section id="conversion" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The <span className="text-primary italic">Conversion</span> Process
            </h2>
            <p className="text-lg mb-6">
              Legally, you are not simply changing a name; you are &quot;dissolving&quot; a sole proprietorship 
              to &quot;incorporate&quot; a separate legal person.
            </p>
            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 italic">The &quot;Consent&quot; Method</h4>
              <p className="text-on-surface/70 leading-relaxed">
                You must apply to the CAC for <strong>Consent</strong> to use the same name as your 
                existing Business Name. Once granted, you register the Ltd and then formally &quot;Cessate&quot; 
                (close) the old Business Name to ensure there is no name duplication.
              </p>
            </div>
          </section>

          <section id="naming" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Keeping Your <span className="text-primary italic">Brand Name</span>
            </h2>
            <p className="text-lg">
              Most founders want to keep their existing brand. If your business is &quot;Ade Ventures,&quot; 
              you will reserve the name &quot;Ade Limited.&quot; 
            </p>
            <p className="text-on-surface/70 italic border-l-4 border-primary pl-4">
              Note: You cannot own both &quot;Ade Ventures&quot; and &quot;Ade Limited&quot; simultaneously for the 
              same business activity. One must succeed the other.
            </p>
          </section>

          <section id="cost" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. Cost and <span className="text-primary italic">Timeline</span>
            </h2>
            <p className="text-lg">
              An upgrade typically costs more than a fresh registration because it involves name reservation, 
              incorporation, stamp duties on share capital, and the cessation of the old business name.
            </p>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Cost:</strong> Budget between ₦100,000 to ₦150,000 depending on share capital.</li>
              <li><strong>Timeline:</strong> The entire process takes about 7 to 14 business days.</li>
              <li><strong>Required:</strong> All existing annual returns for the old Business Name must be up to date.</li>
            </ul>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Upgrading to an Ltd company is a badge of maturity for any Nigerian business. It signals to 
              clients and partners that you are serious about scale and professional compliance. 
              Don&apos;t let a sole proprietorship structure limit your potential.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
