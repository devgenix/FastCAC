import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Register a Business Name in Nigeria: Step-by-Step 2026 Guide",
  description: "A complete walkthrough of the 2026 CAC registration process for business names. From name availability search to downloading your digital certificate.",
  alternates: {
    canonical: "/blog/how-to-register-a-business-name",
  },
  openGraph: {
    images: [
      {
        url: "/blog-how-to-register.png",
        width: 1200,
        height: 630,
        alt: "How to Register a Business Name in Nigeria | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-25T00:00:00.000Z",
    authors: ["FastCAC Content Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register a Business Name in Nigeria: Step-by-Step 2026 Guide",
    description: "Your complete guide to CAC registration in 2026.",
    images: ["/blog-how-to-register.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Register a Business Name in Nigeria: Step-by-Step 2026 Guide",
    "description": "Learn how to register your business name with CAC in 2026. Step-by-step guide from search to certificate.",
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
    "datePublished": "2026-03-25T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/how-to-register-a-business-name"
    }
  };

  const tocItems = [
    { id: "step-1", text: "1. Name Search" },
    { id: "step-2", text: "2. Account Creation" },
    { id: "step-3", text: "3. Application Details" },
    { id: "step-4", text: "4. Requirements Checklist" },
    { id: "step-5", text: "5. Fee Payment" },
    { id: "step-6", text: "6. Submission & Review" },
    { id: "step-7", text: "7. Certificate Download" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How to Register a Business Name in Nigeria: Step-by-Step 2026 Guide"
        description="The definitive walkthrough to legalizing your small business or startup under the latest 2026 CAC regulations."
        image="/blog-how-to-register.png"
        date="March 25, 2026"
        readTime="10 min read"
        tocItems={tocItems}
        author={{
          name: "FastCAC Team",
          role: "Registration Experts",
          bio: "Specialists in Nigerian corporate registration and branding for modern startups.",
          avatar: "/logo.png"
        }}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed">
              Registering a business name is the first step toward building a credible brand in Nigeria. 
              In 2026, the Corporate Affairs Commission (CAC) has made this process entirely digital through 
              their <strong>Company Registration Portal (CRP)</strong>. This guide breaks down the process 
              into seven simple steps.
            </p>
          </section>

          <section id="step-1" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">1. Public Name Search</h2>
            <p>
              Before spending money on a reservation, use the free <Link href="/names" className="text-primary underline">FastCAC Name Marketplace</Link> or 
              the CAC public search portal to see if your desired name is available. You should have at least 
              two unique names ready just in case your first choice is rejected.
            </p>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">Pro Tip:</h4>
              <p className="text-sm">Avoid generic names like "Global Ventures" or "Modern Services" as they are almost certainly taken or too common for approval.</p>
            </div>
          </section>

          <section id="step-2" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">2. Account Creation</h2>
            <p>
              Visit <a href="https://icrp.cac.gov.ng/" target="_blank" rel="noopener noreferrer" className="text-primary underline">icrp.cac.gov.ng</a> and 
              create an account. If you are registering as an individual (proprietor), you don't need a lawyer or accredited agent; 
              you can act as your own "Presenter."
            </p>
          </section>

          <section id="step-3" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">3. Application Details</h2>
            <p>
              Once logged in, navigate to "New Registration." You'll need to provide:
            </p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li>Nature of Business (e.g., General Contracts, Retail, ICT Services).</li>
              <li>A verifiable physical address in Nigeria.</li>
              <li>Proprietor details (Name, residential address).</li>
            </ul>
          </section>

          <section id="step-4" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">4. Requirements Checklist</h2>
            <p>
              For 2026, the CAC requires high-quality digital scans of:
            </p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li>A valid government-issued ID (International Passport, Driver’s License, or NIN Card).</li>
              <li>Passport photograph.</li>
              <li>Digital signature of the proprietor.</li>
            </ul>
            <p className="italic text-on-surface/60">
              Detailed requirements can be found in our <Link href="/blog/cac-registration-requirements" className="text-primary underline">2026 Requirements Guide</Link>.
            </p>
          </section>

          <section id="step-5" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">5. Fee Payment</h2>
            <p>
              As of 2026, the statutory filing fee for a Business Name is <strong>₦10,000</strong>. 
              However, when including name reservation (₦500) and Remita charges, the total cost 
              is approximately <strong>₦10,661.25</strong>. 
            </p>
            <p className="italic text-on-surface/60">
              Full cost transparency is available in our <Link href="/blog/cac-registration-cost" className="text-primary underline">2026 Fee Breakdown</Link>.
            </p>
          </section>

          <section id="step-6" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">6. Submission & Review</h2>
            <p>
              After payment, your application will be reviewed by a CAC registrar. 
              This usually takes between <strong>1 to 7 working days</strong>. 
              Check your dashboard daily for any "Queries" if the registrar needs more information.
            </p>
          </section>

          <section id="step-7" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">7. Certificate Download</h2>
            <p>
              Once approved, you can download your <strong>Certificate of Incorporation</strong> and 
              the <strong>Certified True Copy (CTC)</strong> of your business details directly from the portal. 
              Your <strong>Tax Identification Number (TIN)</strong> is now automatically generated 
              and included on the certificate!
            </p>
          </section>

          <section id="conclusion" className="scroll-mt-12 p-8 rounded-3xl bg-primary/10">
            <h2 className="text-2xl font-headline font-black italic mb-4">Ready to start?</h2>
            <p className="mb-6">
              Skip the manual stress and let FastCAC handle your full registration, logo, and website for one flat fee.
            </p>
            <Link href="/" className="inline-block px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-105 transition-transform">
              Get Started with FastCAC
            </Link>
          </section>

          <section className="border-t border-outline/10 pt-12">
            <h3 className="text-xl font-bold mb-4">Sources & Further Reading:</h3>
            <ul className="text-sm opacity-60 space-y-2">
              <li>Corporate Affairs Commission (CAC) Nigeria - <a href="https://cac.gov.ng" target="_blank" className="underline">cac.gov.ng</a></li>
              <li>CAMA 2020 Compliance Manual for Small Businesses</li>
              <li>Federal Inland Revenue Service (FIRS) TIN Guidelines 2026</li>
            </ul>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
