import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How to Register a Travel Agency with CAC (₦30M Share Capital) | FastCAC Blog",
  description: "Complete guide to travel agency registration in Nigeria. Learn about the ₦30 million share capital requirement, NCAA licensing, and corporate setup.",
  alternates: {
    canonical: "/blog/registering-travel-agency-nigeria",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/travel_agency_registration_thumbnail_1776000306412.png",
        width: 1200,
        height: 630,
        alt: "Registering a Travel Agency in Nigeria | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-20T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register a Travel Agency in Nigeria",
    description: "₦30 Million share capital and NCAA licensing guide for travel agencies.",
    images: ["/images/blog/travel_agency_registration_thumbnail_1776000306412.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Register a Travel Agency with CAC (₦30M Share Capital)",
    "description": "Complete guide to travel agency registration in Nigeria. Learn about the ₦30 million share capital requirement, NCAA licensing, and corporate setup.",
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
    "datePublished": "2026-04-20T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/registering-travel-agency-nigeria"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "structure", text: "1. The Right Business Structure" },
    { id: "share-capital", text: "2. The ₦30 Million Share Capital Requirement" },
    { id: "requirements", text: "3. Necessary Documents" },
    { id: "licenses", text: "4. NCAA and NANTA Licensing" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our team specializes in regulated industry registrations, ensuring travel agencies and schools meet high-entry legal requirements.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "How to Register a Travel Agency with CAC", item: "/blog/registering-travel-agency-nigeria" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How to Register a Travel Agency with CAC"
        description="Understanding the ₦30 Million share capital requirement and the licensing path for Nigerian travel entrepreneurs."
        image="/images/blog/travel_agency_registration_thumbnail_1776000306412.png"
        date="April 20, 2026"
        readTime="7 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Opening a travel agency in Nigeria is one of the most exciting entries into the tourism sector, 
              but it is also one of the most strictly regulated. Unlike a neighborhood retail shop, 
              a travel agency requires significant financial commitment and multiple regulatory permits 
              even before the first ticket is sold.
            </p>
          </section>

          <section id="structure" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. The Right <span className="text-primary italic">Business Structure</span>
            </h2>
            <p className="text-lg">
              The first and most important rule: You <strong>cannot</strong> register a travel agency as a Business Name (Sole Proprietorship). 
              The Corporate Affairs Commission (CAC) mandates that all travel and tour operations must be registered as a 
              <strong> Private Limited Liability Company (Ltd)</strong>.
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5">
              <p className="italic text-on-surface/70">
                &quot;A corporate structure ensures perpetual succession and the legal weight required to apply for 
                NCAA licenses and airline ticketing partnerships.&quot;
              </p>
            </div>
          </section>
          
          <section id="share-capital" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The ₦30 Million <span className="text-primary italic">Share Capital</span> Requirement
            </h2>
            <p className="text-lg mb-6">
              As of 2026, the minimum authorized share capital for a travel agency is <strong>₦30,000,000 (Thirty Million Naira)</strong>. 
              If your company has foreign shareholders, this requirement jumps to <strong>₦100,000,000</strong>.
            </p>
            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 italic">Do I need the cash now?</h4>
              <p className="text-on-surface/70 leading-relaxed">
                No. Authorized share capital is the value of shares the company is allowed to issue. You do not need 
                to have ₦30m in your bank account to *register* with the CAC, but you must pay the filing fees and 
                stamp duties based on this ₦30m valuation.
              </p>
            </div>
          </section>

          <section id="requirements" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Necessary <span className="text-primary italic">Documents</span>
            </h2>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Min 2 Directors:</strong> Identification (NIN/Passport) for all directors.</li>
              <li><strong>MEMART:</strong> Memorandum of Association specifically stating &quot;Travel and Tour Operations&quot; as primary objects.</li>
              <li><strong>Office Address:</strong> A physical, verifiable address is mandatory.</li>
              <li><strong>Shareholders:</strong> Detailed list of share distribution among subscribers.</li>
            </ul>
          </section>

          <section id="licenses" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. NCAA and <span className="text-primary italic">NANTA</span> Licensing
            </h2>
            <p className="text-lg">
              A CAC certificate is just your &quot;birth certificate.&quot; To operate, you need your &quot;driver&apos;s license&quot;:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">NCAA Approval</h3>
                <p className="text-sm text-on-surface/70">The Nigerian Civil Aviation Authority must approve your agency for ticketing.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">IATA/NANTA</h3>
                <p className="text-sm text-on-surface/70">Joining NANTA and becoming IATA-certified allows you to issue global flight tickets directly.</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              The road to a successful travel agency starts with a robust corporate registration. By meeting the ₦30m 
              share capital requirement early, you set your business up for high-level aviation partnerships and 
              long-term growth.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
