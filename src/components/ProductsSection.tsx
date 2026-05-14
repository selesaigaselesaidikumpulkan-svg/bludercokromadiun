import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    name: 'Bluder Standar',
    target: '#standar', 
    description: 'Berbagai varian bluder yang bisa kamu pilih untuk dinikmati sendiri atau bersama keluarga',
    image: '/foto/bluder-satuan.png',
    alt:"Berbagai varian Bluder dengan isian premium"
  },
  {
    id: 2,
    name: 'Bluder Big Size',
    target: '#bigsize',
    description: 'Ukuran lebih besar untuk kepuasan maksimal dan momen spesial.',
    image: '/foto/bluder-big.png',
    alt: "Hampers Bluder Cokro - bingkisan, hadiah, oleh-oleh khas Madiun yang elegan untuk keluarga atau kerabat."
  },
  {
    id: 3,
    name: 'Bluder Pouch',
    target: '#pouch',
    description: 'Kemasan praktis yang mudah dibawa ke mana saja.',
    image: '/foto/bluder-pouch.png',
    alt: "Bluder Cokro Pouch- Oleh-oleh khas Madiun dengan kemasan pouch dengan berbagai rasa, coklat, keju, kopi, original yang mudah dibawa saat traveling atau mudik"
  }
];

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="produk" className="py-20 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-4"
          >
            Produk Unggulan
          </motion.h2>
          <div className="w-20 h-1 bg-brand-red mb-6"></div>
        </div>

        {/* Desktop Vertical Accordion */}
        <div className="hidden md:flex h-[600px] w-full overflow-hidden rounded-[2.5rem] shadow-xl bg-white p-3 gap-[15px]">
          {PRODUCTS.map((product, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={product.id}
                className="relative h-full rounded-[2rem] overflow-hidden cursor-pointer shadow-md group"
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  width: isActive ? '65%' : '17.5%',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Background Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay: Gelap saat tertutup, Gradasi saat terbuka */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-brand-brown/90 via-brand-brown/20 to-transparent' 
                    : 'bg-black/40'
                }`} />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center h-full w-full relative">
                    
                    {/* 1. TEXT VERTICAL (Muncul saat kartu tertutup) */}
                    {!isActive && (
                      <motion.div
                        className="absolute left-1/2 bottom-12 -translate-x-1/2 whitespace-nowrap text-white font-playfair text-2xl font-bold tracking-widest uppercase [writing-mode:vertical-lr] rotate-180"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {product.name}
                      </motion.div>
                    )}

                    {/* 2. CONTENT EXPANDED (Muncul saat kartu terbuka) */}
                    {isActive && (
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <h3 className="text-4xl font-playfair font-bold text-white mb-4">
                          {product.name}
                        </h3>
                        <p className="text-white/90 text-lg max-w-md line-clamp-3 mb-8 leading-relaxed">
                          {product.description}
                        </p>
                        {/* Mengarah ke /produk#target-id */}
                        <Link 
                          to={`/produk${product.target}`} 
                          className="inline-block px-8 py-3 bg-brand-sand text-brand-brown font-bold rounded-xl hover:bg-white transition-all shadow-lg"
                        >
                          Lihat Detail
                        </Link>
                      </motion.div>
                    )}
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View (Stacking Biasa) */}
        <div className="md:hidden flex flex-col gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-lg">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">{product.name}</h3>
                  {/* Link Mobile juga diarahkan ke hash target */}
                  <Link to={`/produk${product.target}`} className="text-brand-sand font-bold">
                    Lihat Detail &gt;
                  </Link>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}