import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const socials = [
  {
    name: 'Instagram',
    handle: '@bludercokro',
    followers: '150K+',
    icon: '/foto/Instagram.webp',
    bgColor: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500',
    link: 'https://www.instagram.com/bludercokro/'
  },
  {
    name: 'TikTok',
    handle: '@bludercokro.official',
    followers: '200K+',
    icon: '/foto/Tiktok.webp',
    bgColor: 'bg-black',
    link: 'https://www.tiktok.com/@bludercokro.official'
  },
  {
    name: 'Facebook',
    handle: '@CokroMadiun',
    followers: '50K+',
    icon: '/foto/Facebook.webp',
    bgColor: 'bg-blue-600',
    link: 'https://www.facebook.com/CokroMadiun'
  }
];

export function SocialMediaSection() {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-sand/50 border border-brand-brown/10 text-brand-brown text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            Ikuti Kami
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-4"
          >
            Di Sosial Media
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-brown/70 text-lg"
          >
            Dapatkan update promo, produk terbaru, dan cerita di balik dapur
            Bluder Cokro.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 border border-brand-sand/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-transparent">
                  <img 
                    src={social.icon}
                    alt={social.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-bold text-brand-brown text-lg">
                    {social.name}
                  </h3>
                  <p className="text-brand-brown/60 text-sm">
                    {social.handle}
                  </p>
                  <p className="text-brand-red text-xs font-semibold mt-1">
                    {social.followers} Pengikut
                  </p>
                </div>
              </div>

              <ExternalLink
                size={20}
                className="text-brand-brown/30 group-hover:text-brand-brown transition-colors"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}