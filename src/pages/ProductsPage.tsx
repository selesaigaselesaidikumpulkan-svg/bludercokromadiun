import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// ✅ TYPE
type Product = {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
};

const categories = [
  { id: 'all', label: 'All' },
  { id: 'edition', label: 'NEW!' },
  { id: 'standar', label: 'Bluder Standar' },
  { id: 'special', label: 'Bluder Special' },
  { id: 'bundle', label: 'Bluder Box' },
  { id: 'bigsize', label: 'Bluder Big Size' },
  { id: 'pouch', label: 'Bluder Krispi Pouch' },
  { id: 'crinkle', label: 'Crinkle Crispy' },
  { id: 'kue', label: 'Kue' }
];

const products: Product[] = [
  { id: 1, category: 'edition', name: 'Bluder Limited Edition', desc: 'Coockies & cream yang lezat dalam bluder yang lembut', price: 'Rp 15.000', image: '/foto/18.webp' },
  { id: 2, category: 'edition', name: 'Bluder Beef & Cheese', desc: 'Beef & cheese yang gurih dalam bluder yang lembut.', price: 'Rp 16.500', image: '/foto/19.webp' },
  { id: 3, category: 'standar', name: 'Bluder Coklat', desc: 'Isian cokelat lumer yang melimpah di setiap gigitan.', price: 'Rp 11.500', image: '/foto/4.webp' },
  { id: 4, category: 'standar', name: 'Bluder Kismis', desc: 'Isian kismis manis di dalam adonan bluder yang lembut.', price: 'Rp 11.500', image: '/foto/13.webp' },
  { id: 5, category: 'standar', name: 'Bluder Keju', desc: 'Isian keju yang lezat di setiap gigitan.', price: 'Rp 11.500', image: '/foto/5.webp' },
  { id: 6, category: 'standar', name: 'Bluder Coklat Kacang', desc: 'Paduan manis dan gurih dari kacang premium pilihan.', price: 'Rp 11.500', image: '/foto/12.webp' },
  { id: 7, category: 'standar', name: 'Bluder Tiramisu', desc: 'Rasa tiramisu yang kaya dengan sentuhan kopi di setiap gigitan.', price: 'Rp 11.500', image: '/foto/15.webp' },
  { id: 8, category: 'standar', name: 'Bluder Coklat Keju', desc: 'Isian coklat & keju yang lezat di setiap gigitan.', price: 'Rp 11.500', image: '/foto/6.webp' },
  { id: 9, category: 'special', name: 'Bluder Taro', desc: 'Rasa taro yang lembut dan manis di dalam bluder yang lembut.', price: 'Rp 14.000', image: '/foto/17.webp' },
  { id: 10, category: 'special', name: 'Bluder Kopi', desc: 'Rasa kopi yang kental dalam bluder yang lembut.', price: 'Rp 14.000', image: '/foto/10.webp' },
  { id: 11, category: 'special', name: 'Bluder Green Tea', desc: 'Rasa green tea yang segar dalam bluder yang lembut.', price: 'Rp 14.000', image: '/foto/14.webp' },
  { id: 12, category: 'special', name: 'Bluder Klepon', desc: 'Rasa kelpon yang gurih dan manis dalam bluder yang lembut', price: 'Rp 14.000', image: '/foto/8.webp' },
  { id: 13, category: 'special', name: 'Bluder Coklat Hazelnut', desc: 'Rasa coklat & hazelnut yang kaya dalam bluder yang lembut.', price: 'Rp 14.000', image: '/foto/16.webp' },
  { id: 14, category: 'special', name: 'Bluder Abon Sapi', desc: 'Rasa abon sapi yang gurih dan lezat dalam bluder yang lembut.', price: 'Rp 14.000', image: '/foto/9.webp' },
  { id: 15, category: 'special', name: 'Bluder Kismis', desc: 'Taburan kismis manis di dalam adonan bluder yang lembut.', price: 'Rp 14.000', image: '/foto/13.webp' },
  { id: 16, category: 'bundle', name: 'Bluder Box Original', desc: 'Terdapat 8 bluder dengan berbagai pilihan untuk kamu.', price: 'Rp 80.000', image: '/foto/bundl.webp' },
  { id: 17, category: 'bundle', name: 'Bluder Box Standar', desc: 'Terdapat 8 bluder dengan berbagai pilihan untuk kamu.', price: 'Rp 92.000', image: '/foto/bundl.webp' },
  { id: 18, category: 'bundle', name: 'Bluder Box Special', desc: 'Terdapat 8 bluder dengan berbagai pilihan untuk kamu.', price: 'Rp 112.000', image: '/foto/bundl.webp' },
  { id: 19, category: 'bigsize', name: 'Bluder Sobek', desc: 'Bluder ukuran besar dengan berbagai rasa, coklat, keju, kismis.', price: 'Rp 35.000', image: '/foto/28.webp' },
  { id: 20, category: 'bigsize', name: 'Bluder Krumpul', desc: 'Bluder ukuran besar dengan berbagai rasa coklat, keju, kismis, abon, dan kopi.', price: 'Rp 52.000', image: '/foto/31.webp' },
  { id: 21, category: 'pouch', name: 'Bluder Krispi Original', desc: 'Bluder Krispi Pouch yang renyah cocok untuk camilan praktis.', price: 'Rp 17.000', image: '/foto/20.webp' },
  { id: 22, category: 'pouch', name: 'Bluder Krispi Keju', desc: 'Bluder Krispi Pouch dengan rasa keju yang gurih dan renyah.', price: 'Rp 17.000', image: '/foto/21.webp' },
  { id: 23, category: 'pouch', name: 'Bluder Krispi Cokelat', desc: 'Bluder Krispi Pouch dengan rasa cokelat yang manis dan renyah.', price: 'Rp 17.000', image: '/foto/22.webp' },
  { id: 24, category: 'crinkle', name: 'Crinkle Brownies', desc: 'Rasa otentik di setiap gigitan.', price: 'Rp 40.000', image: '/foto/30.webp' },
  { id: 25, category: 'kue', name: 'Kue Nanas', desc: 'Kue dengan isian nanas asli yang manis dan segar.', price: 'Rp 40.000', image: '/foto/23.webp' },
  { id: 26, category: 'kue', name: 'Kue Brownies', desc: 'Kue dengan isian krim cokelat dan kacang almond.', price: 'Rp 40.000', image: '/foto/24.webp' },
  { id: 27, category: 'kue', name: 'Kue Taro', desc: 'Kue dengan isian krim taro yang legit.', price: 'Rp 40.000', image: '/foto/25.webp' },
  { id: 28, category: 'kue', name: 'Kue Matcha', desc: 'Kue dengan isian krim matcha yang lezat.', price: 'Rp 40.000', image: '/foto/26.webp' },
  { id: 29, category: 'kue', name: 'Kue Kopi', desc: 'Kue dengan isian krim kopi yang lezat.', price: 'Rp 40.000', image: '/foto/27.webp' }
];

export function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const location = useLocation();
  const { addToCart } = useCart();

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab);

  // ✅ FIX HASH + SCROLL KE ATAS
  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (hash) {
      setActiveTab(hash);
    } else {
      setActiveTab('all');
    }

    // 🔥 SCROLL KE PALING ATAS
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, [location]);

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#3E2C1C] mb-4">
            Varian Bluder Cokro
          </h1>
          <p className="text-[#6B5E55] text-sm md:text-base">
            Temukan ragam rasa dan pilihan oleh-oleh terbaik dari kami.
          </p>
        </div>

        {/* CATEGORY */}
        <div className="flex justify-center overflow-x-auto gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200
                ${
                  activeTab === cat.id
                    ? 'bg-[#3E2C1C] text-white shadow-md'
                    : 'bg-[#EADBC8] text-[#3E2C1C] hover:bg-[#d9c2a3]'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="relative mb-4">

                {(product.name === 'Bluder Limited Edition' ||
                  product.name === 'Bluder Beef & Cheese') && (
                  <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-3 py-1 rounded-full z-10">
                    Terlaris
                  </span>
                )}

                <div className="w-full h-[180px] flex items-center justify-center bg-white rounded-xl p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-[#3E2C1C]">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.desc}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold text-[#3E2C1C]">{product.price}</span>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#EADBC8] hover:bg-[#d9c2a3] p-3 rounded-full transition"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}