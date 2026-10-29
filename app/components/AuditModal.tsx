"use client";

import { useState } from "react";
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, ArrowRight } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1A1816]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#DFD7C8] rounded-sm shadow-2xl p-6 sm:p-8 my-8 text-[#1A1816] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xs text-[#78716C] hover:text-[#1A1816] hover:bg-[#EFE9DF] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 text-[#9C7D38] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Free AI Visibility Audit (10 Prompts)</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1816] font-medium tracking-tight mb-2">
              Does ChatGPT recommend your business, or your competitor?
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed mb-6">
              We&apos;ll ask ChatGPT, Gemini and Google 10 questions your actual
              customers ask, and show you exactly who gets recommended.
              Free. Delivered to your WhatsApp or inbox in 3 working days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
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
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Organic Heritage"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Website or GBP URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.websiteUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, websiteUrl: e.target.value })
                    }
                    placeholder="https://yourbrand.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    City / Target Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="e.g. Bengaluru, Mumbai, Pan-India"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                  >
                    <option value="D2C & E-Commerce">D2C & E-Commerce</option>
                    <option value="Clinics & Healthcare">Clinics & Healthcare</option>
                    <option value="Coaching & Education">Coaching & Education</option>
                    <option value="Real Estate & Property">Real Estate & Property</option>
                    <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                    <option value="Local Professional Services">Local Professional Services</option>
                    <option value="B2B & Manufacturing">B2B & Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Top 2 Competitors (Optional)
                </label>
                <input
                  type="text"
                  value={formData.competitors}
                  onChange={(e) =>
                    setFormData({ ...formData, competitors: e.target.value })
                  }
                  placeholder="e.g. Brand A, Brand B"
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#9C7D38]"
                />
              </div>

              {/* Trust Callout */}
              <div className="p-3.5 bg-[#F5EFE6] border border-[#E8E0D1] rounded-xs text-xs text-[#57534E] flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-[#9C7D38] shrink-0 mt-0.5" />
                <span>
                  <strong>Strict zero-spam policy:</strong> We respect your privacy.
                  Your details are solely used to run the 10-prompt audit and deliver
                  your PDF breakdown.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#1A1816] text-[#FAF7F2] font-semibold text-sm rounded-xs border border-[#1A1816] hover:bg-[#2B2724] hover:border-[#9C7D38] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Analyzing Prompts & Initializing...</span>
                  ) : (
                    <>
                      <span>Send My Free AI Visibility Check</span>
                      <Send size={15} className="text-[#EADBB2]" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-[#78716C] mt-2 font-mono">
                  Delivered via WhatsApp or email within 3 working days.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F6EED8] border border-[#9C7D38] flex items-center justify-center text-[#9C7D38]">
              <CheckCircle2 size={30} />
            </div>

            <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
              Audit Request Received
            </h3>

            <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our search analysts have
              queued <strong>{formData.businessName}</strong> for our 10-prompt AI
              visibility test across ChatGPT, Gemini, and Google AI Overviews.
            </p>

            <div className="p-4 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs text-left max-w-md mx-auto text-xs space-y-2 text-[#44403C]">
              <div className="font-semibold text-[#1A1816] border-b border-[#E8E2D6] pb-1">
                What happens next:
              </div>
              <div>• We test 10 realistic buying-intent queries in your category.</div>
              <div>• We benchmark your citations against your top competitors.</div>
              <div>• You receive your customized action report on WhatsApp/Email.</div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold rounded-xs hover:bg-[#332F2B] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
