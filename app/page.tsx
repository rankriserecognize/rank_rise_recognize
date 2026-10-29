"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Check,
  Search,
  Bot,
  MapPin,
  FileText,
  Share2,
  TrendingUp,
  Layout,
  Wrench,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Building2,
  Stethoscope,
  GraduationCap,
  Home as HomeIcon,
  UtensilsCrossed,
  Briefcase,
  Layers,
  BarChart3,
  ExternalLink,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuditModal from "./components/AuditModal";
import JsonLd from "./components/JsonLd";
import HeroSculptureFallback from "./components/HeroSculptureFallback";

// 3D Sculpture loaded strictly client-side to prevent SSR canvas issues
const HeroSculpture = dynamic(() => import("./components/HeroSculpture"), {
  ssr: false,
  loading: () => <HeroSculptureFallback />,
});

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [pricingPeriod, setPricingPeriod] = useState<"founding" | "regular">(
    "founding"
  );
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Quick audit inline form state
  const [quickAuditData, setQuickAuditData] = useState({
    businessName: "",
    websiteUrl: "",
    whatsapp: "",
  });
  const [quickAuditSubmitted, setQuickAuditSubmitted] = useState(false);

  const handleQuickAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickAuditData.businessName || !quickAuditData.websiteUrl) return;
    setQuickAuditSubmitted(true);
  };

  const faqs = [
    {
      q: "What is the difference between SEO, AEO and GEO?",
      a: "SEO (Search Engine Optimization) helps your website rank in Google's organic list of links. AEO (Answer Engine Optimization) helps your content become the direct, quoted answer in Google AI Overviews, featured snippets, and voice search. GEO (Generative Engine Optimization) helps generative AI models like ChatGPT, Gemini, and Perplexity cite and recommend your brand when users ask conversational questions. Modern buyers use all three, so winning modern search requires all three.",
    },
    {
      q: "How long does SEO and AI visibility take to show results?",
      a: "SEO is a compounding channel. Most businesses see early ranking movement and answer block appearances within 3 months, and significant revenue and organic lead growth within 6 to 12 months. Local SEO fixes and schema implementation often move faster. We never make deceptive overnight promises; we build real, permanent authority.",
    },
    {
      q: "Do you guarantee #1 rankings?",
      a: "No. Nobody controls Google's indexing algorithm or OpenAI's neural network weights. Any agency that guarantees #1 is either using high-risk spam tactics that risk permanent Google penalties or targeting zero-traffic keywords. We commit to transparent, founder-level execution every month and clear reporting on what moved.",
    },
    {
      q: "Can you get my brand mentioned in ChatGPT and Gemini?",
      a: "While no agency can programmatically force an LLM's response, we can measurably increase the likelihood. Generative models recommend brands that have consistent entity definitions, schema markup, and authoritative citations across industry directories, forums, and editorial platforms. We optimize those exact signals and track prompt citations monthly.",
    },
    {
      q: "Do I need to sign a long 12-month contract?",
      a: "No. All our plans require a 3-month initial commitment — the minimum time needed for search engines and AI crawlers to discover, index, and reflect architectural changes. After 90 days, you continue on a flexible month-to-month agreement.",
    },
    {
      q: "How do you report monthly results?",
      a: "You receive a clear, jargon-free report focused on what matters to your business: keyword position shifts, organic search clicks, Google Business Profile phone calls and direction requests, and prompt appearance share across ChatGPT and Gemini. Higher plans include a monthly 30-minute founder strategy review.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col selection:bg-[#9C7D38]/20 selection:text-[#1A1816]">
      <JsonLd />
      <Navbar onOpenAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================
            HERO SECTION: Spacious, Classic, Real 3D Sculpture
        ======================================================== */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-[#E8E2D6]/80">
          {/* Subtle warm paper grain background */}
          <div className="absolute inset-0 bg-[#FAF7F2] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Spacious Headline & Copy (7 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9C7D38]" />
                  SEO · AEO · GEO AGENCY FOR INDIAN BUSINESSES
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1816] font-medium tracking-tight leading-[1.12]">
                  Rank on Google. <br />
                  <span className="italic font-normal text-[#443E36]">
                    Rise in revenue.
                  </span>{" "}
                  <br />
                  Get recognised by AI.
                </h1>

                {/* Sub-headline */}
                <p className="text-base sm:text-lg text-[#57534E] font-normal leading-relaxed max-w-2xl">
                  Your customers no longer just Google you. They ask ChatGPT,
                  Gemini and Google&apos;s AI Overviews which brand to trust. We
                  make sure your business shows up in both places: the search
                  results and the AI answer.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsAuditModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1A1816] text-[#FAF7F2] font-semibold text-sm rounded-xs border border-[#1A1816] hover:bg-[#2B2724] hover:border-[#9C7D38] transition-all shadow-xs group cursor-pointer"
                  >
                    <Sparkles size={14} className="text-[#EADBB2]" />
                    <span>Get Your Free AI Visibility Audit</span>
                    <ArrowRight
                      size={14}
                      className="text-[#D6CFBE] group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>

                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-[#1A1816] font-semibold text-sm rounded-xs border border-[#D5CBB9] hover:bg-[#F4EFEA] hover:border-[#9C7D38] transition-all text-center"
                  >
                    See Transparent Pricing
                  </a>
                </div>

                {/* Trust Strip */}
                <div className="pt-3 border-t border-[#E8E2D6]/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#78716C]">
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9C7D38]" />
                    <span>Transparent pricing</span>
                  </div>
                  <span className="text-[#D5CBB9]">•</span>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9C7D38]" />
                    <span>3-month minimum, no 12-month lock-in</span>
                  </div>
                  <span className="text-[#D5CBB9]">•</span>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9C7D38]" />
                    <span>Monthly reports in plain English</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: 3D Interactive Sculpture (5 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                {/* Visual Label Frame */}
                <div className="relative rounded-xs border border-[#E8E2D6] bg-[#FFFFFF] p-2 sm:p-3 shadow-xs">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#F4EFEA] text-[10.5px] font-mono text-[#78716C]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#9C7D38] animate-pulse" />
                      INTERACTIVE 3D SCULPTURE
                    </span>
                    <span>MOVE CURSOR TO INSPECT</span>
                  </div>

                  {/* 3D Canvas Container */}
                  <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6] rounded-xs overflow-hidden flex items-center justify-center">
                    <HeroSculpture />
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 text-[11px] text-[#78716C] bg-[#FAF7F2] rounded-xs mt-1">
                    <span className="font-serif italic text-[#443E36]">
                      The Spiral of Growth & AI Recognition Orbit
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#9C7D38]">
                      Three.js / R3F
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            THE PROBLEM & PARADIGM SHIFT: SEO vs AEO vs GEO
        ======================================================== */}
        <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-4 mb-14">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                The Shift in Search
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Search has changed. Most marketing hasn&apos;t.
              </h2>
              <p className="text-base text-[#57534E] leading-relaxed">
                A few years ago, ranking #1 on Google was enough. Today, Google
                shows an AI summary above the links, and millions of Indians ask
                ChatGPT for recommendations before they visit any website. If your
                brand isn&apos;t in that answer, the customer may never scroll down
                to find you.
              </p>
              <p className="text-base text-[#57534E] leading-relaxed">
                Most agencies still sell 2018-style SEO: keywords, backlinks and
                a PDF report. We do that properly, and then we optimise for the
                answer engines your customers are using right now.
              </p>
            </div>

            {/* Comparison Grid: 2018 SEO vs 2026 Rank Rise Recognize */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Old Traditional SEO */}
              <div className="p-6 sm:p-8 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  The Old Model (2018)
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Traditional Keyword Rankings
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Focuses exclusively on ranking inside the standard 10 blue links
                  on Google search. Often relies on vanity keyword volume rather
                  than commercial intent.
                </p>
                <ul className="space-y-2 text-xs text-[#57534E] pt-2 border-t border-[#E8E2D6]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#78716C] font-mono">✕</span>
                    Ignores Google AI Overviews taking up the top 60% of the screen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#78716C] font-mono">✕</span>
                    Invisible when buyers prompt ChatGPT, Gemini, or Perplexity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#78716C] font-mono">✕</span>
                    Complex jargon reports that obscure true phone calls and revenue
                  </li>
                </ul>
              </div>

              {/* The Modern Engine: Rank Rise Recognize */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#9C7D38]/60 rounded-xs space-y-4 shadow-sm relative">
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#F6EED8] text-[#84682A] text-[10px] font-mono uppercase font-semibold rounded-xs">
                  The 2026 Standard
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
                  Rank Rise Recognize Strategy
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Search + Answer Engine Optimization
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  A unified search strategy designed for both traditional Google
                  search and generative answer engines. You rank on Google and get
                  cited as the recommended answer by AI models.
                </p>
                <ul className="space-y-2 text-xs text-[#44403C] pt-2 border-t border-[#E8E2D6]">
                  <li className="flex items-center gap-2 font-medium">
                    <Check size={14} className="text-[#9C7D38] shrink-0" />
                    Technical SEO and Local Google Maps dominance
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check size={14} className="text-[#9C7D38] shrink-0" />
                    Schema markup and structured answer blocks for AI Overviews
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check size={14} className="text-[#9C7D38] shrink-0" />
                    Entity authority across web indices so ChatGPT recommends you
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            THREE SERVICE PILLARS: Rank, Rise, Recognize
        ======================================================== */}
        <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                The Three-Step Promise
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                One agency for every place your customers search
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                The name tells our entire process: we get you ranked, we help your
                business rise, and we ensure you get recognized by modern AI.
              </p>
            </div>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: Rank */}
              <div className="classic-card p-8 rounded-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-[#FAF7F2] border border-[#E8E2D6] flex items-center justify-center text-[#9C7D38]">
                    <Search size={22} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Pillar 01 · Visibility
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                    Rank on Google and Maps
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    Technical SEO, on-page fixes, local SEO and content that earns
                    top positions for the searches that bring buyers, not just
                    visitors.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F4EFEA]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7D38] hover:text-[#84682A] group"
                  >
                    <span>Explore SEO services</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              {/* Pillar 2: Rise */}
              <div className="classic-card p-8 rounded-xs space-y-5 flex flex-col justify-between border-[#9C7D38]/40 shadow-md">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-[#F6EED8] border border-[#9C7D38]/50 flex items-center justify-center text-[#84682A]">
                    <TrendingUp size={22} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
                    Pillar 02 · Growth & CRO
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                    Rise in leads and sales
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    Blogs, social media, Google and Meta Ads, and fast websites
                    that turn visibility into direct phone calls, WhatsApp
                    enquiries, and customer orders.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F4EFEA]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7D38] hover:text-[#84682A] group"
                  >
                    <span>Explore growth services</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              {/* Pillar 3: Recognize */}
              <div className="classic-card p-8 rounded-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-[#FAF7F2] border border-[#E8E2D6] flex items-center justify-center text-[#9C7D38]">
                    <Bot size={22} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Pillar 03 · AI Search
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                    Get recognised by AI
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    AEO and GEO: structured answers, schema markup, and trusted
                    third-party citations so ChatGPT, Gemini, Perplexity and
                    Google AI Overviews name and recommend you.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F4EFEA]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7D38] hover:text-[#84682A] group"
                  >
                    <span>Explore AI search</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FULL SERVICES GRID: Simple cards without visual clutter
        ======================================================== */}
        <section id="all-services" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="space-y-3 max-w-2xl">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                  Complete Service Suite
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                  What we do
                </h2>
                <p className="text-sm sm:text-base text-[#57534E]">
                  Every service is engineered to rank you on Google, earn you
                  citations across AI search engines, and convert traffic into revenue.
                </p>
              </div>

              <div>
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs border border-[#1A1816] hover:bg-[#2E2A27] transition-colors cursor-pointer"
                >
                  <Sparkles size={13} className="text-[#EADBB2]" />
                  <span>Request Custom Scope</span>
                </button>
              </div>
            </div>

            {/* 9 Clean Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. SEO */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Search size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Core SEO
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  SEO Services
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Rank for the high-intent searches that bring paying customers.
                  Technical audits, Core Web Vitals, on-page optimization, and
                  ethical authority.
                </p>
              </div>

              {/* 2. AEO */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Layers size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#9C7D38] font-semibold">
                    AI Overviews
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  AEO (Answer Engine Optimization)
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Become the direct answer in Google AI Overviews, featured
                  snippets, People Also Ask boxes, and conversational voice search.
                </p>
              </div>

              {/* 3. GEO */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Bot size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#9C7D38] font-semibold">
                    LLM Search
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  GEO (Generative Engine Optimization)
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Get cited and recommended by ChatGPT, Gemini, Perplexity, and
                  Claude with structured entity definitions and citation PR.
                </p>
              </div>

              {/* 4. Local SEO */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Maps & GBP
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Local SEO & Google Business Profile
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Own the Google Maps 3-pack in your city with full profile
                  optimization, weekly posts, local citations, and QR review systems.
                </p>
              </div>

              {/* 5. Content & Blogs */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Editorial
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Content & Strategic Blogs
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Research-led articles written for humans, search engines, and
                  AI models. 1,000–2,000 words with schema markup and internal links.
                </p>
              </div>

              {/* 6. Social Media */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Share2 size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Social Trust
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Social Media Management
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Consistent Instagram, Facebook, and LinkedIn posts and reels
                  that build brand authority and trust before the customer buys.
                </p>
              </div>

              {/* 7. Google & Meta Ads */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Paid Acquisition
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Google & Meta Ads
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Targeted search and social campaigns that bring immediate qualified
                  leads while organic SEO compounds over the long term.
                </p>
              </div>

              {/* 8. Website Development */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Layout size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Engineered Sites
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Website Development
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  WordPress, Shopify, and custom-coded sites built SEO-ready from
                  day one with mobile-first speed, schema markup, and analytics.
                </p>
              </div>

              {/* 9. Website Maintenance */}
              <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E8E2D6] hover:border-[#9C7D38] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                    <Wrench size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#78716C]">
                    Care & Uptime
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Website Maintenance
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Security updates, daily/weekly backups, uptime monitoring, and
                  speed checks handled every month so your business stays live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            HOW WE WORK: 4 Clear Steps
        ======================================================== */}
        <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Transparent Execution
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                From invisible to recommended in four steps
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                A disciplined, predictable framework with clear milestones. No
                vague promises, no wasted time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-4 relative">
                <div className="text-3xl font-serif text-[#C5A566] font-light">
                  01
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  Week 1 · Assessment
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Audit
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  We check your current search rankings, technical website health,
                  Google Business Profile, and test how often AI assistants mention
                  you versus 3 key competitors.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-4 relative">
                <div className="text-3xl font-serif text-[#C5A566] font-light">
                  02
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  Week 2 · Blueprint
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Plan
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  You get a clear 90-day roadmap: target high-intent keywords,
                  specific AI prompts to win, landing pages to rebuild, and schema
                  architecture to deploy.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-4 relative">
                <div className="text-3xl font-serif text-[#C5A566] font-light">
                  03
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  Months 1–3 · Deployment
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Build
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  We fix all technical roadblocks, publish research-backed content,
                  integrate structured FAQ and Service schema, and build brand
                  mentions on trusted third-party directories.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-4 relative">
                <div className="text-3xl font-serif text-[#C5A566] font-light">
                  04
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  Monthly · Momentum
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Grow & Report
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  A plain-English monthly report detailing rankings, organic
                  traffic, phone calls, and AI mention share — paired with a strategy
                  review to align on next priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FOUNDING CLIENT OFFER: Exclusive Launch Banner
        ======================================================== */}
        <section className="py-12 bg-[#F6EED8] border-y border-[#DFD0B0]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-[10.5px] font-mono uppercase tracking-wider text-[#84682A] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9C7D38]" />
                  Launch Offer: 2 of 3 slots remaining
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1816]">
                  3 founding client slots open
                </h2>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-2xl leading-relaxed">
                  We&apos;re a new agency, and we want to earn our first case
                  studies the right way. Our first three clients get the full
                  AI-search playbook at launch pricing, locked for six months, in
                  exchange for an honest testimonial and permission to share results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <div className="text-right sm:mr-3">
                  <div className="text-xs font-mono text-[#78716C]">From</div>
                  <div className="font-serif text-2xl font-semibold text-[#1A1816]">
                    ₹7,999
                    <span className="text-xs font-sans text-[#78716C]">/mo + GST</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="px-6 py-3 bg-[#1A1816] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#1A1816] hover:bg-[#2B2724] transition-colors cursor-pointer"
                >
                  Claim a founding slot
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            TRANSPARENT PRICING: Founding vs Regular Packages
        ======================================================== */}
        <section id="pricing" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Transparent Rates
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Simple, transparent pricing
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                Every price is on this page. No &ldquo;call for a quote&rdquo; games,
                no 12-month lock-in. All prices are monthly and exclude 18% GST.
              </p>

              {/* Pricing Period Switcher */}
              <div className="pt-4 flex items-center justify-center">
                <div className="p-1 bg-[#EAE2D5] border border-[#DFD7C8] rounded-xs inline-flex">
                  <button
                    onClick={() => setPricingPeriod("founding")}
                    className={`px-4 py-2 text-xs font-semibold rounded-xs transition-all ${
                      pricingPeriod === "founding"
                        ? "bg-[#FFFFFF] text-[#1A1816] shadow-xs"
                        : "text-[#78716C] hover:text-[#1A1816]"
                    }`}
                  >
                    Founding Client Packages (Launch Offer)
                  </button>
                  <button
                    onClick={() => setPricingPeriod("regular")}
                    className={`px-4 py-2 text-xs font-semibold rounded-xs transition-all ${
                      pricingPeriod === "regular"
                        ? "bg-[#FFFFFF] text-[#1A1816] shadow-xs"
                        : "text-[#78716C] hover:text-[#1A1816]"
                    }`}
                  >
                    Regular Growth Packages
                  </button>
                </div>
              </div>
            </div>

            {/* FOUNDING PACKAGES */}
            {pricingPeriod === "founding" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Launch Basic */}
                  <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                        Launch Basic
                      </div>
                      <div className="space-y-1">
                        <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                          ₹7,999
                          <span className="text-xs font-sans font-normal text-[#78716C]">
                            {" "}
                            / month
                          </span>
                        </div>
                        <div className="text-xs text-[#78716C]">
                          Best for: One local shop or clinic
                        </div>
                      </div>

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
                          Technical SEO initial setup
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          Monthly plain-English performance report
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9] hover:bg-[#EAE2D5] transition-colors"
                    >
                      Start Basic
                    </button>
                  </div>

                  {/* Launch Plus */}
                  <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                        Launch Plus
                      </div>
                      <div className="space-y-1">
                        <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                          ₹13,499
                          <span className="text-xs font-sans font-normal text-[#78716C]">
                            {" "}
                            / month
                          </span>
                        </div>
                        <div className="text-xs text-[#78716C]">
                          Best for: Growing local business
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-xs text-[#44403C] pt-4 border-t border-[#F4EFEA]">
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          Google Business Profile setup + weekly posts
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          20 target keywords tracked
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
                          8 social media static posts (IG + FB)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          3 directory / citation listings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          Technical SEO setup + monthly health check
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          Monthly report
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9] hover:bg-[#EAE2D5] transition-colors"
                    >
                      Start Plus
                    </button>
                  </div>

                  {/* Launch Pro — MOST CHOSEN */}
                  <div className="classic-card p-8 rounded-xs space-y-6 flex flex-col justify-between border-2 border-[#9C7D38] shadow-lg relative bg-[#FFFFFF]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#9C7D38] text-[#FAF7F2] text-[10px] font-mono uppercase font-semibold tracking-wider rounded-xs">
                      Most Chosen · Launch Tier
                    </div>

                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
                        Launch Pro
                      </div>
                      <div className="space-y-1">
                        <div className="font-serif text-3xl font-semibold text-[#1A1816]">
                          ₹14,999
                          <span className="text-xs font-sans font-normal text-[#78716C]">
                            {" "}
                            / month
                          </span>
                        </div>
                        <div className="text-xs text-[#78716C]">
                          Best for: Local business or small D2C brand
                        </div>
                        <div className="text-[11px] font-mono text-[#84682A] pt-1">
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
                          12 social posts including 4 reels
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          5 directory / citation listings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          <strong>Free AI Visibility Audit</strong> (Worth ₹13,499)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#9C7D38]" />
                          Monthly report + 30-min strategy call
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-3.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs border border-[#1A1816] hover:bg-[#2B2724] transition-colors shadow-sm"
                    >
                      Claim a founding slot
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#F5EFE6] border border-[#E8E0D1] rounded-xs text-xs text-[#57534E] leading-relaxed">
                  <strong>Founding terms:</strong> 3-month minimum commitment.
                  Price locked for 6 months, then smoothly transitions to our
                  regular plans. In return, we ask for an honest testimonial, a
                  Google review, and permission to share your anonymized growth
                  metrics as a verified case study.
                </div>
              </div>
            )}

            {/* REGULAR PACKAGES */}
            {pricingPeriod === "regular" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Starter */}
                  <div className="classic-card p-6 rounded-xs space-y-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase text-[#78716C]">
                        Starter
                      </div>
                      <div className="font-serif text-2xl font-semibold text-[#1A1816]">
                        ₹22,499
                        <span className="text-xs font-sans text-[#78716C]">/mo</span>
                      </div>
                      <p className="text-xs text-[#78716C]">
                        Local business, 1 location
                      </p>
                      <ul className="space-y-2 text-xs text-[#57534E] pt-3 border-t border-[#F4EFEA]">
                        <li>• 25 keywords tracked</li>
                        <li>• 20 AI prompts (ChatGPT + Google)</li>
                        <li>• 2 SEO / GEO blogs / month</li>
                        <li>• Homepage Schema markup</li>
                        <li>• Google Business Profile + Local SEO</li>
                        <li>• Monthly PDF report</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-2.5 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9]"
                    >
                      Choose Starter
                    </button>
                  </div>

                  {/* Growth */}
                  <div className="classic-card p-6 rounded-xs space-y-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase text-[#78716C]">
                        Growth
                      </div>
                      <div className="font-serif text-2xl font-semibold text-[#1A1816]">
                        ₹49,499
                        <span className="text-xs font-sans text-[#78716C]">/mo</span>
                      </div>
                      <p className="text-xs text-[#78716C]">
                        Growing brands scaling traffic
                      </p>
                      <ul className="space-y-2 text-xs text-[#57534E] pt-3 border-t border-[#F4EFEA]">
                        <li>• 50 keywords tracked</li>
                        <li>• 40 AI prompts (ChatGPT)</li>
                        <li>• 6 SEO / GEO blogs / month</li>
                        <li>• Schema for up to 10 pages</li>
                        <li>• GBP + Local SEO included</li>
                        <li>• Quarterly strategy review</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-2.5 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9]"
                    >
                      Choose Growth
                    </button>
                  </div>

                  {/* AI Search Pro — MOST CHOSEN */}
                  <div className="classic-card p-6 rounded-xs space-y-5 flex flex-col justify-between border-2 border-[#9C7D38] bg-[#FFFFFF] shadow-md relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-[#9C7D38] text-[#FAF7F2] text-[9.5px] font-mono uppercase font-semibold rounded-xs">
                      Most Chosen
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                        AI Search Pro
                      </div>
                      <div className="font-serif text-2xl font-semibold text-[#1A1816]">
                        ₹53,999
                        <span className="text-xs font-sans text-[#78716C]">/mo</span>
                      </div>
                      <p className="text-xs text-[#78716C]">
                        D2C brands, clinics, growing SMBs (~₹1,775/day)
                      </p>
                      <ul className="space-y-2 text-xs text-[#1A1816] pt-3 border-t border-[#F4EFEA] font-medium">
                        <li>• 100 keywords tracked</li>
                        <li>• 100 AI prompts across all engines</li>
                        <li>• 8 SEO / GEO blogs / month</li>
                        <li>• Full-site Schema + FAQ blocks</li>
                        <li>• 4 third-party citations / PR mentions</li>
                        <li>• 12 social posts bundled (1 platform)</li>
                        <li>• Live dashboard + monthly call</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-2.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs border border-[#1A1816]"
                    >
                      Choose AI Search Pro
                    </button>
                  </div>

                  {/* Category Leader */}
                  <div className="classic-card p-6 rounded-xs space-y-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase text-[#78716C]">
                        Category Leader
                      </div>
                      <div className="font-serif text-2xl font-semibold text-[#1A1816]">
                        ₹1,12,499
                        <span className="text-xs font-sans text-[#78716C]">/mo</span>
                      </div>
                      <p className="text-xs text-[#78716C]">
                        Multi-city or ₹25Cr+ Indian brands
                      </p>
                      <ul className="space-y-2 text-xs text-[#57534E] pt-3 border-t border-[#F4EFEA]">
                        <li>• 250 keywords tracked</li>
                        <li>• 300 AI prompts (all engines + Claude)</li>
                        <li>• 16 articles incl. 2 pillar guides</li>
                        <li>• Full programmatic Schema</li>
                        <li>• 10 third-party authority placements</li>
                        <li>• Multi-location GBP & local SEO</li>
                        <li>• Dedicated search strategist</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-2.5 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold rounded-xs border border-[#D5CBB9]"
                    >
                      Choose Leader
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#F5EFE6] border border-[#E8E0D1] rounded-xs text-xs text-[#57534E] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <strong>Annual prepayment benefit:</strong> Pay for 10 months
                    upfront, get 12 full months of service.
                  </div>
                  <div>
                    <strong>GST:</strong> All prices are in INR and subject to 18% GST.
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            WHY BUSINESSES CHOOSE US: 6 Real Pillars
        ======================================================== */}
        <section id="about" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Agency Philosophy
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Why businesses choose Rank Rise Recognize
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                We stripped away the agency bloat, the layers of junior account
                managers, and the vanity metrics that don&apos;t pay the bills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  01 · Modern Metrics
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  We track AI visibility, not just rankings
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Every single plan includes a monthly check of the real questions
                  your buyers ask ChatGPT, Gemini, and Google AI Overviews.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  02 · Full Transparency
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Our prices are on the website
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  No &ldquo;call us for a quote&rdquo; games or inflated arbitrary
                  pitches. You know exactly what is included and what it costs.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  03 · Flexibility
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  No long lock-ins
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  A 3-month minimum to give search algorithms time to index our
                  structural improvements, then strictly month-to-month.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  04 · Direct Contact
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  You talk to the people doing the work
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  No junior account-manager relays or broken telephone. You work
                  directly with search strategists who write the code and content.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  05 · Human Editorial
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  No generic AI fluff
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  We use AI tools for research and velocity, but every article is
                  planned, fact-checked, and edited by a human for genuine expertise.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                  06 · Clarity
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                  Reports you can actually read
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Phone calls, leads, and revenue first; technical SEO jargon last.
                  A monthly executive summary that makes business sense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            INDUSTRIES SERVED: Clean architectural cards
        ======================================================== */}
        <section id="industries" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Market Specialization
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Built for growing Indian businesses
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                Tailored search architectures designed for how Indian consumers
                discover, evaluate, and purchase.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* D2C */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  D2C & E-Commerce Brands
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Get recommended when shoppers ask AI &ldquo;which brand should I
                  buy?&rdquo;. Shopify SEO, product schema, and &ldquo;best in
                  India&rdquo; comparison guides.
                </p>
              </div>

              {/* Clinics & Healthcare */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <Stethoscope size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Clinics & Healthcare Practices
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Be the medical practice patients find and trust first. Local
                  Google Maps pack, doctor profile schema, and compliant medical
                  answers.
                </p>
              </div>

              {/* Coaching & Education */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Coaching & Education Institutes
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Fill student batches from Google organic search, not just paid
                  ads. Course syllabus pages, results-driven content, and parent FAQs.
                </p>
              </div>

              {/* Real Estate */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <HomeIcon size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Real Estate & Developers
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Reach home buyers while they research locality amenities and
                  price trends. Locality guides, project pages, and high-intent ads.
                </p>
              </div>

              {/* Restaurants & Cafes */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <UtensilsCrossed size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Restaurants & Cafes
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Own &ldquo;near me&rdquo; food searches. Google Maps setup, menu
                  schema, high-resolution photo optimization, and review flows.
                </p>
              </div>

              {/* Local Professional Services */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="w-9 h-9 rounded-xs bg-[#FAF7F2] text-[#9C7D38] flex items-center justify-center">
                  <Building2 size={18} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                  Local Service Businesses
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  More direct phone inquiries from your city. Google Business
                  Profile ranking, service-area pages, and WhatsApp lead funnels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            RESULTS & TRANSPARENT VERIFICATION: No Invented Data
        ======================================================== */}
        <section id="results" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl space-y-4 mb-12">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Ethical Reporting
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Results we&apos;ll be proud to show you
              </h2>
              <p className="text-base text-[#57534E] leading-relaxed">
                We publish real numbers only: rankings, organic clicks, Google
                Business Profile phone calls, and AI prompt citations, measured
                from day one. We never invent testimonials, mock case studies, or
                make up client logos.
              </p>
            </div>

            {/* Verification Framework: 4 Core Tracking Metrics */}
            <div className="p-8 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D6] pb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                    Our Live Case Study Tracking Framework
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Currently onboarding our 3 founding clients. Verified data
                    will be published below with full audit trails.
                  </p>
                </div>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="px-4 py-2 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs border border-[#1A1816] hover:bg-[#332F2B] transition-colors"
                >
                  Join Founding Cohort
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="p-4 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#78716C]">
                    Metric 01
                  </div>
                  <div className="font-serif text-base font-semibold text-[#1A1816]">
                    Target Keyword Rank
                  </div>
                  <div className="text-[11px] text-[#57534E]">
                    Google Search Console & GA4
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#78716C]">
                    Metric 02
                  </div>
                  <div className="font-serif text-base font-semibold text-[#1A1816]">
                    Organic Buyer Clicks
                  </div>
                  <div className="text-[11px] text-[#57534E]">
                    Commercial intent visits only
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#78716C]">
                    Metric 03
                  </div>
                  <div className="font-serif text-base font-semibold text-[#1A1816]">
                    GBP Phone Calls
                  </div>
                  <div className="text-[11px] text-[#57534E]">
                    Direct Google Maps inquiries
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#78716C]">
                    Metric 04
                  </div>
                  <div className="font-serif text-base font-semibold text-[#1A1816]">
                    AI Prompt Citations
                  </div>
                  <div className="text-[11px] text-[#57534E]">
                    ChatGPT, Gemini & AI Overviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            LEAD GENERATION / AI VISIBILITY AUDIT HERO FORM
        ======================================================== */}
        <section id="audit" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                  Complimentary 10-Prompt Check
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                  Find out what Google and ChatGPT say about your business
                </h2>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  We&apos;ll test 10 real customer questions across ChatGPT,
                  Gemini, and Google AI Overviews, and show you where you appear,
                  where competitors appear, and what to fix first. Free, no
                  obligation, delivered in 3 working days.
                </p>

                <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#44403C]">
                  <div className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Your AI visibility score:</strong> How many of 10
                      customer questions recommend your brand.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Competitor benchmark:</strong> Which rival
                      businesses AI tools suggest instead of yours.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Top 3 priority fixes:</strong> Direct, actionable
                      adjustments to make in plain English.
                    </span>
                  </div>
                </div>
              </div>

              {/* Inline Form Card */}
              <div className="lg:col-span-6">
                <div className="bg-[#FFFFFF] border border-[#DFD7C8] rounded-xs p-6 sm:p-8 shadow-md">
                  {!quickAuditSubmitted ? (
                    <form onSubmit={handleQuickAuditSubmit} className="space-y-4">
                      <div className="font-serif text-xl font-medium text-[#1A1816]">
                        Request Free AI Visibility Check
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={quickAuditData.businessName}
                          onChange={(e) =>
                            setQuickAuditData({
                              ...quickAuditData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="e.g. Organic Heritage D2C"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Website or Google Maps URL *
                        </label>
                        <input
                          type="text"
                          required
                          value={quickAuditData.websiteUrl}
                          onChange={(e) =>
                            setQuickAuditData({
                              ...quickAuditData,
                              websiteUrl: e.target.value,
                            })
                          }
                          placeholder="https://yourbusiness.com"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={quickAuditData.whatsapp}
                          onChange={(e) =>
                            setQuickAuditData({
                              ...quickAuditData,
                              whatsapp: e.target.value,
                            })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#1A1816] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#1A1816] hover:bg-[#2B2724] transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Sparkles size={14} className="text-[#EADBB2]" />
                        <span>Get My Free AI Visibility Check</span>
                      </button>

                      <p className="text-[11px] text-center text-[#78716C] font-mono">
                        No spam. Delivered to your WhatsApp within 3 working days.
                      </p>
                    </form>
                  ) : (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#F6EED8] border border-[#9C7D38] flex items-center justify-center text-[#9C7D38]">
                        <Check size={24} />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-[#1A1816]">
                        Audit Queued Successfully
                      </h3>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        We have logged <strong>{quickAuditData.businessName}</strong>.
                        Our analysts will test 10 queries across ChatGPT, Gemini,
                        and Google AI Overviews and message your WhatsApp at{" "}
                        <strong>{quickAuditData.whatsapp}</strong>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FREQUENTLY ASKED QUESTIONS (FAQ)
        ======================================================== */}
        <section id="faq" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E2D6]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center space-y-3 mb-14">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                Questions & Answers
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                Frequently asked questions
              </h2>
              <p className="text-sm text-[#57534E]">
                Everything you need to know about our SEO, AEO, and GEO methodologies.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E8E2D6] rounded-xs bg-[#FAF7F2] overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#1A1816] hover:text-[#9C7D38] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#78716C] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#9C7D38]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#E8E2D6]/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            STRATEGIC LAUNCH BLOG PREVIEWS
        ======================================================== */}
        <section id="blog" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
                  Search & AI Intelligence
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium tracking-tight">
                  Latest insights from our lab
                </h2>
                <p className="text-sm text-[#57534E]">
                  In-depth strategic guides on winning modern search algorithms.
                </p>
              </div>

              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="text-xs font-semibold text-[#9C7D38] hover:text-[#84682A] flex items-center gap-1"
              >
                Subscribe to research updates →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#9C7D38] font-semibold">
                    Core Strategy · 2026
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816] hover:text-[#9C7D38] transition-colors cursor-pointer">
                    SEO vs AEO vs GEO: What Indian Businesses Need to Know in 2026
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Why the traditional 10 blue links on Google are no longer
                    sufficient, and how generative engines choose who gets cited.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F4EFEA] text-[11px] font-mono text-[#78716C]">
                  Target Keyword: SEO vs AEO vs GEO
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#9C7D38] font-semibold">
                    Generative Search
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816] hover:text-[#9C7D38] transition-colors cursor-pointer">
                    How to Get Your Brand Mentioned in ChatGPT (Step by Step)
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    The exact entity building, third-party citation, and schema
                    playbook required to make language models recognize your brand.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F4EFEA] text-[11px] font-mono text-[#78716C]">
                  Target Keyword: how to rank in ChatGPT
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#9C7D38] font-semibold">
                    Google AI Overviews
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1816] hover:text-[#9C7D38] transition-colors cursor-pointer">
                    Google AI Overviews: How to Show Up in Them
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    How to format concise 40–60 word answer blocks and structured
                    FAQ schema so Google quotes your website in its top AI snapshot.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F4EFEA] text-[11px] font-mono text-[#78716C]">
                  Target Keyword: Google AI Overviews optimization
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CONTACT CALL TO ACTION
        ======================================================== */}
        <section id="contact" className="py-20 lg:py-28 bg-[#1A1816] text-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#292524] border border-[#3E3832] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#EADBB2]">
              <Sparkles size={12} className="text-[#C5A566]" />
              Start Your Growth Journey
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#FAF7F2] leading-tight">
              Ready to rank on Google and be recommended by AI?
            </h2>

            <p className="text-sm sm:text-base text-[#D6CFBE] max-w-xl mx-auto leading-relaxed">
              We reply within one working day. Get your complimentary 10-prompt
              audit report or discuss a custom SEO + GEO growth retainer.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF7F2] text-[#1A1816] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#FAF7F2] hover:bg-[#EAE2D5] transition-colors cursor-pointer"
              >
                Get Free AI Visibility Check
              </button>

              <a
                href="mailto:contact@rankriserecognize.com"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#443E36] hover:border-[#9C7D38] transition-colors"
              >
                Email Our Strategists
              </a>
            </div>

            <div className="pt-6 text-xs text-[#A8A29E] font-mono">
              Bengaluru, Karnataka · Virtual Delivery Across India · +91 [Direct Support]
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
