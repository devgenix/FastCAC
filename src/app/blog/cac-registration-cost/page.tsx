import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CAC Registration Cost in Nigeria: 2026 Official Fees Explained",
  description: "How much does it cost to register a business with CAC in 2026? Breakdown of fees for Business Names, Limited Companies, and ITs.",
  alternates: {
    canonical: "/blog/cac-registration-cost",
  },
  openGraph: {
    images: [
      {
        url: "/blog-cac-fees.png",
        width: 1200,
        height: 630,
        alt: "CAC Registration Cost 2026 | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-25T00:00:00.000Z",
    authors: ["FastCAC Financial Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Registration Cost 2026: Official Fees Breakdown",
    description: "Know exactly what you'll pay for CAC registration this year.",
    images: ["/blog-cac-fees.png"],
  },
};

export default function BlogPostPage() {
  // ... (keep jsonLd as is)
  const jsonLd = { /* ... */ }; 

  const tocItems = [
    { id: "business-name-fees", text: "1. Business Name Fees" },
    { id: "company-fees", text: "2. Limited Company Fees" },
    { id: "it-fees", text: "3. NGO/Foundation (IT) Fees" },
    { id: "hidden-costs", text: "4. Professional Fees vs. Official Fees" },
    { id: "payment-methods", text: "5. How to Pay via Remita" },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "How Much Does CAC Registration Cost? 2026 Fees Explained", item: "/blog/cac-registration-cost" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="CAC Registration Cost in Nigeria: 2026 Official Fees"
        description="A transparent breakdown of the Corporate Affairs Commission (CAC) filing fees for all business types in 2026."
        image="/blog-cac-fees.png"
        date="March 25, 2026"
        readTime="5 min read"
        tocItems={tocItems}
        author={{
          name: "FastCAC Finance",
          role: "Startup Accountants",
          bio: "Helping business owners navigate Nigerian regulatory costs efficiently.",
          avatar: "/logo.png"
        }}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed">
              Transparency in pricing is crucial for any new business owner. While the CAC has automated much of its process, 
              understanding the breakdown of official filing fees, stamp duties, and processing costs will help you budget effectively. 
              Here is what you need to know for 2026.
            </p>
          </section>

          <section id="business-name-fees" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">1. Business Name Fees</h2>
            <p>Registration of a Business Name (Sole Proprietorship or Partnership) is the most affordable entry point:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-primary/10">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="p-4 border border-primary/10">Item</th>
                    <th className="p-4 border border-primary/10">Fee (Official)</th>
                  </tr>
                </thead>
                <tbody className="opacity-80">
                  <tr>
                    <td className="p-4 border border-primary/10">Name Reservation</td>
                    <td className="p-4 border border-primary/10">₦500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-primary/10">Registration Fee</td>
                    <td className="p-4 border border-primary/10">₦10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-primary/10"><strong>Total Filing Fees</strong></td>
                    <td className="p-4 border border-primary/10"><strong>₦10,500*</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs mt-2 italic">*Excludes bank charges and Remita fees (~₦161).</p>
            </div>
          </section>

          <section id="company-fees" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">2. Limited Company Fees</h2>
            <p>For Private Limited Companies (LTD), the cost depends on the Authorized Share Capital (e.g., ₦1 Million):</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-primary/10">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="p-4 border border-primary/10">Item</th>
                    <th className="p-4 border border-primary/10">Fee (Official)</th>
                  </tr>
                </thead>
                <tbody className="opacity-80">
                  <tr>
                    <td className="p-4 border border-primary/10">Name Reservation</td>
                    <td className="p-4 border border-primary/10">₦500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-primary/10">Registration (per ₦1M capital)</td>
                    <td className="p-4 border border-primary/10">₦10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-primary/10">FIRS Stamp Duty (0.75%)</td>
                    <td className="p-4 border border-primary/10">₦7,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-primary/10"><strong>Standard 1M LTD Total</strong></td>
                    <td className="p-4 border border-primary/10"><strong>₦18,000*</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="hidden-costs" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">3. Hidden Costs to Watch Out For</h2>
            <p>While filing fees are fixed, most business owners encounter these additional expenses:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Cybercafe / Data Charges:</strong> For self-registration.</li>
              <li><strong>Professional Fees:</strong> If you hire a lawyer or accredited agent (ranges from ₦15,000 to ₦50,000).</li>
              <li><strong>Post-Registration Costs:</strong> SCUML registration (for certain sectors), and opening a corporate bank account.</li>
            </ul>
          </section>

          <section id="why-fastcac" className="bg-primary text-on-primary p-8 md:p-12 rounded-[2.5rem] space-y-6 my-12">
            <h3 className="text-3xl font-headline font-black italic">Save Time and Avoid Queries</h3>
            <p className="text-lg opacity-90">
              Self-registration often leads to mistakes that result in "Queries," costing you more in re-filing fees. 
              FastCAC offers an all-inclusive package that covers all official fees and professional handling for a single flat rate.
            </p>
            <div className="pt-4">
              <Link href="/" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                View All-Inclusive Pricing
              </Link>
            </div>
          </section>

          <section id="payment-methods" className="scroll-mt-32 space-y-6 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">Ready to Start?</h2>
            <p>
              Join thousands of Nigerian entrepreneurs who skipped the stress and registered their business 
              correctly on the first try with FastCAC.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/names" className="text-primary font-bold hover:underline">
                 Check Name Availability →
              </Link>
            </div>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
