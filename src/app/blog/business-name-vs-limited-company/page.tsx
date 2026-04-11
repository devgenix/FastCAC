import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Business Name vs. Limited Company: Which is Right for You in 2026? | FastCAC Blog",
  description: "Comparing the pros and cons of Business Names and LLCs in Nigeria under 2026 CAMA regulations. Learn about legal protection, costs, and tax implications.",
  alternates: {
    canonical: "/blog/business-name-vs-limited-company",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/business-name-vs-limited-company.png",
        width: 1200,
        height: 630,
        alt: "Business Name vs. Limited Company Comparison | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-11T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Name vs. Limited Company: Which is Right for You in 2026? | FastCAC Blog",
    description: "Legal protection vs. simplicity: Choose the right Nigerian business structure.",
    images: ["/images/blog/business-name-vs-limited-company.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Business Name vs. Limited Company: Which is Right for You in 2026?",
    "description": "Choosing the right business structure can cost you thousands in taxes and liability. Compare the pros and cons of Business Names and LLCs.",
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
    "datePublished": "2026-04-11T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/business-name-vs-limited-company"
    }
  };

  const tocItems = [
    { id: "introduction", text: "The Big Decision" },
    { id: "business-name", text: "1. The Business Name (Sole Proprietorship)" },
    { id: "limited-company", text: "2. The Private Limited Company (LTD)" },
    { id: "protection-simplicity", text: "3. Protection vs. Simplicity" },
    { id: "tax-implications", text: "4. Tax & Cost Analysis" },
    { id: "conclusion", text: "Which should you choose?" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Regulatory Compliance",
    bio: "Our legal experts specialize in CAMA 2020 compliance and helping Nigerian startups choose the most efficient path to registration.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "Business Name vs. Limited Company", item: "/blog/business-name-vs-limited-company" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Business Name vs. Limited Company: Which is Right for You in 2026?"
        description="Choosing the wrong structure can haunt your business for years. Here is everything you need to know about BN and LTD registrations."
        image="/images/blog/business-name-vs-limited-company.png"
        date="April 11, 2026"
        readTime="7 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Starting a business in Nigeria has never been easier, but the first hurdle is often the most confusing: should you register a Business Name or a Limited Liability Company? 
              Under the latest 2026 CAMA updates, the gap between these two has shifted, making it critical to understand your long-term goals before you hit "submit."
            </p>
          </section>
          
          <section id="business-name" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. The <span className="text-primary italic">Business Name</span>
            </h2>
            <p className="text-lg">
              A Business Name (BN) is the simplest form of legal business identity in Nigeria. It is perfect for freelancers, artisans, and small-scale traders who want to operate under a name other than their own.
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5">
              <ul className="space-y-4 text-on-surface/70">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Lower registration and filing costs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Easy to manage with minimal compliance requirements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-on-error font-bold">✗</span>
                  <span>No corporate veil—you are personally liable for business debts.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="limited-company" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The <span className="text-primary italic">Limited Company (LTD)</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              A Private Limited Company is a separate legal entity from its owners. In 2026, most serious tech startups and investment-ready businesses opt for this structure.
            </p>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              The biggest advantage is <strong>Limited Liability</strong>. If the business fails, your personal assets (home, car, savings) are generally protected from the business creditors.
            </p>
          </section>

          <section id="protection-simplicity" className="scroll-mt-32 space-y-8 text-center py-8">
            <img 
              src="/images/blog/structure-protection.png" 
              alt="Visualization of Legal Protection" 
              className="mx-auto rounded-3xl shadow-2xl mb-8 max-w-2xl w-full"
            />
            <p className="text-sm italic text-on-surface/40">The "Corporate Veil" in action: Protecting personal assets through an LTD structure.</p>
          </section>

          <section id="tax-implications" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. <span className="text-primary italic">Tax & Cost Analysis</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              While a Business Name is cheaper to register (starting at around ₦15k - ₦25k depending on service fees), a Limited Company offers more tax planning opportunities as you scale. Companies are subject to Companies Income Tax (CIT), while BN owners pay Personal Income Tax on all profits.
            </p>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Go with a <strong>Business Name</strong> if you are starting small and want to keep things simple. Choose a <strong>Limited Company</strong> if you plan to raise capital, hire many employees, or want maximum personal protection. At FastCAC, we can help you register either in just 5 days.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
