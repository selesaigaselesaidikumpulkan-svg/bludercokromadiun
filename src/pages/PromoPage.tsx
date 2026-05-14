import { useState, useEffect, useRef } from "react";

type Promo = {
  title: string;
  date: string;
  image: string;
  link: string;
  detail: string;
};

export default function PromoPage() {
  const [selected, setSelected] = useState<Promo | null>(null);
  const [current, setCurrent] = useState(0);
  const [showMaskot, setShowMaskot] = useState(true);
  const startX = useRef<number>(0);

  const promos: Promo[] = [
    {
      title: "HUT COKRO 37 TAHUN 🎉",
      date: "19-21 April 2026",
      image: "/foto/promo 1.jpeg",
      link: "https://www.instagram.com/p/DXLgO0bkq46/",
      detail: `🎉 PROMO WALK-IN HUT COKRO 37 TAHUN 🎉 

Spesial merayakan ulang tahun Cokro yang ke-37 🥳
Cokro mau berbagi kebahagiaan lewat promo spesial untuk Sobat Cokro 🤎

Nikmati potongan harga sebesar Rp37.000 untuk pembelian Paket Spesial HUT Cokro ✨

🗓 Periode promo: 19-21 April 2026
📍 Berlaku untuk pembelian langsung (walk-in) di seluruh outlet Cokro`,
    },
    {
      title: "Photo Competition 📸",
      date: "1-14 April 2026",
      image: "/foto/promo 3.jpeg",
      link: "https://www.instagram.com/p/DWljj4AjsYp/",
      detail: `🎉 PHOTO COMPETITION SPECIAL HUT 37 TAHUN COKRO🎉

Menanam Tomat, Lamanya Setahun
Halo Sobat, Cokro Mau Ulang Tahun 🥳

Challenge ini dapat diikuti seluruh Sobat Cokro 🤗

Simak ya untuk syarat dan ketentuanya:
🤎 Upload Foto di Instagram Story dengan tema “37 Tahun Manisnya Kebersamaan Cokro”
🤎 Wajib follow dan tag mention akun @bludercokro
🤎 Tag 3 bestie Sobat Cokro untuk ikut challenge ini
🤎 Akun Instagram peserta harus real account dan tidak di private
🤎 Periode Challenge 1-14 April 2026
🤎 Pemenang akan diumumkan melalui instagram resmi Cokro @bludercokro
🤎 Keputusan pemenang tidak dapat diganggu gugat

Akan ada hadiah menarik untuk 37 Sobat Cokro
📱 1 handphone
⌚️ 10 smartwatch
🎧 10 tws
💵 gopay Rp 50.000

Yuk semarakkan HUT 37 Cokro dan jangan lupa ikut challengenya ya Sobat 🤗`,
    },
    {
      title: "Promo HUT Bekasi 🎊",
      date: "7-12 Maret 2026",
      image: "/foto/promo 2.jpeg",
      link: "https://www.instagram.com/p/DVaxrn2mCjL/",
      detail: `🎉 DISKON KHUSUS WARGA BEKASI! 🎉

Bekasi mana suaranyaaa?! 🙌

Dalam rangka memperingati HUT ke-26 Kota Bekasi, Cokro kasih promo spesial buat Sobat Cokro Bekasi 🤎

✨ Diskon 15% untuk pembelian walk-in
✨ Diskon 20% via GrabFood & GoFood

📆 7-12 Maret 2026`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMaskot(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;

    if (startX.current - endX > 50) {
      setCurrent((prev) => (prev + 1) % promos.length);
    }

    if (endX - startX.current > 50) {
      setCurrent((prev) =>
        prev === 0 ? promos.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-28 px-4 bg-[#f5efe6] relative overflow-hidden">

      {/* MASKOT */}
      {showMaskot && (
        <div className="fixed top-32 left-4 z-50 animate-bubbleOut flex items-start gap-2">
          <img src="/foto/maskot.png" className="w-24" />
         <div className="bg-white text-[#3d1c01] text-sm px-3 py-2 rounded-xl shadow-md">
            Halo Sobat Cokro! 🤎
          </div>
        </div>
      )}

      <div className="relative z-10">

        {/* HERO */}
        <div className="text-center mb-10">
          <h1
            className="text-5xl md:text-6xl text-[#3b2a1f]"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Promo Terbatas!
          </h1>

          <p className="text-[#8b1e1e] italic mt-4">
            Temani momen spesialmu dengan promo istimewa dari Bluder Cokro🎉
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-3xl shadow-lg relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {promos.map((promo, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full h-80 md:h-[420px] flex items-center justify-center">
                <img src={promo.image} className="max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* GRID */}
       <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {promos.map((promo, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => setSelected(promo)}
            >
              <div className="relative aspect-[3/4] bg-white rounded-[2.5rem] shadow-xl border-[10px] md:border-[14px] border-white overflow-hidden transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl">
                <img 
                  src={promo.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={promo.title} 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-[#3b2a1f] font-bold text-xl">{promo.title}</h3>
                <p className="text-[#8b1e1e] text-sm font-medium mb-4">{promo.date}</p>
                <button className="bg-[#8b1e1e] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full shadow-md hover:bg-[#6d1616] transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-32 px-4 animate-overlay"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-[#f5efe6] rounded-2xl w-full max-w-sm p-5 max-h-[70vh] overflow-y-auto relative animate-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 z-[9999] bg-white rounded-full px-3 py-1 shadow text-lg"
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold text-center mb-3">
                {selected.title}
              </h2>

              <p className="whitespace-pre-line text-sm">
                {selected.detail}
              </p>

              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full bg-[#8b1e1e] text-white py-2 rounded-full text-center hover:bg-[#6d1616] transition"
              >
                Lihat di Instagram
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes overlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bubbleOut {
          0% { opacity: 0; transform: scale(0.5); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-20px); }
        }

        .animate-modal {
          animation: modalIn 0.3s ease-out;
        }

        .animate-overlay {
          animation: overlayFade 0.2s ease;
        }

        .animate-bubbleOut {
          animation: bubbleOut 8s ease forwards;
        }
      `}</style>
    </div>
  );
}