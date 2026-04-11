import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much is CAC Registration in Nigeria | 2026 Official Pricing",
  description: "The complete 2026 breakdown of CAC registration costs in Nigeria. Learn about official fees for Business Names, Limited Liability Companies, and NGOs.",
  alternates: {
    canonical: "/blog/how-much-is-cac-registration-nigeria-2026",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/how-much-is-cac-registration-nigeria-2026.png",
        width: 1200,
        height: 630,
        alt: "CAC Registration Cost Guide 2026 | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
    authors: ["FastCAC Finance Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much is CAC Registration in Nigeria | 2026 Official Pricing",
    description: "Detailed breakdown of CAC filing fees and costs for 2026.",
    images: ["/images/blog/how-much-is-cac-registration-nigeria-2026.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Much is CAC Registration in Nigeria | 2026",
    "description": "Understanding the costs associated with business registration in Nigeria for 2026.",
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
    "datePublished": "2026-04-14T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/how-much-is-cac-registration-nigeria-2026"
    }
  };

  const tocItems = [
    { id: "pricing-overview", text: "CAC Pricing Overview" },
    { id: "detailed-breakdown", text: "Detailed Fee Breakdown" },
    { id: "additional-fees", text: "Additional & Post-Inc Fees" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Finance Team",
    role: "Financial Advisory",
    bio: "We help Nigerian entrepreneurs understand the cost of doing business and keep their operations compliant.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "How Much is CAC Registration in Nigeria | 2026", item: "/blog/how-much-is-cac-registration-nigeria-2026" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How Much is CAC Registration in Nigeria | 2026"
        description="A complete walkthrough of the financial requirements for registering your business with the Corporate Affairs Commission this year."
        image="/images/blog/how-much-is-cac-registration-nigeria-2026.png"
        date="April 14, 2026"
        readTime="8 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Are you interested in CAC regulations? Do you want to register your business with CAC? 
              Starting a business often begins with a name, but many entrepreneurs stumble when it comes to availability and official costs. 
              Knowing the exact fees upfront is essential for budgeting your startup journey in 2026.
            </p>
          </section>
          
          <section id="pricing-overview" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              How Much is <span className="text-primary italic">CAC Registration?</span>
            </h2>
            <p className="text-lg">
              The cost of registering with the Corporate Affairs Commission (CAC) in Nigeria varies significantly depending on the type of business structure you choose:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5 space-y-2">
                <h3 className="font-bold text-primary italic">Business Name</h3>
                <p className="text-sm opacity-70">Sole Proprietor or Partnership</p>
                <p className="text-2xl font-black">₦10,000 – ₦25,000</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5 space-y-2">
                <h3 className="font-bold text-primary italic">Limited Company</h3>
                <p className="text-sm opacity-70">LTD Share Capital based</p>
                <p className="text-2xl font-black">₦10,500 – ₦50,000+</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5 space-y-2">
                <h3 className="font-bold text-primary italic">Name Reservation</h3>
                <p className="text-sm opacity-70">Official Filing Fee</p>
                <p className="text-2xl font-black">₦500</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5 space-y-2">
                <h3 className="font-bold text-primary italic">Incorporated Trustees</h3>
                <p className="text-sm opacity-70">NGOs, Associations, Clubs</p>
                <p className="text-2xl font-black">₦30,000 – ₦110,000</p>
              </div>
            </div>
          </section>

          <section id="detailed-breakdown" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              Detailed <span className="text-primary italic">Breakdown</span>
            </h2>
            <img 
              src="/images/blog/cac-fee-breakdown-graphic.png" 
              alt="Detailed CAC Fee Structure Visualization" 
              className="mx-auto rounded-3xl shadow-2xl mb-8 max-w-full"
            />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">1. Business Name Registration</h3>
              <ul className="list-disc list-inside space-y-2 opacity-80">
                <li><strong>Name Reservation:</strong> ₦500</li>
                <li><strong>Registration:</strong> ₦10,000</li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-8">2. Company Registration (Private Limited)</h3>
              <ul className="list-disc list-inside space-y-2 opacity-80">
                <li><strong>Share Capital ≤ ₦1 Million:</strong> ₦10,000</li>
                <li><strong>Share Capital &gt; ₦1 Million up to ₦500 Million:</strong> ₦5,000 for every ₦1 Million share capital or part thereof.</li>
                <li><strong>Share Capital &gt; ₦500 Million:</strong> ₦7,500 for every ₦1 Million share capital or part thereof.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">3. Company Registration (Public Company)</h3>
                <ul className="list-disc list-inside space-y-2 opacity-80">
                  <li><strong>First ₦1 Million capital:</strong> ₦20,000</li>
                  <li><strong>Subsequent share capital:</strong> Varies based on total amount, similar to private company thresholds.</li>
                </ul>
            </div>
          </section>

          <section id="additional-fees" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              Additional <span className="text-primary italic">Fees</span>
            </h2>
            <p className="text-on-surface/70 leading-relaxed text-lg">
              Beyond initial registration, running your business involves several other filing costs to remain compliant with the Corporate Affairs Commission:
            </p>
            <div className="p-8 rounded-3xl bg-surface-container/20 border border-outline/5">
              <ul className="space-y-4">
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                   <div><strong>Annual Returns:</strong> Mandatory yearly filing to keep your status "Active".</div>
                </li>
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                   <div><strong>Post-Incorporation Filings:</strong> Fees for changing directors, business location, or share capital.</div>
                </li>
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                   <div><strong>Expedited Service:</strong> Extra fees for same-day processing or urgent filings.</div>
                </li>
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                   <div><strong>Privacy Requests:</strong> Fees for restricting residential address visibility for directors.</div>
                </li>
              </ul>
            </div>
          </section>

          <section id="cta" className="bg-primary text-on-primary p-8 md:p-12 rounded-[2.5rem] space-y-6 my-12">
            <h3 className="text-3xl font-headline font-black italic">Need Professional Assistance?</h3>
            <p className="text-lg opacity-90">
              The cost to register a business with the CAC is straightforward, but mistakes in filing can lead to rejections and extra costs. 
              FastCAC provides expert guidance to handle your name search and registration swiftly, saving you from the stress and hassle.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Start Registration Now
              </Link>
              <Link href="/names" className="px-8 py-4 bg-primary-container text-on-primary-container border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Search Business Names
              </Link>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Registering your business is the foundation of your entrepreneurial dream. While official fees are fixed, the value you get depends on the quality of service and accuracy of the filing. 
              Always seek professional advice when navigating the complexities of CAMA 2020.
            </p>
            <p className="mt-8 text-xs opacity-40 italic">
              Disclaimer: This publication is provided for general guidance only and does not constitute professional legal or financial advice.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
