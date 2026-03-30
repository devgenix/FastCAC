import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Everything You Need to Know About CAC Registration | FastCAC Blog",
  description: "The definitive 2026 guide to CAC registration in Nigeria. Learn about CAMA 2020 compliance, new fee schedules, and automatic TIN generation.",
  alternates: {
    canonical: "/blog/cac-registration-guide",
  },
  openGraph: {
    images: [
      {
        url: "/blog-cac-guide.webp",
        width: 1200,
        height: 630,
        alt: "Everything You Need to Know About CAC Registration | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-21T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything You Need to Know About CAC Registration | FastCAC Blog",
    description: "Complete guide to CAC registration in Nigeria.",
    images: ["/blog-cac-guide.webp"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Everything You Need to Know About CAC Registration",
    "description": "The definitive 2026 guide to CAC registration in Nigeria. Learn about CAMA 2020 compliance, new fee schedules, and automatic TIN generation.",
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
    "datePublished": "2026-03-21T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/cac-registration-guide"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "cama-2020", text: "1. CAMA 2020 Updates" },
    { id: "requirements", text: "2. 2026 Requirements" },
    { id: "fee-schedule", text: "3. Current Fee Schedule" },
    { id: "compliance", text: "4. Compliance & PoS Rules" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our legal team specializes in Nigerian corporate law and has helped thousands of businesses register with the CAC efficiently.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "Everything You Need to Know About CAC Registration", item: "/blog/cac-registration-guide" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Everything You Need to Know About CAC Registration"
        description="The definitive 2026 guide to legalizing your business in Nigeria under the latest CAMA regulations."
        image="/blog-cac-guide.webp"
        date="March 21, 2026"
        readTime="8 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              As of March 2026, registering with the Corporate Affairs Commission (CAC) is no longer 
              just a &quot;good idea&quot;—it&apos;s a critical legal requirement for anyone doing business in Nigeria. 
              With the recent enforcement of registration for all PoS operators and the full implementation 
              of the Companies and Allied Matters Act (CAMA) 2020, the landscape has changed.
            </p>
          </section>

          <section id="cama-2020" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. CAMA 2020 <span className="text-primary italic">Updates</span>
            </h2>
            <p className="text-lg">
              The CAMA 2020 has simplified business for small entrepreneurs. Key features include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Single-Member Companies:</strong> You can now register a private company with just one person.</li>
              <li><strong>PSC Disclosure:</strong> Mandatory disclosure of Persons with Significant Control (PSC) ensures transparency.</li>
              <li><strong>Common Seals:</strong> No longer mandatory for companies, simplifying document execution.</li>
            </ul>
          </section>
          
          <section id="requirements" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. 2026 <span className="text-primary italic">Requirements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Biometric Verification</h3>
                <p className="text-sm text-on-surface/70">NIN is now mandatory for all directors and proprietors.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Digital Address</h3>
                <p className="text-sm text-on-surface/70">A verifiable physical address with digital mapping details.</p>
              </div>
            </div>
            <p className="text-on-surface/70 leading-relaxed italic">
              Note: Upon registration, your Tax Identification Number (TIN) is now automatically generated 
              and included on your certificate.
            </p>
          </section>

          <section id="fee-schedule" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Current <span className="text-primary italic">Fee Schedule</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              Effective late 2025, the CAC updated its fee structure. For a standard <strong>Business Name</strong>, 
              the registration fee is now <strong>₦20,000</strong>. Private Limited Companies (LTD) start 
              at higher tiers depending on shared capital (minimum ₦100,000 shared capital for local owners).
            </p>
          </section>

          <section id="compliance" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">4. Compliance & the PoS Mandate</h2>
            <p className="text-lg mb-6">
              The Jan 1, 2026 deadline for all fintech agents and PoS operators to register is now in full force. 
              Operating without a CAC certificate can lead to account freezes and legal penalties.
            </p>
            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 italic">Don&apos;t Forget Annual Returns!</h4>
              <p className="text-on-surface/70 leading-relaxed">
                Registration is just the start. Every registered business must file Annual Returns (starting at ₦5,000/year for business names) 
                to maintain an &quot;Active&quot; status on the CAC public search portal.
              </p>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Don&apos;t leave your business in the shadows. Get registered today and start building on a solid legal foundation.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
