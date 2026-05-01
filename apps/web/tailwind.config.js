/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#19332e',
        paper: '#f2f5e8',
        page: '#fffdf2',
        panel: '#ffffe8',
        line: '#cbbf9c',
        forest: '#00715f',
        clay: '#ff7c59',
        plum: '#9b59b6',
        lake: '#087eb1',
        mint: '#a2ed7a',
        honey: '#f5ad28',
        butter: '#ffd84d',
        sky: '#6edaf2',
        lavender: '#c4d2ff',
        cream: '#fff3bf',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['36px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['18px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '500' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'card': '10px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(25,51,46,0.08)',
        'hover': '0 4px 20px rgba(25,51,46,0.12)',
      },
      backgroundImage: {
        'graph-paper': 'linear-gradient(#e5e5d8 1px, transparent 1px), linear-gradient(90deg, #e5e5d8 1px, transparent 1px)',
        'rainbow-top': 'linear-gradient(90deg, #ff7c59 0 14%, #9b59b6 14% 28%, #087eb1 28% 42%, #11bfb0 42% 56%, #54b95d 56% 70%, #d5df3e 70% 84%, #f5ad28 84% 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
