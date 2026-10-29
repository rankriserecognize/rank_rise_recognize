import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEO Packages & Pricing in India | Rank Rise Recognize",
  description:
    "Transparent SEO, AEO and GEO packages from ₹7,999/month. No hidden fees, 3-month minimum, monthly reports. See what's included.",
};

export default function PricingPage() {
  const addOns = [
    {
      service: "AI Visibility Audit (Full Diagnostic)",
      price: "₹13,499 one-time",
      desc: "50+ prompts tested across ChatGPT, Gemini, Perplexity, and AI Overviews. 3 competitor benchmarks. Fee credited 100% if signing a 6-month retainer.",
    },
    {
      service: "Social Media Management — Basic",
      price: "₹13,499 / month",
      desc: "12 posts, 2 platforms (IG + FB), graphic design, captions, and scheduling.",
    },
    {
      service: "Social Media Management — Growth",
      price: "₹26,999 / month",
      desc: "20 posts including 6 reels, 3 platforms, community replies, and monthly growth report.",
    },
    {
      service: "Google & Meta Ads Management",
      price: "13.5% of spend (min ₹13,500)",
      desc: "Account audit, tracking setup, creative copy direction, and weekly optimization. Ad budget paid directly by you.",
    },
    {
      service: "SEO-Ready WordPress Website",
      price: "₹35,999 – ₹71,999 one-time",
      desc: "Mobile-first, Core Web Vitals optimized, complete on-page schema, GA4 and Search Console setup.",
    },
    {
      service: "Shopify Store / Custom Build",
      price: "Custom Quote",
      desc: "Scoped transparently after a 20-minute architecture review.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Transparent Agency Pricing
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-base sm:text-lg text-[#57534E]">
              Every price is on this page. No &ldquo;call for a quote&rdquo;, no
              12-month lock-in. All prices are monthly and exclude 18% GST.
            </p>
          </div>
        </section>

        {/* Founding Offer Banner */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
          <div className="p-6 bg-[#F6EED8] border border-[#DFD0B0] rounded-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase bg-[#FFFFFF] px-2.5 py-0.5 rounded-xs border border-[#D5CBB9] text-[#84682A] font-semibold">
                Founding Client Offer · 2 of 3 slots left
              </span>
              <div className="font-serif text-xl font-medium text-[#1A1816]">
                Launch pricing locked for 6 months
              </div>
              <p className="text-xs text-[#57534E]">
                In exchange for an honest testimonial, a Google review, and
                permission to feature verified results in our case study series.
              </p>
            </div>

            <Link
              href="/ai-visibility-audit"
              className="px-6 py-2.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs uppercase tracking-wider shrink-0"
            >
              Claim a founding slot
            </Link>
          </div>
        </section>

        {/* Founding Packages Grid */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Launch Basic */}
            <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-[#78716C]">
                  Launch Basic
                </div>
                <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                  ₹7,999
                  <span className="text-xs font-sans text-[#78716C]">/mo</span>
                </div>
                <p className="text-xs text-[#78716C]">
                  Best for: One local shop or single practice
                </p>

                <ul className="space-y-2.5 text-xs text-[#44403C] pt-4 border-t border-[#F4EFEA]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Google Business Profile setup + weekly posts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    15 high-intent keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    1 SEO / GEO blog (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    On-page SEO for Homepage + 2 pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    2 directory / citation listings per month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Monthly performance report
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="w-full py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9] text-center"
              >
                Start Basic
              </Link>
            </div>

            {/* Launch Plus */}
            <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-[#78716C]">
                  Launch Plus
                </div>
                <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                  ₹13,499
                  <span className="text-xs font-sans text-[#78716C]">/mo</span>
                </div>
                <p className="text-xs text-[#78716C]">
                  Best for: Growing local business
                </p>

                <ul className="space-y-2.5 text-xs text-[#44403C] pt-4 border-t border-[#F4EFEA]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Google Business Profile setup + weekly posts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    20 keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    3 SEO / GEO blogs (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    On-page SEO for 5 key pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    8 social posts (IG + FB)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Monthly report
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="w-full py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9] text-center"
              >
                Start Plus
              </Link>
            </div>

            {/* Launch Pro — MOST CHOSEN */}
            <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between border-2 border-[#9C7D38] shadow-lg relative bg-[#FFFFFF]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#9C7D38] text-[#FAF7F2] text-[10px] font-mono uppercase font-semibold tracking-wider rounded-xs">
                Most Chosen
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  Launch Pro
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                    ₹14,999
                    <span className="text-xs font-sans text-[#78716C]">/mo</span>
                  </div>
                  <div className="text-xs text-[#78716C]">
                    Best for: Local business or small D2C brand
                  </div>
                  <div className="text-[11px] font-mono text-[#84682A]">
                    Worth ₹35,998 at regular rates · Just ₹500/day
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#1A1816] pt-4 border-t border-[#F4EFEA] font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Google Business Profile setup + weekly posts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    30 keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    4 SEO / GEO blogs (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    5 key pages + FAQ Schema markup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    25 AI prompts tracked (ChatGPT, Gemini, AI Overviews)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    12 social posts incl. 4 reels
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Free AI Visibility Audit (Worth ₹13,499)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#9C7D38]" />
                    Monthly report + 30-min strategy call
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="w-full py-3.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs border border-[#1A1816] hover:bg-[#2B2724] text-center"
              >
                Claim a founding slot
              </Link>
            </div>
          </div>
        </section>

        {/* Add-ons and One-Time Projects */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b border-[#E8E2D6] pb-4 mb-8">
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Add-ons & Specialized Projects
            </h2>
            <p className="text-xs text-[#78716C] mt-1">
              Stand-alone audits, creative sprints, and custom technical builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((ao, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8E2D6] p-6 rounded-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-semibold text-[#1A1816]">
                    {ao.service}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-[#9C7D38] shrink-0">
                    {ao.price}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {ao.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="border-b border-[#E8E2D6] pb-4 mb-8 text-center">
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Pricing & Billing FAQs
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#57534E]">
            <div className="p-5 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1.5">
              <div className="font-serif text-base font-medium text-[#1A1816]">
                Why is there a 3-month minimum commitment?
              </div>
              <p>
                SEO and generative AI visibility require time to show compounding
                effects. Search engine crawlers take 30–60 days to index new
                schema, re-evaluate site architecture, and update model weights.
                Three months is the honest minimum to deliver real movement.
                After 90 days, you continue on a flexible month-to-month basis.
              </p>
            </div>

            <div className="p-5 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1.5">
              <div className="font-serif text-base font-medium text-[#1A1816]">
                Do you offer annual discounts?
              </div>
              <p>
                Yes. If you choose to prepay for 10 months upfront, you receive
                12 full consecutive months of retainer service.
              </p>
            </div>

            <div className="p-5 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1.5">
              <div className="font-serif text-base font-medium text-[#1A1816]">
                Is ad spend included in the Google/Meta ads fee?
              </div>
              <p>
                No. You pay Google and Meta directly via your own corporate credit
                card or billing account. Our fee covers strategy, tracking setup,
                copywriting, and weekly bid optimization.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
