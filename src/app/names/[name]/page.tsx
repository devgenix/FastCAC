import React from "react";
import { Hero } from "@/components/Hero";
import { NameDetailsSection } from "@/components/NameDetailsSection";
import { PricingSection } from "@/components/PricingSection";
import { Metadata } from "next";
import { BUSINESS_NAMES_DATA } from "@/lib/name-data";

interface NamePageProps {
  params: Promise<{
    name: string;
  }>;
}

export async function generateStaticParams() {
  return BUSINESS_NAMES_DATA.map((item) => ({
    name: item.name.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: NamePageProps): Promise<Metadata> {
  const { name: rawName } = await params;
  const name = rawName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Claim ${name} — Business Name & CAC Registration`,
    description: `Register your business as ${name} with CAC, get a professional logo and a website in 5 days for ₦100k.`,
    alternates: {
      canonical: `/names/${rawName}`,
    },
  };
}

export default async function NameDetailPage({ params }: NamePageProps) {
  const { name: rawName } = await params;
  const name = rawName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `CAC Registration for ${name}`,
    "provider": {
      "@type": "Organization",
      "name": "FastCAC",
      "url": "https://fastcac.com"
    },
    "description": `Fast business registration service for ${name} in Nigeria. Includes CAC certificate, Logo, and Website.`,
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FastCAC Business Setup",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Business Registration Package"
          },
          "price": "100000",
          "priceCurrency": "NGN"
        }
      ]
    }
  };

  const heroTitle = (
    <>
      Claim the name <br />
      <span className="text-primary italic">"{name}"</span>
    </>
  );

  const heroSubtitle = (
    <>
      This name is currently <span className="text-primary font-bold">AVAILABLE</span> for registration. 
      Secure it today and get your full business setup in 5 days.
    </>
  );

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero 
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={`Claim ${name} Now`}
        selectedName={name}
      />
      
      <NameDetailsSection name={name} />

      <PricingSection selectedName={name} />
    </div>
  );
}
