import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "SMEDAN Registration Guide 2026: Get Your SME Certificate | FastCAC Blog",
  description: "Want access to government grants and low-interest loans in Nigeria? Learn how to register your small business with SMEDAN and get your unique ID.",
  alternates: {
    canonical: "/blog/smedan-registration-guide-nigeria",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/smedan_nigeria_thumbnail_1776000413040.png",
        width: 1200,
        height: 630,
        alt: "SMEDAN Registration Guide for Nigerian SMEs | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-23T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a SMEDAN Certificate in Nigeria",
    description: "Unlocking government support for your SME: The complete SMEDAN registration guide.",
    images: ["/images/blog/smedan_nigeria_thumbnail_1776000413040.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SMEDAN Registration Guide 2026: Get Your SME Certificate",
    "description": "Unlock government support and low-interest loans for your Nigerian small business. Discover the step-by-step path to obtaining your SMEDAN certificate.",
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
    "datePublished": "2026-04-23T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/smedan-registration-guide-nigeria"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "what-is-smedan", text: "1. What is SMEDAN?" },
    { id: "benefits", text: "2. Benefits of an SME Certificate" },
    { id: "requirements", text: "3. Registration Requirements" },
    { id: "process", text: "4. The 10-Minute Registration Process" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Beyond CAC registration, we help SMEs access the wider ecosystem of government support and institutional funding in Nigeria.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "SMEDAN Registration Guide 2026", item: "/blog/smedan-registration-guide-nigeria" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="SMEDAN Registration Guide 2026"
        description="The ultimate blueprint for Nigerian small business owners seeking access to funding, training, and federal support."
        image="/images/blog/smedan_nigeria_thumbnail_1776000413040.png"
        date="April 23, 2026"
        readTime="5 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              While CAC registration gives your business a legal personality, SMEDAN registration gives 
              your business a voice in the room where government policy and SME funding are decided. 
              If you are a Nano, Micro, or Small business owner in Nigeria, a SMEDAN ID is as important 
              as your bank account.
            </p>
          </section>

          <section id="what-is-smedan" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. What is <span className="text-primary italic">SMEDAN?</span>
            </h2>
            <p className="text-lg">
              The <strong>Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)</strong> is 
              the federal agency established to promote and develop the MSME sub-sector. 
              The SMEDAN certificate is a document issued to businesses after registering on the 
              National MSME Database.
            </p>
          </section>
          
          <section id="benefits" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. Benefits of an <span className="text-primary italic">SME Certificate</span>
            </h2>
            <p className="text-lg leading-relaxed">
              Why should you take 10 minutes to register? Because it opens doors that are usually locked 
              to informal businesses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Access to Funding</h3>
                <p className="text-sm text-on-surface/70">Access low-interest loans from the Bank of Industry (BOI) and other federal grant programs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Training & Mentorship</h3>
                <p className="text-sm text-on-surface/70">Receive invitations to government-sponsored empowerment programs and trade fairs.</p>
              </div>
            </div>
          </section>

          <section id="requirements" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Registration <span className="text-primary italic">Requirements</span>
            </h2>
            <p className="text-lg">Fortunately, the barrier to entry is low. You will need:</p>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Personal Details:</strong> Name, phone number, and address of the owner.</li>
              <li><strong>Business Details:</strong> Official business name and office location.</li>
              <li><strong>CAC Registration Number:</strong> While not mandatory for &quot;Nano&quot; businesses, it is required for Micro and Small categories.</li>
              <li><strong>Number of Employees:</strong> SMEDAN categorizes you based on your staff strength and assets.</li>
            </ul>
          </section>

          <section id="process" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. The 10-Minute <span className="text-primary italic">Registration</span> Process
            </h2>
            <p className="text-lg leading-relaxed">
              Registering is completely free and can be done entirely online via the official SMEDAN portal:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-on-surface/70 font-body">
              <li>Visit the <strong>official SMEDAN register portal</strong> (smedanregister.ng).</li>
              <li>Input your business phone number and click &quot;Start.&quot;</li>
              <li>Fill in your business details exactly as they appear on your CAC certificate.</li>
              <li>Answer sections regarding your industry (Agric, Tech, Retail, etc.).</li>
              <li>Submit and download your unique **SMEDAN Registration Number (SUIN)** and certificate instantly.</li>
            </ol>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              In the 2026 Nigerian economy, data is everything. By registering with SMEDAN, you put 
              your business on the radar of the federal government, making you eligible for every 
              intervention, grant, and training program designed to help SMEs scale. 
              Don&apos;t leave money on the table—get your certificate today.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
