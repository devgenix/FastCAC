import React from "react";
import { NameMarketplace } from "@/components/NameMarketplace";
import { FinalCTA } from "@/components/Footer";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Available Business Names | FastCAC",
  description: "Browse our curated marketplace of brandable business names with premium domains. Find the perfect identity for your next venture.",
  alternates: {
    canonical: "/names",
  },
};

import { Suspense } from "react";
import { getBusinessNames } from "@/lib/name-data";

export default async function NamesPage() {
  const initialNames = await getBusinessNames();

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Business Names", item: "/names" },
        ]}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      }>
        <NameMarketplace initialNames={initialNames} />
      </Suspense>
      <FinalCTA />
    </main>
  );
}
