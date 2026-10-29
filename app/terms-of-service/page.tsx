import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Rank Rise Recognize",
  description: "Terms of service and engagement standards for Rank Rise Recognize.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1816]">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#78716C]">
              Last updated: October 2026 · Rank Rise Recognize
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#57534E] leading-relaxed">
            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
              1. Engagement Scope
            </h2>
            <p>
              Rank Rise Recognize provides organic search optimization (SEO),
              Answer Engine Optimization (AEO), Generative Engine Optimization
              (GEO), and associated digital marketing services. All deliverables,
              schedules, and pricing are transparently detailed on our website and
              in individual client work statements.
            </p>

            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
              2. Commitment & Cancellation
            </h2>
            <p>
              Unless otherwise agreed in writing, client retainer agreements have
              an initial 3-month minimum commitment to enable indexing, schema
              evaluation, and algorithmic compounding. After 90 days, retainers
              continue strictly month-to-month and may be cancelled with 30 days
              written notice prior to the next billing cycle.
            </p>

            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
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
