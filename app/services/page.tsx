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
  ArrowRight,
  Sparkles,
  Check,
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Services Hub
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1816] font-medium tracking-tight leading-tight">
              Everything you need to be found, chosen and recommended
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              Your customers search in three places: Google search results,
              Google&apos;s AI summaries, and AI assistants like ChatGPT. Our
              core services win all three. Our growth services turn that
              visibility into leads and sales.
            </p>
          </div>
        </section>

        {/* 1. Core Search Visibility */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b border-[#E8E2D6] pb-4 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
              Category 01
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Core Search Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="classic-card p-8 rounded-xs space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xs bg-[#FAF7F2] border border-[#E8E2D6] flex items-center justify-center text-[#9C7D38]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-mono text-[#78716C] mt-1">
                        {srv.tagline}
                      </p>
                    </div>

                    <ul className="space-y-2 text-xs text-[#57534E] pt-2 border-t border-[#F4EFEA]">
                      {srv.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#F4EFEA]">
                    <Link
                      href="/#pricing"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7D38] hover:text-[#84682A]"
                    >
                      <span>View packages & pricing</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Growth: Leads and Sales */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b border-[#E8E2D6] pb-4 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
              Category 02
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Growth: Leads & Sales Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E8E2D6] p-6 rounded-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Foundation: Website Engineering */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-20">
          <div className="border-b border-[#E8E2D6] pb-4 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
              Category 03
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Foundation: High-Performance Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundationServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E8E2D6] p-6 rounded-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="p-8 sm:p-12 bg-[#1A1816] text-[#FAF7F2] rounded-xs text-center space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium">
              Not sure which service fits your current stage?
            </h2>
            <p className="text-xs sm:text-sm text-[#D6CFBE] max-w-lg mx-auto">
              Get our complimentary 10-prompt AI visibility check. We&apos;ll audit
              where you stand on Google, ChatGPT, and Gemini, and recommend the
              exact priorities to address first.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
