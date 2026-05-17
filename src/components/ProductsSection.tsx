import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    name: "Bluder Standar",
    target: "#standar",
    description:
      "Berbagai varian bluder yang bisa kamu pilih untuk dinikmati sendiri atau bersama keluarga.",
    image: "/foto/bluder-satuan.webp",
    alt: "Berbagai varian Bluder premium khas Madiun",
  },
  {
    id: 2,
    name: "Bluder Big Size",
    target: "#bigsize",
    description:
      "Ukuran lebih besar untuk kepuasan maksimal dan momen spesial.",
    image: "/foto/bluder-big.webp",
    alt: "Bluder Big Size khas Madiun",
  },
  {
    id: 3,
    name: "Bluder Pouch",
    target: "#pouch",
    description:
      "Kemasan praktis yang mudah dibawa ke mana saja.",
    image: "/foto/bluder-pouch.webp",
    alt: "Bluder Pouch khas Madiun",
  },
];

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section
      id="produk"
      className="relative overflow-hidden bg-brand-cream py-16 md:py-20"
      style={{ contentVisibility: "auto" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-playfair text-4xl font-bold text-brand-brown md:text-5xl"
          >
            Produk Unggulan
          </motion.h2>

          <div className="mb-6 h-1 w-20 rounded-full bg-brand-red"></div>
        </div>

        {/* DESKTOP */}
        <div className="hidden h-[560px] w-full overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-xl md:flex md:gap-3">
          {PRODUCTS.map((product, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={product.id}
                className="group relative h-full cursor-pointer overflow-hidden rounded-[1.8rem] shadow-md transform-gpu"
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  width: isActive ? "64%" : "18%",
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={product.image}
                    alt={product.alt}

                    decoding="async"
                    width="1200"
                    height="1400"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-brand-brown/90 via-brand-brown/20 to-transparent"
                      : "bg-black/40"
                  }`}
                />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  
                  {/* VERTICAL TITLE */}
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-playfair text-2xl font-bold uppercase tracking-widest text-white [writing-mode:vertical-lr] rotate-180"
                    >
                      {product.name}
                    </motion.div>
                  )}

                  {/* EXPANDED CONTENT */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="max-w-lg"
                    >
                      <h3 className="mb-4 font-playfair text-4xl font-bold text-white">
                        {product.name}
                      </h3>

                      <p className="mb-7 line-clamp-3 text-base leading-relaxed text-white/90 md:text-lg">
                        {product.description}
                      </p>

                      <Link
                        to={`/produk${product.target}`}
                        className="inline-block rounded-xl bg-brand-sand px-7 py-3 font-bold text-brand-brown shadow-lg transition-all duration-300 hover:bg-white"
                      >
                        Lihat Detail
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-6 md:hidden">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-[2rem] shadow-lg"
            >
              {/* IMAGE WRAPPER */}
              <div className="aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.alt}

                  decoding="async"
                  width="800"
                  height="1000"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-7">
                <h3 className="mb-2 font-playfair text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <Link
                  to={`/produk${product.target}`}
                  className="font-bold text-brand-sand"
                >
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