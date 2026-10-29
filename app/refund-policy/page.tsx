import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Rank Rise Recognize",
  description: "Transparent refund and cancellation terms for Rank Rise Recognize retainers.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1816]">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs font-mono text-[#78716C]">
              Last updated: October 2026 · Rank Rise Recognize
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#57534E] leading-relaxed">
            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
              1. Monthly Retainer Services
            </h2>
            <p>
              Due to the immediate allocation of engineering hours, keyword
              research, and manual editorial writing, fees for started billing
              cycles are non-refundable. However, after the initial 3-month
              minimum commitment, you can pause or cancel your recurring retainer
              at any time with 30 days notice before the next invoice.
            </p>

            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
              2. Audit Crediting Policy
            </h2>
            <p>
              Clients who purchase our Full AI Visibility Audit (₹13,499 + GST)
              and subsequently sign a 6-month monthly retainer will have 100% of
              the audit fee credited directly against their second month&apos;s retainer
              invoice.
            </p>

            <h2 className="font-serif text-xl font-medium text-[#1A1816]">
              3. Questions
            </h2>
            <p>
              If you have any questions or billing concerns, please contact our
              team directly at{" "}
              <a
                href="mailto:contact@rankriserecognize.com"
                className="text-[#9C7D38] underline"
              >
                contact@rankriserecognize.com
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
