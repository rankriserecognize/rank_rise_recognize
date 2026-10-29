import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
              ORIGIN & MISSION
            </div>
            <h1 className="text-display-hero">
              We help Indian businesses get found in the age of AI search
            </h1>
            <p className="text-[18px] text-[#202020]/80 leading-relaxed font-normal">
              Rank Rise Recognize started with a simple observation. Customers were
              no longer finding businesses only through Google&apos;s blue links.
              They were asking ChatGPT, reading Google&apos;s AI summaries, and
              trusting whatever those assistants recommended.
            </p>
          </section>

          {/* Narrative */}
          <section className="sticker-card p-8 sm:p-12 space-y-6 text-[16px] text-[#202020]/85 leading-relaxed bg-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t-2 border-[#e5e7eb]">
              <div className="p-6 bg-[#e9dfd2] rounded-[24px] border-2 border-[#000000]">
                <div className="font-display text-[24px] text-[#202020]">
                  Rank
                </div>
                <div className="text-[14px] text-[#202020]/80 mt-1 font-medium">
                  Show up top on Google search and local Google Maps.
                </div>
              </div>
              <div className="p-6 bg-[#72a4f2] rounded-[24px] border-2 border-[#000000]">
                <div className="font-display text-[24px] text-[#202020]">
                  Rise
                </div>
                <div className="text-[14px] text-[#202020] mt-1 font-semibold">
                  Turn organic visibility into qualified calls, leads, and orders.
                </div>
              </div>
              <div className="p-6 bg-[#aac9f7] rounded-[24px] border-2 border-[#000000]">
                <div className="font-display text-[24px] text-[#202020]">
                  Recognize
                </div>
                <div className="text-[14px] text-[#202020]/80 mt-1 font-medium">
                  Ensure ChatGPT, Gemini, and AI Overviews cite and recommend you.
                </div>
              </div>
            </div>
          </section>

          {/* Core Beliefs */}
          <section className="space-y-6">
            <div className="border-b-2 border-[#000000] pb-3">
              <div className="text-[12px] font-bold uppercase text-[#72a4f2]">
                OUR PRINCIPLES
              </div>
              <h2 className="text-section-title">
                What we believe
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {beliefs.map((b, idx) => (
                <div
                  key={idx}
                  className="sticker-card p-8 space-y-2 bg-white"
                >
                  <div className="text-[12px] font-bold text-[#72a4f2] uppercase">
                    PRINCIPLE // 0{idx + 1}
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020]">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-[#202020]/80 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="oat-feature-card p-10 sm:p-14 text-center space-y-4">
            <h2 className="font-display text-[28px] sm:text-[36px] text-[#202020]">
              Experience the difference of founder-led search engineering
            </h2>
            <p className="text-[16px] text-[#202020]/80 max-w-md mx-auto font-normal">
              Get our free 10-prompt audit to see what AI assistants currently say
              about your business.
            </p>
            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="btn-kofi-primary text-[15px] px-8 py-3.5"
              >
                <span>Get Free AI Visibility Check</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
