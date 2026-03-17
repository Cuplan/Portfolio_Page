import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="w-full font-mono bg-day-nav dark:bg-black border-t border-emerald-600/20 dark:border-green-500/20 py-5 mt-16 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-emerald-700/50 dark:text-green-600/40">
          <span className="text-emerald-500 dark:text-green-500 mr-1.5 select-none">$</span>
          echo &quot;{t.footer.madeWith} {new Date().getFullYear()}&quot;
        </p>

        <div className="flex space-x-4 text-base">
          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700/50 dark:text-green-600/40 hover:text-emerald-600 dark:hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-johnson-447681280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700/50 dark:text-green-600/40 hover:text-emerald-600 dark:hover:text-green-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:johnsondylan14@gmail.com"
            className="text-emerald-700/50 dark:text-green-600/40 hover:text-emerald-600 dark:hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
