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
        turquoise: '#00A5A8',
        'turquoise-light': '#00C4C7',
        'turquoise-dark': '#008A8D',
        gold: '#FFC72C',
        black: '#000000',
        white: '#FFFFFF',
        'dark-bg': '#0a0e1a',
        'dark-surface': '#1a1f2e',
        'dark-card': '#252b3d',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
