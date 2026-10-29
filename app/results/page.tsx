import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BarChart3, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Results & Case Studies | Rank Rise Recognize",
  description:
    "Real numbers only: rankings, organic clicks, Google Business Profile calls and AI prompt citations, measured from day one.",
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1024px] mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <BarChart3 size={15} className="text-[#202020]" />
              <span>VERIFIED DATA PROTOCOL</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              Real results, real numbers.
            </h1>
            <p className="text-[17px] text-[#202020]/80 leading-relaxed font-normal">
              We publish verified numbers only: rankings, organic clicks, Google
              Business Profile phone calls, and AI prompt citations, measured
              from day one.
            </p>
          </section>

          {/* Founding Status Notice */}
          <section className="sticker-card p-8 sm:p-12 space-y-6 bg-white border-[2.5px] border-black rounded-[40px]">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#e9dfd2] border-[2px] border-black text-[12px] font-bold text-[#202020] tracking-wider uppercase">
              FOUNDING COHORT ONBOARDING ACTIVE
            </div>

            <h2 className="font-display text-[28px] sm:text-[38px] text-[#202020] leading-tight">
              We&apos;re onboarding our founding clients right now.
            </h2>

            <p className="text-[16px] text-[#202020]/80 leading-relaxed">
              We track every client from day one across Google Search Console,
              Google Analytics 4, and daily automated checks across ChatGPT,
              Gemini, Perplexity, and Google AI Overviews. We will publish real,
              verified client case studies here with exact dates and metrics.
            </p>

            <div className="oat-feature-card p-6 sm:p-8 rounded-[24px] border-[2px] border-black text-[14px] text-[#202020] space-y-3">
              <div className="text-[#202020] font-bold text-[16px] flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#202020]" />
                <span>Case Study Verification Protocol:</span>
              </div>
              <div className="space-y-1.5 text-[#202020]/80 pl-6">
                <div>• 100% genuine data extracted directly from Google Search Console and GA4</div>
                <div>• No fabricated quotes, stock logos, or vanity impression screenshots</div>
                <div>• Detailed before-and-after audit logs of rankings and AI prompt citations</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="pill-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold"
              >
                <span>Claim a founding slot & become our first case study</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
