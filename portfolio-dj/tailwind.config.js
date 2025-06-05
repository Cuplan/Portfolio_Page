/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <— ajoute cette ligne
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
