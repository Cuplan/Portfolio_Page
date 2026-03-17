/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Terminal dark mode
        "dj-black": "#0a0a0a",
        "dj-card": "#111111",
        "dj-nav": "#080808",
        // Notepad++ day mode 🖊️
        "day-bg":     "#2b2b2b", // charcoal background
        "day-card":   "#323232", // panel / card
        "day-nav":    "#1c1c1c", // titlebar / statusbar
        "day-accent": "#a6e22e", // Monokai keyword green
        "day-muted":  "#75715e", // Monokai comment brown
      },
    },
  },
  plugins: [],
};
