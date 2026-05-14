import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah Bluder Cokro tersedia di marketplace seperti Shopee?',
      answer:
        'Ya, untuk memudahkan pelanggan di luar kota, Bluder Cokro hadir secara resmi di Shopee dan Tokopedia. Anda dapat menemukan toko resmi kami di website dan akun Instagram Bluder Cokro.'
    },
    {
      question: 'Apakah pembelian di outlet memerlukan Pre Order?',
      answer:
        'Pembelian langsung di outlet tersedia tanpa pre-order, namun beberapa varian tertentu bisa terbatas tergantung ketersediaan stok. Untuk memastikan ketersediaan produk, terutama di akhir pekan atau hari libur, kami sarankan untuk menghubungi outlet terdekat sebelum berkunjung.'
    },
    {
      question: 'Berapa lama Bluder Cokro dapat bertahan?',
      answer:
        'Bluder Cokro dapat bertahan sekitar 6-7 hari di suhu ruang. Untuk pengiriman melalui ekspedisi, produk kami tetap aman dikonsumsi karena dikemas secara khusus agar tetap fresh hingga 3-5 hari perjalanan sejak tanggal pengiriman.'
    },
    {
      question: 'Apakah bisa melakukan pembelian melalui Website ini?',
      answer:
        'Anda dapat melihat katalog produk lengkap di website ini, lalu untuk pemesanan akan kami arahkan melalui WhatsApp resmi Bluder Cokro untuk memastikan proses pemesanan yang lebih cepat dan mudah.'
    },
    {
      question: 'Bagaimana cara memesan Bluder Cokro?',
      answer:
        'Anda dapat memesan melalui WhatsApp, marketplace resmi, atau langsung datang ke outlet Bluder Cokro.'
    }
  ];

  return (
    <>
      {/* Floating FAQ Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-5 right-5 z-50 bg-brand-red text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-semibold"
      >
        <MessageCircle size={20} />
        FAQ
      </motion.button>

      {/* FAQ Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[90%] max-w-[340px] max-h-[70vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-brand-brown/10 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-brown/10 flex-shrink-0 bg-white">
              <h2 className="text-xl font-playfair font-bold text-brand-brown">
                FAQ
              </h2>
              <p className="text-brand-brown/60 mt-2 text-sm leading-relaxed">
                Pertanyaan yang sering ditanyakan pelanggan.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-brown/20 bg-white">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-brand-brown/10 last:border-none"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-brand-brown hover:bg-brand-cream/40 transition-colors"
                  >
                    <span className="pr-4 text-sm leading-relaxed">
                      {faq.question}
                    </span>

                    {active === index ? (
                      <Minus
                        size={18}
                        className="text-brand-red shrink-0"
                      />
                    ) : (
                      <Plus
                        size={18}
                        className="text-brand-red shrink-0"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {/* Perubahan di sini: Penambahan class text-justify */}
                        <div className="px-6 pb-5 text-sm text-brand-brown/70 leading-relaxed text-justify">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}