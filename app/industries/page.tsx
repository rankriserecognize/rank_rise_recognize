import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Stethoscope,
  GraduationCap,
  Home,
  UtensilsCrossed,
  Building2,
  ChevronRight,
  Sparkles,
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
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-16">
          {/* Header */}
          <section className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <Sparkles size={15} className="text-[#202020]" />
              <span>INDUSTRY PLAYBOOKS</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              SEO and AI search built for your industry.
            </h1>
            <p className="text-[17px] text-[#202020]/80 leading-relaxed font-normal">
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
                  className="sticker-card p-8 space-y-5 flex flex-col justify-between bg-white rounded-[40px] border-[2.5px] border-black"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9dfd2] border-[2px] border-black flex items-center justify-center text-[#202020]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] text-[#202020]">
                        {ind.name}
                      </h3>
                      <p className="text-[14px] text-[#202020] font-semibold mt-1">
                        {ind.headline}
                      </p>
                    </div>
                    <p className="text-[14px] text-[#202020]/80 leading-relaxed pt-2 border-t border-black/10">
                      {ind.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <Link
                      href="/#pricing"
                      className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#202020] hover:text-[#72a4f2] transition-colors"
                    >
                      <span>Explore suitable packages</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>

          {/* CTA Box */}
          <section className="oat-feature-card p-8 sm:p-12 text-center space-y-5 rounded-[40px] border-[2.5px] border-black bg-[#e9dfd2]">
            <h2 className="font-display text-[28px] sm:text-[38px] text-[#202020] leading-tight">
              Don&apos;t see your industry listed?
            </h2>
            <p className="text-[16px] text-[#202020]/80 max-w-lg mx-auto leading-relaxed">
              Our entity architecture and search frameworks apply to any business
              where buyers search Google or prompt AI. Request a free diagnostic
              and we&apos;ll benchmark your exact sector.
            </p>
            <div className="pt-2">
              <Link
                href="/ai-visibility-audit"
                className="pill-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold"
              >
                <span>Request Free Industry Check</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
