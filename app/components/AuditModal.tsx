"use client";

import { useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-full max-w-2xl bg-[#ffffff] border-3 border-[#000000] rounded-[40px] p-6 sm:p-10 my-8 text-[#202020] max-h-[90vh] overflow-y-auto shadow-none"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border-2 border-[#000000] bg-[#e5e7eb] text-[#202020] hover:bg-[#e9dfd2] transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9dfd2] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-[#202020]" />
              <span>COMPLIMENTARY AI SEARCH DIAGNOSTIC</span>
            </div>

            <h2 className="font-display text-[28px] sm:text-[34px] text-[#202020] leading-tight mb-2">
              Does ChatGPT recommend your business, or your competitor?
            </h2>

            <p className="text-[15px] leading-relaxed text-[#202020]/80 mb-6 font-medium">
              We&apos;ll test 10 realistic customer queries in ChatGPT, Gemini
              and Google AI Overviews, benchmark who gets recommended, and deliver
              your diagnostic in 3 working days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                    placeholder="e.g. Organic Heritage"
                    className="w-full kofi-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                    className="w-full kofi-input"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#202020] mb-1">
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
                    className="w-full kofi-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <option value="Local Professional Services">Local Professional Services</option>
                    <option value="B2B & Manufacturing">B2B & Manufacturing</option>
                  </select>
                </div>

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
                  placeholder="name@company.com"
                  className="w-full kofi-input"
                />
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
                  placeholder="e.g. Competitor A, Competitor B"
                  className="w-full kofi-input"
                />
              </div>

              <div className="p-4 bg-[#e9dfd2] border-2 border-[#000000] rounded-[24px] text-[13px] text-[#202020] flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-[#202020] shrink-0 mt-0.5" />
                <span>
                  <strong>Strict privacy guarantee:</strong> We only test your 10 queries and deliver your diagnostic breakdown. No marketing spam or automated sales calls.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 btn-kofi-primary text-[16px] cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Queueing 10 Prompts...</span>
                  ) : (
                    <>
                      <span>Send My Free AI Visibility Check</span>
                      <Send size={16} className="ml-1" />
                    </>
                  )}
                </button>
                <p className="text-[12px] text-center text-[#202020]/70 mt-2 font-medium">
                  Delivered via WhatsApp or email within 3 working days.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#aac9f7] border-3 border-[#000000] flex items-center justify-center text-[#202020]">
              <CheckCircle2 size={34} />
            </div>

            <h3 className="font-display text-[28px] text-[#202020]">
              Audit Queued Successfully!
            </h3>

            <p className="text-[15px] text-[#202020]/80 max-w-md mx-auto leading-relaxed">
              We have queued <strong>{formData.businessName}</strong>. You will
              receive your 10-prompt analysis report on WhatsApp or Email within 3
              working days.
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-kofi-dark px-8 py-3 text-[14px]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
);
}
