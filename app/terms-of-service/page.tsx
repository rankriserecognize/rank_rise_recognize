import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Rank Rise Recognize",
  description: "Terms of service and engagement standards for Rank Rise Recognize.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <FileText size={15} className="text-[#202020]" />
              <span>TERMS OF USE</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              Terms of Service
            </h1>
            <p className="text-[13px] font-semibold text-[#202020]/60">
              Last updated: October 2026 · Rank Rise Recognize
            </p>
          </div>

          <div className="sticker-card p-8 sm:p-12 space-y-6 text-[15px] text-[#202020]/80 leading-relaxed bg-white rounded-[40px] border-[2.5px] border-black">
            <h2 className="font-display text-[22px] text-[#202020]">
              1. Engagement Scope
            </h2>
            <p>
              Rank Rise Recognize provides organic search optimization (SEO),
              Answer Engine Optimization (AEO), Generative Engine Optimization
              (GEO), and associated digital marketing services. All deliverables,
              schedules, and pricing are transparently detailed on our website and
              in individual client work statements.
            </p>

            <h2 className="font-display text-[22px] text-[#202020]">
              2. Commitment & Cancellation
            </h2>
            <p>
              Unless otherwise agreed in writing, client retainer agreements have
              an initial 3-month minimum commitment to enable indexing, schema
              evaluation, and algorithmic compounding. After 90 days, retainers
              continue strictly month-to-month and may be cancelled with 30 days
              written notice prior to the next billing cycle.
            </p>

            <h2 className="font-display text-[22px] text-[#202020]">
              3. Realistic Algorithm Disclaimers
            </h2>
            <p>
              Search engines (Google) and AI platforms (OpenAI, Anthropic,
              Google Gemini) operate proprietary algorithms outside our direct
              control. We commit to industry-best white-hat engineering and
              diligent prompt optimization. We do not provide deceptive guarantees
              of specific #1 positions or fixed model outputs.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
