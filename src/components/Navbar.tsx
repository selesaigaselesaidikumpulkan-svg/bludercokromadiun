import { useEffect, useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Promo', href: '/promo' },
    { name: 'Produk', href: '/produk' },
    { name: 'Outlet', href: '/outlet' },
    { name: 'Tentang Kami', href: '/tentang' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Menggunakan warna krem gelap dari image_5c433f.webp (bg-brand-sand)
        // Agar tetap kontras dengan bg beranda yang krem putih
        isScrolled 
          ? 'bg-brand-sand shadow-md py-3' 
          : 'bg-brand-sand py-5 border-b border-brand-brown/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/LOOGO_BLUDER.webp" alt="Bluder Cokro Logo" className="h-16 w-auto drop-shadow-md" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 font-medium text-sm uppercase tracking-wider rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-red'
                    : 'text-brand-brown/70 hover:text-brand-brown'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-red rounded-full transition-all duration-300 ${
                    isActive(link.href) ? 'w-6' : 'w-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/cart" className="relative cursor-pointer text-brand-brown hover:text-brand-red transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            <a
              href="https://wa.me/6281391233000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-brand-brown text-brand-cream px-6 py-2.5 rounded-full font-medium hover:bg-brand-red transition-all duration-300 shadow-md"
            >
              Pesan Sekarang
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-brown p-2"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-sand border-t border-brand-brown/10 shadow-xl py-6 px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold py-4 px-4 rounded-xl ${
                isActive(link.href) ? 'text-brand-red bg-brand-red/5' : 'text-brand-brown/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}