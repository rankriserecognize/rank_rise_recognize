import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
              TRANSPARENT RATES
            </div>
            <h1 className="text-display-hero">
              Simple, transparent pricing
            </h1>
            <p className="text-[18px] text-[#202020]/80 font-normal">
              Every price is on this page. No &ldquo;call for a quote&rdquo;, no
              12-month lock-in. All prices are monthly and exclude 18% GST.
            </p>
          </div>
        </section>

        {/* Founding Offer Banner */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-12">
          <div className="oat-feature-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[11px] font-bold uppercase tracking-wider text-[#202020]">
                Founding Client Offer · 2 of 3 slots left
              </span>
              <div className="font-display text-[24px] text-[#202020]">
                Launch pricing locked for 6 months
              </div>
              <p className="text-[14px] text-[#202020]/80 font-medium">
                In exchange for an honest testimonial, a Google review, and
                permission to feature verified results in our case study series.
              </p>
            </div>

            <Link
              href="/ai-visibility-audit"
              className="btn-kofi-primary text-[14px] px-6 py-3 shrink-0"
            >
              Claim a founding slot
            </Link>
          </div>
        </section>

        {/* Founding Packages Grid */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Launch Basic */}
            <div className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="text-[12px] font-bold uppercase text-[#202020]/60">
                  Launch Basic
                </div>
                <div>
                  <div className="font-display text-[36px] text-[#202020]">
                    ₹7,999
                    <span className="text-[14px] font-sans font-normal text-[#202020]/70">/mo</span>
                  </div>
                  <div className="text-[13px] text-[#202020]/70 font-medium mt-1">
                    Best for: Single local clinic or store
                  </div>
                </div>

                <ul className="space-y-2 text-[14px] text-[#202020]/80 pt-4 border-t-2 border-[#e5e7eb] font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    GBP setup + weekly updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    15 target keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    1 research blog (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    On-page SEO (Homepage + 2 pages)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    2 directory citations / month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    Monthly performance report
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="btn-kofi-outline w-full py-2.5 text-center text-[13px]"
              >
                Start Basic
              </Link>
            </div>

            {/* Launch Plus */}
            <div className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="text-[12px] font-bold uppercase text-[#202020]/60">
                  Launch Plus
                </div>
                <div>
                  <div className="font-display text-[36px] text-[#202020]">
                    ₹13,499
                    <span className="text-[14px] font-sans font-normal text-[#202020]/70">/mo</span>
                  </div>
                  <div className="text-[13px] text-[#202020]/70 font-medium mt-1">
                    Best for: Multi-service local businesses
                  </div>
                </div>

                <ul className="space-y-2 text-[14px] text-[#202020]/80 pt-4 border-t-2 border-[#e5e7eb] font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    GBP setup + weekly updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    20 target keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    3 research blogs (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    On-page SEO for 5 pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    8 social posts (IG + FB)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    Monthly performance report
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="btn-kofi-outline w-full py-2.5 text-center text-[13px]"
              >
                Start Plus
              </Link>
            </div>

            {/* Launch Pro — MOST POPULAR */}
            <div className="sticker-card p-8 space-y-6 flex flex-col justify-between border-3 border-[#000000] relative bg-white">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#72a4f2] text-[#202020] text-[11px] font-bold rounded-full border-2 border-[#000000]">
                Most Chosen
              </div>

              <div className="space-y-4">
                <div className="text-[12px] font-bold uppercase text-[#202020]">
                  Launch Pro
                </div>
                <div>
                  <div className="font-display text-[36px] text-[#202020]">
                    ₹14,999
                    <span className="text-[14px] font-sans font-normal text-[#202020]/70">/mo</span>
                  </div>
                  <div className="text-[13px] text-[#202020]/70 font-medium mt-1">
                    Best for: Local business or D2C brand
                  </div>
                  <div className="text-[12px] font-bold text-[#202020] pt-1">
                    Worth ₹35,998 regular · Just ₹500/day
                  </div>
                </div>

                <ul className="space-y-2 text-[14px] text-[#202020] pt-4 border-t-2 border-[#e5e7eb] font-semibold">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    GBP setup + weekly updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    30 target keywords tracked
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    4 research blogs (~1,200 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    5 pages + FAQ Schema markup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    25 AI prompts tracked (ChatGPT, Gemini)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    12 social posts incl. 4 reels
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#000000]" />
                    Monthly report + 30-min strategy call
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-visibility-audit"
                className="btn-kofi-primary w-full py-3.5 text-center text-[15px]"
              >
                Claim a founding slot
              </Link>
            </div>
          </div>
        </section>

        {/* Regular Growth Retainers */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b-2 border-[#000000] pb-4 mb-8 text-center sm:text-left">
            <div className="text-[12px] font-bold uppercase text-[#202020]/60">
              LONG-TERM COMPOUNDING
            </div>
            <h2 className="text-section-title">
              Regular Growth Retainers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="sticker-card p-6 space-y-4 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[12px] font-bold text-[#202020]/60 uppercase">Starter</div>
                <div className="font-display text-[28px] text-[#202020] mt-1">₹22,499<span className="text-xs font-normal text-[#202020]/70">/mo</span></div>
                <p className="text-xs text-[#202020]/70 mt-1">Local business, 1 location</p>
                <ul className="space-y-1.5 text-[12px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] mt-3 font-medium">
                  <li>• 25 keywords tracked</li>
                  <li>• 20 AI prompts tested</li>
                  <li>• 2 blogs / month</li>
                  <li>• Homepage Schema</li>
                  <li>• GBP + Local SEO</li>
                </ul>
              </div>
              <Link href="/ai-visibility-audit" className="btn-kofi-outline w-full text-center text-[13px] py-2">
                Choose Starter
              </Link>
            </div>

            {/* Growth */}
            <div className="sticker-card p-6 space-y-4 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[12px] font-bold text-[#202020]/60 uppercase">Growth</div>
                <div className="font-display text-[28px] text-[#202020] mt-1">₹49,499<span className="text-xs font-normal text-[#202020]/70">/mo</span></div>
                <p className="text-xs text-[#202020]/70 mt-1">Growing brand scaling</p>
                <ul className="space-y-1.5 text-[12px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] mt-3 font-medium">
                  <li>• 50 keywords tracked</li>
                  <li>• 40 AI prompts tested</li>
                  <li>• 6 blogs / month</li>
                  <li>• Schema for 10 pages</li>
                  <li>• Quarterly strategy call</li>
                </ul>
              </div>
              <Link href="/ai-visibility-audit" className="btn-kofi-outline w-full text-center text-[13px] py-2">
                Choose Growth
              </Link>
            </div>

            {/* AI Search Pro */}
            <div className="sticker-card p-6 space-y-4 flex flex-col justify-between border-3 border-[#000000] bg-white">
              <div>
                <div className="text-[12px] font-bold text-[#202020] uppercase">AI Search Pro</div>
                <div className="font-display text-[28px] text-[#202020] mt-1">₹53,999<span className="text-xs font-normal text-[#202020]/70">/mo</span></div>
                <p className="text-xs text-[#202020]/70 mt-1">D2C brands & clinics</p>
                <ul className="space-y-1.5 text-[12px] text-[#202020] pt-3 border-t-2 border-[#e5e7eb] mt-3 font-semibold">
                  <li>• 100 keywords tracked</li>
                  <li>• 100 AI prompts</li>
                  <li>• 8 blogs / month</li>
                  <li>• Full-site Schema</li>
                  <li>• 4 authority citations</li>
                  <li>• Monthly founder call</li>
                </ul>
              </div>
              <Link href="/ai-visibility-audit" className="btn-kofi-primary w-full text-center text-[13px] py-2">
                Choose Pro
              </Link>
            </div>

            {/* Category Leader */}
            <div className="sticker-card p-6 space-y-4 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[12px] font-bold text-[#202020]/60 uppercase">Category Leader</div>
                <div className="font-display text-[28px] text-[#202020] mt-1">₹1,12,499<span className="text-xs font-normal text-[#202020]/70">/mo</span></div>
                <p className="text-xs text-[#202020]/70 mt-1">Multi-city & ₹25Cr+ brands</p>
                <ul className="space-y-1.5 text-[12px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] mt-3 font-medium">
                  <li>• 250 keywords tracked</li>
                  <li>• 300 AI prompts</li>
                  <li>• 16 articles / month</li>
                  <li>• Programmatic Schema</li>
                  <li>• 10 authority PR links</li>
                  <li>• Dedicated strategist</li>
                </ul>
              </div>
              <Link href="/ai-visibility-audit" className="btn-kofi-outline w-full text-center text-[13px] py-2">
                Choose Leader
              </Link>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="border-b-2 border-[#000000] pb-4 mb-8">
            <div className="text-[12px] font-bold uppercase text-[#202020]/60">
              CUSTOM EXTENSIONS
            </div>
            <h2 className="text-section-title">
              Specialized Add-On Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} className="sticker-card p-7 space-y-3 bg-white">
                <div className="text-[14px] font-bold text-[#202020]">
                  {addon.price}
                </div>
                <h3 className="font-display text-[20px] text-[#202020]">
                  {addon.service}
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
