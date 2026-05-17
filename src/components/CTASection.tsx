import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-brown py-20 md:py-24"
      style={{ contentVisibility: "auto" }}
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        
        {/* Blur kiri */}
        <div className="absolute left-[-8%] top-[-15%] h-[350px] w-[350px] rounded-full bg-brand-sand blur-2xl transform-gpu"></div>

        {/* Blur kanan */}
        <div className="absolute bottom-[-15%] right-[-8%] h-[280px] w-[280px] rounded-full bg-brand-sand blur-2xl transform-gpu"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          {/* ICON */}
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-sand/20 bg-brand-sand/10 backdrop-blur-sm">
            <span className="text-4xl">📦</span>
          </div>

          {/* TITLE */}
          <h2 className="mb-6 font-playfair text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
            Nikmati Kelezatan
            <br className="hidden md:block" />
            Bluder Cokro Sekarang
          </h2>

          {/* DESC */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-brand-sand/80 sm:text-lg md:text-xl">
            Pesan langsung melalui WhatsApp dan nikmati pengiriman ke seluruh
            Indonesia.
          </p>

          {/* BUTTON */}
          <a
            href="https://wa.me/6281391233000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:shadow-xl md:px-8 md:py-4 md:text-lg"
          >
            <MessageCircle size={22} />
            Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}