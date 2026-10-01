/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#1E1E1E',
          line: '#E8E1D5',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          dim: '#FAF8F3',
          sand: '#F7F4EC',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E7D5A7',
          dark: '#B9922E',
          deep: '#C6A15B',
          bg: '#F7EBCB',
        },
        champagne: {
          DEFAULT: '#E7D5A7',
          light: '#F7EBCB',
          soft: '#F3E8CF',
        },
        espresso: {
          DEFAULT: '#F7F4EC',
          light: '#FAF8F3',
          dark: '#F3E8CF',
        },
        coffee: {
          DEFAULT: '#6F4E37',
        },
        urgency: {
          DEFAULT: '#7C1F2A',
          light: '#9C2A38',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 8px 30px -8px rgba(212, 175, 55, 0.4)',
        soft: '0 12px 36px -12px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5B93F 0%, #D4AF37 50%, #C6A15B 100%)',
        'gold-hover': 'linear-gradient(135deg, #D4AF37 0%, #C6A15B 50%, #B9922E 100%)',
        'ink-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 100%)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
