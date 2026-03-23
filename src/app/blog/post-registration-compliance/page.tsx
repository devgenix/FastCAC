import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

export const metadata: Metadata = {
  title: "Beyond CAC: The 2026 Post-Registration Compliance Checklist | FastCAC Blog",
  description: "You've got your CAC certificate—now what? Discover the 5 essential steps to keep your Nigerian business legal, from TIN and SCUML to corporate banking.",
  alternates: {
    canonical: "/blog/post-registration-compliance",
  },
  openGraph: {
    images: [
      {
        url: "/blog-compliance-guide.webp",
        width: 1200,
        height: 630,
        alt: "Beyond CAC: The 2026 Post-Registration Compliance Checklist | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-23T00:00:00.000Z",
    authors: ["FastCAC Compliance Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond CAC: The 2026 Post-Registration Compliance Checklist | FastCAC Blog",
    description: "Keep your Nigerian business legal with this 2026 compliance guide.",
    images: ["/blog-compliance-guide.webp"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond CAC: The 2026 Post-Registration Compliance Checklist",
    "description": "The essential guide to post-registration compliance for Nigerian businesses in 2026.",
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
    "datePublished": "2026-03-23T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/post-registration-compliance"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "tin-generation", text: "1. Tax Identification Number (TIN)" },
    { id: "scuml-registration", text: "2. SCUML Certification" },
    { id: "corporate-banking", text: "3. Corporate Bank Account" },
    { id: "annual-returns", text: "4. Annual Returns & Compliance" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Compliance Team",
    role: "Legal Strategy",
    bio: "Our compliance team ensures that Nigerian startups stay on the right side of the law, handling everything from tax to anti-money laundering regulations.",
    avatar: "", 
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="Beyond CAC: The 2026 Post-Registration Compliance Checklist"
        description="Your business is officially registered. Congratulations! But the journey to full legal compliance in Nigeria has just begun."
        image="/blog-compliance-guide.webp"
        date="March 23, 2026"
        readTime="7 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Holding your CAC certificate is a major milestone, but it's not the finish line. In 2026, 
              the Nigerian regulatory environment has become more integrated and digitally focused. 
              Failing to complete the 'post-registration' phase can lead to frozen bank accounts, 
              fines, and missed opportunities. Here is your definitive checklist to stay compliant.
            </p>
          </section>

          <section id="tin-generation" className="scroll-mt-32 space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
                1. Tax Identification Number <span className="text-primary italic">(TIN)</span>
              </h2>
            </div>
            <p className="text-lg text-on-surface/70">
              The good news: under the latest FIRS-CAC integration, most Limited Liability Companies 
              now receive their TIN automatically as part of the registration process. It is often printed 
              directly on the certificate.
            </p>
            <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/10">
              <h4 className="font-bold mb-2">Check Your Certificate</h4>
              <p className="text-sm">If your TIN isn't on the certificate (common for older registrations or Business Names), 
              you must apply via the FIRS Taxpromax portal using your RC or BN number.</p>
            </div>
          </section>

          <section id="scuml-registration" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. <span className="text-primary italic">SCUML</span> Certification
            </h2>
            <p className="text-lg">
              The Special Control Unit Against Money Laundering (SCUML) certificate is mandatory for 
              "Designated Non-Financial Businesses and Professions" (DNFBPs). This includes:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
              <li className="flex items-center gap-2 p-3 rounded-xl bg-surface-container/10 border border-outline/5">
                <span className="text-primary">✓</span> Real Estate & Construction
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-surface-container/10 border border-outline/5">
                <span className="text-primary">✓</span> Consultants & Law Firms
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-surface-container/10 border border-outline/5">
                <span className="text-primary">✓</span> Car Dealers & Jewelers
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-surface-container/10 border border-outline/5">
                <span className="text-primary">✓</span> Hotels & Casinos
              </li>
            </ul>
            <p className="text-on-surface/70 italic">
              Pro Tip: You cannot open a corporate bank account for these business types without a SCUML certificate.
            </p>
          </section>

          <section id="corporate-banking" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Corporate <span className="text-primary italic">Bank Account</span>
            </h2>
            <p className="text-lg">
              Never use your personal account for business transactions. In 2026, the CBN has 
              tightened rules on 'trading in personal accounts'. A corporate account builds trust 
              with clients and is essential for tax documentation.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="font-bold text-primary mb-4">What You'll Need:</h4>
              <ul className="space-y-3 text-on-surface/80">
                <li>• Certified True Copies of CAC documents</li>
                <li>• BVN/NIN of all Directors</li>
                <li>• Utility bill for the business address</li>
                <li>• SCUML Certificate (if applicable)</li>
              </ul>
            </div>
          </section>

          <section id="annual-returns" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. Annual Returns & <span className="text-primary italic">Compliance</span>
            </h2>
            <p className="text-lg">
              Maintaining an "Active" status on the CAC portal is vital. This is achieved by filing 
              Annual Returns every year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-lg">CAC Annual Returns</h4>
                <p className="text-sm text-on-surface/70">Due every year after the first year of registration. Keeps your status 'ACTIVE' so investors and banks can verify you.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg">FIRS Tax Returns</h4>
                <p className="text-sm text-on-surface/70">Required even if you haven't started full operations (Nil returns). Includes Companies Income Tax (CIT) and VAT.</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70 text-lg">
              Compliance isn't a one-time event; it's a culture. By checking these boxes early, 
              you protect your business from legal risks and position yourself for growth. 
              At FastCAC, we don't just register your business—we help you stay built to last.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
