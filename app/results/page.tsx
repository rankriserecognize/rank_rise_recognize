import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Check, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Results & Case Studies | Rank Rise Recognize",
  description:
    "Real numbers only: rankings, organic clicks, Google Business Profile calls and AI prompt citations, measured from day one.",
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Verified Metrics
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
              Real results, real numbers
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              We publish verified numbers only: rankings, organic clicks, Google
              Business Profile phone calls, and AI prompt citations, measured
              from day one.
            </p>
          </section>

          {/* Founding Status Notice */}
          <section className="p-8 bg-[#FFFFFF] border-2 border-[#9C7D38]/50 rounded-xs space-y-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
              <Sparkles size={14} />
              <span>Founding Cohort Onboarding</span>
            </div>

            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              We&apos;re onboarding our founding clients right now.
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed">
              We track every client from day one across Google Search Console,
              Google Analytics 4, and daily automated checks across ChatGPT,
              Gemini, Perplexity, and Google AI Overviews. We will publish real,
              verified client case studies here with exact dates and metrics.
            </p>

            <div className="p-4 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-xs text-[#44403C] space-y-2">
              <div className="font-semibold text-[#1A1816]">
                Our Case Study Verification Standard:
              </div>
              <div>• 100% genuine data extracted directly from Google Search Console and GA4</div>
              <div>• No fabricated quotes, stock logos, or vanity impression screenshots</div>
              <div>• Detailed before-and-after audit logs of rankings and AI prompt citations</div>
            </div>

            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#2B2724] transition-colors"
              >
                <span>Claim a founding slot & become our first case study</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
