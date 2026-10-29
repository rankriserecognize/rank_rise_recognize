"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs text-[11px] font-mono uppercase tracking-widest text-[#786339] font-medium">
                  Direct Inquiries
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium tracking-tight">
                  Let&apos;s talk about your growth
                </h1>
                <p className="text-base text-[#57534E] leading-relaxed">
                  Tell us a little about your business. We review every inquiry
                  personally and reply within one working day.
                </p>
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#E8E2D6] rounded-xs space-y-5 text-sm text-[#44403C]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#9C7D38] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1A1816]">Office & Delivery</div>
                    <div className="text-xs text-[#78716C] mt-0.5">
                      Indiranagar / Bengaluru, Karnataka 560038
                    </div>
                    <div className="text-xs text-[#78716C]">
                      Virtual client delivery across all Indian states
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-[#9C7D38] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1A1816]">WhatsApp Fast Response</div>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#9C7D38] hover:underline"
                    >
                      Click here to chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#9C7D38] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1A1816]">Email Address</div>
                    <a
                      href="mailto:contact@rankriserecognize.com"
                      className="text-xs text-[#78716C] hover:text-[#1A1816]"
                    >
                      contact@rankriserecognize.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#9C7D38] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1A1816]">Operating Hours</div>
                    <div className="text-xs text-[#78716C] mt-0.5">
                      Monday to Saturday: 10:00 AM – 7:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#DFD7C8] rounded-xs p-6 sm:p-8 shadow-sm">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="font-serif text-2xl font-medium text-[#1A1816] border-b border-[#F4EFEA] pb-3">
                      Send a Direct Message
                    </h2>

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
                          placeholder="e.g. Dr. Rajesh Rao"
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
                          placeholder="e.g. Rao Dental Clinics"
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Website or Maps URL
                        </label>
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              website: e.target.value,
                            })
                          }
                          placeholder="https://yourclinic.in"
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
                        placeholder="contact@yourbusiness.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          What do you need help with?
                        </label>
                        <select
                          value={formData.serviceNeed}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              serviceNeed: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        >
                          <option value="AEO & GEO (AI Search)">
                            AEO & GEO (AI Search)
                          </option>
                          <option value="SEO (Google Rankings)">
                            SEO (Google Rankings)
                          </option>
                          <option value="Local SEO & Google Maps">
                            Local SEO & Google Maps
                          </option>
                          <option value="Content & Blogs">Content & Blogs</option>
                          <option value="Google & Meta Ads">Google & Meta Ads</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Not sure / Need advice">
                            Not sure / Need advice
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                          Monthly Budget
                        </label>
                        <select
                          value={formData.monthlyBudget}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              monthlyBudget: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                        >
                          <option value="Under ₹10K (Founding Basic)">
                            Under ₹10K (Founding Basic)
                          </option>
                          <option value="₹10K–₹25K (Launch Plus/Pro)">
                            ₹10K–₹25K (Launch Plus/Pro)
                          </option>
                          <option value="₹25K–₹60K (Growth / AI Search Pro)">
                            ₹25K–₹60K (Growth / AI Search Pro)
                          </option>
                          <option value="₹60K+ (Category Leader)">
                            ₹60K+ (Category Leader)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1">
                        Message / Goals
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your target audience, current ranking challenges, or goals..."
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5CBB9] rounded-xs text-sm text-[#1A1816] focus:outline-hidden focus:border-[#9C7D38]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#1A1816] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider rounded-xs border border-[#1A1816] hover:bg-[#2B2724] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send size={14} className="text-[#EADBB2]" />
                          <span>Send Message</span>
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
                      Message Received
                    </h3>
                    <p className="text-sm text-[#57534E] leading-relaxed max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Our strategists
                      will review your inquiry for <strong>{formData.businessName}</strong>{" "}
                      and respond within 1 business day.
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
