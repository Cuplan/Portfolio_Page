/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dj-black": "#0a0a0a",
        "dj-card": "#111111",
        "dj-nav": "#080808",
      },
    },
  },
  plugins: [],
};
