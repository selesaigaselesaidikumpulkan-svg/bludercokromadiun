
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#3C1A00',
          cream: '#FDF6EE',
          sand: '#F5E6D0',
          red: '#8B1A1A',
          gold: '#D4AF37'
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
