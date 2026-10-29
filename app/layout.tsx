import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1A1816] font-sans antialiased selection:bg-[#9C7D38]/20 selection:text-[#1A1816]">
        {children}
      </body>
    </html>
  );
}
