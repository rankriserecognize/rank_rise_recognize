import type { Metadata, Viewport } from "next";
import { DM_Sans, Lilita_One } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lilitaOne = Lilita_One({
  variable: "--font-bogue-black",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "#e5e7eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SEO, AEO & GEO Agency in India | Rank Rise Recognize",
  description:
    "Rank on Google, rise in leads and get recommended by ChatGPT & Gemini. SEO, AEO and GEO for Indian brands. Get your free AI visibility check.",
  keywords: [
    "SEO agency India",
    "AEO services India",
    "GEO agency India",
    "answer engine optimization",
    "generative engine optimization",
    "Google AI Overviews",
    "ChatGPT brand visibility",
    "local SEO India",
    "D2C SEO India",
    "Rank Rise Recognize",
  ],
  authors: [{ name: "Rank Rise Recognize" }],
  creator: "Rank Rise Recognize",
  metadataBase: new URL("https://rankriserecognize.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rank on Google. Rise in revenue. Get recognised by AI.",
    description:
      "SEO, AEO and GEO agency for Indian businesses. Win Google search, map rankings, and AI assistant citations across ChatGPT, Gemini & Perplexity.",
    url: "https://rankriserecognize.com",
    siteName: "Rank Rise Recognize",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, AEO & GEO Agency in India | Rank Rise Recognize",
    description:
      "Rank on Google, rise in leads and get recommended by ChatGPT & Gemini. SEO, AEO and GEO for Indian brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import JsonLd from "./components/JsonLd";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lilitaOne.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#e5e7eb] text-[#202020] font-sans antialiased selection:bg-[#aac9f7] selection:text-[#202020]">
        <JsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
