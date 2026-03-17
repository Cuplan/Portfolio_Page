/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark mode
        "dj-black": "#0a0a0a",
        "dj-card": "#111111",
        "dj-nav": "#080808",
        // Light mode — warm off-whites, not pure white
        "day-bg": "#f2ede7",
        "day-card": "#faf8f5",
        "day-nav": "#e8e3db",
      },
    },
  },
  plugins: [],
};
