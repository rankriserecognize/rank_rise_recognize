"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
    { name: "AEO Services", desc: "Win Google AI Overviews & snippets", href: "/#services" },
    { name: "GEO Agency", desc: "Get cited by ChatGPT, Gemini & Perplexity", href: "/#services" },
    { name: "Local SEO & GBP", desc: "Dominate Google Maps in your city", href: "/#services" },
    { name: "Content & Blogs", desc: "Articles written for humans and AI engines", href: "/#services" },
    { name: "Google & Meta Ads", desc: "Paid lead flow while SEO compounds", href: "/#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D6] py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-xs bg-[#1A1816] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-semibold tracking-wider border border-[#9C7D38]/40 shadow-xs transition-transform duration-300 group-hover:scale-105">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-medium text-[#1A1816] tracking-tight group-hover:text-[#9C7D38] transition-colors">
              Rank Rise Recognize
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#78716C] font-mono">
              SEO · AEO · GEO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium text-[#44403C]">
          <Link
            href="/"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-[#1A1816] transition-colors py-1 cursor-pointer"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#9C7D38]" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-84 z-50">
                <div className="bg-[#FFFFFF] border border-[#E8E2D6] rounded-sm p-3 shadow-lg">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#9C7D38] px-3 py-1 font-semibold">
                    Core Capabilities
                  </div>
                  <div className="divide-y divide-[#F4EFEA]">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-2.5 rounded-xs hover:bg-[#FAF7F2] transition-colors group"
                      >
                        <div className="text-[13px] font-semibold text-[#1A1816] group-hover:text-[#9C7D38] flex items-center justify-between">
                          {item.name}
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-[#9C7D38]"
                          />
                        </div>
                        <div className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#E8E2D6] px-3">
                    <Link
                      href="/#services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-semibold text-[#9C7D38] hover:text-[#84682A] flex items-center gap-1"
                    >
                      View all 9 services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#pricing"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Pricing
          </Link>

          <Link
            href="/#results"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Results
          </Link>

          <Link
            href="/#about"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            About
          </Link>

          <Link
            href="/#blog"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Blog
          </Link>

          <Link
            href="/#contact"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xs text-xs font-semibold text-[#FAF7F2] bg-[#1A1816] border border-[#1A1816] hover:bg-[#292524] hover:border-[#9C7D38] transition-all duration-300 shadow-xs cursor-pointer"
          >
            <Sparkles size={13} className="text-[#EADBB2]" />
            <span>Get Free AI Audit</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1816] hover:text-[#9C7D38] transition-colors focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D6] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#1A1816]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Services (SEO, AEO, GEO)
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Pricing
            </Link>
            <Link
              href="/#results"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Results & Case Studies
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              About Agency
            </Link>
            <Link
              href="/#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Blog & Insights
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E8E2D6]/60"
            >
              Contact
            </Link>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAudit) onOpenAudit();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1816] text-[#FAF7F2] rounded-xs text-sm font-semibold border border-[#9C7D38]/50"
              >
                <Sparkles size={14} className="text-[#EADBB2]" />
                Get Your Free AI Visibility Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
