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
          custom: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.1rem #bc13fe, 0 0 0.4rem #bc13fe, inset 0 0 0.8rem #bc13fe',
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
        '.text-theme': {
          textShadow: '0 0 7px #00d0ff, 0 0 10px #ffffff00, 0 0 21px #000000a4, 0 0 42px rgba(0, 68, 255, 0), 0 0 82px rgb(1, 11, 36), 0 0 92px rgb(2, 17, 37), 0 0 102px rgb(0, 0, 0), 0 0 151px rgb(0, 0, 0)',
        },
      });
    },
  ],
}

