import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="section-py min-h-screen">
      <div className="max-w-[800px] section-px mx-auto">
        <h1 className="text-4xl lg:text-6xl font-headline italic tracking-tight mb-12">
          Terms of Use
        </h1>
        
        <div className="prose prose-lg font-body text-on-surface/70 space-y-8">
          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">1. Acceptance of Terms</h2>
            <p>
              By accessing or using FastCAC, you agree to be bound by these Terms of Use. 
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">2. Services Provided</h2>
            <p>
              FastCAC provides business registration assistance, branding, and web design services 
              for Nigerian entrepreneurs. We act as a facilitator for CAC registration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">3. User Responsibilities</h2>
            <p>
              You are responsible for providing accurate and complete information for business 
              registration. FastCAC is not liable for delays caused by incorrect information 
              provided by the user or CAC processing times.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">4. Fees and Payments</h2>
            <p>
              All fees for our services are due upfront. Once registration has been initiated 
              with the CAC, fees are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline text-on-surface mb-4 italic">5. Limitation of Liability</h2>
            <p>
              FastCAC shall not be liable for any indirect, incidental, or consequential damages 
              arising out of the use of our services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
