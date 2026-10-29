import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Stethoscope,
  GraduationCap,
  Home,
  UtensilsCrossed,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEO for D2C Brands, Clinics & Local Businesses | RRR",
  description:
    "SEO, AEO and GEO strategies built for D2C brands, clinics, coaching institutes, real estate and local businesses in India.",
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "D2C & E-Commerce",
      headline: 'Get recommended when shoppers ask AI "which brand should I buy?"',
      focus:
        'Shopify technical SEO, product and category schema, "best in India" comparative guides, authentic customer review structures, and AI citation engineering.',
      icon: Briefcase,
    },
    {
      name: "Clinics & Healthcare",
      headline: "Be the clinic patients find, and trust, first",
      focus:
        "Local SEO, Google Maps 3-pack dominance, doctor profile schemas, compliant and accurate medical symptom answers, and WhatsApp appointment funnels.",
      icon: Stethoscope,
    },
    {
      name: "Coaching & Education",
      headline: "Fill batches from Google search, not just paid ads",
      focus:
        "Course curriculum pages, local educational SEO, student results documentation, and parent-student FAQ answers optimized for voice and AI queries.",
      icon: GraduationCap,
    },
    {
      name: "Real Estate & Developers",
      headline: "Reach home buyers while they actively research localities",
      focus:
        "Locality overview pages, project landing architecture, amenity comparison schema, and high-intent Google Search campaigns for verified buyers.",
      icon: Home,
    },
    {
      name: "Restaurants & Cafes",
      headline: 'Own local "near me" food and dining searches',
      focus:
        "Google Business Profile optimization, menu schema markup, food photography metadata, customer review acceleration, and Instagram credibility.",
      icon: UtensilsCrossed,
    },
    {
      name: "Local Professional Services",
      headline: "More direct phone calls and inquiries from your city",
      focus:
        "Google Maps authority, neighborhood service-area pages, consistent NAP citations on Justdial and IndiaMART, and high-converting mobile contact forms.",
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
              Industry Playbooks
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
              SEO and AI search built for your industry
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              Every market sector has different search behavior. A clinic needs
              local map dominance; a D2C brand needs AI model recommendation; a
              real estate developer needs locality authority. We architect custom
              strategies for each.
            </p>
          </section>

          {/* Industry Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="classic-card p-8 rounded-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xs bg-[#FAF7F2] border border-[#E8E2D6] flex items-center justify-center text-[#9C7D38]">
                      <Icon size={22} />
                    </div>

                    <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
                      {ind.name}
                    </h2>

                    <div className="text-xs font-mono text-[#84682A]">
                      {ind.headline}
                    </div>

                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed pt-2 border-t border-[#F4EFEA]">
                      {ind.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F4EFEA]">
                    <Link
                      href="/ai-visibility-audit"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7D38] hover:text-[#84682A]"
                    >
                      <span>Get industry visibility audit</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
