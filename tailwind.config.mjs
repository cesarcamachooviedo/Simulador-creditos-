/** @type {import('tailwindcss').Config} */
export default {
  // ─── Astro content scanning ─────────────────────────────────────────────────
  // Tailwind analiza todos estos archivos en busca de clases para incluir en el build
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],

  theme: {
    extend: {
      // ─── Paleta corporativa ─────────────────────────────────────────────────
      // Extraída del bloque tailwind.config del index.html original
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

      // ─── Tipografía corporativa ──────────────────────────────────────────────
      fontFamily: {
        // Serif editorial para títulos y displays financieros
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Sans principal para cuerpo de texto e interfaz
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
        // Monoespaciada para cifras financieras (numerales tabulares)
        mono:    ['"DM Mono"', '"Courier New"', 'monospace'],
      },
    },
  },

  plugins: [],
};
