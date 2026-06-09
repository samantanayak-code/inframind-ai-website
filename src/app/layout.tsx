import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InfraMind EPC — Operational Intelligence for Infrastructure EPC Megaprojects",
    template: "%s — InfraMind EPC",
  },
  description:
    "Practitioner-built AI systems for EPC megaprojects. Deployed on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book). Digital Twin, NCR Tracker, Contract Forensics, OCR Intelligence, TCB Simulation.",
  keywords: [
    "EPC AI",
    "infrastructure AI architect",
    "FIDIC contract intelligence",
    "digital twin EPC",
    "operational intelligence infrastructure",
    "construction AI",
    "megaproject control",
  ],
  metadataBase: new URL("https://inframind.ai"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "InfraMind EPC",
    title: "InfraMind EPC — Operational Intelligence for Infrastructure EPC Megaprojects",
    description:
      "Practitioner-built AI systems for EPC megaprojects. Deployed on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book).",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "InfraMind EPC — Operational Intelligence for Infrastructure EPC Megaprojects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfraMind EPC — Operational Intelligence for Infrastructure EPC Megaprojects",
    description:
      "Practitioner-built AI systems for EPC megaprojects. Deployed on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book).",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head></head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-infrastructure-900 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
