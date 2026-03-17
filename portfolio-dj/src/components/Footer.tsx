import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-stone-100 text-stone-700
        dark:bg-dj-nav dark:text-zinc-400
        border-t border-stone-200 dark:border-zinc-800
        py-6 mt-20
        transition-colors duration-300
      ">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          Fait avec 💻 & ☕ par Dylan Johnson © {new Date().getFullYear()}
        </p>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-green-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-johnson-447681280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-green-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dylan.johnson.dev@gmail.com"
            className="hover:text-emerald-600 dark:hover:text-green-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

