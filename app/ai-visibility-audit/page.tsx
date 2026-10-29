"use client";

import { useState } from "react";
import { Check, Send, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
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
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                <Sparkles size={13} className="text-[#202020]" />
                <span>FREE 10-PROMPT DIAGNOSTIC</span>
              </div>

              <h1 className="text-display-hero">
                Does ChatGPT recommend your business, or your competitor?
              </h1>

              <p className="text-[18px] text-[#202020]/80 leading-relaxed font-normal">
                We&apos;ll ask ChatGPT, Gemini and Google 10 questions your
                customers ask, and show you exactly who gets recommended. Free.
                Delivered in 3 working days via WhatsApp or email.
              </p>

              {/* What You'll Get in Ko-fi Oat Feature Card */}
              <div className="oat-feature-card p-8 space-y-4">
                <div className="text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  Deliverable Specification
                </div>
                <ul className="space-y-3.5 text-[15px] text-[#202020]/85 font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">AI Visibility Score:</strong> How many of 10
                      key customer queries directly mention your brand.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">Competitor Benchmark:</strong> Which competitors AI
                      tools recommend instead and why they win the citation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">Google Organic Snapshot:</strong> Your positions
                      for 5 high-intent searches and your Google Maps ranking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#000000] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#202020]">Top 3 Quick Fixes:</strong> Clear, actionable
                      adjustments to make immediately in plain English.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <div className="sticker-card p-7 sm:p-10 space-y-4 bg-white">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 border-b-2 border-[#e5e7eb] pb-3">
                      <h2 className="font-display text-[26px] text-[#202020]">
                        Request Your Complimentary Audit
                      </h2>
                      <p className="text-[14px] text-[#202020]/75">
                        No sales call required. We test queries and deliver your PDF on WhatsApp.
                      </p>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#202020] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Priya Sharma"
                        className="w-full kofi-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#202020] mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="e.g. Ayurveda Botanics"
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
                        value={formData.websiteUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, websiteUrl: e.target.value })
                        }
                        placeholder="https://ayurvedabotanics.com"
                        className="w-full kofi-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          City / Target Area *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. Mumbai, Pan-India"
                          className="w-full kofi-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          Industry *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({ ...formData, industry: e.target.value })
                          }
                          className="w-full kofi-input cursor-pointer"
                        >
                          <option value="D2C & E-Commerce">D2C & E-Commerce</option>
                          <option value="Clinics & Healthcare">Clinics & Healthcare</option>
                          <option value="Coaching & Education">Coaching & Education</option>
                          <option value="Real Estate & Property">Real Estate & Property</option>
                          <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                          <option value="Local Professional Services">Local Services</option>
                          <option value="B2B & Manufacturing">B2B & Manufacturing</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          placeholder="+91 94900 67869"
                          className="w-full kofi-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="priya@ayurvedabotanics.com"
                          className="w-full kofi-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#202020] mb-1">
                        Top 2 Competitors (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.competitors}
                        onChange={(e) =>
                          setFormData({ ...formData, competitors: e.target.value })
                        }
                        placeholder="e.g. Forest Essentials, Kama Ayurveda"
                        className="w-full kofi-input"
                      />
                    </div>

                    <div className="p-4 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] text-[13px] text-[#202020] flex items-start gap-2.5">
                      <ShieldCheck size={18} className="text-[#000000] shrink-0 mt-0.5" />
                      <span>
                        <strong>Strict privacy policy:</strong> We only test your 10 queries and deliver your diagnostic breakdown. No marketing spam.
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 btn-kofi-primary text-[16px] cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Testing 10 Queries...</span>
                        ) : (
                          <>
                            <span>Queue Free AI Visibility Audit</span>
                            <Send size={16} className="ml-1" />
                          </>
                        )}
                      </button>
                      <p className="text-[12px] text-center text-[#202020]/70 mt-2 font-medium">
                        Delivered to WhatsApp within 3 working days.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#aac9f7] border-3 border-[#000000] flex items-center justify-center text-[#202020]">
                      <CheckCircle2 size={34} />
                    </div>

                    <h3 className="font-display text-[28px] text-[#202020]">
                      Audit Queued Successfully!
                    </h3>

                    <p className="text-[15px] text-[#202020]/80 leading-relaxed max-w-md mx-auto">
                      We have queued <strong>{formData.businessName}</strong>. Our
                      search strategists will test 10 realistic customer queries
                      and deliver your diagnostic to{" "}
                      <strong className="text-[#202020]">{formData.whatsapp}</strong>{" "}
                      within 3 business days.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
