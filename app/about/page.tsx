import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Rank Rise Recognize | SEO & AI Search Agency",
  description:
    "A new kind of SEO agency for Indian businesses: transparent pricing, AI search expertise, and founders who do the work themselves.",
};

export default function AboutPage() {
  const beliefs = [
    {
      title: "Transparency over mystery",
      desc: "Our prices are public on the website. Our reports are in plain English. No arbitrary quotes, hidden commissions, or markups.",
    },
    {
      title: "Results you can measure",
      desc: "Phone calls, verified form inquiries, customer revenue, and AI prompt share — not vanity impressions or irrelevant traffic.",
    },
    {
      title: "No shortcuts or spam tactics",
      desc: "No PBNs (private blog networks), no automated spam backlinks, no fake reviews, and no deceptive guaranteed #1 rankings.",
    },
    {
      title: "Small client list, real attention",
      desc: "We strictly cap our client roster so that every brand receives direct founder-level engineering, analysis, and strategic attention.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Agency Story & Mission
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight leading-tight">
              We help Indian businesses get found in the age of AI search
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              Rank Rise Recognize started with a simple observation. Customers were
              no longer finding businesses only through Google&apos;s blue links.
              They were asking ChatGPT, reading Google&apos;s AI summaries, and
              trusting whatever those assistants recommended.
            </p>
          </section>

          {/* Narrative */}
          <section className="p-8 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
            <p>
              Most small and growing businesses had nobody helping them navigate
              this seismic shift. The traditional legacy agencies were still
              selling 2018 keyword lists and 40-page PDF reports filled with
              jargon, while the enterprise AI consulting firms were priced out of
              reach for Indian SMBs and D2C brands.
            </p>
            <p>
              So we built an agency around three simple, unshakeable promises —
              the exact three words in our name:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F4EFEA]">
              <div className="p-4 bg-[#FAF7F2] rounded-xs border border-[#E8E2D6]">
                <div className="font-serif text-xl font-medium text-[#1A1816]">
                  Rank
                </div>
                <div className="text-xs text-[#78716C] mt-1">
                  Show up top on Google search and local Google Maps.
                </div>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xs border border-[#E8E2D6]">
                <div className="font-serif text-xl font-medium text-[#1A1816]">
                  Rise
                </div>
                <div className="text-xs text-[#78716C] mt-1">
                  Turn organic visibility into qualified calls, leads, and orders.
                </div>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xs border border-[#E8E2D6]">
                <div className="font-serif text-xl font-medium text-[#1A1816]">
                  Recognize
                </div>
                <div className="text-xs text-[#78716C] mt-1">
                  Ensure ChatGPT, Gemini, and AI Overviews cite and recommend you.
                </div>
              </div>
            </div>
          </section>

          {/* Core Beliefs */}
          <section className="space-y-6">
            <div className="border-b border-[#E8E2D6] pb-3">
              <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
                What we believe
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {beliefs.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E8E2D6] p-6 rounded-xs space-y-2"
                >
                  <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                    Principle 0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="p-8 bg-[#1A1816] text-[#FAF7F2] rounded-xs text-center space-y-4">
            <h2 className="font-serif text-2xl font-medium">
              Experience the difference of founder-led search engineering
            </h2>
            <p className="text-xs sm:text-sm text-[#D6CFBE] max-w-md mx-auto">
              Get our free 10-prompt audit to see what AI assistants currently say
              about your business.
            </p>
            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#EAE2D5] transition-colors"
              >
                <Sparkles size={14} className="text-[#9C7D38]" />
                <span>Get Free AI Visibility Check</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
