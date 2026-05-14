import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, ArrowLeft, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const outlets = [{
  name: 'Outlet Madiun',
  address: 'Jl. Hayam Wuruk No.51-53, Manguharjo, Kota Madiun',
  region: 'Jawa Timur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Madiun'
}, {
  name: 'Outlet Semarang',
  address: 'Semarang, Jawa Tengah',
  region: 'Jawa Tengah',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Semarang'
}, {
  name: 'Outlet Jakarta',
  address: 'Jakarta',
  region: 'DKI Jakarta',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Jakarta'
}, {
  name: 'Outlet Bekasi',
  address: 'Bekasi, Jawa Barat',
  region: 'Jawa Barat',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Bekasi'
}, {
  name: 'Outlet Mall Artha Gading',
  address: 'Mall Artha Gading, Jakarta Utara',
  region: 'DKI Jakarta',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Artha+Gading'
}, {
  name: 'Outlet Jawa Timur Park 3',
  address: 'Jawa Timur Park 3, Batu, Malang',
  region: 'Jawa Timur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Jawa+Timur+Park+3'
}, {
  name: 'Outlet Mall Olympic Garden',
  address: 'Mall Olympic Garden, Malang',
  region: 'Jawa Timur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Olympic+Garden'
}, {
  name: 'Outlet Grand City',
  address: 'Grand City Mall, Surabaya',
  region: 'Jawa Timur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Grand+City'
}, {
  name: 'Outlet Rest Area 456 B',
  address: 'Rest Area KM 456 B, Tol Trans Jawa',
  region: 'Jawa Timur',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Rest+Area+456+B'
}, {
  name: 'Outlet Mall Ciputra Cibubur',
  address: 'Mall Ciputra Cibubur, Jakarta Timur',
  region: 'DKI Jakarta',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mall+Ciputra+Cibubur'
}, {
  name: 'Outlet Mampang',
  address: 'Mampang Prapatan, Jakarta Selatan',
  region: 'DKI Jakarta',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Mampang'
}, {
  name: 'Rest Area KM 519 A Sragen',
  address: 'Rest Area KM 519 A, Sragen, Jawa Tengah',
  region: 'Jawa Tengah',
  link: 'https://maps.google.com/?q=Bluder+Cokro+Rest+Area+KM+519+A+Sragen'
}];
const regions = [...new Set(outlets.map((o) => o.region))];
export function OutletPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-brown/10 text-brand-brown text-sm font-semibold mb-6 uppercase tracking-widest shadow-sm">
            <MapPin size={16} />
            <span>Lokasi Kami</span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-brown mb-6 leading-tight">
            Temukan Outlet <br className="hidden sm:block" />
            <span className="text-brand-red italic">Bluder Cokro</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-brand-brown/80 text-lg md:text-xl leading-relaxed">
            Kunjungi outlet resmi kami yang tersebar di berbagai kota. Klik pada
            outlet untuk membuka lokasi di Google Maps.
          </motion.p>
        </div>

        {/* Info Bar */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="bg-brand-brown rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-brand-cream">
            <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">{outlets.length} Outlet</p>
              <p className="text-brand-sand/80 text-sm">
                Tersebar di seluruh Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-brand-cream">
            <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">07:00 - 21:00 WIB</p>
              <p className="text-brand-sand/80 text-sm">Buka setiap hari</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-brand-cream">
            <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">0813-9123-3000</p>
              <p className="text-brand-sand/80 text-sm">
                Hubungi kami via WhatsApp
              </p>
            </div>
          </div>
        </motion.div>

        {/* Outlets by Region */}
        {regions.map((region, regionIndex) => <motion.div key={region} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4 + regionIndex * 0.1
      }} className="mb-12">
            <h2 className="font-playfair font-bold text-2xl text-brand-brown mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-brand-red rounded-full"></div>
              {region}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outlets.filter((o) => o.region === region).map((outlet, index) => <a key={index} href={outlet.link} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-6 border border-brand-sand/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-red/30 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-sand/50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors shrink-0">
                        <MapPin size={22} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-brand-brown group-hover:text-brand-red transition-colors text-base mb-1">
                          {outlet.name}
                        </h3>
                        <p className="text-brand-brown/50 text-sm leading-relaxed">
                          {outlet.address}
                        </p>
                      </div>
                      <ExternalLink size={16} className="text-brand-brown/20 group-hover:text-brand-red transition-colors shrink-0 mt-1" />
                    </div>
                  </a>)}
            </div>
          </motion.div>)}
      </div>
    </div>;
}