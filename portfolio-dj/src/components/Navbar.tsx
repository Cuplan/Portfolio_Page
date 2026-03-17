import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useLang } from "../hooks/useLang";
import { useCRT } from "../hooks/useCRT";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();
  const { crtEnabled, toggleCRT } = useCRT();
  const location = useLocation();

  const links = [
    { to: "/", label: t.navbar.home },
    { to: "/projets", label: t.navbar.projects },
    { to: "/contact", label: t.navbar.contact },
  ];

  return (
    <nav className="w-full font-mono bg-day-nav dark:bg-black border-b border-zinc-600/30 dark:border-green-500/20 px-4 sm:px-6 py-3 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-1 text-sm group">
          <span className="text-day-accent/60 dark:text-green-600/50">~/</span>
          <span className="font-bold text-zinc-100 dark:text-green-400 group-hover:text-day-accent dark:group-hover:text-green-300 transition-colors">
            dylan-johnson
          </span>
          <span className="text-day-accent dark:text-green-500 ml-0.5 select-none">$</span>
        </Link>

        {/* Nav + controls */}
        <div className="flex flex-wrap gap-1 items-center text-sm">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-3 py-1 transition-colors duration-150 flex items-center ${
                  isActive
                    ? "bg-day-accent dark:bg-green-400 text-black dark:text-black"
                    : "text-zinc-300 dark:text-green-400 hover:bg-zinc-700/40 dark:hover:bg-green-400/10"
                }`}
              >
                {label}
                {isActive && (
                  <span className="animate-pulse ml-0.5 text-black dark:text-black leading-none">
                    ▋
                  </span>
                )}
              </Link>
            );
          })}

          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-zinc-400 dark:text-green-400 hover:bg-zinc-700/40 dark:hover:bg-green-400/10 transition-colors duration-150"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>

          {/* Interactive terminal toggle */}
          <button
            onClick={onOpenTerminal}
            title="Open terminal  (`)"
            className="px-2 py-1 border border-zinc-600/40 dark:border-green-500/30 text-zinc-400 dark:text-green-500 text-xs hover:border-day-accent dark:hover:border-green-400 hover:text-day-accent dark:hover:text-green-300 transition-colors duration-150 tracking-wider"
          >
            [&gt;_]
          </button>

          {/* CRT toggle */}
          <button
            onClick={toggleCRT}
            title="Toggle CRT effect"
            className={`px-2 py-1 border text-xs transition-colors duration-150 tracking-wider ${
              crtEnabled
                ? "border-day-accent dark:border-green-400 text-day-accent dark:text-green-400 bg-day-accent/10 dark:bg-green-400/10"
                : "border-zinc-600/40 dark:border-green-500/30 text-zinc-400 dark:text-green-500 hover:border-day-accent dark:hover:border-green-400 hover:text-day-accent dark:hover:text-green-300"
            }`}
          >
            [CRT]
          </button>

          <button
            onClick={toggleLang}
            className="px-2 py-1 border border-zinc-600/40 dark:border-green-500/30 text-zinc-400 dark:text-green-500 text-xs hover:border-zinc-400 dark:hover:border-green-400 hover:text-zinc-200 dark:hover:text-green-300 transition-colors duration-150 tracking-wider"
          >
            [{lang === "fr" ? "EN" : "FR"}]
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-2 py-1 border border-zinc-600/40 dark:border-green-500/30 text-zinc-400 dark:text-green-500 hover:border-zinc-400 dark:hover:border-green-400 hover:text-zinc-200 dark:hover:text-green-300 transition-colors duration-150"
          >
            {theme === "light" ? <FaMoon size={14} /> : <FaSun size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
