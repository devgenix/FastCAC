import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="section-py min-h-screen">
      <div className="max-w-[800px] section-px mx-auto">
        <h1 className="text-4xl lg:text-6xl font-headline italic tracking-tight mb-12">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg font-body text-on-surface/70 space-y-8">
          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">1. Introduction</h2>
            <p>
              At FastCAC, we take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">2. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when registering a business, 
              including your name, email address, phone number, and business details required 
              for CAC registration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">3. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your CAC registration and other business services.</li>
              <li>Communicate with you about your order status.</li>
              <li>Provide customer support.</li>
              <li>Improve our services and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@fastcac.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
