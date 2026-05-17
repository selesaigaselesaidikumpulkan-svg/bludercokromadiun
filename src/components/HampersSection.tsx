import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const hampersData = [
  {
    id: 1,
    image: '/foto/promo 2.webp',
    rotate: -6,
    zIndex: 'z-10',
  },
  {
    id: 2,
    image: '/foto/promo 1.webp',
    rotate: 0,
    zIndex: 'z-20',
  },
  {
    id: 3,
    image: '/foto/promo 3.webp',
    rotate: 6,
    zIndex: 'z-10',
  },
];

export function HampersSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf3e8] py-24">
      
      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-brand-sand/30 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-brand-red/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-brown/10 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red shadow-sm"
          >
            <Gift size={14} />
            <span>Limited Promotion</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-playfair text-4xl font-bold text-brand-brown md:text-5xl"
          >
            Promo Terbatas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-brand-brown/70 md:text-lg"
          >
            Jangan lewatkan promo spesial dari Bluder Cokro untuk
            hampers, hadiah keluarga, dan oleh-oleh khas Madiun.
          </motion.p>
        </div>

        {/* STACKED CARDS */}
        <div className="relative flex items-center justify-center py-10">
          
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center">
            {hampersData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: item.rotate,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: item.rotate,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.04,
                  y: -12,
                  rotate: 0,
                  zIndex: 40,
                }}
                className={`relative ${
                  index !== 0 ? '-ml-24 lg:-ml-32' : ''
                } ${item.zIndex}`}
              >
                <div className="group relative w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-2xl lg:w-[340px]">
                  
                  <div className="aspect-[3/4.2] overflow-hidden">
                    <img
                      src={item.image}
                      alt="Promo hampers Bluder Cokro khas Madiun"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-6 md:hidden">
            {hampersData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt="Promo hampers Bluder Cokro khas Madiun"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/promo"
            className="inline-flex items-center gap-2 rounded-full border border-brand-brown/10 bg-brand-brown px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red hover:shadow-xl"
          >
            Lihat Promo
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}