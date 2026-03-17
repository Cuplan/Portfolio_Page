import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useLang } from "../hooks/useLang";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();
  const location = useLocation();

  const links = [
    { to: "/", label: t.navbar.home },
    { to: "/projets", label: t.navbar.projects },
    { to: "/contact", label: t.navbar.contact },
  ];

  return (
    <nav className="w-full font-mono bg-day-nav dark:bg-black border-b border-emerald-600/20 dark:border-green-500/20 px-4 sm:px-6 py-3 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-1 text-sm group">
          <span className="text-emerald-500/60 dark:text-green-600/50">~/</span>
          <span className="font-bold text-emerald-800 dark:text-green-400 group-hover:text-emerald-600 dark:group-hover:text-green-300 transition-colors">
            dylan-johnson
          </span>
          <span className="text-emerald-500 dark:text-green-500 ml-0.5 select-none">$</span>
        </Link>

        {/* Nav links + controls */}
        <div className="flex flex-wrap gap-1 items-center text-sm">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-1 transition-colors duration-150 ${
                location.pathname === to
                  ? "bg-emerald-600 dark:bg-green-400 text-white dark:text-black"
                  : "text-emerald-700 dark:text-green-400 hover:bg-emerald-600/10 dark:hover:bg-green-400/10"
              }`}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-emerald-700 dark:text-green-400 hover:bg-emerald-600/10 dark:hover:bg-green-400/10 transition-colors duration-150"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <button
            onClick={toggleLang}
            className="px-2 py-1 border border-emerald-600/25 dark:border-green-500/30 text-emerald-700 dark:text-green-500 text-xs hover:border-emerald-500 dark:hover:border-green-400 hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-150 tracking-wider"
          >
            [{lang === "fr" ? "EN" : "FR"}]
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-2 py-1 border border-emerald-600/25 dark:border-green-500/30 text-emerald-700 dark:text-green-500 hover:border-emerald-500 dark:hover:border-green-400 hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-150"
          >
            {theme === "light" ? <FaMoon size={14} /> : <FaSun size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
