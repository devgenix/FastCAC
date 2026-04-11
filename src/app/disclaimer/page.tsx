import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | FastCAC",
  description: "Legal disclaimer for FastCAC services and information.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="section-py min-h-screen">
      <div className="max-w-[800px] section-px mx-auto">
        <h1 className="text-4xl lg:text-6xl font-headline italic tracking-tight mb-12">
          Disclaimer
        </h1>
        
        <div className="prose prose-lg font-body text-on-surface/70 space-y-8">
          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">Disclaimer for FastCAC</h2>
            <p>
              The content provided on FastCAC is for general informational purposes only. While we strive 
              to keep the information accurate and up-to-date, we make no warranties or representations 
              of any kind regarding the completeness, accuracy, or reliability of the information provided.
            </p>
          </section>

          <section>
            <p>
              Users of this website are encouraged to seek professional advice before making decisions 
              related to business registration, legal compliance, or regulatory matters. FastCAC and its 
              team shall not be held liable for any direct, indirect, or consequential losses resulting 
              from the use of information on this website.
            </p>
          </section>

          <section>
            <p className="font-bold">
              By using our services, you acknowledge and agree to this disclaimer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
