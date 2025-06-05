// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="
        w-full 
        bg-yellow-200 text-amber-900 
        dark:bg-gray-900 dark:text-amber-200 
        shadow-md px-6 py-4 flex justify-between items-center 
        transition-colors duration-300
      "
    >
      {/* Nom cliquable vers accueil */}
      <Link
        to="/"
        className="
          text-xl font-bold 
          hover:text-amber-700 dark:hover:text-amber-300
        "
      >
        Dylan Johnson – Développeur
      </Link>

      {/* Liens vers pages + GitHub + Toggle */}
      <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className="hover:text-amber-700 dark:hover:text-amber-300"
        >
          Accueil
        </Link>
        <Link
          to="/projets"
          className="hover:text-amber-700 dark:hover:text-amber-300"
        >
          Projets
        </Link>
        <Link
          to="/contact"
          className="hover:text-amber-700 dark:hover:text-amber-300"
        >
          Contact
        </Link>

        {/* Icône GitHub */}
        <a
          href="https://github.com/Cuplan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-700 dark:hover:text-amber-300"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>

        {/* Bouton jour/nuit */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
          className="
            p-2 rounded-md 
            bg-amber-300 hover:bg-amber-400 
            dark:bg-gray-700 dark:hover:bg-gray-600 
            text-amber-900 dark:text-amber-200 
            transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
          "
        >
          {theme === "light" ? (
            <FaMoon size={18} />
          ) : (
            <FaSun size={18} />
          )}
        </button>
      </div>
    </nav>
  );
}
