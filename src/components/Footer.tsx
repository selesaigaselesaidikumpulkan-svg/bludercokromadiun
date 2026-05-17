import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link sangat penting

const TikTokIcon = (props: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07A6.14 6.14 0 0 0 5 20.1a6.14 6.14 0 0 0 9.74-5.47V8.49a7.73 7.73 0 0 0 4.85 1.62V7a4.81 4.81 0 0 1-.76-.05z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/LOOGO_BLUDER.webp" alt="Bluder Cokro Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-brand-sand/80 text-sm leading-relaxed mb-8">
              Oleh-oleh khas Madiun sejak 1989. Menghadirkan kelembutan bluder
              legendaris dengan resep warisan keluarga yang terjaga kualitasnya
              hingga kini.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bludercokro/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-line/10 rounded-full hover:bg-brand-sand hover:text-brand-brown transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@bludercokro.official" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-line/10 rounded-full hover:bg-brand-sand hover:text-brand-brown transition-colors">
                <TikTokIcon size={20} />
              </a>
              <a href="https://www.facebook.com/COKRO.official/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-line/10 rounded-full hover:bg-brand-sand hover:text-brand-brown transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Menu Cepat Column */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-6 text-brand-sand">Menu Cepat</h4>
            <ul className="space-y-4 text-sm text-brand-sand/80">
              <li><Link to="/" className="hover:text-brand-cream transition-colors">Beranda</Link></li>
              <li><Link to="/promo" className="hover:text-brand-cream transition-colors">Promo</Link></li>
              <li><Link to="/produk" className="hover:text-brand-cream transition-colors">Produk Kami</Link></li>
              <li><Link to="/outlet" className="hover:text-brand-cream transition-colors">Lokasi Outlet</Link></li>
              <li><Link to="/tentang" className="hover:text-brand-cream transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Produk Column - Menggunakan Hash agar Auto Filter di ProductsPage */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-6 text-brand-sand">Produk</h4>
            <ul className="space-y-4 text-sm text-brand-sand/80">
              <li><Link to="/produk#standar" className="hover:text-brand-cream transition-colors">Bluder Standar</Link></li>
              <li><Link to="/produk#special" className="hover:text-brand-cream transition-colors">Bluder Spesial</Link></li>
              <li><Link to="/produk#bundle" className="hover:text-brand-cream transition-colors">Bluder Box</Link></li>
              <li><Link to="/produk#bigsize" className="hover:text-brand-cream transition-colors">Bluder Big Size</Link></li>
              <li><Link to="/produk#pouch" className="hover:text-brand-cream transition-colors">Bluder Krispi Pouch</Link></li>
              <li><Link to="/produk#crinkle" className="hover:text-brand-cream transition-colors">Crinkle Crispy</Link></li>
              <li><Link to="/produk#kue" className="hover:text-brand-cream transition-colors">Aneka Kue</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-6 text-brand-sand">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-brand-sand/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>Jl. Hayam Wuruk No.51-53, Manguharjo, Kota Madiun, Jawa Timur 63122</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <a href="https://wa.me/6281391233000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream transition-colors">0813-9123-3000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <a href="mailto:info@bludercokro.com" className="hover:text-brand-cream transition-colors">info@bludercokro.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-brand-red shrink-0" />
                <span>Setiap Hari: 07:00 - 21:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-sand/60">
          <p>© {new Date().getFullYear()} Bluder Cokro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-cream transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}