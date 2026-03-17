import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { Typewriter } from "react-simple-typewriter";

// On importe les icônes depuis react-icons/si (Simple Icons)
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiPython,
  SiPandas,
  SiAdobeillustrator,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const temoignages = [
  {
    citation:
      "Toujours prêt à apprendre et à livrer du travail de qualité, même sous pression.",
    nom: "Annie Thivierge",
    titre: "CEO",
    entreprise: "Bonbons Mélangés",
  },
  {
    citation: "Dylan est un bénévole fiable et efficace.",
    nom: "Louise Nicolas",
    titre: "Directrice générale et artistique",
    entreprise: "Galerie d'art du Parc",
  },
  {
    citation:
      "Dylan s'est distingué par son sérieux, son engagement et une attitude exemplaire.",
    nom: "Maxime Faucher",
    titre: "Enseignant",
    entreprise: "Cégep de Trois-Rivières",
  },
];

export default function Home() {
  const [indexAct, setIndexAct] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setIndexAct((prev) => (prev + 1) % temoignages.length);
  }, 10000); // Change toutes les 10 secondes

  return () => clearInterval(interval);
}, []);

  useTheme(); // pour que <html class="dark"> soit appliqué

  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-4 py-12
        transition-colors duration-300
        bg-stone-50 dark:bg-dj-black
      "
    >
      <div
        className="
          max-w-5xl w-full
          bg-white dark:bg-dj-card
          shadow-md dark:border dark:border-zinc-800
          rounded-2xl p-8
          flex flex-col md:flex-row gap-10
          transition-colors duration-300
        "
      >
        {/* PHOTO */}
        <div className="md:w-1/3 flex justify-center items-start">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="/ma-photo.jpg"
            alt="Dylan Johnson"
            className="rounded-full w-72 h-72 object-cover border-4 border-emerald-500 dark:border-green-500 shadow-md"
          />
        </div>

        {/* CONTENU */}
        <div className="md:w-2/3 space-y-6">
          {/* TITRE PRINCIPAL */}
          <h1 className="text-4xl font-bold text-stone-800 dark:text-green-400 leading-tight">
            <Typewriter
              words={["Salut, moi c'est Dylan Johnson !", " Hi, i'm Dylan Johnson!"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={40}
              delaySpeed={5000}
            />
          </h1>

          {/* PARAGRAPHE */}
          <p className="text-stone-600 dark:text-zinc-300 text-base leading-relaxed">
            Étudiant en informatique passionné par l'IA et la data science. Je
            combine logique, créativité et curiosité pour résoudre des problèmes
            techniques efficacement et rapidement. Grâce à mes expériences, je
            peux m'adapter à n'importe quelle situation et apprendre très
            rapidement. Motivé pour le travail, je suis ouvert à toutes
            opportunités.
          </p>

          {/* COMPÉTENCES */}
          <div>
            <h2 className="text-lg font-semibold text-emerald-700 dark:text-green-400 mb-1">
              Compétences clés
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 list-none text-stone-600 dark:text-zinc-300 text-sm">
              {/* React + TypeScript + Tailwind */}
              <li className="flex items-center gap-2 mb-2">
                <SiReact className="w-5 h-5 text-emerald-400 dark:text-emerald-300" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiTypescript className="w-5 h-5 text-sky-400 dark:text-sky-300" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiTailwindcss className="w-5 h-5 text-cyan-400 dark:text-cyan-300" />
                <span>Tailwind CSS</span>
              </li>

              {/* JavaScript + HTML/CSS + Bootstrap */}
              <li className="flex items-center gap-2 mb-2">
                <SiHtml5 className="w-5 h-5 text-orange-500 dark:text-orange-300" />
                <span>HTML5</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiCss3 className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                <span>CSS3</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiBootstrap className="w-5 h-5 text-violet-500 dark:text-violet-300" />
                <span>Bootstrap</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiJavascript className="w-5 h-5 text-violet-500 dark:text-violet-300" />
                <span className="font-semibold">JavaScript</span>
              </li>

              {/* Java, SQL, Python */}
              <li className="flex items-center gap-2 mb-2">
                <FaJava className="w-5 h-5 text-red-500 dark:text-red-300" />
                <span>Java</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiMysql className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>SQL</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiPython className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
                <span>Python</span>
              </li>

              {/* Machine Learning : Weka, pandas, scikit-learn */}
              <li className="flex items-center gap-2 mb-2 col-span-2">
                <SiPandas className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
                <span>Machine Learning (Weka, pandas, scikit-learn)</span>
              </li>

              {/* UI/UX + accessibilité */}
              <li className="flex items-center gap-2 mb-2">
                <SiFigma className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                <span>UI/UX</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiAdobeillustrator className="w-5 h-5 text-orange-400 dark:text-orange-300" />
                <span>Accessibilité</span>
              </li>

              {/* Excel & bases de données */}
              <li className="flex items-center gap-2 mb-2">
                <FaFileExcel className="w-5 h-5 text-green-500 dark:text-green-300" />
                <span>Excel & bases de données</span>
              </li>

              {/* Gestion d'équipe & conflits */}
              <li className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 flex items-center justify-center bg-emerald-100 dark:bg-zinc-800 rounded text-emerald-800 dark:text-green-400">
                  🤝
                </span>
                <span>Gestion d'équipe & conflits</span>
              </li>

              {/* Soft skills : polyvalence, écoute, esprit d'équipe */}
              <li className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 flex items-center justify-center bg-emerald-100 dark:bg-zinc-800 rounded text-emerald-800 dark:text-green-400">
                  💡
                </span>
                <span>Soft skills : polyvalence, écoute, esprit d'équipe</span>
              </li>
            </ul>
          </div>

          {/* EXPÉRIENCES */}
          <div>
            <h2 className="text-lg font-semibold text-emerald-700 dark:text-green-400 mb-1">
              Expériences pro
            </h2>
            <ul className="list-disc list-inside text-stone-600 dark:text-zinc-300 text-sm space-y-1">
              <li>Bonbons Mélangés - Responsable IT et site web</li>
              <li>Cégep de Trois-Rivières - Tuteur en programmation</li>
              <li>PTW - Testeur de jeux vidéo</li>
              <li>Ville de Montréal - Col blanc</li>
              <li>Bénévolat - Galerie d'art du Parc</li>
            </ul>
          </div>

          {/* TÉMOIGNAGES */}
          <div className="mt-6 text-sm text-stone-500 dark:text-zinc-400">
            <h3 className="text-emerald-600 dark:text-green-500 font-medium mb-2">
              Ce qu'on dit de moi
            </h3>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={indexAct}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="
                  border-l-[3px] border-emerald-400 dark:border-green-500
                  pl-3 italic text-stone-700 dark:text-zinc-200 leading-relaxed
                "
              >
                “{temoignages[indexAct].citation}”
                <p className="mt-2 text-xs text-stone-400 dark:text-zinc-500">
                  — {temoignages[indexAct].nom}, {temoignages[indexAct].titre} @
                  {temoignages[indexAct].entreprise}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
