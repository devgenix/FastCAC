import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Does CAC Registration Take? 2026 Processing Times",
  description: "Find out how many days it takes to register a business in Nigeria in 2026. Breakdown of CAC processing times for all registration types.",
  alternates: {
    canonical: "/blog/cac-registration-timeline",
  },
  openGraph: {
    images: [
      {
        url: "/blog-cac-timeline.png",
        width: 1200,
        height: 630,
        alt: "CAC Registration Timeline 2026 | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-03-25T00:00:00.000Z",
    authors: ["FastCAC Operations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Registration Timeline 2026: Official Processing Times",
    description: "Plan your business launch with accurate CAC processing expectations.",
    images: ["/blog-cac-timeline.png"],
  },
};

export default function BlogPostPage() {
  // ... (keep jsonLd as is)
  const jsonLd = { /* ... */ }; 

  const tocItems = [
    { id: "business-name-timeline", text: "1. Business Name Timeline" },
    { id: "limited-company-timeline", text: "2. Limited Company Timeline" },
    { id: "name-reservation-speed", text: "3. Name Reservation Speed" },
    { id: "factors-affecting-speed", text: "4. Factors Affecting Processing" },
    { id: "expedited-registration", text: "5. How to Fast-Track Registration" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="CAC Registration Timeline: How Long Does It Take in 2026?"
        description="A realistic guide to the current processing times of the Corporate Affairs Commission (CAC) to help you plan your business launch."
        image="/blog-cac-timeline.png"
        date="March 25, 2026"
        readTime="4 min read"
        tocItems={tocItems}
        author={{
          name: "FastCAC Team",
          role: "Registration Analysts",
          bio: "Optimizing business registrations for efficiency and speed.",
          avatar: "/logo.png"
        }}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed">
              If you’re ready to start your business, timing is everything. 
              In 2026, the CAC has optimized its digital workflows, but the "speed of delivery" 
              still depends on several factors, primarily the type of business you’re registering. 
              Here is the current processing timeline as of late March 2026.
            </p>
          </section>

          <section id="business-name-timeline" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">1. Business Name Processing Times</h2>
            <p>For sole proprietorships and partnerships, the timeline is typically:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Name Reservation:</strong> 24 to 48 hours.</li>
              <li><strong>Full Registration:</strong> 3 to 7 working days.</li>
              <li><strong>Total Expected Time:</strong> Approx. 1 week.</li>
            </ul>
          </section>

          <section id="limited-company-timeline" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">2. Limited Company Processing Times</h2>
            <p>Private Limited Companies (LTD) require more documentation and review:</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Name Reservation:</strong> 24 to 48 hours.</li>
              <li><strong>Full Registration:</strong> 7 to 14 working days.</li>
              <li><strong>Total Expected Time:</strong> Approx. 2 weeks.</li>
            </ul>
          </section>

          <section id="name-reservation-speed" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">3. Name Reservation Speed</h2>
            <p>
              In 2026, the <strong>CAC Name Reservation</strong> is the first and fastest step. 
              Once you submit your name options, the portal will notify you within two working days 
              if your name is approved or rejected.
            </p>
          </section>

          <section id="factors-affecting-speed" className="scroll-mt-32 space-y-6">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">4. Factors Affecting Processing</h2>
            <p>Why do some applications take longer?</p>
            <ul className="list-disc list-inside space-y-3 opacity-80">
              <li><strong>Application Errors ("Queries"):</strong> Typos, wrong IDs, or invalid addresses restart the timer.</li>
              <li><strong>Restricted Names:</strong> Names containing restricted words require extra scrutiny.</li>
              <li><strong>Public Holidays:</strong> Nigeria has several federal holidays that can pause the CAC’s internal processing.</li>
              <li><strong>Portal Downtime:</strong> Occasional technical maintenance on the CRP (Companies Registration Portal).</li>
            </ul>
          </section>

          <section id="expedited-registration" className="scroll-mt-32 space-y-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h2 className="text-3xl font-headline font-black italic tracking-tighter">5. How to Fast-Track Your Registration</h2>
            <p>Want your certificates even faster? Follow these tips:</p>
            <ol className="list-decimal list-inside space-y-3 opacity-80">
              <li><strong>Double-Check Everything:</strong> Ensure your NIN matches your provided details exactly.</li>
              <li><strong>Upload High-Resolution Scans:</strong> Avoid grainy or dark photos.</li>
              <li><strong>Use FastCAC Expert Services:</strong> We handle the entire process, preventing common errors that cause delays.</li>
            </ol>
             <div className="pt-4 flex gap-4">
              <Link href="/" className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold inline-block">
                Start Express Registration
              </Link>
              <Link href="/names" className="px-6 py-2 border border-primary text-primary rounded-full font-bold inline-block">
                Search Names First
              </Link>
            </div>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
