/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#FAFAFA",        // Pearl White
        parrot: "#A8E6CF",       // Light Parrot Green
        emerald: "#38A169",      // Emerald Green
      }
    },
  },
  plugins: [],
};
