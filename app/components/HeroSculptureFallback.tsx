"use client";

export default function HeroSculptureFallback() {
  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] flex items-center justify-center relative select-none">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Soft Cobalt Ring */}
        <div className="absolute inset-4 rounded-full border-2 border-[#72a4f2] border-dashed animate-[spin_28s_linear_infinite]" />

        {/* Orbit Ring 2 - Black Outline */}
        <div className="absolute inset-10 rounded-full border-2 border-[#000000] animate-[spin_20s_linear_infinite_reverse]" />

        {/* Central Geometric Ascending Plinths */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          {/* Top Diamond */}
          <div className="w-6 h-6 rotate-45 border-2 border-[#000000] bg-[#72a4f2] mb-1" />

          {/* Stepped Plinths */}
          <div className="w-16 h-3.5 bg-[#e9dfd2] border-2 border-[#000000] rounded-full" />
          <div className="w-24 h-4 bg-[#e9dfd2] border-2 border-[#000000] rounded-full" />
          <div className="w-32 h-4.5 bg-[#e9dfd2] border-2 border-[#000000] rounded-full" />
          <div className="w-40 h-5 bg-[#e9dfd2] border-2 border-[#000000] rounded-full" />
          <div className="w-48 h-5.5 bg-[#e9dfd2] border-2 border-[#000000] rounded-full" />
        </div>

        {/* Flat Contact Shadow */}
        <div className="absolute bottom-6 w-52 h-3.5 bg-[#000000]/20 rounded-full blur-xs" />
      </div>
    </div>
  );
}
