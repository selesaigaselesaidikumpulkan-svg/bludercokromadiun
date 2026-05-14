import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HampersSection } from './components/HampersSection';
import { ProductsSection } from './components/ProductsSection';
import { OutletsSection } from './components/OutletsSection';
import { CTASection } from './components/CTASection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { MarketplaceSection } from './components/MarketplaceSection';
import { Footer } from './components/Footer';
import PromoPage from './pages/PromoPage';
import { ProductsPage } from './pages/ProductsPage';
import { OutletPage } from './pages/OutletPage';
import { TentangPage } from './pages/TentangPage';
import { CartPage } from './pages/CartPage';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { SchemaOrg } from './components/SchemaOrg';
import { FAQSection } from './components/FAQSection';
import { Toaster } from "react-hot-toast"; // Sudah benar di sini

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Bluder Cokro Madiun - Roti Lembut Resep Warisan Sejak 1989</title>
        <meta 
          name="description" 
          content="Rasakan kelembutan Roti Bluder Cokro khas Madiun. Dibuat dengan resep legendaris sejak 1989..." 
        />
        <meta property="og:image" content="/foto/Bluder cokro.jpeg" />
      </Helmet>
  
      <HeroSection />
      <HampersSection />
      <ProductsSection />
      <OutletsSection />
      <CTASection />
      <SocialMediaSection />
      <MarketplaceSection />
      <FAQSection />
    </main>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        {/* Tambahkan Toaster di level paling atas agar tidak tertutup komponen lain */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Ini untuk memastikan toast muncul paling depan (Z-Index tinggi)
            style: {
              zIndex: 9999,
            },
          }}
        />
        
        <div className="min-h-screen bg-brand-cream selection:bg-brand-brown selection:text-brand-cream">
          <SchemaOrg />
          <Navbar />

          <ScrollHandler />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/promo" element={<PromoPage />} />
            <Route path="/produk" element={<ProductsPage />} />
            <Route path="/outlet" element={<OutletPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          
          <Footer />
        </div>
      </CartProvider>
    </HelmetProvider>
  );
}