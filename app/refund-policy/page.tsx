import type { Metadata } from "next";
import { RefreshCcw } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Rank Rise Recognize",
  description: "Transparent refund and cancellation terms for Rank Rise Recognize retainers.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] text-[#202020] flex flex-col font-sans selection:bg-[#aac9f7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-[2px] border-black text-[13px] font-bold text-[#202020]">
              <RefreshCcw size={15} className="text-[#202020]" />
              <span>COMMERCIAL TERMS</span>
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] text-[#202020] leading-none tracking-normal">
              Refund & Cancellation Policy
            </h1>
            <p className="text-[13px] font-semibold text-[#202020]/60">
              Last updated: October 2026 · Rank Rise Recognize
            </p>
          </div>

          <div className="sticker-card p-8 sm:p-12 space-y-6 text-[15px] text-[#202020]/80 leading-relaxed bg-white rounded-[40px] border-[2.5px] border-black">
            <h2 className="font-display text-[22px] text-[#202020]">
              1. Monthly Retainer Services
            </h2>
            <p>
              Due to the immediate allocation of engineering hours, keyword
              research, and manual editorial writing, fees for started billing
              cycles are non-refundable. However, after the initial 3-month
              minimum commitment, you can pause or cancel your recurring retainer
              at any time with 30 days notice before the next invoice.
            </p>

            <h2 className="font-display text-[22px] text-[#202020]">
              2. Audit Crediting Policy
            </h2>
            <p>
              Clients who purchase our Full AI Visibility Audit (₹13,499 + GST)
              and subsequently sign a 6-month monthly retainer will have 100% of
              the audit fee credited directly against their second month&apos;s retainer
              invoice.
            </p>

            <h2 className="font-display text-[22px] text-[#202020]">
              3. Inquiries
            </h2>
            <p>
              If you have any questions or billing concerns, please contact our
              team directly at{" "}
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
