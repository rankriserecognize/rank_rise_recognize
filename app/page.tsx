"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import {
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
  ChevronDown,
  Building2,
  Stethoscope,
  GraduationCap,
  Home as HomeIcon,
  UtensilsCrossed,
  Briefcase,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuditModal from "./components/AuditModal";
import JsonLd from "./components/JsonLd";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [pricingPeriod, setPricingPeriod] = useState<"founding" | "regular">(
    "founding"
  );
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeCategoryTag, setActiveCategoryTag] = useState("All");

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

  const categoryTags = [
    { label: "All Disciplines", icon: Sparkles },
    { label: "Google SEO", icon: Search },
    { label: "AI Overviews (AEO)", icon: Layers },
    { label: "ChatGPT & Gemini (GEO)", icon: Bot },
    { label: "Google Maps 3-Pack", icon: MapPin },
    { label: "Content & Blogs", icon: FileText },
    { label: "Google & Meta Ads", icon: TrendingUp },
  ];

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
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans">
      <JsonLd />
      <Navbar onOpenAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        {/* Reading Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-[#72a4f2] origin-left z-50 border-b-2 border-black"
          style={{ scaleX }}
        />

        {/* ========================================================
            HERO SECTION: Ko-fi Warm Café Canvas with Centered Chunky Display Headline
        ======================================================== */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Hand-set Tag Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[13px] font-bold text-[#202020] tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#72a4f2]" />
                <span>SEO · AEO · GEO AGENCY FOR INDIAN BUSINESSES</span>
              </div>

              {/* Chunky bogue-black / Lilita One Display Headline */}
              <h1 className="text-display-hero max-w-4xl mx-auto">
                Rank on Google. Rise in revenue. Get recognised by AI.
              </h1>

              {/* DM Sans Subtitle at 20px */}
              <p className="text-[18px] sm:text-[20px] text-[#202020]/80 font-normal leading-relaxed max-w-2xl mx-auto">
                Your customers no longer just Google you. They ask ChatGPT,
                Gemini and Google&apos;s AI Overviews which brand to trust. We
                make sure your business shows up in both places: the search
                results and the AI answer.
              </p>

              {/* Pill Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsAuditModalOpen(true)}
                  className="btn-kofi-primary text-[16px] px-8 py-3.5 w-full sm:w-auto cursor-pointer"
                >
                  <span>Get Your Free AI Visibility Audit</span>
                  <ArrowRight size={16} />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#pricing"
                  className="btn-kofi-outline text-[16px] px-7 py-3.5 w-full sm:w-auto text-center"
                >
                  See Pricing Packages
                </motion.a>
              </div>

              {/* Tactile Trust Notes */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#202020]/75 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Check size={16} className="text-[#000000]" />
                  Transparent pricing
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Check size={16} className="text-[#000000]" />
                  3-month minimum, no 12-month lock-in
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Check size={16} className="text-[#000000]" />
                  Plain English reports
                </span>
              </div>

              {/* Founding Cohort Banner Badge */}
              <div className="pt-3 flex justify-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#e9dfd2] border-2 border-[#000000] text-[13px] text-[#202020] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#72a4f2] animate-pulse" />
                  <span>Founding Cohort Active: Launch from ₹7,999/mo + GST</span>
                  <span className="text-[#202020]/40 hidden sm:inline">•</span>
                  <button
                    onClick={() => setIsAuditModalOpen(true)}
                    className="font-bold underline hover:text-[#72a4f2] transition-colors cursor-pointer"
                  >
                    Claim Free 10-Prompt Check →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            CATEGORY TAG ROW: Wrapped Pill Chips with Leading Icons
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="py-6 border-y-2 border-[#000000]/10 bg-[#e9dfd2]/50"
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categoryTags.map((tag, idx) => {
                const Icon = tag.icon;
                const isActive = activeCategoryTag === tag.label;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => setActiveCategoryTag(tag.label)}
                    className={`tag-pill cursor-pointer ${
                      isActive ? "bg-[#72a4f2] font-bold" : ""
                    }`}
                  >
                    <Icon size={18} className="text-[#202020]" />
                    <span>{tag.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ========================================================
            THE PROBLEM & SHIFT: 2 Sticker Cards with 2.5px Black Borders
        ======================================================== */}
        <section className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl space-y-3 mb-14 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                SEARCH HAS CHANGED
              </div>
              <h2 className="text-section-title">
                Search has changed. Most marketing hasn&apos;t.
              </h2>
              <p className="text-[17px] text-[#202020]/80 leading-relaxed font-normal">
                A few years ago, ranking #1 on Google was enough. Today, Google
                shows an AI summary above the links, and millions of Indians ask
                ChatGPT for recommendations before they visit any website. If your
                brand isn&apos;t in that answer, the customer may never scroll down
                to find you.
              </p>
            </motion.div>

            {/* 2 Comparison Cards (40px radius, 2.5px solid #000000 border, no shadow) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 01: Legacy 2018 Model */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-8 sm:p-10 space-y-5 bg-white"
              >
                <div className="flex items-center justify-between border-b-2 border-[#000000] pb-3 text-[13px] font-bold text-[#202020]">
                  <span>01 // THE 2018 MODEL</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e5e7eb] border border-[#000000]">
                    Outdated
                  </span>
                </div>

                <h3 className="font-display text-[26px] text-[#202020]">
                  Traditional Keyword Rankings
                </h3>

                <p className="text-[15px] text-[#202020]/80 leading-relaxed">
                  Focuses strictly on vanity rankings inside Google&apos;s 10 blue
                  links. Frequently targets irrelevant informational volume rather
                  than commercial intent.
                </p>

                <ul className="space-y-3 text-[14px] text-[#202020]/80 pt-4 border-t-2 border-[#e5e7eb] font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#e5e7eb] border border-[#000000] flex items-center justify-center text-[12px] font-bold">✕</span>
                    Ignores Google AI Overviews taking up 60% of screen real estate
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#e5e7eb] border border-[#000000] flex items-center justify-center text-[12px] font-bold">✕</span>
                    Invisible when buyers prompt ChatGPT, Gemini, or Perplexity
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#e5e7eb] border border-[#000000] flex items-center justify-center text-[12px] font-bold">✕</span>
                    Jargon-heavy PDF reports that obscure phone calls and revenue
                  </li>
                </ul>
              </motion.div>

              {/* Card 02: 2026 Active Architecture (Oat Cream & Cobalt Pop Pill) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-8 sm:p-10 space-y-5 bg-[#ffffff] border-3 border-[#000000] relative"
              >
                <div className="flex items-center justify-between border-b-2 border-[#000000] pb-3 text-[13px] font-bold text-[#202020]">
                  <span>02 // 2026 ACTIVE SPEC</span>
                  <span className="px-3 py-0.5 rounded-full bg-[#72a4f2] border-2 border-[#000000] text-[12px]">
                    Optimized
                  </span>
                </div>

                <h3 className="font-display text-[26px] text-[#202020]">
                  Search + Answer Engine Architecture
                </h3>

                <p className="text-[15px] text-[#202020]/80 leading-relaxed">
                  A unified search architecture engineered for both traditional Google
                  search and generative answer engines. You rank on Google and get
                  cited as the recommended answer by AI assistants.
                </p>

                <ul className="space-y-3 text-[14px] text-[#202020] pt-4 border-t-2 border-[#e5e7eb] font-semibold">
                  <li className="flex items-center gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0" />
                    Technical SEO and Local Google Maps 3-pack dominance
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0" />
                    Structured schema and direct answer blocks for AI Overviews
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0" />
                    Entity authority across web indices so ChatGPT recommends you
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            THREE SERVICE PILLARS: Rank, Rise, Recognize
            - 3 Pillow-soft Sticker Cards
        ======================================================== */}
        <section id="services" className="py-20 lg:py-28 bg-[#e9dfd2]/60 border-y-2 border-[#000000]/10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                THE THREE-STEP PROMISE
              </div>
              <h2 className="text-section-title">
                One agency for every place your customers search
              </h2>
              <p className="text-[17px] text-[#202020]/80 max-w-xl mx-auto">
                The name tells our entire process: we get you ranked, we help your
                business rise, and we ensure you get recognized by modern AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: Rank */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Search size={22} />
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#202020]/70">
                    Pillar 01 · Visibility
                  </div>
                  <h3 className="font-display text-[26px] text-[#202020]">
                    Rank on Google and Maps
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    Technical SEO, on-page fixes, local SEO and content that earns
                    top positions for the searches that bring buyers, not just
                    visitors.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#e5e7eb]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-2 font-bold text-[14px] text-[#202020] hover:underline"
                  >
                    <span>Explore SEO services</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Pillar 2: Rise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#72a4f2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <TrendingUp size={22} />
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#202020]">
                    Pillar 02 · Growth & CRO
                  </div>
                  <h3 className="font-display text-[26px] text-[#202020]">
                    Rise in leads and sales
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    Blogs, social media, Google and Meta Ads, and fast websites
                    that turn visibility into direct phone calls, WhatsApp
                    enquiries, and customer orders.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#e5e7eb]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-2 font-bold text-[14px] text-[#202020] hover:underline"
                  >
                    <span>Explore growth services</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Pillar 3: Recognize */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#aac9f7] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Bot size={22} />
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#202020]/70">
                    Pillar 03 · AI Search
                  </div>
                  <h3 className="font-display text-[26px] text-[#202020]">
                    Get recognised by AI
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    AEO and GEO: structured answers, schema markup, and trusted
                    third-party citations so ChatGPT, Gemini, Perplexity and
                    Google AI Overviews name and recommend you.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#e5e7eb]">
                  <a
                    href="#all-services"
                    className="inline-flex items-center gap-2 font-bold text-[14px] text-[#202020] hover:underline"
                  >
                    <span>Explore AI search</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            COMPLETE CAPABILITIES GRID: 9 Tactile Sticker Cards
        ======================================================== */}
        <section id="all-services" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  DISCIPLINES
                </div>
                <h2 className="text-section-title">
                  What we do
                </h2>
                <p className="text-[16px] text-[#202020]/80 font-normal">
                  Every capability is engineered to rank you on Google, earn you
                  citations across AI search engines, and convert traffic into revenue.
                </p>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsAuditModalOpen(true)}
                  className="btn-kofi-outline text-[14px] cursor-pointer"
                >
                  <span>Request Custom Scope</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>

            {/* 9 Clean Sticker Cards (24px-40px radius, 2.5px solid black border) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. SEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Search size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    01 // SEO
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  SEO Services
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Rank for the high-intent searches that bring paying customers.
                  Technical audits, Core Web Vitals, on-page optimization, and
                  ethical authority.
                </p>
              </motion.div>

              {/* 2. AEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#72a4f2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Layers size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]">
                    02 // AEO
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Answer Engine Optimization
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Become the direct answer in Google AI Overviews, featured
                  snippets, People Also Ask boxes, and conversational voice search.
                </p>
              </motion.div>

              {/* 3. GEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#aac9f7] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Bot size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]">
                    03 // GEO
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Generative Engine Optimization
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Get cited and recommended by ChatGPT, Gemini, Perplexity, and
                  Claude with structured entity definitions and citation PR.
                </p>
              </motion.div>

              {/* 4. Local SEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    04 // MAPS
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Local SEO & Google Business Profile
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Own the Google Maps 3-pack in your city with full profile
                  optimization, weekly posts, local citations, and review engines.
                </p>
              </motion.div>

              {/* 5. Content & Blogs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <FileText size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    05 // CONTENT
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Content & Strategic Blogs
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Research-led articles written for humans, search engines, and
                  AI models. 1,000–2,000 words with schema markup and internal links.
                </p>
              </motion.div>

              {/* 6. Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Share2 size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    06 // SOCIAL
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Social Media Management
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Consistent Instagram, Facebook, and LinkedIn posts and reels
                  that build brand authority and trust before the customer buys.
                </p>
              </motion.div>

              {/* 7. Google & Meta Ads */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    07 // ADS
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Google & Meta Ads
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Targeted search and social campaigns that bring immediate qualified
                  leads while organic SEO compounds over the long term.
                </p>
              </motion.div>

              {/* 8. Website Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Layout size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    08 // WEB
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Website Development
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  WordPress, Shopify, and custom-coded sites built SEO-ready from
                  day one with mobile-first speed, schema markup, and tracking.
                </p>
              </motion.div>

              {/* 9. Website Maintenance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                    <Wrench size={18} />
                  </div>
                  <span className="text-[12px] font-bold text-[#202020]/60">
                    09 // CARE
                  </span>
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Website Maintenance
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Security updates, daily/weekly backups, uptime monitoring, and
                  speed checks handled every month so your business stays live.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FOUR-STEP PROCESS: 4 Tactile Cards
        ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#e9dfd2]/50 border-y-2 border-[#000000]/10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                EXECUTION PROTOCOL
              </div>
              <h2 className="text-section-title">
                From invisible to recommended in four steps
              </h2>
              <p className="text-[17px] text-[#202020]/80 max-w-xl mx-auto">
                A disciplined, predictable framework with clear milestones. No
                vague promises, no wasted time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#72a4f2]">
                  STAGE // 01
                </div>
                <div className="text-[13px] text-[#202020]/60 font-semibold">
                  Week 1 · Assessment
                </div>
                <h3 className="font-display text-[24px] text-[#202020]">
                  Audit
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  We check your current search rankings, technical website health,
                  Google Business Profile, and test how often AI assistants mention
                  you versus 3 key competitors.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020]">
                  STAGE // 02
                </div>
                <div className="text-[13px] text-[#202020]/60 font-semibold">
                  Week 2 · Roadmap
                </div>
                <h3 className="font-display text-[24px] text-[#202020]">
                  Plan
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  You get a clear 90-day roadmap: target high-intent keywords,
                  specific AI prompts to win, landing pages to rebuild, and schema
                  architecture to deploy.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020]">
                  STAGE // 03
                </div>
                <div className="text-[13px] text-[#202020]/60 font-semibold">
                  Months 1–3 · Build
                </div>
                <h3 className="font-display text-[24px] text-[#202020]">
                  Build
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  We fix all technical roadblocks, publish research-backed content,
                  integrate structured FAQ and Service schema, and build brand
                  mentions on trusted third-party directories.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020]">
                  STAGE // 04
                </div>
                <div className="text-[13px] text-[#202020]/60 font-semibold">
                  Monthly · Momentum
                </div>
                <h3 className="font-display text-[24px] text-[#202020]">
                  Grow & Report
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  A plain-English monthly report detailing rankings, organic
                  traffic, phone calls, and AI mention share — paired with a strategy
                  review to align on next priorities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FOUNDING CLIENT OFFER: Oat Feature Card (24px radius)
        ======================================================== */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="oat-feature-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#72a4f2]" />
                  FOUNDING CLIENT OFFER // 2 OF 3 SLOTS LEFT
                </div>
                <h2 className="font-display text-[28px] sm:text-[38px] text-[#202020]">
                  3 founding client slots open
                </h2>
                <p className="text-[15px] text-[#202020]/85 max-w-2xl leading-relaxed font-medium">
                  We&apos;re a new agency, and we want to earn our first case
                  studies the right way. Our first three clients get the full
                  AI-search playbook at launch pricing, locked for six months, in
                  exchange for an honest testimonial and permission to share results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <div className="text-right sm:mr-3">
                  <div className="text-[12px] font-bold text-[#202020]/60">FROM</div>
                  <div className="font-display text-[32px] text-[#202020] leading-none">
                    ₹7,999
                    <span className="text-[13px] font-sans font-normal text-[#202020]/75">/mo + GST</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsAuditModalOpen(true)}
                  className="btn-kofi-primary text-[15px] cursor-pointer"
                >
                  Claim a founding slot
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            TRANSPARENT PRICING PACKAGES: 40px Sticker Cards
        ======================================================== */}
        <section id="pricing" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                TRANSPARENT RATES
              </div>
              <h2 className="text-section-title">
                Simple, transparent pricing
              </h2>
              <p className="text-[17px] text-[#202020]/80">
                Every price is on this page. No &ldquo;call for a quote&rdquo;, no
                12-month lock-in. All prices are monthly and exclude 18% GST.
              </p>

              {/* Pricing Period Switcher */}
              <div className="pt-4 flex items-center justify-center">
                <div className="p-1.5 bg-[#ffffff] border-2 border-[#000000] rounded-full inline-flex gap-1">
                  <button
                    onClick={() => setPricingPeriod("founding")}
                    className={`px-6 py-2.5 text-[14px] font-bold rounded-full transition-all cursor-pointer ${
                      pricingPeriod === "founding"
                        ? "bg-[#72a4f2] text-[#202020] border-2 border-[#000000]"
                        : "text-[#202020]/70 hover:text-[#000000]"
                    }`}
                  >
                    Founding Launch Offer
                  </button>
                  <button
                    onClick={() => setPricingPeriod("regular")}
                    className={`px-6 py-2.5 text-[14px] font-bold rounded-full transition-all cursor-pointer ${
                      pricingPeriod === "regular"
                        ? "bg-[#72a4f2] text-[#202020] border-2 border-[#000000]"
                        : "text-[#202020]/70 hover:text-[#000000]"
                    }`}
                  >
                    Regular Growth Packages
                  </button>
                </div>
              </div>
            </motion.div>

            {/* FOUNDING PACKAGES */}
            {pricingPeriod === "founding" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Launch Basic */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-4">
                      <div className="text-[13px] font-bold uppercase text-[#202020]/60">
                        Launch Basic
                      </div>
                      <div className="space-y-1">
                        <div className="font-display text-[36px] text-[#202020]">
                          ₹7,999
                          <span className="text-[14px] font-sans font-normal text-[#202020]/70"> / mo</span>
                        </div>
                        <div className="text-[13px] text-[#202020]/70 font-medium">
                          Best for: One local shop or clinic
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-[14px] text-[#202020]/80 pt-4 border-t-2 border-[#e5e7eb] font-medium">
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Google Business Profile setup + weekly posts
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          15 high-intent keywords tracked
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          1 SEO / GEO blog (~1,200 words)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          On-page SEO for Homepage + 2 pages
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          2 directory / citation listings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Technical SEO initial setup
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Monthly plain-English performance report
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-outline w-full py-3 text-[14px] cursor-pointer"
                    >
                      Start Basic
                    </button>
                  </motion.div>

                  {/* Launch Plus */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-8 space-y-6 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-4">
                      <div className="text-[13px] font-bold uppercase text-[#202020]/60">
                        Launch Plus
                      </div>
                      <div className="space-y-1">
                        <div className="font-display text-[36px] text-[#202020]">
                          ₹13,499
                          <span className="text-[14px] font-sans font-normal text-[#202020]/70"> / mo</span>
                        </div>
                        <div className="text-[13px] text-[#202020]/70 font-medium">
                          Best for: Growing local business
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-[14px] text-[#202020]/80 pt-4 border-t-2 border-[#e5e7eb] font-medium">
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Google Business Profile setup + weekly posts
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          20 target keywords tracked
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          3 SEO / GEO blogs (~1,200 words)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          On-page SEO for 5 key pages
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          8 social media static posts (IG + FB)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          3 directory / citation listings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Technical SEO setup + monthly check
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Monthly report
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-outline w-full py-3 text-[14px] cursor-pointer"
                    >
                      Start Plus
                    </button>
                  </motion.div>

                  {/* Launch Pro — MOST CHOSEN (3px border + Cobalt badge) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-8 space-y-6 flex flex-col justify-between border-3 border-[#000000] relative bg-[#ffffff]"
                  >
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#72a4f2] text-[#202020] text-[11px] font-bold rounded-full border-2 border-[#000000]">
                      Most Chosen
                    </div>

                    <div className="space-y-4">
                      <div className="text-[13px] font-bold uppercase text-[#202020]">
                        Launch Pro
                      </div>
                      <div className="space-y-1">
                        <div className="font-display text-[36px] text-[#202020]">
                          ₹14,999
                          <span className="text-[14px] font-sans font-normal text-[#202020]/70"> / mo</span>
                        </div>
                        <div className="text-[13px] text-[#202020]/70 font-medium">
                          Best for: Local business or small D2C brand
                        </div>
                        <div className="text-[12px] font-bold text-[#202020] pt-1">
                          Worth ₹35,998 regular · Just ₹500/day
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-[14px] text-[#202020] pt-4 border-t-2 border-[#e5e7eb] font-semibold">
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Google Business Profile setup + weekly posts
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          30 keywords tracked
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          4 SEO / GEO blogs (~1,200 words)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          5 key pages + FAQ Schema markup
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          25 AI prompts tracked (ChatGPT, Gemini, AI Overviews)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          12 social posts incl. 4 reels
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          5 directory / citation listings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          <strong>Free AI Visibility Audit</strong> (Worth ₹13,499)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-[#000000]" />
                          Monthly report + 30-min strategy call
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-primary w-full py-3.5 text-[15px] cursor-pointer"
                    >
                      Claim a founding slot
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-5 bg-[#ffffff] border-2 border-[#000000] rounded-[24px] text-[13px] text-[#202020] leading-relaxed font-medium"
                >
                  <strong>FOUNDING TERMS:</strong> 3-month minimum commitment. Price locked for 6 months, then smoothly transitions to our regular plans. In return, we ask for an honest testimonial, a Google review, and permission to share your anonymized growth metrics as a verified case study.
                </motion.div>
              </div>
            )}

            {/* REGULAR PACKAGES */}
            {pricingPeriod === "regular" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Starter */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-6 space-y-5 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-3">
                      <div className="text-[12px] font-bold uppercase text-[#202020]/60">
                        Starter
                      </div>
                      <div className="font-display text-[28px] text-[#202020]">
                        ₹22,499
                        <span className="text-[12px] font-sans font-normal text-[#202020]/70">/mo</span>
                      </div>
                      <p className="text-[13px] text-[#202020]/70">
                        Local business, 1 location
                      </p>
                      <ul className="space-y-2 text-[13px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] font-medium">
                        <li>• 25 keywords tracked</li>
                        <li>• 20 AI prompts (ChatGPT + Google)</li>
                        <li>• 2 SEO / GEO blogs / month</li>
                        <li>• Homepage Schema markup</li>
                        <li>• GBP + Local SEO</li>
                        <li>• Monthly PDF report</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-outline w-full py-2.5 text-[13px]"
                    >
                      Choose Starter
                    </button>
                  </motion.div>

                  {/* Growth */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-6 space-y-5 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-3">
                      <div className="text-[12px] font-bold uppercase text-[#202020]/60">
                        Growth
                      </div>
                      <div className="font-display text-[28px] text-[#202020]">
                        ₹49,499
                        <span className="text-[12px] font-sans font-normal text-[#202020]/70">/mo</span>
                      </div>
                      <p className="text-[13px] text-[#202020]/70">
                        Growing brands scaling traffic
                      </p>
                      <ul className="space-y-2 text-[13px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] font-medium">
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
                      className="btn-kofi-outline w-full py-2.5 text-[13px]"
                    >
                      Choose Growth
                    </button>
                  </motion.div>

                  {/* AI Search Pro — MOST CHOSEN */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-6 space-y-5 flex flex-col justify-between border-3 border-[#000000] relative bg-white"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#72a4f2] text-[#202020] text-[10px] font-bold rounded-full border border-[#000000]">
                      Most Chosen
                    </div>
                    <div className="space-y-3">
                      <div className="text-[12px] font-bold uppercase text-[#202020]">
                        AI Search Pro
                      </div>
                      <div className="font-display text-[28px] text-[#202020]">
                        ₹53,999
                        <span className="text-[12px] font-sans font-normal text-[#202020]/70">/mo</span>
                      </div>
                      <p className="text-[13px] text-[#202020]/70">
                        D2C brands, clinics (~₹1,775/day)
                      </p>
                      <ul className="space-y-2 text-[13px] text-[#202020] pt-3 border-t-2 border-[#e5e7eb] font-semibold">
                        <li>• 100 keywords tracked</li>
                        <li>• 100 AI prompts across engines</li>
                        <li>• 8 SEO / GEO blogs / month</li>
                        <li>• Full-site Schema + FAQ blocks</li>
                        <li>• 4 third-party citations / PR</li>
                        <li>• 12 social posts bundled</li>
                        <li>• Live dashboard + monthly call</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-primary w-full py-2.5 text-[13px]"
                    >
                      Choose AI Search Pro
                    </button>
                  </motion.div>

                  {/* Category Leader */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    whileHover={{ y: -6 }}
                    className="sticker-card p-6 space-y-5 flex flex-col justify-between bg-white"
                  >
                    <div className="space-y-3">
                      <div className="text-[12px] font-bold uppercase text-[#202020]/60">
                        Category Leader
                      </div>
                      <div className="font-display text-[28px] text-[#202020]">
                        ₹1,12,499
                        <span className="text-[12px] font-sans font-normal text-[#202020]/70">/mo</span>
                      </div>
                      <p className="text-[13px] text-[#202020]/70">
                        Multi-city or ₹25Cr+ Indian brands
                      </p>
                      <ul className="space-y-2 text-[13px] text-[#202020]/80 pt-3 border-t-2 border-[#e5e7eb] font-medium">
                        <li>• 250 keywords tracked</li>
                        <li>• 300 AI prompts (all engines)</li>
                        <li>• 16 articles incl. 2 pillar guides</li>
                        <li>• Full programmatic Schema</li>
                        <li>• 10 authority placements</li>
                        <li>• Multi-location GBP & local SEO</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="btn-kofi-outline w-full py-2.5 text-[13px]"
                    >
                      Choose Leader
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-4 bg-[#ffffff] border-2 border-[#000000] rounded-[24px] text-[13px] text-[#202020] flex flex-wrap items-center justify-between gap-4 font-medium"
                >
                  <div>
                    <strong>ANNUAL BENEFIT:</strong> Pay for 10 months upfront, get 12 full months.
                  </div>
                  <div>
                    <strong>TAX:</strong> All prices are in INR and subject to 18% GST.
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            AGENCY PHILOSOPHY: 6 Tactile Sticker Cards
        ======================================================== */}
        <section id="about" className="py-20 lg:py-28 bg-[#e9dfd2]/50 border-y-2 border-[#000000]/10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                AGENCY PHILOSOPHY
              </div>
              <h2 className="text-section-title">
                Why businesses choose Rank Rise Recognize
              </h2>
              <p className="text-[17px] text-[#202020]/80 max-w-xl mx-auto">
                We stripped away the agency bloat, the layers of junior account
                managers, and the vanity metrics that don&apos;t pay the bills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#72a4f2] uppercase">
                  01 // MODERN METRICS
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  We track AI visibility, not just rankings
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Every single plan includes a monthly check of the real questions
                  your buyers ask ChatGPT, Gemini, and Google AI Overviews.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020] uppercase">
                  02 // TRANSPARENCY
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Our prices are on the website
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  No &ldquo;call us for a quote&rdquo; games or arbitrary
                  estimates. You know exactly what is included and what it costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020] uppercase">
                  03 // FLEXIBILITY
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  No long lock-ins
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  A 3-month minimum to give search algorithms time to index our
                  structural improvements, then strictly month-to-month.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020] uppercase">
                  04 // DIRECT EXECUTION
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  You talk to the people doing the work
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  No junior account-manager relays or broken telephone. You work
                  directly with search strategists who write the code and content.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020] uppercase">
                  05 // HUMAN EDITORIAL
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  No generic AI fluff
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  We use AI tools for research and velocity, but every article is
                  planned, fact-checked, and edited by a human for genuine expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="text-[12px] font-bold text-[#202020] uppercase">
                  06 // CLARITY
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Reports you can actually read
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Phone calls, leads, and revenue first; technical SEO jargon last.
                  A monthly executive summary that makes business sense.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            INDUSTRIES SERVED: 6 Tactile Cards
        ======================================================== */}
        <section id="industries" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                INDUSTRIES SERVED
              </div>
              <h2 className="text-section-title">
                Built for growing Indian businesses
              </h2>
              <p className="text-[17px] text-[#202020]/80 max-w-xl mx-auto">
                Tailored search architectures designed for how Indian consumers
                discover, evaluate, and purchase.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* D2C */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <Briefcase size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  D2C & E-Commerce Brands
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Get recommended when shoppers ask AI &ldquo;which brand should I
                  buy?&rdquo;. Shopify SEO, product schema, and &ldquo;best in
                  India&rdquo; comparison guides.
                </p>
              </motion.div>

              {/* Clinics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <Stethoscope size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Clinics & Healthcare
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Be the medical practice patients find and trust first. Local
                  Google Maps pack, doctor profile schema, and compliant medical
                  answers.
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Coaching & Education
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Fill student batches from Google organic search, not just paid
                  ads. Course syllabus pages, results-driven content, and parent FAQs.
                </p>
              </motion.div>

              {/* Real Estate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <HomeIcon size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Real Estate & Developers
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Reach home buyers while they research locality amenities and
                  price trends. Locality guides, project pages, and high-intent ads.
                </p>
              </motion.div>

              {/* Restaurants */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <UtensilsCrossed size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Restaurants & Cafes
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  Own &ldquo;near me&rdquo; food searches. Google Maps setup, menu
                  schema, high-resolution photo optimization, and review flows.
                </p>
              </motion.div>

              {/* Local Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-3 bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-[#e9dfd2] border-2 border-[#000000] flex items-center justify-center text-[#202020]">
                  <Building2 size={18} />
                </div>
                <h3 className="font-display text-[22px] text-[#202020]">
                  Local Service Businesses
                </h3>
                <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                  More direct phone inquiries from your city. Google Business
                  Profile ranking, service-area pages, and WhatsApp lead funnels.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            VERIFIED RESULTS & HONEST TRANSPARENCY
        ======================================================== */}
        <section id="results" className="py-20 lg:py-28 bg-[#e9dfd2]/50 border-y-2 border-[#000000]/10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl space-y-3 mb-14 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                VERIFIED METRICS
              </div>
              <h2 className="text-section-title">
                Results we&apos;ll be proud to show you
              </h2>
              <p className="text-[17px] text-[#202020]/80 font-normal leading-relaxed">
                We publish real numbers only: rankings, organic clicks, Google
                Business Profile phone calls, and AI prompt citations, measured
                from day one. We never invent testimonials, mock case studies, or
                make up client logos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="sticker-card p-8 sm:p-10 space-y-6 bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#e5e7eb] pb-6">
                <div>
                  <h3 className="font-display text-[24px] text-[#202020]">
                    Case Study Verification Framework
                  </h3>
                  <p className="text-[14px] text-[#202020]/70 mt-0.5 font-medium">
                    Currently onboarding founding clients. Verified logs will be published here.
                  </p>
                </div>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="btn-kofi-primary text-[14px] cursor-pointer"
                >
                  Join Founding Cohort
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="p-5 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] space-y-1">
                  <div className="text-[11px] font-bold uppercase text-[#202020]/70">
                    METRIC // 01
                  </div>
                  <div className="text-[16px] font-bold text-[#202020]">
                    Target Keyword Rank
                  </div>
                  <div className="text-[12px] text-[#202020]/75">
                    GSC & GA4 Verified
                  </div>
                </div>

                <div className="p-5 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] space-y-1">
                  <div className="text-[11px] font-bold uppercase text-[#202020]/70">
                    METRIC // 02
                  </div>
                  <div className="text-[16px] font-bold text-[#202020]">
                    Organic Buyer Clicks
                  </div>
                  <div className="text-[12px] text-[#202020]/75">
                    Commercial intent only
                  </div>
                </div>

                <div className="p-5 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] space-y-1">
                  <div className="text-[11px] font-bold uppercase text-[#202020]/70">
                    METRIC // 03
                  </div>
                  <div className="text-[16px] font-bold text-[#202020]">
                    GBP Phone Calls
                  </div>
                  <div className="text-[12px] text-[#202020]/75">
                    Direct map pack calls
                  </div>
                </div>

                <div className="p-5 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] space-y-1">
                  <div className="text-[11px] font-bold uppercase text-[#202020]/70">
                    METRIC // 04
                  </div>
                  <div className="text-[16px] font-bold text-[#202020]">
                    AI Prompt Citations
                  </div>
                  <div className="text-[12px] text-[#202020]/75">
                    ChatGPT & Gemini share
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            INLINE AUDIT LEAD FORM: Free 10-Prompt Check
        ======================================================== */}
        <section id="audit" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55 }}
                className="lg:col-span-6 space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  COMPLIMENTARY DIAGNOSTIC
                </div>
                <h2 className="text-section-title">
                  Find out what Google and ChatGPT say about your business
                </h2>
                <p className="text-[17px] text-[#202020]/80 leading-relaxed font-normal">
                  We&apos;ll test 10 real customer questions across ChatGPT,
                  Gemini, and Google AI Overviews, and show you where you appear,
                  where competitors appear, and what to fix first. Free, no
                  obligation, delivered in 3 working days.
                </p>

                <div className="pt-2 space-y-3 text-[15px] text-[#202020]/85 font-medium">
                  <div className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">AI visibility score:</strong> How many of 10
                      queries recommend your brand.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">Competitor benchmark:</strong> Which rival
                      businesses AI tools suggest instead.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">Top 3 priority fixes:</strong> Direct, actionable
                      adjustments in plain English.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Inline Form Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -4 }}
                className="lg:col-span-6"
              >
                <div className="sticker-card p-7 sm:p-9 space-y-4 bg-white">
                  {!quickAuditSubmitted ? (
                    <form onSubmit={handleQuickAuditSubmit} className="space-y-4">
                      <div className="font-display text-[24px] text-[#202020]">
                        Request Free AI Visibility Check
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                          className="w-full kofi-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                          className="w-full kofi-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                          placeholder="+91 94900 67869"
                          className="w-full kofi-input"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 btn-kofi-primary text-[16px] cursor-pointer"
                      >
                        <span>Get My Free AI Visibility Check</span>
                        <ArrowRight size={16} />
                      </button>

                      <p className="text-[12px] text-center text-[#202020]/70 font-medium">
                        No spam. Delivered to your WhatsApp within 3 working days.
                      </p>
                    </form>
                  ) : (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#aac9f7] border-3 border-[#000000] flex items-center justify-center text-[#202020]">
                        <Check size={28} />
                      </div>
                      <h3 className="font-display text-[26px] text-[#202020]">
                        Audit Queued Successfully!
                      </h3>
                      <p className="text-[14px] text-[#202020]/80 leading-relaxed font-medium">
                        We have logged <strong>{quickAuditData.businessName}</strong>.
                        We will message your WhatsApp at{" "}
                        <strong className="text-[#202020]">{quickAuditData.whatsapp}</strong>.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FREQUENTLY ASKED QUESTIONS (FAQ)
        ======================================================== */}
        <section id="faq" className="py-20 lg:py-28 bg-[#e9dfd2]/50 border-y-2 border-[#000000]/10">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="space-y-3 mb-14 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                FREQUENTLY ASKED
              </div>
              <h2 className="text-section-title">
                Frequently asked questions
              </h2>
              <p className="text-[17px] text-[#202020]/80">
                Direct answers to common questions about SEO, AEO, and GEO.
              </p>
            </motion.div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="border-2 border-[#000000] rounded-[24px] bg-[#ffffff] overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-[17px] font-bold text-[#202020] hover:text-[#000000] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#202020] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="px-6 pb-6 pt-1 text-[15px] text-[#202020]/80 leading-relaxed font-normal border-t-2 border-[#e5e7eb] overflow-hidden"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            EDITORIAL RESEARCH: Blog Previews
        ======================================================== */}
        <section id="blog" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  RESEARCH & INTELLIGENCE
                </div>
                <h2 className="text-section-title">
                  Latest insights from our lab
                </h2>
                <p className="text-[16px] text-[#202020]/80">
                  Strategic guides on winning generative and modern organic search.
                </p>
              </div>

              <div>
                <Link
                  href="/blog"
                  className="btn-kofi-outline text-[14px]"
                >
                  <span>View all research guides</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-4 flex flex-col justify-between bg-white"
              >
                <div className="space-y-2.5">
                  <div className="text-[12px] font-bold text-[#72a4f2] uppercase">
                    01 // FOUNDATIONS
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020] hover:underline cursor-pointer leading-snug">
                    SEO vs AEO vs GEO: What Indian Businesses Need to Know in 2026
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    Why the traditional 10 blue links on Google are no longer
                    sufficient, and how generative engines choose who gets cited.
                  </p>
                </div>
                <div className="pt-3 border-t-2 border-[#e5e7eb] text-[13px] font-semibold text-[#202020]/60">
                  Topic: SEO vs AEO vs GEO
                </div>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-4 flex flex-col justify-between bg-white"
              >
                <div className="space-y-2.5">
                  <div className="text-[12px] font-bold text-[#202020] uppercase">
                    02 // GEO STRATEGY
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020] hover:underline cursor-pointer leading-snug">
                    How to Get Your Brand Mentioned in ChatGPT (Step by Step)
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    The exact entity building, third-party citation, and schema
                    playbook required to make language models recognize your brand.
                  </p>
                </div>
                <div className="pt-3 border-t-2 border-[#e5e7eb] text-[13px] font-semibold text-[#202020]/60">
                  Topic: How to rank in ChatGPT
                </div>
              </motion.div>

              {/* Article 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="sticker-card p-7 space-y-4 flex flex-col justify-between bg-white"
              >
                <div className="space-y-2.5">
                  <div className="text-[12px] font-bold text-[#202020] uppercase">
                    03 // AEO TACTICS
                  </div>
                  <h3 className="font-display text-[22px] text-[#202020] hover:underline cursor-pointer leading-snug">
                    Google AI Overviews: How to Show Up in Them
                  </h3>
                  <p className="text-[14px] text-[#202020]/80 leading-relaxed font-normal">
                    How to format concise 40–60 word answer blocks and structured
                    FAQ schema so Google quotes your website in its top AI snapshot.
                  </p>
                </div>
                <div className="pt-3 border-t-2 border-[#e5e7eb] text-[13px] font-semibold text-[#202020]/60">
                  Topic: Google AI Overviews optimization
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CALL TO ACTION: Large Oat Feature Card
        ======================================================== */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="oat-feature-card p-10 sm:p-16 text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#72a4f2]" />
                BEGIN YOUR GROWTH
              </div>

              <h2 className="text-display-hero max-w-2xl mx-auto">
                Ready to rank on Google and be recommended by AI?
              </h2>

              <p className="text-[17px] text-[#202020]/85 max-w-lg mx-auto leading-relaxed font-medium">
                We reply within one working day. Get your complimentary 10-prompt
                audit report or discuss a custom SEO + GEO growth retainer.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsAuditModalOpen(true)}
                  className="btn-kofi-primary text-[16px] px-8 py-4 w-full sm:w-auto cursor-pointer"
                >
                  <span>Get Free AI Visibility Check</span>
                  <ArrowRight size={16} />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:rankriserecognize@gmail.com"
                  className="btn-kofi-outline text-[16px] px-8 py-4 w-full sm:w-auto text-center"
                >
                  Email Our Strategists
                </motion.a>
              </div>
            </motion.div>
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
