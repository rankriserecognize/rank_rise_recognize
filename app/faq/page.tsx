import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12">
          <section className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Common Inquiries
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
              Questions we get asked most
            </h1>
            <p className="text-base sm:text-lg text-[#57534E]">
              Clear, honest answers about search, AI optimization, and how we work.
            </p>
          </section>

          <section className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-2"
              >
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1A1816]">
                  {faq.q}
                </h2>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed pt-1 border-t border-[#F4EFEA]">
                  {faq.a}
                </p>
              </div>
            ))}
          </section>

          <section className="p-8 bg-[#1A1816] text-[#FAF7F2] rounded-xs text-center space-y-4">
            <h2 className="font-serif text-2xl font-medium">
              Have a question not listed here?
            </h2>
            <p className="text-xs sm:text-sm text-[#D6CFBE] max-w-md mx-auto">
              Send us a direct note or request your complimentary AI visibility
              audit report.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <Link
                href="/ai-visibility-audit"
                className="px-6 py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold uppercase tracking-wider rounded-xs"
              >
                Get Free AI Visibility Check
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
