"use client";

import { useState } from "react";
import { Sparkles, Check, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AuditLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    websiteUrl: "",
    city: "",
    industry: "D2C & E-Commerce",
    whatsapp: "",
    email: "",
    competitors: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
                Free 10-Prompt Search Audit
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight leading-[1.15]">
                Does ChatGPT recommend your business, or your competitor?
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
                We&apos;ll ask ChatGPT, Gemini and Google 10 questions your
                customers ask, and show you exactly who gets recommended. Free.
                Delivered in 3 working days via WhatsApp or email.
              </p>

              {/* What You'll Get */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9C7D38] font-semibold">
                  What Your Audit Report Includes:
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#44403C]">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Your AI Visibility Score:</strong> How many of 10
                      key customer queries directly mention your brand.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Competitor Benchmark:</strong> Which competitors AI
                      tools recommend instead and why they win the citation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Google Organic Snapshot:</strong> Your positions
                      for 5 high-intent searches and your Google Maps ranking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                    <span>
                      <strong>Top 3 Quick Fixes:</strong> Clear, actionable
                      adjustments to make immediately in plain English.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Process */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  How It Works
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#57534E]">
                  <div className="p-3 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs">
                    <strong>1. Fill form</strong> (2 minutes)
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs">
                    <strong>2. We test 10 queries</strong> across AI models
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs">
                    <strong>3. Get your report</strong> on WhatsApp / Email
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <div className="bg-[#FFFFFF] border border-[#DFD7C8] rounded-xs p-6 sm:p-8 shadow-lg">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 border-b border-[#F4EFEA] pb-3">
                      <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
                        Claim Your Complimentary Audit
                      </h2>
                      <p className="text-xs text-[#78716C]">
                        Delivered in 3 working days. No credit card required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Anand Budur"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="e.g. Organic Heritage"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Website or GBP URL *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.websiteUrl}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              websiteUrl: e.target.value,
                            })
                          }
                          placeholder="https://yourbrand.com"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          City / Target Area *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. Bengaluru, Pan-India"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Industry *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              industry: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        >
                          <option value="D2C & E-Commerce">D2C & E-Commerce</option>
                          <option value="Clinics & Healthcare">Clinics & Healthcare</option>
                          <option value="Coaching & Education">Coaching & Education</option>
                          <option value="Real Estate & Property">Real Estate & Property</option>
                          <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                          <option value="Local Professional Services">Local Professional Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="founder@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                        Top 2 Competitors (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.competitors}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            competitors: e.target.value,
                          })
                        }
                        placeholder="e.g. Rival Brand X, Rival Brand Y"
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                      />
                    </div>

                    <div className="p-3 bg-[#F5EFE6] border border-[#E8E0D1] rounded-xs text-xs text-[#57534E] flex items-start gap-2">
                      <ShieldCheck size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                      <span>
                        Strict privacy guarantee. No sales spam. We only use this
                        information to generate and deliver your 10-prompt audit.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#1A1816] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#1A1816] hover:bg-[#2B2724] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Analyzing & Scheduling Audit...</span>
                      ) : (
                        <>
                          <Sparkles size={14} className="text-[#EADBB2]" />
                          <span>Send My Free AI Visibility Check</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#F6EED8] border border-[#9C7D38] flex items-center justify-center text-[#9C7D38]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                      Audit Queued Successfully
                    </h3>
                    <p className="text-sm text-[#57534E] leading-relaxed max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Our team is
                      running the 10-prompt test for{" "}
                      <strong>{formData.businessName}</strong>. You will receive
                      your full report on WhatsApp at{" "}
                      <strong>{formData.whatsapp}</strong> within 3 working days.
                    </p>
                  </div>
                )}
              </div>

              {/* Upsell to Full Audit */}
              <div className="mt-6 p-6 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#9C7D38] font-semibold">
                    Upgrade Option
                  </span>
                  <span className="text-xs font-mono text-[#1A1816] font-semibold">
                    ₹13,499 + GST
                  </span>
                </div>
                <div className="font-serif text-lg font-medium text-[#1A1816]">
                  Full 50+ Prompt AI Visibility Audit
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  50+ prompts across ChatGPT, Gemini, Perplexity, and AI
                  Overviews · Benchmark comparison with 3 rivals · Technical SEO
                  and schema code review · Google Business Profile deep dive ·
                  Prioritized 90-day fix roadmap.{" "}
                  <strong>Fee credited in full if you sign a 6-month retainer.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
