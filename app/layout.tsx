import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rank Rise Recognize — The Future of Performance & Recognition",
  description:
    "Ascend the ranks, celebrate the rise, and recognize the best. The next-generation performance leaderboard, milestone mastery, and social appreciation platform.",
  keywords: [
    "performance leaderboards",
    "employee recognition",
    "gamified achievements",
    "peer rewards",
    "team milestones",
    "rank rise recognize",
  ],
  openGraph: {
    title: "Rank Rise Recognize — Coming Soon",
    description:
      "Join the VIP waitlist for the next evolution in performance tracking, skill trees, and peer appreciation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06080e] text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
