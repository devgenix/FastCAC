import React from "react";
import { NameMarketplace } from "@/components/NameMarketplace";
import { FinalCTA } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Business Names | FastCAC",
  description: "Browse our curated marketplace of brandable business names with premium domains. Find the perfect identity for your next venture.",
  alternates: {
    canonical: "/names",
  },
};

export default function NamesPage() {
  return (
    <main className="min-h-screen">
      <NameMarketplace />
      <FinalCTA />
    </main>
  );
}
