import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const temoignages = [
  {
    citation: "Toujours prêt à apprendre et à livrer du travail de qualité, même sous pression.",
    nom: "Annie Thivierge",
    titre: "CEO",
    entreprise: "Bonbons Mélangés",
  },
  {
    citation: "Dylan est l'un des collaborateurs les plus créatifs et fiables avec qui j'ai travaillé.",
    nom: "Louise Nicolas",
    titre: "Directrice générale et artistique",
    entreprise: "Galerie d'art du Parc",
  },
  {
    citation: "Dylan s'est distingué par son sérieux, son engagement et une attitude exemplaire.",
    nom: "Maxime Faucher",
    titre: "Enseignant",
    entreprise: "Cégep de Trois-Rivières",
  },
]

export default function Home() {
  const [indexAct, setIndexAct] = useState(0)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row gap-10">
        {/* PHOTO */}
        <div className="md:w-1/3 flex justify-center items-start">
          <img
            src="/ma-photo.jpg"
            alt="Dylan Johnson"
            className="rounded-full w-72 h-72 object-cover border-4 border-indigo-600 shadow-md"
          />
        </div>

        {/* CONTENU */}
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-indigo-700 leading-tight">Salut, moi c'est Dylan Johnson !</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Étudiant en informatique passionné par l'IA et la data science.
            Je combine logique, créativité et curiosité pour résoudre des problèmes techniques efficacement
            et rapidement. Grâce à mes expériences, je peux m'adapter à n'importe quelle situation et apprendre
            très rapidement. Motivé pour le travail, je suis ouvert à toutes opportunités.
          </p>

          {/* COMPÉTENCES */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 mb-1">Compétences clés</h2>
            <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside text-gray-700 text-sm">
              <li>React + TypeScript + Tailwind CSS</li>
              <li>JavaScript, HTML/CSS, Bootstrap</li>
              <li>Java, SQL, Python</li>
              <li>Machine Learning (Weka, pandas, scikit-learn)</li>
              <li>UI/UX, accessibilité</li>
              <li>Gestion d'équipe & conflits</li>
              <li>Excel & bases de données</li>
              <li>Soft skills : polyvalence, écoute, esprit d'équipe</li>
            </ul>
          </div>

          {/* EXPÉRIENCES */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 mb-1">Expériences pro</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Bonbons Mélangés - Responsable IT et site web</li>
              <li>Cégep de Trois-Rivières - Tuteur en programmation</li>
              <li>PTW - Testeur de jeux vidéo</li>
              <li>Ville de Montréal - Col blanc</li>
              <li>Bénévolat - Galerie d'art du Parc</li>
            </ul>
          </div>

          {/* TÉMOIGNAGES */}
          <div className="mt-6 text-sm text-gray-600">
            <h3 className="text-indigo-500 font-medium mb-2">Ce qu'on dit de moi</h3>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={indexAct}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="border-l-[3px] border-indigo-400 pl-3 italic text-gray-700 leading-relaxed">
                “{temoignages[indexAct].citation}”
                <p className="mt-2 text-xs text-gray-500">
                  — {temoignages[indexAct].nom}, {temoignages[indexAct].titre} @ {temoignages[indexAct].entreprise}
                </p>
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setIndexAct((prev) => Math.max(prev - 1, 0))}
                disabled={indexAct === 0}
                className={`px-3 py-1 text-xs rounded-md border ${
                  indexAct === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 text-white hover:bg-indigo-600"
                }`}
              >
                ←
              </button>
              <button
                onClick={() => setIndexAct((prev) => Math.min(prev + 1, temoignages.length - 1))}
                disabled={indexAct === temoignages.length - 1}
                className={`px-3 py-1 text-xs rounded-md border ${
                  indexAct === temoignages.length - 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 text-white hover:bg-indigo-600"
                }`}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
