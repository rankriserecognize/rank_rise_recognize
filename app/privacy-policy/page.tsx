import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Rank Rise Recognize",
  description: "Privacy policy and client data protection terms for Rank Rise Recognize.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <ShieldCheck size={15} className="text-[#202020]" />
              <span>LEGAL TERMS</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              Privacy Policy
            </h1>
            <p className="text-[13px] font-semibold text-[#202020]/60">
              Last updated: October 2026 · Rank Rise Recognize
            </p>
          </div>

          <div className="sticker-card p-8 sm:p-12 space-y-6 text-[15px] text-[#202020]/80 leading-relaxed bg-white rounded-[40px] border-[2.5px] border-black">
            <p>
              At Rank Rise Recognize, we value your trust and are committed to
              protecting your personal and business data. This Privacy Policy
              explains how we collect, use, and safeguard information when you
              visit our website, submit our Free AI Visibility Audit forms, or
              engage our marketing services.
            </p>

            <h2 className="font-display text-[22px] text-[#202020] pt-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us, including
              your name, business name, website URL, WhatsApp number, email
              address, and target locations. This information is collected solely
              to execute search performance audits, schedule consultations, and
              deliver monthly reporting.
            </p>

            <h2 className="font-display text-[22px] text-[#202020] pt-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your contact and website information to test your search and
              AI prompt visibility across Google, ChatGPT, and Gemini; compile your
              customized report; and communicate directly via email or WhatsApp. We
              never sell, rent, or lease client information to third-party brokers.
            </p>

            <h2 className="font-display text-[22px] text-[#202020] pt-2">
              3. Analytics & Security
            </h2>
            <p>
              Our website uses basic analytics to monitor site performance and user
              experience without tracking invasive personal profiles. We employ
              standard SSL encryption and modern access controls to safeguard your
              data.
            </p>

            <h2 className="font-display text-[22px] text-[#202020] pt-2">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to
              request data deletion, please contact us at{" "}
              <a
                href="mailto:rankriserecognize@gmail.com"
                className="text-[#202020] font-bold underline hover:text-[#72a4f2] transition-colors"
              >
                rankriserecognize@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
