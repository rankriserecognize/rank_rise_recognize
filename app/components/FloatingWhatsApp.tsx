"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919490067869?text=Hi%20Rank%20Rise%20Recognize,%20I'd%20like%20to%20know%20more%20about%20your%20SEO,%20AEO%20and%20GEO%20services";

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <motion.a
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94, y: 1 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 94900 67869)"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#ffffff] border-[2.5px] border-[#000000] font-bold text-[14px] hover:bg-[#20ba59] transition-colors cursor-pointer select-none"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle size={22} className="fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border border-black animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border border-black" />
        </span>
        <span className="font-semibold text-white tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </motion.a>
    </motion.aside>
  );
}
