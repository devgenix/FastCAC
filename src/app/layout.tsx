import type { Metadata, Viewport } from "next";
import Clarity from '@/components/analytics/Clarity';

export const viewport: Viewport = {
  themeColor: "#007a41",
  width: "device-width",
  initialScale: 1,
};
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fastcac.com"),
  title: {
    default: "Fastest CAC Registration in Nigeria — Business Name & Logo for ₦100k",
    template: "%s | FastCAC"
  },
  description: "Get your CAC certificate, business name registration, professional logo, and website in 5 days for ₦100k. The most reliable way to register a business in Nigeria.",
  keywords: [
    "CAC registration", 
    "Business names registration", 
    "how to get a business name", 
    "register business Nigeria", 
    "CAMA 2020 compliance",
    "Nigeria business registration", 
    "logo design Nigeria", 
    "startup setup Nigeria"
  ],
  authors: [{ name: "FastCAC Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fastest CAC Registration in Nigeria — Business Name & Logo for ₦100k",
    description: "Legalize your business in 5 days. CAC certificate, TIN, Logo, and Website included.",
    url: "https://fastcac.com",
    siteName: "FastCAC",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dzaxzeuh5/image/upload/w_1200,h_630,c_fill,f_jpg,q_80/v1774103154/WhatsApp_Image_2026-03-25_at_01.54.43_jkbpgu.jpg",
        width: 1200,
        height: 630,
        alt: "FastCAC - Fastest CAC Registration in Nigeria",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastest CAC Registration in Nigeria — Business Name & Logo for ₦100k",
    description: "Get your CAC certificate and business setup in 5 days for ₦100k.",
    images: ["https://res.cloudinary.com/dzaxzeuh5/image/upload/w_1200,h_630,c_fill,f_jpg,q_80/v1774103154/WhatsApp_Image_2026-03-25_at_01.54.43_jkbpgu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HeaderProvider } from "@/components/HeaderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FastCAC",
    "url": "https://fastcac.com",
    "logo": "https://fastcac.com/logo.png",
    "sameAs": [
      "https://twitter.com/fastcac",
      "https://facebook.com/fastcac",
      "https://instagram.com/fastcac"
    ],
    "description": "Fastest CAC Registration service in Nigeria. Get your business name, logo, and website in 5 days.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FastCAC",
    "url": "https://fastcac.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fastcac.com/names?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Clarity />
        <HeaderProvider>
          <GridBackground />
          <Navbar />
          <FloatingWhatsApp />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </HeaderProvider>
      </body>
    </html>
  );
}

