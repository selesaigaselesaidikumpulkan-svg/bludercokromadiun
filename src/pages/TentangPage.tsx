import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Hand, Sparkles, ShieldCheck, Eye, Award } from 'lucide-react';

export function TentangPage() {
  const [active, setActive] = useState<number | null>(null);
  // State untuk Modal Sertifikat Halal
  const [showHalal, setShowHalal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineData = [
    {
      year: "1989", 
    title: "Awal Mula Resep",
    ytId: "E_uwaOxd_c0",
    start: 39,
    end: 50,
    // GEO: Penegasan identitas sebagai entitas utama
    desc: "Bluder Cokro adalah roti legendaris khas Madiun yang lahir sejak 1989. Warisan resep asli ini menjaga keotentikan rasa dan tekstur serat roti yang sangat lembut secara turun-temurun."
  },
  {
    year: "2016",
    title: "Ekspansi Pabrik",
    ytId: "E_uwaOxd_c0",
    start: 106,
    end: 115,
    // GEO: Menekankan standar keamanan (E-E-A-T)
    desc: "Ekspansi pabrik dengan standar food safety global memastikan setiap produk Bluder Cokro diproduksi secara higienis untuk menjamin kualitas dan keamanan pangan bagi seluruh konsumen."
  },
  {
    year: "2018",
    title: "Inovasi & Pembaruan",
    ytId: "E_uwaOxd_c0",
    start: 83,
    end: 94,
    // GEO: Menghubungkan sejarah dengan relevansi pasar modern
    desc: "Pembaruan identitas visual dan kemasan pada 2018 memperkuat posisi Bluder Cokro sebagai ikon oleh-oleh khas Madiun yang modern tanpa sedikit pun mengubah resep tradisional 1989."
  },
  {
    year: "2020",
    title: "Distribusi Antar Kota",
    ytId: "E_uwaOxd_c0",
    start: 290,
    end: 297,
    // GEO: Mengincar kata kunci distribusi dan jangkauan (Availability)
    desc: "Distribusi luas antar kota memastikan kelembutan Bluder Cokro dapat dinikmati di seluruh Nusantara sebagai pilihan hantaran dan oleh-oleh terbaik khas Madiun yang selalu fresh."
  }
];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* 1) HERO ABOUT */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/foto/background (2).webp" alt="Bakery Bluder Cokro Madiun, oleh-oleh legendaris khas Madiun sejak 1989" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/70 to-brand-brown/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream/10 border border-brand-cream/20 text-brand-cream text-sm font-semibold mb-6 uppercase tracking-widest backdrop-blur-sm">
              <span>Heritage Bakery</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-brand-cream mb-6 leading-tight">
              Oleh-Oleh legendaris<br className="hidden md:block" />
              <span className="text-brand-sand italic">Madiun Sejak 1989</span>
            </h1>
            <p className="text-brand-cream/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Menghadirkan kelembutan bluder dengan resep warisan yang tetap
              terjaga hingga hari ini.
            </p>
            <Link to="/produk" className="inline-flex items-center justify-center bg-brand-sand text-brand-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Lihat Produk Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2) OUR STORY (INTERACTIVE TIMELINE) */}
      <section className="py-24 bg-[#fcf5ee] relative overflow-hidden transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-semibold tracking-[0.3em] uppercase text-sm mb-4 block"
            >
              The Art of Taste
            </motion.span>
            <h2 
              onClick={() => setActive(null)} 
              className="text-5xl md:text-6xl font-playfair font-bold text-brand-brown cursor-pointer hover:text-brand-red transition-colors duration-300"
            >
              Perjalanan Sebuah Rasa
            </h2>
            {/* Teks narasi yang menyatu dengan desain */}
            <p className="max-w-2xl mx-auto text-brand-brown/60 text-lg leading-relaxed mt-6">
            Bluder Cokro merajut sejarah melalui 
            <strong> tekstur serat selembut awan</strong>. Sebuah warisan rasa yang melampaui waktu, 
            menjadi <strong> oleh-oleh legendaris</strong> kebanggaan Madiun.
            </p>
          </div>

          <div className="relative mb-24 max-w-4xl mx-auto px-10">
            <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-200"></div>
            <motion.div 
              className="absolute top-8 left-0 h-[2px] bg-brand-red"
              initial={{ width: "0%" }}
              animate={{ width: active !== null ? `${(active / (timelineData.length - 1)) * 100}%` : "0%" }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            
            <div className="relative flex justify-between">
              {timelineData.map((item, i) => (
                <div key={item.year} className="flex flex-col items-center">
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className={`group relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-2 ${
                      active === i 
                        ? 'bg-brand-brown border-brand-brown shadow-2xl scale-110' 
                        : (active !== null && i < active)
                          ? 'bg-white border-brand-red'
                          : 'bg-white border-gray-100 hover:border-brand-red'
                    }`}
                  >
                    <span className={`font-playfair font-bold text-lg ${active === i ? 'text-brand-sand' : 'text-brand-brown'}`}>
                      {item.year}
                    </span>
                  </button>

                  <div className="h-10 mt-4 relative">
                    <AnimatePresence>
                      {active !== i && (
                        <motion.p
                          layoutId={`title-${i}`}
                          className="text-brand-brown font-playfair font-bold text-sm text-center w-32"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {item.title}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto h-auto transition-all duration-500">
            <AnimatePresence mode="wait">
              {active !== null ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-[#fbf3e8] rounded-[3rem] p-8 md:p-12 border border-brand-sand/20 shadow-xl backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="absolute -inset-2 border border-brand-red/20 rounded-[2.2rem] rotate-3"></div>
                      <div className="relative z-10 w-full aspect-video overflow-hidden rounded-[2rem] shadow-lg bg-brand-cream">
                        <iframe
                          key={active}
                          className="absolute inset-0 w-full h-full z-10"
                          src={`https://www.youtube.com/embed/${timelineData[active].ytId}?start=${timelineData[active].start}&autoplay=1&mute=1`}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="text-left flex flex-col items-start">
                      <div className="inline-block px-6 py-2.5 rounded-full bg-brand-red/10 text-brand-red text-lg font-bold mt-2 mb-4">
                        Tahun {timelineData[active].year}
                      </div>
                      <motion.h4 
                        layoutId={`title-${active}`}
                        className="text-4xl italic font-playfair font-bold text-brand-brown mb-6"
                      >
                        {timelineData[active].title}
                      </motion.h4>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-brown/80 text-xl leading-relaxed italic text-justify"
                      >
                        "{timelineData[active].desc}"
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <p className="text-brand-brown/25 font poppins italic text-2xl tracking-wide">
                    jelajahi perjalanan rasa kami dari waktu ke waktu
                  </p>
                  <div className="w-12 h-[1px] bg-brand-sand mx-auto mt-4"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      

      {/* 3) RESEP WARISAN TURUN TEMURUN */}
      <section className="py-24 bg-brand-sand/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-6">
              Resep Warisan yang <br className="hidden sm:block" />
              <span className="text-brand-red italic">Menjaga Kelembutan</span>
            </motion.h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} className="text-brand-red" />,
                title: 'Resep Turun-Temurun',
                desc: 'Menggunakan formula rahasia keluarga yang dipertahankan keasliannya sejak generasi pertama.'
              }, 
              {
                icon: <Hand size={32} className="text-brand-red" />,
                title: 'Sentuhan Tangan Baker',
                desc: 'Dibuat dengan ketelitian dan passion oleh baker berpengalaman untuk hasil yang sempurna.'
              }, 
              {
                icon: <Sparkles size={32} className="text-brand-red" />,
                title: 'Tekstur Lembut Orisinil',
                desc: 'Proses fermentasi alami yang menghasilkan serat roti halus dan kelembutan tahan lama.'
              }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-brown/5 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-brand-sand/50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-brand-brown mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-brown/70 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4) QUALITY CONTROL */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUpVariant} 
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6">
                <span>Kualitas Terjamin</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-6">
                Standar Mutu <br />
                <span className="text-brand-red italic text-justify">Tanpa Kompromi</span>
              </h2>

              <p className="text-brand-brown/80 text-lg mb-10 leading-relaxed text-justify">
                Kami memastikan setiap produk yang sampai ke tangan Anda telah melewati proses seleksi dan pengawasan ketat, menjamin kebersihan, keamanan, dan kehalalan.
              </p>

              <div 
                onClick={() => setShowHalal(true)}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-brand-brown/10 inline-flex cursor-pointer hover:shadow-md transition-all active:scale-95 group"
              >
                <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center border border-brand-gold/30 group-hover:border-brand-red transition-colors overflow-hidden p-2">
                  <img 
                    src="/foto/logo halal.webp" 
                    alt="Logo Halal Indonesia" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-brand-brown">Sertifikasi Halal</p>
                  <p className="text-sm text-brand-brown/60">Klik untuk melihat sertifikat</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer} 
              className="lg:col-span-7 grid gap-6"
            >
              {[
                {
                  icon: <ShieldCheck size={28} className="text-brand-cream" />,
                  title: 'SOP Produksi Ketat',
                  desc: 'Penerapan standar operasional prosedur yang disiplin di setiap tahap pembuatan.'
                }, 
                {
                  icon: <Eye size={28} className="text-brand-cream" />,
                  title: 'Pengawasan Supervisor',
                  desc: 'Quality control berlapis oleh tim ahli untuk memastikan konsistensi rasa dan bentuk.'
                }, 
                {
                  icon: <Award size={28} className="text-brand-cream" />,
                  title: 'Standar Food Grade Internasional',
                  desc: 'Penggunaan peralatan dan fasilitas produksi berstandar keamanan pangan global.'
                }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="bg-brand-brown rounded-3xl p-6 flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                  <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-cream mb-2">{item.title}</h3>
                    <p className="text-brand-sand/80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODAL SERTIFIKAT HALAL */}
      <AnimatePresence>
        {showHalal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHalal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-brown/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowHalal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                ✕
              </button>

              <img 
                src="/foto/sertifikat halal.webp" 
                alt="Sertifikat Halal" 
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              
              <div className="p-6 text-center bg-white">
                <p className="text-brand-brown/60 mt-2 italic">Menjamin kebaikan dan kehalalan di setiap gigitan produk Cokro.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}