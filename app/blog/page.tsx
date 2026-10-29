import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEO & AI Search Blog | Rank Rise Recognize",
  description:
    "Actionable search intelligence, AEO playbooks, and GEO research for Indian businesses and D2C brands.",
};

export default function BlogHubPage() {
  const articles = [
    {
      id: 1,
      title: "SEO vs AEO vs GEO: What Indian Businesses Need to Know in 2026",
      keyword: "SEO vs AEO vs GEO",
      category: "Foundations",
      excerpt:
        "Why the traditional 10 blue links on Google are no longer enough, and how generative engines choose who gets cited.",
    },
    {
      id: 2,
      title: "How to Get Your Brand Mentioned in ChatGPT (Step by Step)",
      keyword: "how to rank in ChatGPT",
      category: "GEO Strategy",
      excerpt:
        "The exact entity building, third-party citation, and schema playbook required to make language models recognize your brand.",
    },
    {
      id: 3,
      title: "SEO Packages in India: What You Should Get at Every Price",
      keyword: "SEO packages India",
      category: "Pricing & Retainers",
      excerpt:
        "A transparent buyer's guide to Indian SEO pricing tiers, deliverables, and warning signs of low-quality link schemes.",
    },
    {
      id: 4,
      title: "Google AI Overviews: How to Show Up in Them",
      keyword: "Google AI Overviews optimization",
      category: "AEO Tactics",
      excerpt:
        "How to format concise 40–60 word answer blocks and structured FAQ schema so Google quotes your website in its top AI snapshot.",
    },
    {
      id: 5,
      title: "Local SEO Checklist for Small Businesses in India",
      keyword: "local SEO checklist",
      category: "Local SEO",
      excerpt:
        "The comprehensive checklist for Google Business Profile optimization, local citations, and winning the local map pack.",
    },
    {
      id: 6,
      title: "Google Business Profile: 15 Fixes That Bring More Calls",
      keyword: "Google Business Profile optimization",
      category: "Local SEO",
      excerpt:
        "Direct optimization adjustments for service categories, primary business attributes, review response scripts, and photo metadata.",
    },
    {
      id: 7,
      title: "Shopify SEO for D2C Brands: The Complete Guide",
      keyword: "Shopify SEO India",
      category: "D2C E-Commerce",
      excerpt:
        "Solving Shopify duplicate collection URLs, product schema markup, breadcrumb navigation, and collection page copy that ranks.",
    },
    {
      id: 8,
      title: "How Much Does SEO Cost in India in 2026?",
      keyword: "SEO cost in India",
      category: "Industry Economics",
      excerpt:
        "An honest benchmark of retainer rates across Indian SMB, mid-market, and enterprise search agencies.",
    },
    {
      id: 9,
      title: "Schema Markup Explained for Business Owners",
      keyword: "what is schema markup",
      category: "Technical SEO",
      excerpt:
        "Why structured JSON-LD data is the universal translation layer between your website and AI crawlers.",
    },
    {
      id: 10,
      title: "We Asked ChatGPT for the Best D2C Brands in India — Here's What It Said",
      keyword: "best [category] brands India",
      category: "Original Research",
      excerpt:
        "Our laboratory prompted 50 conversational buying queries across ChatGPT and Gemini to uncover why certain Indian brands win 80% of citations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14">
          <section className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Editorial & Research
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
              SEO, AEO & GEO Intelligence
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              Research-led articles written for humans, search engines, and AI
              models. Practical frameworks from our active client experiments.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-[#FFFFFF] border border-[#E8E2D6] p-6 rounded-xs space-y-3 flex flex-col justify-between hover:border-[#9C7D38] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase">
                    <span className="text-[#9C7D38] font-semibold">
                      {art.category}
                    </span>
                    <span className="text-[#78716C]">Article 0{art.id}</span>
                  </div>

                  <h2 className="font-serif text-xl font-medium text-[#1A1816] leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F4EFEA] text-[11px] font-mono text-[#78716C]">
                  Target Keyword: {art.keyword}
                </div>
              </div>
            ))}
          </section>

          <section className="p-8 bg-[#1A1816] text-[#FAF7F2] rounded-xs text-center space-y-4">
            <h2 className="font-serif text-2xl font-medium">
              Want to see how your website scores against these standards?
            </h2>
            <p className="text-xs sm:text-sm text-[#D6CFBE] max-w-md mx-auto">
              Get our complimentary 10-prompt AI visibility check delivered to
              your WhatsApp in 3 working days.
            </p>
            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7F2] text-[#1A1816] text-xs font-semibold uppercase tracking-wider rounded-xs"
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
