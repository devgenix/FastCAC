import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#007a41",
  width: "device-width",
  initialScale: 1,
};
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fastcac.com"),
  title: "Fastest CAC Registration in Nigeria, Logo, Website & More for ₦100k",
  description: "Get your CAC certificate, business name, logo, and website in 7 days for ₦100k.",
  keywords: ["CAC registration", "Nigeria business", "business name", "logo design", "business website", "startup Nigeria"],
  authors: [{ name: "FastCAC Team" }],
  openGraph: {
    title: "Fastest CAC Registration in Nigeria, Logo, Website & More for ₦100k",
    description: "Get your CAC certificate, business name, logo, and website in 7 days for ₦100k.",
    url: "https://fastcac.com",
    siteName: "FastCAC",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dzaxzeuh5/image/upload/v1774103154/hero1_ggu55q.jpg",
        width: 1200,
        height: 630,
        alt: "FastCAC - Fastest CAC Registration in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastest CAC Registration in Nigeria, Logo, Website & More for ₦100k",
    description: "Get your CAC certificate, business name, logo, and website in 7 days for ₦100k.",
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
import { HeaderProvider } from "@/components/HeaderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface antialiased overflow-x-hidden">
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

