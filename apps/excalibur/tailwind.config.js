/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        plaster: ['"Plaster"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        starlord: ['"Starlord"', 'sans-serif'],
        kode: ['"Kode Mono", monospace'],
      },
      screens: {
        mdx: '770px', // Custom breakpoint for 770px
        smx: '480px', // Custom breakpoint for 480px
      },
      boxShadow: {
        'text': '-10px -10px pink',
        'custom-glow': '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.5rem #bc13fe',

      },
      scrollbar: {
        'thin': '2px',
        'rounded': '10px',
      },
    },
  },
  plugins: [],
}



