import React from "react";
import { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How to Register a Private School in Nigeria with CAC | FastCAC Blog",
  description: "Learn why private schools must be registered as Limited Liability Companies. Discover the TRCN requirements, Ministry of Education checklists, and CAC steps.",
  alternates: {
    canonical: "/blog/registering-a-school-in-nigeria",
  },
  openGraph: {
    images: [
      {
        url: "/images/blog/school_registration_nigeria_thumbnail_1776000332219.png",
        width: 1200,
        height: 630,
        alt: "Registering a School in Nigeria | FastCAC",
      },
    ],
    locale: "en_NG",
    type: "article",
    publishedTime: "2026-04-21T00:00:00.000Z",
    authors: ["FastCAC Legal Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register a School in Nigeria with CAC",
    description: "Legal guide for school founders: Ltd Company requirement and license steps.",
    images: ["/images/blog/school_registration_nigeria_thumbnail_1776000332219.png"],
  },
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Register a Private School in Nigeria with CAC",
    "description": "The legal roadmap for school founders. From choosing a corporate structure to obtaining Ministry of Education clearance.",
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
    "datePublished": "2026-04-21T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastcac.com/blog/registering-a-school-in-nigeria"
    }
  };

  const tocItems = [
    { id: "introduction", text: "Introduction" },
    { id: "why-ltd", text: "1. Why Schools Must be Companies (Ltd)" },
    { id: "trcn", text: "2. The TRCN Board Requirement" },
    { id: "ministry", text: "3. Ministry of Education Approval" },
    { id: "process", text: "4. Step-by-Step Registration" },
    { id: "conclusion", text: "Conclusion" },
  ];

  const author = {
    name: "FastCAC Legal Team",
    role: "Compliance Experts",
    bio: "Our team helps educational founders navigate the intersection of corporate law and state-level educational mandates.",
    avatar: "/logo.png"
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "How to Register a Private School and get CAC", item: "/blog/registering-a-school-in-nigeria" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title="How to Register a Private School in Nigeria"
        description="A complete guide for educators transitioning from illegal operations to a formal, licensed educational institution."
        image="/images/blog/school_registration_nigeria_thumbnail_1776000332219.png"
        date="April 21, 2026"
        readTime="8 min read"
        tocItems={tocItems}
        author={author}
      >
        <div className="space-y-12">
          <section id="introduction" className="scroll-mt-32">
            <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:italic">
              Educational entrepreneurs in 2026 are finding that informal schooling is no longer viable. 
              Between tighter bank KYC requirements and strict state inspections, the days of running a 
              school as a simple &quot;Business Name&quot; are over. To issue certificates and attract 
              partners, your school must be a corporate entity.
            </p>
          </section>

          <section id="why-ltd" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              1. Why Schools Must be <span className="text-primary italic">Companies (Ltd)</span>
            </h2>
            <p className="text-lg">
              The CAC no longer allows schools to register as Sole Proprietorships (Business Names). 
              A school is considered a large-scale institution with public responsibility. 
              Therefore, it must be registered as a <strong>Private Limited Liability Company</strong>.
            </p>
            <ul className="list-disc list-inside space-y-4 text-on-surface/70">
              <li><strong>Perpetual Succession:</strong> The school continues even if the owner changes.</li>
              <li><strong>Contractual Power:</strong> The Ltd can sign supply contracts and rent leases in its own name.</li>
              <li><strong>Credibility:</strong> It is mandatory for state-level licensing.</li>
            </ul>
          </section>
          
          <section id="trcn" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              2. The <span className="text-primary italic">TRCN</span> Board Requirement
            </h2>
            <p className="text-lg mb-6">
              To register a school, the CAC often requires that at least one of the <strong>Directors</strong> must be 
              a certified teacher registered with the <strong>Teachers Registration Council of Nigeria (TRCN)</strong>.
            </p>
            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-2 italic">Founder vs Director</h4>
              <p className="text-on-surface/70 leading-relaxed">
                If the founder is not a teacher, they must appoint a qualified director or principal with 
                TRCN certification during the CAC filing process to satisfy regulatory standards.
              </p>
            </div>
          </section>

          <section id="ministry" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              3. Ministry of <span className="text-primary italic">Education</span> Approval
            </h2>
            <p className="text-lg leading-relaxed">
              CAC registration is the first hurdle. The second is the <strong>Operational License</strong> from 
              your state&apos;s Ministry of Education (e.g., Lagos State Ministry of Education). 
              They will inspect your facilities for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Facility Standards</h3>
                <p className="text-sm text-on-surface/70">Classroom size, ventilation, playground space, and safety exits.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container/20 border border-outline/5">
                <h3 className="font-bold mb-2">Curriculum</h3>
                <p className="text-sm text-on-surface/70">Proof that your teaching content aligns with the National Policy on Education.</p>
              </div>
            </div>
          </section>

          <section id="process" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-black italic text-on-surface tracking-tighter">
              4. Step-by-Step <span className="text-primary italic">Registration</span>
            </h2>
            <p className="text-lg">Follow this 5-step roadmap:</p>
            <ol className="list-decimal list-inside space-y-4 text-on-surface/70 font-body">
              <li><strong>Name Search:</strong> Reserve a name that reflects education (e.g., Academy, High, College).</li>
              <li><strong>MEMART:</strong> Adopt Articles specifically designed for an educational services company.</li>
              <li><strong>Shareholders:</strong> Distribute shares (minimum ₦1m share capital is common).</li>
              <li><strong>Statutory Fees:</strong> Pay stamp duties and CAC filing fees online.</li>
              <li><strong>Certification:</strong> Download your Certificate of Incorporation and TIN.</li>
            </ol>
          </section>

          <section id="conclusion" className="scroll-mt-32">
            <h2 className="text-3xl font-headline font-black italic text-on-surface tracking-tighter mb-6">Conclusion</h2>
            <p className="leading-relaxed text-on-surface/70">
              Registering your school with the CAC is not just about compliance—it is about carving out a 
              reputable legacy. By following the Ltd structure and ensuring professional teacher involvement, 
              you build a foundation that state regulators and parents will trust.
            </p>
          </section>
        </div>
      </BlogPostLayout>
    </>
  );
}
