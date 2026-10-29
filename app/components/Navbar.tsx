"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenAudit?: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "SEO Services", desc: "Rank for high-intent buyer searches", href: "/#services" },
    { name: "AEO Services", desc: "Win Google AI Overviews & featured answers", href: "/#services" },
    { name: "GEO Agency", desc: "Get cited by ChatGPT, Gemini & Perplexity", href: "/#services" },
    { name: "Local SEO & GBP", desc: "Dominate Google Maps in your city", href: "/#services" },
    { name: "Content & Blogs", desc: "Articles written for humans and AI models", href: "/#services" },
    { name: "Google & Meta Ads", desc: "Paid lead flow while SEO compounds", href: "/#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#e5e7eb]/90 backdrop-blur-md py-3 border-b-2 border-[#000000]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-[#ffffff] border-2 border-[#000000] flex items-center justify-center overflow-hidden shrink-0"
          >
            <img
              src="/LOGO.jpeg"
              alt="Rank Rise Recognize"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-[22px] text-[#202020] leading-none tracking-tight">
              Rank Rise Recognize
            </span>
            <span className="text-[11px] font-semibold text-[#202020]/70 uppercase tracking-wider mt-0.5">
              SEO · AEO · GEO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — DM Sans 16px weight 400 */}
        <nav className="hidden lg:flex items-center gap-7 text-[16px] text-[#202020] font-medium">
          <Link
            href="/"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Overview
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-[#000000] hover:underline underline-offset-4 transition-colors cursor-pointer"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Capabilities</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#72a4f2]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-88 z-50"
                >
                  <div className="bg-[#ffffff] border-2 border-[#000000] rounded-[24px] p-4 shadow-none">
                    <div className="text-[12px] font-bold text-[#202020] uppercase tracking-wider px-2 pb-2 border-b-2 border-[#e5e7eb]">
                      Search & AI Disciplines
                    </div>
                    <div className="divide-y divide-[#e5e7eb] pt-1">
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-2.5 py-2.5 rounded-full hover:bg-[#e9dfd2] transition-colors group"
                        >
                          <div className="text-[15px] font-semibold text-[#202020] flex items-center justify-between">
                            {item.name}
                            <ArrowUpRight
                              size={14}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <div className="text-[12px] text-[#202020]/70 font-normal line-clamp-1 mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#pricing"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/#results"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Results
          </Link>

          <Link
            href="/#about"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Philosophy
          </Link>

          <Link
            href="/#industries"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Industries
          </Link>

          <Link
            href="/#blog"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Research
          </Link>

          <Link
            href="/#contact"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons: Secondary Dark Pill + Primary Cobalt Pop Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/#pricing"
              className="btn-kofi-dark text-[14px] py-2 px-5 inline-block"
            >
              See Pricing
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenAudit}
            className="btn-kofi-primary text-[14px] py-2 px-5 cursor-pointer"
          >
            <span>Free AI Audit</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full border-2 border-[#000000] bg-[#ffffff] text-[#202020] hover:bg-[#e9dfd2] transition-colors focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-5 mt-3 bg-[#ffffff] border-2 border-[#000000] rounded-[32px] p-6 shadow-none"
          >
            <nav className="flex flex-col gap-3 text-[16px] font-semibold text-[#202020]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Overview
              </Link>
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Capabilities (SEO, AEO, GEO)
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Transparent Pricing
              </Link>
              <Link
                href="/#results"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Verified Results
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Philosophy
              </Link>
              <Link
                href="/#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Industries Served
              </Link>
              <Link
                href="/#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Research Blog
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#e5e7eb]"
              >
                Contact
              </Link>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAudit) onOpenAudit();
                }}
                className="w-full btn-kofi-primary py-3 text-[15px]"
              >
                Get Free AI Visibility Audit
              </button>
              <a
                href="tel:+919490067869"
                className="w-full btn-kofi-dark py-3 text-[15px] flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>Call +91 94900 67869</span>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
