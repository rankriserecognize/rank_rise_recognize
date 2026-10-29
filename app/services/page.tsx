import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Bot,
  MapPin,
  Layers,
  FileText,
  Share2,
  TrendingUp,
  Layout,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEO & AI Search Services | Rank Rise Recognize",
  description:
    "SEO, AEO, GEO, local SEO, content, social media, Google & Meta Ads and websites. Everything your brand needs to be found and chosen.",
};

export default function ServicesPage() {
  const coreServices = [
    {
      title: "SEO Services",
      tagline: "Rank for the searches that bring paying customers",
      icon: Search,
      bullets: [
        "Buying-intent keyword & competitor research",
        "Technical SEO, site speed & Core Web Vitals",
        "On-page optimization & architecture",
        "Ethical off-page authority building",
      ],
    },
    {
      title: "AEO (Answer Engine Optimization)",
      tagline: "Win Google AI Overviews, featured snippets & voice",
      icon: Layers,
      bullets: [
        "Structured 40–60 word answer blocks",
        "Full FAQ, Product, and Service Schema markup",
        "Entity clarity and brand consistency",
        "Monthly AI Overviews appearance tracking",
      ],
    },
    {
      title: "GEO (Generative Engine Optimization)",
      tagline: "Get cited and recommended by ChatGPT & Gemini",
      icon: Bot,
      bullets: [
        "AI prompt testing across ChatGPT, Gemini & Perplexity",
        "Citation-worthy data and comparison assets",
        "Authoritative third-party PR & directory mentions",
        "Monthly AI share-of-voice reporting",
      ],
    },
    {
      title: "Local SEO & Google Business Profile",
      tagline: "Own the Google Maps 3-pack in your city",
      icon: MapPin,
      bullets: [
        "Google Business Profile verification & optimization",
        "Weekly GBP posts, photos, and Q&A management",
        "Local citation syndication across India directories",
        "Review generation systems via WhatsApp & QR",
      ],
    },
  ];

  const growthServices = [
    {
      title: "Content & Strategic Blogs",
      desc: "Research-led articles written for humans, search engines, and AI models. 1,000–2,000 words, fact-checked and edited by a person.",
      icon: FileText,
    },
    {
      title: "Social Media Management",
      desc: "Consistent Instagram, Facebook, and LinkedIn posts and reels that build credibility before the customer makes a purchase decision.",
      icon: Share2,
    },
    {
      title: "Google & Meta Performance Ads",
      desc: "Search, Performance Max, and Meta campaigns that bring qualified leads immediately while organic search compounds.",
      icon: TrendingUp,
    },
  ];

  const foundationServices = [
    {
      title: "SEO-Ready Website Development",
      desc: "WordPress, Shopify, and custom-coded sites engineered mobile-first with clean schema, fast Core Web Vitals, and tracking from day one.",
      icon: Layout,
    },
    {
      title: "Website Maintenance & Care Plans",
      desc: "Regular updates, weekly backups, security monitoring, and speed checks handled every month so you never have to worry.",
      icon: Wrench,
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
              SERVICES DIRECTORY
            </div>
            <h1 className="text-display-hero">
              Everything you need to be found, chosen and recommended
            </h1>
            <p className="text-[18px] text-[#202020]/80 leading-relaxed font-normal">
              Your customers search in three places: Google search results,
              Google&apos;s AI summaries, and AI assistants like ChatGPT. Our
              core services win all three. Our growth services turn that
              visibility into leads and sales.
            </p>
          </div>
        </section>

        {/* 1. Core Search Visibility */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b-2 border-[#000000] pb-4 mb-8">
            <div className="text-[12px] font-bold uppercase text-[#72a4f2]">
              DISCIPLINE 01
            </div>
            <h2 className="text-section-title">
              Core Search Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="sticker-card p-8 sm:p-10 space-y-6 flex flex-col justify-between bg-white"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#72a4f2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-[26px] text-[#202020]">
                        {srv.title}
                      </h3>
                      <p className="text-[14px] text-[#202020]/75 font-semibold mt-1">
                        {srv.tagline}
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-[14px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] font-medium">
                      {srv.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t-2 border-[#e5e7eb]">
                    <Link
                      href="/#pricing"
                      className="inline-flex items-center gap-2 font-bold text-[14px] text-[#202020] hover:underline"
                    >
                      <span>View packages & pricing</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Growth Services */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b-2 border-[#000000] pb-4 mb-8">
            <div className="text-[12px] font-bold uppercase text-[#202020]/60">
              DISCIPLINE 02
            </div>
            <h2 className="text-section-title">
              Growth: Leads & Sales Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="sticker-card p-7 space-y-3 bg-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020]">
                    {srv.title}
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Foundation */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b-2 border-[#000000] pb-4 mb-8">
            <div className="text-[12px] font-bold uppercase text-[#202020]/60">
              DISCIPLINE 03
            </div>
            <h2 className="text-section-title">
              Foundation: High-Performance Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundationServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="sticker-card p-7 space-y-3 bg-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020]">
                    {srv.title}
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="oat-feature-card p-8 sm:p-12 text-center space-y-4">
            <h2 className="font-display text-[28px] sm:text-[36px] text-[#202020]">
              Not sure which capability fits your current stage?
            </h2>
            <p className="text-[16px] text-[#202020]/80 max-w-lg mx-auto font-normal">
              Get our complimentary 10-prompt AI visibility check. We&apos;ll audit
              where you stand on Google, ChatGPT, and Gemini.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
