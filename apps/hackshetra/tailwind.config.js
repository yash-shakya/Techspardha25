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
        '60%': '60%',
      },
      "fontFamily": {
        "porter-sans-block": "Porter Sans Block",
        "kode": ['"Kode Mono", monospace'],
        "blanka":"Blanka"
      }
    }
  },
  plugins: [],
}

