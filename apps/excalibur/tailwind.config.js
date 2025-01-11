/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { fontFamily: {
      kode: ['"Kode Mono"'],
      boxShadow: {
        'custom-glow': '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.5rem #bc13fe',
      },
    },
  },
  },
  plugins: [],
}

