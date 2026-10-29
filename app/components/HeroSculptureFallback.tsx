"use client";

export default function HeroSculptureFallback() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] flex items-center justify-center relative select-none">
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
        {/* Soft Warm Depth Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EFE8DD] to-[#F7F2E8] blur-2xl opacity-60" />

        {/* Orbit Ring 1 - Antique Gold */}
        <div className="absolute inset-4 rounded-full border border-[#C5A458]/40 border-dashed animate-[spin_24s_linear_infinite]" />

        {/* Orbit Ring 2 - Muted Bronze */}
        <div className="absolute inset-10 rounded-full border border-[#9C7D38]/30 animate-[spin_18s_linear_infinite_reverse]" />

        {/* Central Geometric Ascending Steps Representation */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          {/* Top Zenith Diamond */}
          <div className="w-6 h-6 rotate-45 border-2 border-[#C5A458] bg-[#F7F2E7] shadow-sm mb-2" />

          {/* Stepped Plinths */}
          <div className="w-16 h-3 bg-[#EAE2D5] border border-[#D5CBB9] rounded-xs shadow-xs" />
          <div className="w-24 h-3.5 bg-[#E4DCCE] border border-[#D0C4B0] rounded-xs shadow-xs" />
          <div className="w-32 h-4 bg-[#DFD6C6] border border-[#C8BDAB] rounded-xs shadow-xs" />
          <div className="w-40 h-4.5 bg-[#D9CFBE] border border-[#C2B5A2] rounded-xs shadow-xs" />
          <div className="w-48 h-5 bg-[#D3C7B5] border border-[#BCAD99] rounded-xs shadow-xs" />
        </div>

        {/* Base shadow */}
        <div className="absolute bottom-6 w-52 h-4 bg-[#75654C]/15 rounded-full blur-md" />
      </div>
    </div>
  );
}
