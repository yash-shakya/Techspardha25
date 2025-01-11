/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '-10px -10px pink',
        'custom-glow': '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.5rem #bc13fe',

      },
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        plaster: ['"Plaster"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        starlord: ['"Starlord"', 'sans-serif'],
        kode: ['"Kode Mono", monospace'],
      },
      screens: {
          'mini': { 'max': '320px'},
          'max-md': { 'max': '1024px' },  // Max width 1024px
          'max-sm': { 'max': '770px' },   // Max width 770px
          'max-xs': { 'max': '480px' },   // Max width 480px
      },
      scale: {
        70: '0.7',
        80: '0.8',
        100: '1',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-pink': {
          textShadow: '-10px -10px pink',
        },
      });
    },
  ],
}

