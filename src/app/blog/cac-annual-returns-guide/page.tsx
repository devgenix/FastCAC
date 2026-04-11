import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Annual Returns 101: Keep Your Business 'Active' in the CAC Database | FastCAC Blog",
  description: "A complete 2026 guide to filing CAC annual returns in Nigeria. Understand deadlines, penalties, and how to maintain an active status for your business.",
  alternates: {
    canonical: "/blog/cac-annual-returns-guide",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/cac-annual-returns-guide.png",
        width: 1200,
        height: 630,
        alt: "CAC Annual Returns Guide Nigeria | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-13T00:00:00.000Z",
    authors: ["FastCAC Compliance Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Returns 101: Keep Your Business 'Active' in the CAC Database | FastCAC Blog",
    description: "Don't let your business name be struck off. Learn how to file returns in 2026.",
    images: ["/images/blog/cac-annual-returns-guide.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Annual Returns 101: Keep Your Business 'Active' in the CAC Database",
    "description": "Don't let your business name be struck off. Learn how to file annual returns in 2026, the official deadlines, and the penalties for late filing.",
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
    "datePublished": "2026-04-13T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/cac-annual-returns-guide"
    }
  };

  const tocItems = [
    { id: "what-are-returns", text: "What are Annual Returns?" },
    { id: "deadlines", text: "1. Deadlines for BN and LTD" },
    { id: "penalties", text: "2. The Cost of Late Filing" },
    { id: "active-status", text: "3. Maintaining 'Active' Status" },
    { id: "how-to-file", text: "4. How to File (Step-by-Step)" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Compliance Team",
    role: "Secretarial Services",
    bio: "Our compliance team ensures that FastCAC clients stay ahead of regulatory deadlines, avoiding unnecessary fines and legal hurdles.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "Annual Returns Guide", item: "/blog/cac-annual-returns-guide" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Annual Returns 101: Keep Your Business 'Active' in the CAC Database"
        description="Many entrepreneurs mistakenly think registration is a one-time thing. Failing to file returns can lead to your business being delisted."
        image="/images/blog/cac-annual-returns-guide.png"
        date="April 13, 2026"
        readTime="5 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="what-are-returns" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Imagine searching for your business on the CAC Public Search portal and seeing it listed as "Inactive" or not finding it at all. 
              This is the reality for thousands of Nigerian businesses that neglect their Annual Returns. In 2026, the CAC has intensified its delisting process, making compliance more important than ever.
            </p>
          </section>
          
          <section id="deadlines" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. Deadlines for <span className="text-primary italic">BN and LTD</span>
            </h2>
            <p className="text-lg">
              Depending on your structure, your deadline might differ. For <strong>Business Names</strong>, filings must be done no later than the 30th of June every year. For <strong>Limited Companies</strong>, returns must be filed within 42 days of your Annual General Meeting (AGM).
            </p>
          </section>

          <section id="penalties" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The Cost of <span className="text-primary italic">Late Filing</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              The penalties for late filing increase the longer you wait. In 2026, failing to file on time can result in daily penalties that quickly exceed the original registration cost of the business itself.
            </p>
          </section>

          <section id="active-status" className="scroll-mt-32 space-y-8 text-center py-8">
            <img 
              src="/images/blog/compliance-calendar.png" 
              alt="Compliance Milestone Visualization" 
              className="mx-auto rounded-3xl shadow-2xl mb-8 max-w-2xl w-full"
            />
            <p className="text-sm italic text-on-surface/40">Keep your compliance nodes green: A consistent filing history is a trust signal for investors.</p>
          </section>

          <section id="how-to-file" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. How to <span className="text-primary italic">File (Step-by-Step)</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              Filing is done through the CAC Post-Incorporation portal. You'll need to prepare your financial statement (or a simple statement of affairs for smaller businesses) and pay the relevant fee. 
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5 space-y-4">
               <p className="font-bold">Step 1: Log in to the CAC Post-Incorporation portal.</p>
               <p className="font-bold">Step 2: Search for your entity and select "Annual Returns."</p>
               <p className="font-bold">Step 3: Upload your Statement of Affairs/Balance Sheet.</p>
               <p className="font-bold">Step 4: Pay the filing fee + processing fee.</p>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Don't treat your business like a one-night stand. Registration is just the beginning; maintenance is what keeps you in business. Reach out to the FastCAC compliance team if you'd like us to handle your filings for you!
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
