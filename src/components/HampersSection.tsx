import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const hampersData = [
  {
    id: 1,
    image: "/foto/promo 2.jpeg", 
    rotate: "-rotate-6",
    zIndex: "z-10",
  },
  {
    id: 2,
    image: "/foto/promo 1.jpeg", 
    rotate: "rotate-0",
    zIndex: "z-20", // Card tengah paling depan secara default
  },
  {
    id: 3,
    image: "/foto/promo 3.jpeg", 
    rotate: "rotate-6",
    zIndex: "z-10",
  }
];

export function HampersSection() {
  return (
    // Tambahkan z-0 agar section ini punya stacking context sendiri
    <section className="py-24 bg-[#fbf3e8] relative overflow-hidden min-h-screen flex flex-col items-center z-0">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-brand-brown/10 text-[#8B1D1D] text-[10px] font-bold mb-4 uppercase tracking-[0.2em] shadow-sm"
          >
            <Gift size={14} />
            <span>Limited Promotion</span>
          </motion.div>
          
          <h2 className="text-5xl font-serif font-bold text-[#4A2C2A] mb-6">Promo Terbatas</h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#4A2C2A]/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Jangan lewatkan promo menarik dari Bluder Cokro.
          </motion.p>
        </div>

        {/* --- STACKED CARDS CONTAINER --- */}
        <div className="flex justify-center items-center h-[500px] mt-10">
          <div className="flex -space-x-24 md:-space-x-32 lg:-space-x-40">
            {hampersData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: parseInt(item.rotate.replace('rotate-', '').replace('rotate', '')) 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 30, // DIUBAH: jangan terlalu tinggi (sebelumnya 50)
                  y: -20,
                  transition: { duration: 0.3 }
                }}
                // Pastikan card menggunakan z-index bawaan dari data
                className={`relative w-[280px] md:w-[320px] aspect-[3/4.5] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-white overflow-hidden ${item.zIndex} cursor-pointer`}
              >
                <img 
                  src={item.image} 
                  alt="Hampers Bluder Cokro bingkisan, hadiah, oleh-oleh khas Madiun yang elegan untuk keluarga atau kerabat. " 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- GLOBAL ACTION BUTTON --- */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="/promo" 
              className="inline-flex items-center justify-center gap-2 bg-[#4A2C2A]/10 backdrop-blur-sm border border-[#4A2C2A]/20 hover:bg-[#4A2C2A] hover:text-white text-[#4A2C2A] px-10 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-sm"
            >
              Lihat Detail
              <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}