import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Group of Companies vs. Holding Company: Nigeria Guide | FastCAC Blog",
  description: "Scaling into multiple industries? Learn the differences between a Group structure and a Holding Company in Nigeria under CAMA 2020.",
  alternates: {
    canonical: "/blog/group-of-companies-vs-holding-company",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/group_vs_holding_thumbnail_1776001066293.png",
        width: 1200,
        height: 630,
        alt: "Group vs Holding Company Structure in Nigeria | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-27T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Group vs Holding Company: Which Scaling Structure?",
    description: "Detailed comparison of corporate scaling structures in Nigeria.",
    images: ["/images/blog/group_vs_holding_thumbnail_1776001066293.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Group of Companies vs. Holding Company: Which Structure Fits Your Vision?",
    "description": "A comprehensive guide on transition to parent-subsidiary structures in Nigeria. Requirements for 'Group' and 'Holding' company names.",
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
    "datePublished": "2026-04-27T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/group-of-companies-vs-holding-company"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "holding", text: "1. The Holding Company (HoldCo)" },
    { id: "group", text: "2. The Group of Companies" },
    { id: "comparison", text: "3. Major Differences at a Glance" },
    { id: "which-one", text: "4. Which One Should You Choose?" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our experts help multi-industry conglomerates structure their parent entities to maximize tax efficiency and operational control.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "Group vs. Holding Company", item: "/blog/group-of-companies-vs-holding-company" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Group vs. Holding Company"
        description="Ready to build an empire? Understanding the best structure for managing multiple businesses under one parent."
        image="/images/blog/group_vs_holding_thumbnail_1776001066293.png"
        date="April 27, 2026"
        readTime="8 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              As a founder, success often leads to diversification. You might start in retail, 
              then move into logistics, and eventually finance. Managing these separate businesses 
              under one &quot;Umbrella&quot; is where the choice between a <strong>Holding Company</strong> 
              and a <strong>Group of Companies</strong> becomes critical. In Nigeria, the CAC strictly 
              regulates these terms.
            </p>
          </section>

          <section id="holding" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. The <span className="text-primary italic">Holding Company</span> (HoldCo)
            </h2>
            <p className="text-lg leading-relaxed">
              A Holding Company is a parent entity created primarily to own controlling shares (more than 50%) 
              in other companies (subsidiaries). It usually doesn&apos;t produce goods or services itself.
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5">
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">CAC Requirements:</h4>
              <ul className="space-y-3 text-sm text-on-surface/70">
                <li>• At least <strong>two (2) existing subsidiary companies</strong> already registered with CAC.</li>
                <li>• The parent must own more than 50% shares in each.</li>
                <li>• Formal consent from the Registrar General to use the word &quot;Holding&quot;.</li>
              </ul>
            </div>
          </section>
          
          <section id="group" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The <span className="text-primary italic">Group</span> of Companies
            </h2>
            <p className="text-lg mb-6">
              A Group of Companies is an umbrella structure for three or more associated companies that 
              share common shareholders or ownership. It acts as a collective brand identity.
            </p>
            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 italic">Key Requirements:</h4>
              <p className="text-on-surface/70 leading-relaxed">
                You must have at least <strong>three (3) or more associated companies</strong>. 
                The share capital of the parent must not be less than the highest share capital 
                among the associated companies.
              </p>
            </div>
          </section>

          <section id="comparison" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Major <span className="text-primary italic">Differences</span> at a Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-outline/10 text-sm">
                <thead>
                  <tr className="bg-surface-container/50">
                    <th className="p-4 border border-outline/10 font-bold">Feature</th>
                    <th className="p-4 border border-outline/10 font-bold">Holding Company</th>
                    <th className="p-4 border border-outline/10 font-bold">Group of Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-outline/10 font-bold">Min. Entities</td>
                    <td className="p-4 border border-outline/10">2 Subsidiaries</td>
                    <td className="p-4 border border-outline/10">3 Associates</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-outline/10 font-bold">Ownership</td>
                    <td className="p-4 border border-outline/10">Parent owns the shares</td>
                    <td className="p-4 border border-outline/10">Common shareholders</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-outline/10 font-bold">Main Focus</td>
                    <td className="p-4 border border-outline/10">Management & Investment</td>
                    <td className="p-4 border border-outline/10">Consolidation & Branding</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="which-one" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. Which One <span className="text-primary italic">Should You Choose?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Choose Holding If:</h3>
                <p className="text-sm text-on-surface/70">You want to separate liability cleanly between departments or are preparing for a stock market listing / VC investment.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Choose Group If:</h3>
                <p className="text-sm text-on-surface/70">You have 3+ separate businesses and want to build a unified, powerful conglomerate brand across different markets.</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Structuring your business empire correctly early can save you millions in future tax 
              liabilities and legal restructurings. Whether you go with a &quot;Holding&quot; or 
              a &quot;Group&quot; structure, ensuring each entity is fully compliant with CAC 
              annual returns is the foundation of your success.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
