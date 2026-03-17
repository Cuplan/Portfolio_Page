import { Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useLang } from "../hooks/useLang";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();

  return (
    <nav
      className="
        w-full
        bg-day-nav text-stone-700
        dark:bg-dj-nav dark:text-green-400
        shadow-sm dark:border-b dark:border-zinc-800
        px-4 sm:px-6 py-4
        transition-colors duration-300
      "
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-4">

        <Link
          to="/"
          className="text-lg font-bold hover:text-emerald-700 dark:hover:text-green-300 whitespace-nowrap"
        >
          {t.navbar.brand}
        </Link>

        <div className="flex flex-wrap gap-4 items-center justify-end">

          <Link to="/" className="hover:text-emerald-700 dark:hover:text-green-300">
            {t.navbar.home}
          </Link>

          <Link to="/projets" className="hover:text-emerald-700 dark:hover:text-green-300">
            {t.navbar.projects}
          </Link>

          <Link to="/contact" className="hover:text-emerald-700 dark:hover:text-green-300">
            {t.navbar.contact}
          </Link>

          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 dark:hover:text-green-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="
              px-2 py-1 rounded-md text-xs font-semibold tracking-wider
              bg-day-card hover:bg-stone-200
              dark:bg-zinc-800 dark:hover:bg-zinc-700
              text-stone-700 dark:text-green-400
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500
            "
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="
              p-2 rounded-md
              bg-day-card hover:bg-stone-200
              dark:bg-zinc-800 dark:hover:bg-zinc-700
              text-stone-700 dark:text-green-400
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500
            "
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
