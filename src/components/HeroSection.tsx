import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HeroSection() {
  return <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-cream">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-sand/40 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-sand/40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sand text-brand-brown text-sm font-medium mb-6">
              <Star size={14} className="fill-brand-gold text-brand-gold" />
              <span>Resep Warisan Sejak 1989</span>
            </div>

            <h1 className="md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-brand-brown text-[55px]">
                Bluder Cokro <br />
              <span className="text-brand-red italic">Oleh-oleh khas Madiun</span>
            </h1>

            <p className="text-lg text-brand-brown/80 mb-8 leading-relaxed">
             Bluder Cokro adalah roti bluder legendaris khas Madiun yang telah hadir sejak 1989.
             Dibuat dengan resep warisan keluarga dan bahan premium untuk menghadirkan kelembutan serta cita rasa otentik di setiap gigitan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/produk" className="px-8 py-3.5 rounded-full border-2 border-brand-brown text-brand-brown font-semibold hover:bg-brand-brown hover:text-brand-cream transition-all duration-300">
                Lihat Produk
              </Link>
              <a href="https://wa.me/6281391233000" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-brand-brown text-brand-cream font-semibold hover:bg-brand-red transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Pesan Sekarang
              </a>
            </div>
            

           
          </motion.div>

          {/* Image Content */}
       <motion.div
  initial={{
    opacity: 0,
    scale: 0.9
  }}
  animate={{
    opacity: 1,
    scale: 1
  }}
  transition={{
    duration: 0.8,
    delay: 0.2
  }}
  className="relative lg:h-[600px] flex items-center justify-center"
>
  <div className="relative w-full max-w-lg mx-auto">
  
  {/* Decorative circle */}
  <div className="absolute inset-0 bg-brand-sand rounded-full transform -rotate-6 scale-105 -z-10"></div>

  <img
    src="/foto/Bluder cokro.webp"
    alt="Roti Bluder Cokro Madiun - Oleh-oleh khas Madiun dengan koleksi varian rasa original, cokelat, dan keju dengan tekstur serat lembut resep legendaris sejak 1989"
    loading="lazy"
    className="relative z-0 w-full h-auto rounded-3xl object-cover shadow-2xl"
  />

  {/* Maskot di kiri bawah gambar */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      repeat: Infinity,
      duration: 2.5,
      ease: "easeInOut"
    }}
      className="absolute bottom-6 -left-8 z-20 flex flex-col items-center"
  >
    
    <img
      src="/foto/maskot.webp"
      alt="Blubby, maskot resmi Bluder Cokro Madiun, Karakter kartun ikonik yang merepresentasikan keramahan pelayanan Cokro"
      className="w-20 md:w-24 drop-shadow-lg"
    />

    {/* Bubble */}
    <div className="relative bg-white px-3 py-1.5 rounded-full shadow-md text-xs text-brand-brown font-medium mt-1">
      Halo Sobat Cokro! 🤎
      <div className="absolute left-4 -top-1 w-2.5 h-2.5 bg-white rotate-45"></div>
    </div>
  </motion.div>
</div>
</motion.div> 
        </div>
      </div>
    </section>;
}