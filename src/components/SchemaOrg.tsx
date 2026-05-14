import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaOrg = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": "https://bludercokrosuksessampaiuas.netlify.app/#organization",
    "name": "Bluder Cokro",
    "description": "Bluder Cokro adalah roti legendaris khas Madiun dengan tekstur lembut dan resep warisan sejak 1989.",
    "foundingDate": "1989",
    "url": "https://bludercokrosuksessampaiuas.netlify.app/", // Sesuaikan domainmu nanti
    "priceRange": "Rp11.000 - Rp112.000",
    "servesCuisine": "Bakery",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madiun",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "Roti bluder",
      "Oleh-oleh khas Madiun",
      "Roti legendaris",
      "Oleh oleh legendaris Madiun"
    ],

    "areaServed": "Indonesia, Madiun",
    "hasMenu": "https://bludercokrosuksessampaiuas.netlify.app/produk",
    "sameAs": [
      "https://www.instagram.com/bludercokro/",
      "https://www.tiktok.com/@bludercokro.official",
      "https://web.facebook.com/cokro.madiun/"
    ]
  };
  
    return (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  </Helmet>
);
};