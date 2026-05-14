import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function CTASection() {
  return <section className="relative py-24 bg-brand-brown overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-sand blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-sand blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-brand-sand/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-brand-sand/20">
            <span className="text-4xl">📦</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-cream mb-6 leading-tight">
            Nikmati Kelezatan <br className="hidden md:block" />
            Bluder Cokro Sekarang
          </h2>

          <p className="text-brand-sand/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Pesan langsung melalui WhatsApp dan nikmati pengiriman ke seluruh
            Indonesia.
          </p>

          <a href="https://wa.me/6281391233000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <MessageCircle size={24} />
            Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>;
}