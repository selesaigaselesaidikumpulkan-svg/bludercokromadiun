import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';
const marketplaces = [{
  name: 'Tokopedia',
  desc: 'Official Store',
  icon: '/foto/Tokped.png',
  link: 'https://www.tokopedia.com/bludercokrostore'
}, {
  name: 'TikTok Shop',
  desc: 'Live & Promo',
  icon: '/foto/Tiktok-Shop.png',
  link: 'https://www.tiktok.com/@bludercokro.official'
}, {
  name: 'Shopee',
  desc: 'Mall',
  icon: '/foto/Shopee.png',
  link: 'https://shopee.co.id/bludercokro'
}];
export function MarketplaceSection() {
  return <section className="py-24 bg-brand-sand/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream border border-brand-brown/10 text-brand-red text-sm font-semibold mb-4 uppercase tracking-widest">
            <ShoppingBag size={16} />
            <span>Belanja Online</span>
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-4">
            Tersedia di Marketplace
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-brand-brown/70 text-lg">
            Belanja lebih mudah dan nikmati gratis ongkir di marketplace
            kesayangan Anda.
          </motion.p>
        </div>

        {/* Marketplace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {marketplaces.map((market, index) => <motion.a key={index} href={market.link} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group bg-white rounded-3xl p-6 border border-brand-sand/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-sand/20 rounded-xl flex items-center justify-center p-2">
                  <img src={market.icon} alt={market.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown text-lg">
                    {market.name}
                  </h3>
                  <p className="text-brand-brown/60 text-sm">{market.desc}</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-brand-brown/30 group-hover:text-brand-brown transition-colors" />
            </motion.a>)}
        </div>
      </div>
    </section>;
}