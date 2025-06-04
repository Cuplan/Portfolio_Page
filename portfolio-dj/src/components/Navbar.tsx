import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Nom cliquable vers accueil */}
      <Link to="/" className="text-xl font-bold hover:text-indigo-400">
        Dylan Johnson – Développeur
      </Link>

      {/* Liens vers pages */}
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-indigo-400">
          Accueil
        </Link>
        <Link to="/projets" className="hover:text-indigo-400">
          Projets
        </Link>
        <Link to="/contact" className="hover:text-indigo-400">
          Contact
        </Link>

        {/* Icône GitHub */}
        <a
          href="https://github.com/Cuplan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
      </div>
    </nav>
  );
}
