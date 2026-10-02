/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070707',
          900: '#0B0B0B',
          850: '#101010',
          800: '#151515',
          700: '#1C1C1C',
          600: '#252525',
          500: '#333333',
          400: '#4A4A4A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6BE',
          soft: '#E7D5A7',
          bright: '#FBD969',
          metallic: '#C6A15B',
          dark: '#9C7B3C',
          deep: '#7D5E24',
          glow: 'rgba(212, 175, 55, 0.15)',
        },
        champagne: {
          DEFAULT: '#F3E8CF',
          muted: '#C8BEA7',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 14px -2px rgba(212, 175, 55, 0.25)',
        'gold': '0 8px 30px -6px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 14px 45px -8px rgba(212, 175, 55, 0.45)',
        'dark-card': '0 12px 40px -12px rgba(0, 0, 0, 0.8)',
        'glow': '0 0 50px -10px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F8E29E 0%, #D4AF37 50%, #B98B28 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFFFFF 0%, #F5E6BE 40%, #D4AF37 100%)',
        'dark-card-gradient': 'linear-gradient(180deg, rgba(28, 28, 28, 0.75) 0%, rgba(14, 14, 14, 0.9) 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
