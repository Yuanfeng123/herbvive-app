import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#4a7c59',
          light: '#6b9e7a',
          pale: '#e8f2ec',
          ultra: '#f4f9f6',
          mid: '#c4deca',
        },
        ink: {
          DEFAULT: '#1a2420',
          soft: '#3d5046',
        },
        mist: '#f0f5f2',
        border: '#d6e8db',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'Noto Sans SC', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        ticker: 'ticker 48s linear infinite',
        blink: 'blink 1.4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease both',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
