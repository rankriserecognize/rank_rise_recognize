"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    website: "",
    whatsapp: "",
    email: "",
    serviceNeed: "AEO & GEO (AI Search)",
    monthlyBudget: "₹25K–₹60K",
    message: "",
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
            {/* Left Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#000000] text-[12px] font-bold text-[#202020] uppercase tracking-wider">
                  DIRECT CONSULTATION
                </div>
                <h1 className="text-display-hero">
                  Let&apos;s talk about your growth
                </h1>
                <p className="text-[18px] text-[#202020]/80 font-normal leading-relaxed">
                  Tell us a little about your business. We review every inquiry
                  personally and reply within one working day.
                </p>
              </div>

              <div className="oat-feature-card p-8 space-y-6 text-[15px] text-[#202020]">
                <div className="flex items-start gap-3.5">
                  <MapPin size={20} className="text-[#202020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#202020] text-[16px]">Office & Delivery</div>
                    <div className="text-[14px] text-[#202020]/80 mt-0.5">
                      Amaravathi, Hosapete, Viajayanagar - 583201
                    </div>
                    <div className="text-[13px] text-[#202020]/60">
                      Virtual client delivery across all Indian states
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone size={20} className="text-[#202020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#202020] text-[16px]">Direct Phone Call</div>
                    <a
                      href="tel:+919490067869"
                      className="text-[15px] font-bold underline text-[#202020]"
                    >
                      +91 94900 67869 →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageSquare size={20} className="text-[#202020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#202020] text-[16px]">WhatsApp Fast Response</div>
                    <a
                      href="https://wa.me/919490067869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-bold underline text-[#202020]"
                    >
                      Click here to chat on WhatsApp (+91 94900 67869) →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail size={20} className="text-[#202020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#202020] text-[16px]">Email Address</div>
                    <a
                      href="mailto:rankriserecognize@gmail.com"
                      className="text-[14px] font-bold underline text-[#202020]"
                    >
                      rankriserecognize@gmail.com →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock size={20} className="text-[#202020] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#202020] text-[16px]">Operating Hours</div>
                    <div className="text-[14px] text-[#202020]/80 mt-0.5 font-medium">
                      Monday to Saturday: 10:00 AM – 7:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="sticker-card p-7 sm:p-10 space-y-5 bg-white">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 border-b-2 border-[#e5e7eb] pb-3">
                      <h2 className="font-display text-[26px] text-[#202020]">
                        Send Us a Direct Message
                      </h2>
                      <p className="text-[14px] text-[#202020]/75">
                        Tell us where you want your business to be seen.
                      </p>
                    </div>

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
                          placeholder="e.g. Vikram Malhotra"
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
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="e.g. Metro Clinic"
                          className="w-full kofi-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#202020] mb-1">
                        Website or GBP Link *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        placeholder="https://yourbrand.com"
                        className="w-full kofi-input"
                      />
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
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
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
                          placeholder="vikram@metroclinic.in"
                          className="w-full kofi-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          Primary Service Need
                        </label>
                        <select
                          value={formData.serviceNeed}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              serviceNeed: e.target.value,
                            })
                          }
                          className="w-full kofi-input cursor-pointer"
                        >
                          <option value="Full SEO + GEO Architecture">
                            Full SEO + GEO Architecture
                          </option>
                          <option value="AEO & GEO (AI Search)">
                            AEO & GEO (AI Search)
                          </option>
                          <option value="Local SEO & Google Maps">
                            Local SEO & Google Maps
                          </option>
                          <option value="Founding Client Offer">
                            Founding Client Offer (₹7,999)
                          </option>
                          <option value="Website Development">
                            Website Development
                          </option>
                          <option value="Ads Management">Ads Management</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#202020] mb-1">
                          Target Monthly Budget
                        </label>
                        <select
                          value={formData.monthlyBudget}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              monthlyBudget: e.target.value,
                            })
                          }
                          className="w-full kofi-input cursor-pointer"
                        >
                          <option value="₹7,999 (Founding Offer)">
                            ₹7,999 (Founding Offer)
                          </option>
                          <option value="₹14,999 (Launch Pro)">
                            ₹14,999 (Launch Pro)
                          </option>
                          <option value="₹25K–₹60K">₹25K–₹60K</option>
                          <option value="₹60K–₹1.2L">₹60K–₹1.2L</option>
                          <option value="₹1.2L+ (Category Leader)">
                            ₹1.2L+ (Category Leader)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#202020] mb-1">
                        How can we help? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Share your current challenges, target cities, or ranking goals..."
                        className="w-full px-5 py-3.5 bg-white border-2 border-[#000000] rounded-[24px] text-[15px] text-[#202020] placeholder-[#202020]/50 focus:outline-hidden focus:border-[#72a4f2]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 btn-kofi-primary text-[16px] cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <span>Send Message to Strategists</span>
                            <Send size={16} className="ml-1" />
                          </>
                        )}
                      </button>
                      <p className="text-[12px] text-center text-[#202020]/70 mt-2 font-medium">
                        We reply within 1 working day. No aggressive sales pitches.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#aac9f7] border-3 border-[#000000] flex items-center justify-center text-[#202020]">
                      <CheckCircle2 size={34} />
                    </div>

                    <h3 className="font-display text-[28px] text-[#202020]">
                      Message Received!
                    </h3>

                    <p className="text-[15px] text-[#202020]/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. We have logged
                      your inquiry for <strong>{formData.businessName}</strong>.
                      A search strategist will review your website and contact you
                      within one business day.
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
