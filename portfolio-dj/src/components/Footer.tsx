// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-yellow-200 text-amber-900 
        dark:bg-gray-900 dark:text-amber-200 
        py-6 mt-20 
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          Fait avec 💻 & ☕ par Dylan Johnson © {new Date().getFullYear()}
        </p>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700 dark:hover:text-amber-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-johnson-447681280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700 dark:hover:text-amber-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dylan.johnson.dev@gmail.com"
            className="hover:text-amber-700 dark:hover:text-amber-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

