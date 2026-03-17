import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="w-full font-mono bg-day-nav dark:bg-black border-t border-zinc-600/30 dark:border-green-500/20 py-5 mt-16 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-zinc-500 dark:text-green-600/40">
          <span className="text-day-accent dark:text-green-500 mr-1.5 select-none">$</span>
          echo &quot;{t.footer.madeWith} {new Date().getFullYear()}&quot;
          <span className="text-day-muted dark:text-zinc-700 ml-2 select-none">
            {/* clin d'œil 🖊️ */}# NotepadPlusPlus.xml
          </span>
        </p>

        <div className="flex space-x-4 text-base">
          <a
            href="https://github.com/Cuplan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-green-600/40 hover:text-zinc-200 dark:hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-johnson-447681280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-green-600/40 hover:text-zinc-200 dark:hover:text-green-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:johnsondylan14@gmail.com"
            className="text-zinc-500 dark:text-green-600/40 hover:text-zinc-200 dark:hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
