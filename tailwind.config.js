/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guide: {
          blue: '#123D88',      // Primary Royal Blue
          navy: '#071D45',      // Deep Midnight Navy
          cyan: '#09A9D4',      // Bright Cyan Accent
          gold: '#D5AF38',      // Guide Gold
          goldLight: '#E8CA6B',
          goldDark: '#B89225',
          cream: '#F7F6F1',     // Warm Off-White
          charcoal: '#111827',  // Charcoal
          muted: '#667085',     // Muted Text
          border: 'rgba(18, 61, 136, 0.12)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(7, 29, 69, 0.05)',
        'elevated': '0 20px 40px -15px rgba(7, 29, 69, 0.08)',
        'gold-glow': '0 0 25px rgba(213, 175, 56, 0.25)',
        'blue-glow': '0 10px 30px rgba(18, 61, 136, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(18, 61, 136, 0.08) 1px, transparent 1px)",
        'grid-pattern-dark': "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
