import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e5e7eb] text-[#202020] border-t-2 border-[#000000] pt-16 pb-12 font-sans">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-12">
        {/* Top Brand & Mission Card (Sticker Card with Oat Cream) */}
        <div className="oat-feature-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff] border-2 border-[#000000] flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/LOGO.jpeg"
                  alt="Rank Rise Recognize"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-[26px] text-[#202020] leading-none">
                Rank Rise Recognize
              </span>
            </div>
            <p className="text-[16px] text-[#202020] leading-relaxed font-medium">
              Rank on Google. Rise in revenue. Get recognised by ChatGPT, Gemini & Perplexity.
            </p>
            <p className="text-[14px] text-[#202020]/75">
              The search and generative answer engine optimization agency built for growing Indian SMBs and D2C brands.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/ai-visibility-audit"
              className="btn-kofi-primary text-[15px]"
            >
              Get Free AI Audit
            </Link>
            <a
              href="https://wa.me/919490067869"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kofi-outline text-[15px]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Directory Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4 border-b-2 border-[#000000]/15 text-[15px]">
          {/* Column 1: Capabilities */}
          <div className="space-y-3">
            <h3 className="font-display text-[18px] text-[#202020]">
              Capabilities
            </h3>
            <ul className="space-y-2 text-[#202020]/80 font-medium text-[14px]">
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  SEO Services India
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  AEO (Answer Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  GEO (Generative Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  Local SEO & Maps 3-Pack
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  Content & Strategic Blogs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#000000] hover:underline transition-colors">
                  Google & Meta Performance Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Packages & Pricing */}
          <div className="space-y-3">
            <h3 className="font-display text-[18px] text-[#202020]">
              Pricing & Tiers
            </h3>
            <ul className="space-y-2 text-[#202020]/80 font-medium text-[14px]">
              <li>
                <Link href="/#pricing" className="hover:text-[#000000] hover:underline transition-colors">
                  Founding Launch Offer (From ₹7,999)
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#000000] hover:underline transition-colors">
                  Starter Package (₹22,499)
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#000000] hover:underline transition-colors">
                  Growth Package (₹49,499)
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#000000] hover:underline transition-colors">
                  AI Search Pro (₹53,999)
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#000000] hover:underline transition-colors">
                  Category Leader (₹1,12,499)
                </Link>
              </li>
              <li>
                <Link href="/ai-visibility-audit" className="font-semibold text-[#000000] hover:underline transition-colors">
                  Free 10-Prompt AI Check →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h3 className="font-display text-[18px] text-[#202020]">
              Company
            </h3>
            <ul className="space-y-2 text-[#202020]/80 font-medium text-[14px]">
              <li>
                <Link href="/#about" className="hover:text-[#000000] hover:underline transition-colors">
                  About Rank Rise Recognize
                </Link>
              </li>
              <li>
                <Link href="/#results" className="hover:text-[#000000] hover:underline transition-colors">
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#000000] hover:underline transition-colors">
                  Industries We Specialize In
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-[#000000] hover:underline transition-colors">
                  Search & AI Research
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#000000] hover:underline transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#000000] hover:underline transition-colors">
                  Contact Strategists
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-3">
            <h3 className="font-display text-[18px] text-[#202020]">
              Headquarters
            </h3>
            <div className="space-y-2 text-[14px] text-[#202020]/85 font-medium">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#202020] shrink-0 mt-0.5" />
                <span>Amaravathi, Hosapete, Viajayanagar - 583201</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#202020] shrink-0" />
                <a href="tel:+919490067869" className="hover:underline font-bold">
                  +91 94900 67869
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#202020] shrink-0" />
                <a href="mailto:rankriserecognize@gmail.com" className="hover:underline">
                  rankriserecognize@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#202020] shrink-0" />
                <a
                  href="https://wa.me/919490067869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-[#202020]"
                >
                  WhatsApp Fast Response
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[12px] text-[#202020]/70">
                <Clock size={13} className="shrink-0" />
                <span>Mon–Sat: 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Strip */}
        <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-[#202020]/75 font-medium">
          <div>
            Copyright © 2026 Rank Rise Recognize. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:underline">
              Sales & Refunds
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:underline">
              Sitemap
            </Link>
          </div>

          <div className="text-[12px] font-bold text-[#202020]">
            Crafted for India SMBs & D2C Brands
          </div>
        </div>
      </div>
    </footer>
  );
}
