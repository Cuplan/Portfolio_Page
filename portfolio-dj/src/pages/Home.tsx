import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLang } from "../hooks/useLang";

import {
  SiReact,
  SiMysql,
  SiPython,
  SiPandas,
  SiJavascript,
  SiSharp,
} from "react-icons/si";
import { FaFileExcel, FaJava, FaRobot } from "react-icons/fa";

export default function Home() {
  const { t } = useLang();
  const testimonials = t.home.testimonials;

  const [indexAct, setIndexAct] = useState(0);

  useEffect(() => {
    setIndexAct(0);
  }, [testimonials]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAct((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-4 py-12
        transition-colors duration-300
        bg-day-bg dark:bg-dj-black
      "
    >
      <div
        className="
          max-w-5xl w-full
          bg-day-card dark:bg-dj-card
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

        {/* CONTENT */}
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-stone-600 dark:text-green-400 leading-tight">
            <Typewriter
              words={t.home.typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={40}
              delaySpeed={5000}
            />
          </h1>

          <p className="text-stone-600 dark:text-zinc-300 text-base leading-relaxed">
            {t.home.bio}
          </p>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold text-emerald-700 dark:text-green-400 mb-1">
              {t.home.skillsTitle}
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 list-none text-stone-600 dark:text-zinc-300 text-sm">
              <li className="flex items-center gap-2 mb-2">
                <SiPython className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
                <span>Python</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiSharp className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                <span>C#</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaJava className="w-5 h-5 text-red-500 dark:text-red-400" />
                <span>Java</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiMysql className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>SQL</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiReact className="w-5 h-5 text-emerald-400 dark:text-emerald-300" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <SiJavascript className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2 mb-2 col-span-2">
                <SiPandas className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                <span>{t.home.skills.ml}</span>
              </li>
              <li className="flex items-center gap-2 mb-2 col-span-2">
                <FaRobot className="w-5 h-5 text-emerald-500 dark:text-green-400" />
                <span>{t.home.skills.aiTools}</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <FaFileExcel className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span>{t.home.skills.excel}</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 flex items-center justify-center bg-emerald-100 dark:bg-zinc-800 rounded text-emerald-800 dark:text-green-400">
                  🤝
                </span>
                <span>{t.home.skills.teamManagement}</span>
              </li>
              <li className="flex items-center gap-2 mb-2 col-span-2">
                <span className="w-5 h-5 flex items-center justify-center bg-emerald-100 dark:bg-zinc-800 rounded text-emerald-800 dark:text-green-400">
                  💡
                </span>
                <span>{t.home.skills.softSkills}</span>
              </li>
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-lg font-semibold text-emerald-700 dark:text-green-400 mb-1">
              {t.home.experienceTitle}
            </h2>
            <ul className="list-disc list-inside text-stone-600 dark:text-zinc-300 text-sm space-y-1">
              {t.home.experiences.map((exp) => (
                <li key={exp}>{exp}</li>
              ))}
            </ul>
          </div>

          {/* TESTIMONIALS */}
          <div className="mt-6 text-sm text-stone-500 dark:text-zinc-400">
            <h3 className="text-emerald-600 dark:text-green-500 font-medium mb-2">
              {t.home.testimonialsTitle}
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
                "{testimonials[indexAct].citation}"
                <p className="mt-2 text-xs text-stone-400 dark:text-zinc-500">
                  — {testimonials[indexAct].name}, {testimonials[indexAct].title} @ {testimonials[indexAct].company}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
