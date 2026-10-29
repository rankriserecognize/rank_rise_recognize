import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141311] text-[#EFEBE4] border-t border-[#292524] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#292524]">
          {/* Column 1: Brand & Promise (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#FAF7F2] text-[#141311] flex items-center justify-center font-serif text-sm font-semibold border border-[#9C7D38]">
                R
              </div>
              <span className="font-serif text-xl font-medium tracking-tight text-[#FAF7F2]">
                Rank Rise Recognize
              </span>
            </div>

            <p className="font-serif text-base text-[#D6CFBE] italic leading-snug pt-1">
              &ldquo;Rank on Google. Rise in revenue. Get recognised by AI.&rdquo;
            </p>

            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm">
              The search + answer engine optimization agency built for growing
              Indian SMBs and D2C brands. We optimize for search engines, map packs,
              and generative AI models.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs border border-[#3E3832] flex items-center justify-center text-xs font-mono text-[#D6CFBE] hover:border-[#9C7D38] hover:text-[#FAF7F2] transition-colors"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs border border-[#3E3832] flex items-center justify-center text-xs font-mono text-[#D6CFBE] hover:border-[#9C7D38] hover:text-[#FAF7F2] transition-colors"
                aria-label="Instagram"
              >
                Ig
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs border border-[#3E3832] flex items-center justify-center text-xs font-mono text-[#D6CFBE] hover:border-[#9C7D38] hover:text-[#FAF7F2] transition-colors"
                aria-label="YouTube"
              >
                Yt
              </a>
            </div>
          </div>

          {/* Column 2: Search & Growth Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
              Services
            </div>
            <ul className="space-y-2 text-xs text-[#D6CFBE]">
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  SEO Services India
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  AEO (Answer Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  GEO (Generative Engine Optimization)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  Local SEO & Google Business Profile
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  Content & Strategic Blogs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  Google Ads & Meta Performance Ads
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  SEO-Ready Website Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FAF7F2] transition-colors">
                  Website Maintenance & Speed
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
              Company
            </div>
            <ul className="space-y-2 text-xs text-[#D6CFBE]">
              <li>
                <Link href="/#about" className="hover:text-[#FAF7F2] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#FAF7F2] transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/#results" className="hover:text-[#FAF7F2] transition-colors">
                  Results & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#FAF7F2] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-[#FAF7F2] transition-colors">
                  Search & AI Blog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#FAF7F2] transition-colors">
                  SEO & GEO FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#FAF7F2] transition-colors">
                  Contact Agency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#9C7D38] font-semibold">
              Contact & Location
            </div>

            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#9C7D38] shrink-0 mt-0.5" />
                <span>
                  Indiranagar / Bengaluru & Pan-India Virtual Delivery
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#9C7D38] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#FAF7F2] transition-colors">
                  +91 [Phone on File]
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#9C7D38] shrink-0" />
                <a href="mailto:contact@rankriserecognize.com" className="hover:text-[#FAF7F2] transition-colors">
                  contact@rankriserecognize.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare size={14} className="text-[#9C7D38] shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors text-[#D4AF37]"
                >
                  WhatsApp Click-to-Chat
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-[#78716C]">
                <Clock size={13} className="shrink-0" />
                <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] text-[#78716C]">
          <div>
            © 2026 Rank Rise Recognize. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D6CFBE] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#3E3832]">·</span>
            <Link href="/terms-of-service" className="hover:text-[#D6CFBE] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#3E3832]">·</span>
            <Link href="/refund-policy" className="hover:text-[#D6CFBE] transition-colors">
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
