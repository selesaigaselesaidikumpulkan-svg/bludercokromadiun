import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
const outlets = [{
  name: 'Outlet Madiun',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Madiun'
}, {
  name: 'Outlet Semarang',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Semarang'
}, {
  name: 'Outlet Jakarta',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Jakarta'
}, {
  name: 'Outlet Bekasi',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Bekasi'
}, {
  name: 'Outlet Mall Artha Gading',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Artha+Gading'
}, {
  name: 'Outlet Jawa Timur Park 3',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Jawa+Timur+Park+3'
}, {
  name: 'Outlet Mall Olympic Garden',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Olympic+Garden'
}, {
  name: 'Outlet Grand City',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Grand+City'
}, {
  name: 'Outlet Rest Area 456 B',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Rest+Area+456+B'
}, {
  name: 'Outlet Mall Ciputra Cibubur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Ciputra+Cibubur'
}, {
  name: 'Outlet Mampang',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mampang'
}, {
  name: 'Rest Area KM 519 A Sragen',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Rest+Area+KM+519+A+Sragen'
}];
export function OutletsSection() {
  return <section id="outlet" className="py-24 bg-brand-sand/20 relative">
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
        }} className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream border border-brand-brown/10 text-brand-brown text-sm font-semibold mb-4 uppercase tracking-widest">
            <MapPin size={16} />
            <span>Lokasi Kami</span>
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
            Temukan Kami di Sini
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
            Kunjungi outlet resmi Bluder Cokro terdekat di kota Anda.
          </motion.p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {outlets.map((outlet, index) => <motion.a key={index} href={outlet.link} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="group bg-white rounded-2xl p-6 border border-brand-sand/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between hover:border-brand-brown/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="font-semibold text-brand-brown group-hover:text-brand-red transition-colors text-sm md:text-base">
                  {outlet.name}
                </span>
              </div>
              <ExternalLink size={16} className="text-brand-brown/30 group-hover:text-brand-red transition-colors" />
            </motion.a>)}
        </div>
      </div>
    </section>;
}