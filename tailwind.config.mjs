/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF4FF',
          100: '#DBEAFE',
          700: '#1D4ED8',
          800: '#0B2A56',
          900: '#0A1F42',
          950: '#06132B',
        },
        gold: {
          200: '#FEF3C7',
          300: '#F5D98A',
          400: '#D4A843',
          500: '#B8860B',
          600: '#9A6E00',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
