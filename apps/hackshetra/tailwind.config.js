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
      }
    }
  },
  plugins: [],
}

