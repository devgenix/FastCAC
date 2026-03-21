import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#00A859",
  width: "device-width",
  initialScale: 1,
};
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fastcac.com"),
  title: "Fastest CAC Registration in Nigeria, Logo, Website & More for ₦100k",
  description: "Get your CAC certificate, business name, logo, and website in 5 days for ₦100k.",
  keywords: ["CAC registration", "Nigeria business", "business name", "logo design", "business website", "startup Nigeria"],
  authors: [{ name: "FastCAC Team" }],
  openGraph: {
    title: "FastCAC — Start Your Nigerian Business in 5 Days",
    description: "Registered, branded, and online in 5 business days — no office visits, no paperwork, no stress.",
    url: "https://fastcac.com",
    siteName: "FastCAC",
    images: [
      {
        url: "https://res.cloudinary.com/dzaxzeuh5/image/upload/v1774103154/hero1_ggu55q.jpg",
        width: 1200,
        height: 630,
        alt: "FastCAC — Nigerian Business Registration Engine",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastest CAC Registration in Nigeria, Logo, Website & More for ₦100k",
    description: "Get your CAC certificate, business name, logo, and website in 5 days for ₦100k.",
    images: ["https://res.cloudinary.com/dzaxzeuh5/image/upload/v1774103154/hero1_ggu55q.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface antialiased overflow-x-hidden">
        <GridBackground />
        <Navbar />
        <FloatingWhatsApp />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

