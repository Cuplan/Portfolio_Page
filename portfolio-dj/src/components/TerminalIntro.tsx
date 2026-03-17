import { useState, useEffect } from "react";

const BOOT_LINES = [
  { text: "> Booting portfolio v2.0...", delay: 350 },
  { text: "> Loading color scheme: NotepadPlusPlus.xml     [OK]", delay: 500 },
  { text: "> Loading profile: Dylan Johnson", delay: 500 },
  { text: "> Importing skills: ML, AI, React, Python...    [OK]", delay: 600 },
  { text: "> Fetching projects from github.com/Cuplan...   [OK]", delay: 650 },
  { text: "> All systems operational.", delay: 400 },
];

export function TerminalIntro({ onEnter }: { onEnter: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (visibleCount >= BOOT_LINES.length) {
      const t = setTimeout(() => setDone(true), 400);
      return () => clearTimeout(t);
    }
    const delay = visibleCount === 0 ? 600 : BOOT_LINES[visibleCount - 1].delay;
    const t = setTimeout(() => setVisibleCount((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 550);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl mx-4 font-mono">
        {/* Window chrome */}
        <div className="border border-green-500/50 rounded-md overflow-hidden shadow-2xl shadow-green-500/20">
          <div className="bg-zinc-900 border-b border-green-500/30 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-green-500/40 text-xs select-none">
              ~/portfolio/dylan-johnson
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-black px-6 py-5 min-h-52">
            <div className="space-y-1.5">
              {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
                <div key={i} className="text-green-400 text-sm flex items-center">
                  <span>{line.text}</span>
                  {i === visibleCount - 1 && !done && (
                    <span className="inline-block w-2 h-[1em] bg-green-400 animate-pulse ml-1 translate-y-[1px]" />
                  )}
                </div>
              ))}
            </div>

            {done && (
              <div className="mt-5 flex items-center gap-2">
                <span className="text-green-500 text-sm select-none">$</span>
                <button
                  onClick={handleEnter}
                  className="text-sm font-mono text-black bg-green-400 px-5 py-1.5 hover:bg-green-300 active:scale-95 transition-all duration-150 tracking-widest"
                >
                  ./enter
                </button>
                <span className="inline-block w-2 h-[1em] bg-green-400 animate-pulse translate-y-[1px]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
