import React from "react";
import { Hero } from "@/components/Hero";
import { NameDetailsSection } from "@/components/NameDetailsSection";
import { PricingSection } from "@/components/PricingSection";
import { Metadata } from "next";

interface NamePageProps {
  params: Promise<{
    name: string;
  }>;
}

export async function generateMetadata({ params }: NamePageProps): Promise<Metadata> {
  const { name: rawName } = await params;
  const name = rawName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Claim ${name} — Business Name & CAC Registration | FastCAC`,
    description: `Register your business as ${name} with CAC, get a professional logo and a website in 7 days. Flat fee, no hidden charges.`,
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

  const heroTitle = (
    <>
      Claim the name <br />
      <span className="text-primary italic">"{name}"</span>
    </>
  );

  const heroSubtitle = (
    <>
      This name is currently <span className="text-primary font-bold">AVAILABLE</span> for registration. 
      Secure it today and get your full business setup in 7 days.
    </>
  );

  return (
    <div className="min-h-screen">
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
