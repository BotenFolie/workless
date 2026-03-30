import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#EDEDED',
        accent: '#C6FF00',
        neutral: '#6B6B6B',
        'surface-alt': '#1A1A1A',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
      },
      screens: {
        xs: '480px',
        '3xl': '1680px',
      },
      minHeight: {
        hero: 'min(92vh, 960px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
