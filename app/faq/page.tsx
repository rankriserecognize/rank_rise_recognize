import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEO, AEO & GEO FAQs | Rank Rise Recognize",
  description:
    "Direct answers to common questions about SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) in India.",
};

export default function FaqPage() {
  const faqs = [
    {
      q: "What is the difference between SEO, AEO and GEO?",
      a: "SEO (Search Engine Optimization) helps your website rank in Google's organic search results. AEO (Answer Engine Optimization) helps your content become the direct, quoted answer in Google AI Overviews, featured snippets, and voice search. GEO (Generative Engine Optimization) helps AI assistants like ChatGPT, Gemini, and Perplexity cite and recommend your brand when users ask conversational questions. Modern buyers search across all three environments, so winning modern search requires all three.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "Most businesses see early movement within 3 months and stronger compounding growth in 6–12 months. Local SEO and AEO fixes can work faster; competitive national keywords take longer compounding authority.",
    },
    {
      q: "Do you guarantee #1 rankings?",
      a: "No. Nobody controls Google's or ChatGPT's algorithms, and any agency that guarantees #1 is taking dangerous risks with your website or targeting meaningless zero-volume keywords. We commit to transparent work every month and honest reporting on what moved.",
    },
    {
      q: "Can you get my brand mentioned in ChatGPT?",
      a: "We can't force AI models programmatically, but we can make it far more likely. AI tools recommend brands that are clearly structured on their own website and cited across authoritative third-party platforms. We work on both and track your mentions every month.",
    },
    {
      q: "Do I need a long contract?",
      a: "No. Our plans have a 3-month initial commitment to allow search engines time to index our structural fixes, and then continue strictly month-to-month with no 12-month lock-in.",
    },
    {
      q: "How do you report results?",
      a: "You get a monthly report showing rankings, organic website traffic, leads or calls, and AI prompt mentions, plus a strategy call on higher plans.",
    },
    {
      q: "Do you work with businesses outside [your city]?",
      a: "Yes. We work with businesses across India, online via video calls and shared reporting dashboards.",
    },
    {
      q: "Will you write content with AI?",
      a: "We use AI tools for research and speed, but every piece is planned, fact-checked, and edited by a human strategist. Thin, generic AI content doesn't rank and doesn't get cited.",
    },
    {
      q: "Do I need a new website?",
      a: "Usually not. We will tell you honestly in your audit whether your current site can be optimized or needs rebuilding.",
    },
    {
      q: "What do you need from me to get started?",
      a: "Access to your website CMS, Google Search Console, Google Analytics, and Google Business Profile, plus an onboarding strategy call.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 space-y-12">
          <section className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <HelpCircle size={15} className="text-[#202020]" />
              <span>KNOWLEDGE BASE</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              Questions we get asked most.
            </h1>
            <p className="text-[17px] text-[#202020]/80 leading-relaxed max-w-lg mx-auto">
              Clear, honest answers about search, AI optimization, and how we work.
            </p>
          </section>

          <section className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="sticker-card p-6 sm:p-7 space-y-2 bg-white rounded-[24px] border-[2px] border-black"
              >
                <h2 className="font-display text-[19px] sm:text-[21px] text-[#202020] leading-snug">
                  {faq.q}
                </h2>
                <p className="text-[15px] text-[#202020]/80 leading-relaxed pt-2 border-t border-black/10">
                  {faq.a}
                </p>
              </div>
            ))}
          </section>

          <section className="oat-feature-card p-8 sm:p-12 text-center space-y-5 rounded-[40px] border-[2.5px] border-black bg-[#e9dfd2]">
            <h2 className="font-display text-[28px] sm:text-[38px] text-[#202020] leading-tight">
              Have a question not listed here?
            </h2>
            <p className="text-[16px] text-[#202020]/80 max-w-md mx-auto leading-relaxed">
              Send us a direct message or request your complimentary AI visibility
              audit report.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/ai-visibility-audit"
                className="pill-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold"
              >
                <span>Get Free AI Audit</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="pill-btn-dark inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold"
              >
                <span>Contact Strategists</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
