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
      },
      screens: {
        mdx: '770px', // Custom breakpoint for 770px
        smx: '480px', // Custom breakpoint for 480px
      },
      boxShadow: {
        'text': '-10px -10px pink',
      },
    },
  },
  plugins: [],
}