/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('./assets/map.svg')",
      },
      backgroundSize: {
        '55%': '55%',
      },
      "fontFamily": {
        "porter-sans-block": "porter-sans-block",
        "kode": ['"Kode Mono", monospace'],
        "blanka":"blanka",
        "diplomata":['"Diplomata", serif'],
        "dm-serif-display":['"DM Serif Display", serif'],
        "dm-sans":['"DM Sans", serif']
      },
      perspective: {
        300: '300px',
      }
    }
  },
  plugins: [],
}

