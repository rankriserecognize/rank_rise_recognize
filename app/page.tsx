"use client";

import { useState, useEffect, useId } from "react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WaitlistEntry {
  email: string;
  role: string;
  vipNumber: number;
  joinedAt: string;
}

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 74,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  // Waitlist form state
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Engineering & Tech");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState<WaitlistEntry | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<"leaderboard" | "ascension" | "recognition">("leaderboard");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Email input ID
  const emailInputId = useId();

  // Hydration guard & localStorage recovery
  useEffect(() => {
    setMounted(true);

    try {
      const saved = localStorage.getItem("rrr_vip_waitlist");
      if (saved) {
        setSubmittedEntry(JSON.parse(saved));
      }
    } catch {
      // LocalStorage might be restricted in some environments
    }

    // Dynamic countdown calculation: Target date is set 75 days in future from first load
    const launchTarget = new Date();
    launchTarget.setDate(launchTarget.getDate() + 75);
    launchTarget.setHours(launchTarget.getHours() + 14);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchTarget.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);

    // Realistic cyber-processing delay
    setTimeout(() => {
      const randomVip = Math.floor(Math.random() * 200) + 480;
      const entry: WaitlistEntry = {
        email,
        role,
        vipNumber: randomVip,
        joinedAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      setSubmittedEntry(entry);
      setIsSubmitting(false);

      try {
        localStorage.setItem("rrr_vip_waitlist", JSON.stringify(entry));
      } catch {
        // Ignore storage errors
      }
    }, 850);
  };

  const copyReferralLink = () => {
    const link = `https://rankriserecognize.com/join?ref=VIP-${submittedEntry?.vipNumber || "0482"}`;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#06080e] text-zinc-100 overflow-x-hidden selection:bg-indigo-500/40 selection:text-white">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid-pattern opacity-40" />

      {/* Radiant Color Mesh Blobs */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-aurora" />
      <div className="fixed top-[45%] right-[-15%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* TOP NAVIGATION / STATUS BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#06080e]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-amber-400 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-base uppercase text-white flex items-center gap-1.5">
                RANK <span className="text-cyan-400 font-black">RISE</span> RECOGNIZE
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono">
                Performance Operating System
              </span>
            </div>
          </div>

          {/* Status Indicator & Waitlist Jump */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PRIVATE BETA PHASE 3.0</span>
            </div>

            <a
              href="#waitlist"
              className="relative group inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-amber-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-1.5 text-white">
                <span>Join VIP Waitlist</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Top Pill */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-white/15 shadow-xl hover:border-cyan-500/40 transition-all cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Next-Gen Human Motivation Platform
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-400 to-amber-600 text-black">
                LAUNCHING 2026
              </span>
            </div>
          </div>

          {/* Hero Typography */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              <span className="block text-zinc-100">Ascend The Ranks.</span>
              <span className="block text-gradient-shimmer">Master The Rise.</span>
              <span className="block text-gradient-gold">Recognize The Best.</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Transform daily milestones into legendary triumphs. An automated, gamified 
              achievement ecosystem built for high-velocity teams, elite engineers, and modern organizations.
            </p>
          </div>

          {/* COUNTDOWN CLOCK */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              
              <div className="text-center mb-5">
                <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                  OFFICIAL PUBLIC LAUNCH COUNTDOWN
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3 sm:gap-6">
                {[
                  { label: "DAYS", val: mounted ? timeLeft.days : 74 },
                  { label: "HOURS", val: mounted ? timeLeft.hours : 18 },
                  { label: "MINUTES", val: mounted ? timeLeft.minutes : 42 },
                  { label: "SECONDS", val: mounted ? timeLeft.seconds : 15 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-[#090e1a]/80 border border-white/10 hover:border-cyan-500/30 transition-all shadow-inner"
                  >
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white drop-shadow-[0_2px_12px_rgba(6,182,212,0.35)]">
                      {String(item.val).padStart(2, "0")}
                    </span>
                    <span className="mt-1 text-[10px] sm:text-xs font-mono tracking-wider text-zinc-400 font-semibold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-center flex items-center justify-center gap-2 text-xs text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Synchronized with Global Genesis Deployment Cluster</span>
              </div>
            </div>
          </div>

          {/* 3D HERO VISUAL & FLOATING CARDS SHOWCASE */}
          <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto">
            <div className="relative flex items-center justify-center">
              
              {/* Backlight Rings */}
              <div className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-600/30 to-amber-500/20 blur-3xl -z-10 animate-pulse-glow" />
              <div className="absolute w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full border border-dashed border-indigo-500/20 pointer-events-none" />

              {/* Master 3D Trophy Image */}
              <div className="relative group w-[280px] sm:w-[380px] md:w-[440px] aspect-square rounded-3xl overflow-hidden glass-panel border-white/20 shadow-[0_20px_80px_rgba(6,182,212,0.25)] transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/hero_emblem.jpg"
                  alt="Rank Rise Recognize Grand Mastery Trophy"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 440px, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent opacity-60" />
                
                {/* Emblem Footer Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090e1a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Apex Champion Trophy</p>
                      <p className="text-[10px] text-zinc-400 font-mono">Seasonal Leaderboard Genesis Tier</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    Tier 01
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 1: Live Leaderboard Rank */}
              <div className="hidden lg:flex absolute -left-6 top-8 glass-panel rounded-2xl p-4 border-white/15 shadow-2xl max-w-[260px] animate-float">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-amber-500/20">
                    #1
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">Elena Rostova</span>
                      <span className="text-[10px] text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded font-mono font-bold">
                        DIAMOND
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Principal Systems Architect</p>
                    <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-cyan-400">
                      <span>⚡ 14,820 XP</span>
                      <span className="text-zinc-500">•</span>
                      <span>🔥 18d Streak</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 2: Peer Recognition Kudos */}
              <div className="hidden lg:flex absolute -right-6 top-16 glass-panel rounded-2xl p-4 border-white/15 shadow-2xl max-w-[270px] animate-float-delayed">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base shadow-lg shadow-indigo-500/30">
                    💎
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white">Marcus Vance</span>
                      <span className="text-[10px] text-zinc-400">sent kudos</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 italic mt-0.5">
                      &ldquo;Flawless migration of core DB with 0 downtime! 🚀&rdquo;
                    </p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30">
                        +500 Impact Bonus
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 3: Skill Ascended */}
              <div className="hidden sm:flex lg:hidden absolute -bottom-6 glass-panel rounded-2xl p-4 border-white/15 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                    ▲
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white">Skill Mastered: Distributed Consensus</p>
                    <p className="text-[10px] text-zinc-400 font-mono">Rank upgraded to Apex Level 4</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* WAITLIST SIGNUP COMPONENT */}
          <div id="waitlist" className="mt-20 lg:mt-32 max-w-2xl mx-auto scroll-mt-24">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border-white/15 shadow-[0_15px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500" />

              {!submittedEntry ? (
                <div>
                  <div className="text-center space-y-2 mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                      <span>EXCLUSIVE PRE-RELEASE ACCESS</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Join The Founding Pioneers Waitlist
                    </h2>
                    <p className="text-sm text-zinc-400">
                      Early members receive permanent VIP Founding status, free 6 months on Enterprise Tier, 
                      and personalized team onboarding.
                    </p>
                  </div>

                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div>
                      <label htmlFor={emailInputId} className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                        Work or Personal Email
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090e1a] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                        Your Primary Domain
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090e1a] border border-white/15 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all cursor-pointer"
                      >
                        <option value="Engineering & Tech">Engineering & Architecture</option>
                        <option value="Product & Design">Product & Creative Design</option>
                        <option value="Leadership & Executive">Team Lead / Executive Management</option>
                        <option value="Growth & Sales">Sales, GTM & Revenue</option>
                        <option value="People & Culture">People Operations & HR</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-white text-sm tracking-wide bg-gradient-to-r from-cyan-500 via-indigo-600 to-amber-500 hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Securing Your Pioneer Token...</span>
                        </>
                      ) : (
                        <>
                          <span>Claim Priority Early Access</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Zero Spam Guarantee
                      </span>
                      <span>4,920+ Already Enrolled</span>
                    </div>
                  </form>
                </div>
              ) : (
                /* SUCCESS PASS STATE */
                <div className="space-y-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-amber-500/30">
                    🏆
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase">
                      VIP PASS CONFIRMED
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      Welcome to the Inner Circle
                    </h2>
                    <p className="text-sm text-zinc-300 mt-2">
                      Your credentials have been securely provisioned for <span className="text-white font-mono">{submittedEntry.email}</span>.
                    </p>
                  </div>

                  {/* VIP Card */}
                  <div className="p-6 rounded-2xl bg-[#090e1a] border border-amber-400/30 text-left relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-amber-500 to-amber-600 text-black font-black text-[10px] tracking-wider uppercase rounded-bl-xl">
                      FOUNDING PIONEER
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[10px] text-zinc-400 font-mono uppercase">WAITLIST POSITION</p>
                        <p className="text-3xl font-black font-mono text-white">#{submittedEntry.vipNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-zinc-400 font-mono uppercase">DIVISION</p>
                        <p className="text-sm font-bold text-amber-400">{submittedEntry.role}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                      <span>Status: Priority Queue Activated</span>
                      <span className="font-mono text-emerald-400">● Genesis Batch</span>
                    </div>
                  </div>

                  {/* Referral Link Sharing */}
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-400">
                      Want to ascend faster? Share your priority link to jump 25 spots for every colleague who joins:
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        readOnly
                        value={`https://rankriserecognize.com/join?ref=VIP-${submittedEntry.vipNumber}`}
                        className="w-full px-3 py-2 rounded-lg bg-[#090e1a] border border-white/10 text-xs text-zinc-300 font-mono"
                      />
                      <button
                        onClick={copyReferralLink}
                        className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shrink-0 cursor-pointer"
                      >
                        {copiedLink ? "Copied!" : "Copy Link"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* THE THREE PILLARS (RANK • RISE • RECOGNIZE) */}
          <div className="mt-28 lg:mt-40">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                THE TRI-FORCE ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Engineered For True High Performance
              </h2>
              <p className="text-base text-zinc-400">
                Traditional appraisals are dead. Rank Rise Recognize merges algorithmic fairness, continuous skill mastery, and instant peer appreciation into one unified engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Pillar 1: Rank */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-8 border-white/10 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                </div>
                <div className="text-xs font-mono font-bold text-cyan-400 mb-2">01 / CALIBRATION</div>
                <h3 className="text-2xl font-bold text-white mb-3">RANK</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Objective, dynamic leaderboards that eliminate political bias. Track code commits, project velocity, customer impact, and custom team metrics with transparent algorithmic scoring.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Tiered Leagues (Bronze to Apex)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Multi-dimensional scoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Anti-gaming balance engine
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Rise */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-8 border-white/10 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <div className="text-xs font-mono font-bold text-indigo-400 mb-2">02 / ASCENSION</div>
                <h3 className="text-2xl font-bold text-white mb-3">RISE</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  RPG-inspired skill trees and career ascension. Every task, sprint, and completed initiative yields XP, opening up new mastery nodes and clear paths toward senior leadership.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> Interactive Skill Branching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> Micro-milestone streaks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> Personalized career telemetry
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Recognize */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-8 border-white/10 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="text-xs font-mono font-bold text-amber-400 mb-2">03 / APPRECIATION</div>
                <h3 className="text-2xl font-bold text-white mb-3">RECOGNIZE</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Social gratitude in real-time. Give high-impact peer tokens, celebrate team wins publicly, and immortalize breakthrough contributions with permanent company trophy badges.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Instant micro-bonus points
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Slack & MS Teams sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Permanent achievement hall
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SNEAK PEEK EXPLORER */}
          <div className="mt-28 lg:mt-40 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                PLATFORM SNEAK PEEK
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                A First Look Inside the Dashboard
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 rounded-xl bg-[#090e1a] border border-white/10">
                <button
                  onClick={() => setActivePreviewTab("leaderboard")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activePreviewTab === "leaderboard"
                      ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  🏆 Dynamic Leaderboard
                </button>
                <button
                  onClick={() => setActivePreviewTab("ascension")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activePreviewTab === "ascension"
                      ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ▲ Ascension Skill Trees
                </button>
                <button
                  onClick={() => setActivePreviewTab("recognition")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activePreviewTab === "recognition"
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ⚡ Social Recognition
                </button>
              </div>
            </div>

            {/* Mock Screen Content */}
            <div className="glass-panel rounded-2xl border-white/15 p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs font-mono text-zinc-500">app.rankriserecognize.com/preview</span>
              </div>

              {activePreviewTab === "leaderboard" && (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-3">
                    <span>RANK & CONTRIBUTOR</span>
                    <span>TIER</span>
                    <span>VELOCITY</span>
                  </div>
                  {[
                    { rank: "01", name: "David Kim", role: "Staff Infrastructure Eng", tier: "APEX TITAN", xp: "+3,240 XP", badge: "🥇" },
                    { rank: "02", name: "Aria Thorne", role: "Lead Product Designer", tier: "DIAMOND IV", xp: "+2,890 XP", badge: "🥈" },
                    { rank: "03", name: "Chen Wei", role: "Senior Security Specialist", tier: "DIAMOND II", xp: "+2,410 XP", badge: "🥉" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-base">{row.badge}</span>
                        <div>
                          <p className="text-sm font-bold text-white">{row.name}</p>
                          <p className="text-[11px] text-zinc-400">{row.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md">
                        {row.tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400">{row.xp}</span>
                    </div>
                  ))}
                </div>
              )}

              {activePreviewTab === "ascension" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Cloud Resiliency & Zero Trust Tree</span>
                      <span className="text-xs font-mono text-indigo-400">Level 8 / 10 Mastered</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[80%]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { node: "Chaos Eng", status: "UNLOCKED", pts: "+1,200 XP" },
                      { node: "Multi-Region Mesh", status: "UNLOCKED", pts: "+950 XP" },
                      { node: "K8s Operator", status: "IN PROGRESS", pts: "+600 XP" },
                      { node: "Quantum Crypto", status: "LOCKED", pts: "+2,000 XP" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#090d18] border border-white/5 text-center">
                        <p className="text-xs font-bold text-white mb-1">{item.node}</p>
                        <p className={`text-[10px] font-mono font-bold ${item.status === 'UNLOCKED' ? 'text-emerald-400' : item.status === 'IN PROGRESS' ? 'text-amber-400' : 'text-zinc-500'}`}>
                          {item.status}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-1">{item.pts}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePreviewTab === "recognition" && (
                <div className="space-y-3 animate-fade-in">
                  <div className="p-4 rounded-xl bg-[#0a0f1d] border border-amber-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">⭐</span>
                        <span className="text-xs font-bold text-white">Kudos from VP of Engineering</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">Just now</span>
                    </div>
                    <p className="text-xs text-zinc-300 italic">
                      &ldquo;Phenomenal work delivering the Q3 API gateway 2 weeks ahead of schedule. Your attention to performance cut latency by 45%!&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                        +1,000 Token Bonus
                      </span>
                      <span className="text-[10px] bg-indigo-400/20 text-indigo-300 px-2 py-0.5 rounded font-mono font-bold">
                        Spotlight Badge Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mt-28 lg:mt-40 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Everything You Need to Know
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "When will Rank Rise Recognize publicly launch?",
                  a: "Closed private beta invites begin rollout in Q3 2026. Waitlist pioneers will be onboarded in sequential cohorts based on priority waitlist number.",
                },
                {
                  q: "What perks do VIP Waitlist members receive?",
                  a: "VIP Pioneers gain permanent founding status, 6 complimentary months of Enterprise tier access, exclusive customizable trophy cosmetics, and direct roadmap input with the founders.",
                },
                {
                  q: "Does it integrate with Slack, Microsoft Teams, and GitHub?",
                  a: "Yes! Out of the box, our bots listen for pull requests, closed tickets (Jira/Linear), sales closings (Salesforce/Hubspot), and native chat shout-outs in Slack and Teams.",
                },
                {
                  q: "How does the system prevent toxic competition or gaming the leaderboard?",
                  a: "Our proprietary Calibration Engine utilizes multi-dimensional normalized metrics and peer validation consensus rather than brute quantity. It rewards quality, collaboration, and high-impact outcomes over raw spam.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="text-cyan-400 text-lg font-mono ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div className="mt-28 max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-cyan-900/40 via-indigo-900/40 to-amber-900/40 border border-white/20 shadow-2xl text-center">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Be Among The First to Ascend
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
                  Reserve your company or personal VIP slot before the Genesis cohort fills.
                </p>
                <div className="pt-2">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20"
                  >
                    <span>Claim Your VIP Pass Now</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-[#04060a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#090e1a] border border-white/10 flex items-center justify-center text-amber-400 font-black text-xs">
              RRR
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-wider">
                RANK RISE RECOGNIZE
              </p>
              <p className="text-[10px] text-zinc-500">
                © 2026 Rank Rise Recognize Inc. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#waitlist" className="hover:text-cyan-400 transition-colors">VIP Waitlist</a>
            <span className="text-zinc-700">•</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter (X)</a>
            <span className="text-zinc-700">•</span>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Discord</a>
            <span className="text-zinc-700">•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pre-Release Build v0.9.4 • Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
