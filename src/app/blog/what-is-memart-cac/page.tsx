import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "What is MEMART? Understanding Your Company's Constitution | FastCAC Blog",
  description: "The Memorandum and Articles of Association (MEMART) is the blueprint of your company. Learn why this document is critical for banking, tenders, and operations.",
  alternates: {
    canonical: "/blog/what-is-memart-cac",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/memart_meaning_thumbnail_1776001026087.png",
        width: 1200,
        height: 630,
        alt: "What is MEMART? Company Constitution Guide | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-26T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding MEMART for Nigerian Companies",
    description: "The complete guide to your company's Memorandum and Articles of Association.",
    images: ["/images/blog/memart_meaning_thumbnail_1776001026087.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "What is MEMART? Understanding Your Company's Constitution",
    "description": "A detailed look at the Memorandum and Articles of Association (MEMART) and its role in the life of a Nigerian Limited Liability Company.",
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
    "datePublished": "2026-04-26T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/what-is-memart-cac"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "memorandum", text: "1. The Memorandum of Association" },
    { id: "articles", text: "2. The Articles of Association" },
    { id: "why-important", text: "3. Why MEMART Matters for Business" },
    { id: "customization", text: "4. Can You Change Your MEMART?" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our experts help founders draft precise MEMARTs that protect shareholder interests and provide flexibility for corporate growth.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "What is MEMART?", item: "/blog/what-is-memart-cac" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="What is MEMART?"
        description="The ultimate blueprint of your company. Discover what's inside and why you should never lose this document."
        image="/images/blog/memart_meaning_thumbnail_1776001026087.png"
        date="April 26, 2026"
        readTime="7 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              When you download your registration documents from the CAC, you receive more than just a certificate. 
              The most voluminous and critical part of that download is the **MEMART**—shorthand for the 
              Memorandum and Articles of Association. Think of it as the &quot;Constitution&quot; or the 
              &quot;Owner&quot;s Manual&quot; for your Ltd company.
            </p>
          </section>

          <section id="memorandum" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. The <span className="text-primary italic">Memorandum</span> of Association
            </h2>
            <p className="text-lg">
              The Memorandum is the &quot;external&quot; facing document. It defines the company&apos;s relationship 
              with the outside world.
            </p>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Objects Clause:</strong> Exactly what business activities the company is allowed to do.</li>
              <li><strong>Name Clause:</strong> The official registered name.</li>
              <li><strong>Liability Clause:</strong> Confirms that the member&apos;s liability is limited to their shares.</li>
              <li><strong>Share Capital Clause:</strong> The total authorized capital (e.g., ₦1,000,000).</li>
            </ul>
          </section>
          
          <section id="articles" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The <span className="text-primary italic">Articles</span> of Association
            </h2>
            <p className="text-lg mb-6">
              While the Memorandum is about *what* the company does, the Articles are about *how* the company is run. 
              It is the internal rulebook.
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5">
              <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-primary">Key Contents:</h4>
              <ul className="space-y-3 text-sm text-on-surface/70">
                <li>• Procedures for appointing and removing Directors.</li>
                <li>• How to call and conduct Board and General Meetings.</li>
                <li>• Rights of different classes of shareholders.</li>
                <li>• How dividends are calculated and paid.</li>
                <li>• The use of the Company Seal.</li>
              </ul>
            </div>
          </section>

          <section id="why-important" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Why MEMART <span className="text-primary italic">Matters for Business</span>
            </h2>
            <p className="text-lg">
              You won&apos;t just read this when you register. You will need it for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h3 className="font-bold mb-2 italic">Banking & Loans</h3>
                <p className="text-sm text-on-surface/70">Banks check your &quot;Objects Clause&quot; to ensure your business activities match your bank use.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2 italic">Tenders & Contracts</h3>
                <p className="text-sm text-on-surface/70">Large corporations and government bodies require your MEMART to verify your legal capacity to sign contracts.</p>
              </div>
            </div>
          </section>

          <section id="customization" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. Can You <span className="text-primary italic">Change Your MEMART?</span>
            </h2>
            <p className="text-lg mb-6">
              Yes. As your business evolves, you may need to add new object clauses or change internal rules. 
              This is called a <strong>&quot;Special Resolution&quot;</strong>.
            </p>
            <div className="p-8 rounded-3xl bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 italic">Pro Tip:</h4>
              <p className="text-on-surface/70 leading-relaxed">
                If you are going into a regulated field (like FinTech or Travel), you must ensure your 
                Objects Clause is very specific. Generic objects may be rejected by post-CAC regulators.
              </p>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Your MEMART is the legal glue that holds your company together. Whether you are settling a 
              dispute between shareholders or proving your legitimacy to a foreign partner, this document 
              is your ultimate authority. Treat it with the respect it deserves.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
