import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PATH_COMMANDS: Record<string, string> = {
  "/": "cd ~",
  "/projets": "cd ./projects",
  "/contact": "cd ./contact",
};

export default function NavCommandBar() {
  const location = useLocation();
  const [cmd, setCmd] = useState<string | null>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const c = PATH_COMMANDS[location.pathname];
    if (!c) return;
    setCmd(c);
    const t = setTimeout(() => setCmd(null), 1800);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {cmd && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="fixed top-[44px] left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
        >
          <div className="bg-day-nav/95 dark:bg-zinc-900/95 border border-zinc-600/40 dark:border-green-500/20 text-xs font-mono px-4 py-1 flex items-center gap-2 shadow-lg backdrop-blur-sm">
            <span className="text-day-accent dark:text-green-500 select-none">$</span>
            <span className="text-zinc-300 dark:text-zinc-300">{cmd}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
