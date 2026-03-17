import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLang } from "../hooks/useLang";
import { TermWindow, Prompt } from "../components/TermWindow";
import UptimeWidget from "../components/UptimeWidget";
import {
  SiReact,
  SiMysql,
  SiPython,
  SiPandas,
  SiJavascript,
  SiSharp,
} from "react-icons/si";
import { FaFileExcel, FaJava, FaRobot, FaUsers, FaLightbulb } from "react-icons/fa";

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

  const skills = [
    { icon: <SiPython className="text-yellow-500 shrink-0" />, label: "Python" },
    { icon: <FaJava className="text-red-400 shrink-0" />, label: "Java" },
    { icon: <SiSharp className="text-violet-400 shrink-0" />, label: "C#" },
    { icon: <SiMysql className="text-blue-400 shrink-0" />, label: "SQL" },
    { icon: <SiReact className="text-cyan-400 shrink-0" />, label: "React" },
    { icon: <SiJavascript className="text-yellow-400 shrink-0" />, label: "JavaScript" },
    { icon: <SiPandas className="text-blue-400 shrink-0" />, label: t.home.skills.ml },
    { icon: <FaRobot className="text-green-400 shrink-0" />, label: t.home.skills.aiTools },
    { icon: <FaFileExcel className="text-green-500 shrink-0" />, label: t.home.skills.excel },
    { icon: <FaUsers className="text-day-accent shrink-0" />, label: t.home.skills.teamManagement },
    { icon: <FaLightbulb className="text-yellow-400 shrink-0" />, label: t.home.skills.softSkills },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-day-bg dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-5xl w-full space-y-4">

        {/* Main about terminal */}
        <TermWindow title="~/about -- zsh">
          <div className="p-6 flex flex-col md:flex-row gap-8">

            {/* PHOTO */}
            <div className="md:w-1/3 flex flex-col items-center gap-2 shrink-0">
              <p className="text-xs text-day-accent/50 dark:text-green-600/40 self-start mb-1 select-none">
                $ display photo.jpg
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-day-accent/30 dark:border-green-500/30 p-1"
              >
                <img
                  src="/ma-photo.jpg"
                  alt="Dylan Johnson"
                  className="w-52 h-52 md:w-full md:h-auto aspect-square object-cover"
                />
              </motion.div>
              <p className="text-xs text-day-muted/70 dark:text-green-600/25 select-none">
                photo.jpg [500×500]
              </p>
            </div>

            {/* CONTENT */}
            <div className="md:w-2/3 space-y-5">

              <div>
                <Prompt cmd="whoami" />
                <h1 className="text-2xl font-bold text-zinc-100 dark:text-green-400 pl-5 leading-tight">
                  <Typewriter
                    words={t.home.typewriterWords}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={75}
                    deleteSpeed={40}
                    delaySpeed={5000}
                  />
                </h1>
              </div>

              <div>
                <Prompt cmd="cat bio.txt" />
                <p className="text-sm text-zinc-300 dark:text-zinc-300 leading-relaxed border-l-2 border-day-accent/20 dark:border-green-500/20 pl-3 ml-5">
                  {t.home.bio}
                </p>
              </div>

              <div>
                <Prompt cmd="ls skills/" />
                <div className="flex flex-wrap gap-2 pl-5">
                  {skills.map((s, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs px-2 py-1 border border-zinc-600/40 dark:border-green-500/20 text-zinc-300 dark:text-zinc-300 bg-zinc-800/50 dark:bg-zinc-900/50"
                    >
                      {s.icon}
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Prompt cmd="cat work-history.log" />
                <ul className="space-y-1 pl-5">
                  {t.home.experiences.map((exp, i) => (
                    <li key={exp} className="text-sm text-zinc-400 dark:text-zinc-400 flex gap-2">
                      <span className="text-day-accent/50 dark:text-green-600/40 select-none w-9 shrink-0">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Prompt cmd="tail -n 1 testimonials.log" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={indexAct}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="border-l-2 border-day-accent/25 dark:border-green-500/25 pl-3 ml-5 text-sm"
                  >
                    <p className="italic text-zinc-300 dark:text-zinc-300">
                      &quot;{testimonials[indexAct].citation}&quot;
                    </p>
                    <p className="text-xs text-day-muted dark:text-green-600/50 mt-1">
                      -- {testimonials[indexAct].name}, {testimonials[indexAct].title} @{" "}
                      {testimonials[indexAct].company}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </TermWindow>

        {/* Uptime widget */}
        <UptimeWidget />

      </div>
    </section>
  );
}
