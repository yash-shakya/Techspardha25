/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-blue": "#1E314BB2",
        "light-ocean-blue": "#1E314B",
      },
      dropShadow: {
        head: ["-4px 0px 4px rgb(59,130,246)", "4px 0px 4px rgb(59,130,246)"],
      },
    },
  },
  plugins: [],
};
