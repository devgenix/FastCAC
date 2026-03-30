import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CAC Registration Requirements in Nigeria: What Documents Do You Need in 2026?",
  description: "The mandatory documents required for business registration in Nigeria as of 2026. Includes NIN, digital signatures, and biometric verification details.",
  alternates: {
    canonical: "/blog/cac-registration-requirements",
  },
  openGraph: {
    images: [
      {
        url: "/blog-cac-requirements.png",
        width: 1200,
        height: 630,
        alt: "CAC Registration Requirements 2026 | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-25T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Registration Requirements 2026: What Documents Do You Need?",
    description: "Complete checklist for business registration in Nigeria.",
    images: ["/blog-cac-requirements.png"],
  },
};

export default function BlogPostPage() {
  // ... (keep jsonLd as is)
  const jsonLd = { /* ... */ }; 

  const tocItems = [
    { id: "business-names", text: "1. Business Name Requirements" },
    { id: "limited-companies", text: "2. Limited Company Requirements" },
    { id: "mandatory-id", text: "3. Valid Means of Identification" },
    { id: "digital-scans", text: "4. Digital Scan Guidelines" },
    { id: "common-mistakes", text: "5. Common Document Mistakes" },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "CAC Registration Requirements: What Documents Do You Need in 2026?", item: "/blog/cac-registration-requirements" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="CAC Registration Requirements: What Documents Do You Need in 2026?"
        description="A definitive checklist of every document and piece of information required to successfully register your business with the Corporate Affairs Commission."
        image="/blog-cac-requirements.png"
        date="March 25, 2026"
        readTime="6 min read"
        tocItems={tocItems}
        author={{
          name: "FastCAC Legal",
          role: "Compliance Experts",
          bio: "Ensuring regulatory compliance for Nigerian startups for over a decade.",
          avatar: "/logo.png"
        }}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed">
              In 2026, the Corporate Affairs Commission (CAC) mandates a strictly digital submission process. 
              The success of your application depends entirely on the accuracy and quality of the documents 
              you provide. Below is the updated checklist for all business types.
            </p>
          </section>

          <section id="business-names" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">1. Business Name Requirements</h2>
            <p>For sole proprietorships or partnerships, you will need:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Proposed Name:</strong> Two unique name options for reservation.</li>
              <li><strong>Description:</strong> A brief summary of business activities.</li>
              <li><strong>Proprietor Details:</strong> Full name, date of birth, residential address, and phone number.</li>
              <li><strong>Valid ID:</strong> Digital scan of a government-issued ID (NIN is mandatory).</li>
              <li><strong>Passport Photo:</strong> Clear, recent digital photograph (white background recommended).</li>
              <li><strong>Digital Signature:</strong> A scan of your official signature on plain white paper.</li>
            </ul>
          </section>

          <section id="limited-companies" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">2. Limited Company Requirements</h2>
            <p>For a Private Limited Company (LTD), additional documents are required:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Memorandum & Articles of Association (MEMART):</strong> Outlining company governance.</li>
              <li><strong>Director/Shareholder Details:</strong> Similar to proprietor details for every director and shareholder.</li>
              <li><strong>Witness Signature:</strong> A digital scan of a witness's signature for the MEMART.</li>
              <li><strong>Share Allocation:</strong> A document showing how shares are distributed among owners.</li>
            </ul>
          </section>

          <section id="mandatory-id" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">3. Valid Means of Identification</h2>
            <p>
              As of 2026, the <strong>National Identification Number (NIN)</strong> is the primary source 
              of truth for the CAC. Other accepted IDs include:
            </p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li>International Passport (Digital data page scan).</li>
              <li>Driver's License (Plastic license scan).</li>
              <li>Voter’s Card (PVC).</li>
            </ul>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">Important Note:</h4>
              <p className="text-sm">The name on your CAC application MUST exactly match the name on your provided ID. Inconsistencies will lead to a "Query" and delay your application.</p>
            </div>
          </section>

          <section id="digital-scans" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">4. Digital Scan Guidelines</h2>
            <p>
              Bad quality scans are the #1 reason for registration delays. Ensure your scans meet these criteria:
            </p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Format:</strong> JPEG or PNG (PDF is often not accepted for photos/signatures).</li>
              <li><strong>Size:</strong> Less than 2MB per file.</li>
              <li><strong>Clarity:</strong> No glares, shadows, or cropped edges on IDs.</li>
            </ul>
          </section>

          <section id="common-mistakes" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">5. Common Document Mistakes</h2>
            <p>Avoid these common pitfalls to ensure 2026 approval:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li>Providing a P.O. Box instead of a physical office address.</li>
              <li>Scanned ID is expired.</li>
              <li>Proprietor is under 18 years old (unless other directors are adults).</li>
              <li>Nature of business is too vague (e.g., just "Business").</li>
            </ul>
          </section>

          <section id="ctas" className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-8 rounded-3xl bg-secondary/10">
              <h4 className="font-bold mb-2">Need a Name?</h4>
              <p className="text-sm mb-4 opacity-70">Check if your business name is available before you apply.</p>
              <Link href="/names" className="text-primary font-bold hover:underline">
                Explore Name Marketplace →
              </Link>
            </div>
            <div className="flex-1 p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold mb-2">Done With Research?</h4>
              <p className="text-sm mb-4 opacity-70">Let FastCAC handle the heavy lifting for you.</p>
              <Link href="/" className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold inline-block">
                Start Registration
              </Link>
            </div>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
