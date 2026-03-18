import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useLang } from "../hooks/useLang";
import { useCRT } from "../hooks/useCRT";

interface HistoryEntry {
  type: "input" | "output" | "error";
  lines: string[];
}

const AVAILABLE_COMMANDS = [
  "help", "whoami", "skills", "ls", "ls projects/",
  "cat bio.txt", "contact", "neofetch", "man dylan",
  "crt", "clear", "pwd", "date",
  "cd ~", "cd ./projects", "cd ./contact",
];

const WELCOME: HistoryEntry = {
  type: "output",
  lines: [
    'Portfolio Terminal v2.0  |  type "help" for commands',
    '─────────────────────────────────────────────────────',
  ],
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDropDB: () => void;
  onCrash: () => void;
}

export default function InteractiveTerminal({ isOpen, onClose, onDropDB, onCrash }: Props) {
  const { t } = useLang();
  const { toggleCRT } = useCRT();
  const navigate = useNavigate();

  const [history, setHistory] = useState<HistoryEntry[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus on open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 60);
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const execCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();

      if (cmd === "") {
        setHistory((prev) => [...prev, { type: "input", lines: [""] }]);
        setInput("");
        return;
      }

      setCmdHistory((prev) => [raw, ...prev]);
      setCmdIndex(-1);

      const inputEntry: HistoryEntry = { type: "input", lines: [raw] };
      let output: HistoryEntry;

      if (cmd === "clear") {
        setHistory([WELCOME]);
        setInput("");
        return;
      }

      switch (true) {
        case cmd === "help":
          output = {
            type: "output",
            lines: [
              "▸ whoami         # about me",
              "▸ skills         # key skills",
              "▸ ls             # list projects",
              "▸ cat bio.txt    # read bio",
              "▸ contact        # contact info",
              "▸ neofetch       # system info",
              "▸ man dylan      # the manual",
              "▸ cd ~           # go home",
              "▸ cd ./projects  # go to projects",
              "▸ cd ./contact   # go to contact",
              "▸ crt            # toggle CRT effect",
              "▸ clear          # clear terminal",
              "",
              "⚠  WARNING — do NOT run the following:",
              "   rm -rf /   DROP DATABASE portfolio;   :(){ :|:& };:",
              "   (we are not responsible for any consequences)",
            ],
          };
          break;

        case cmd === "whoami":
          output = {
            type: "output",
            lines: [
              "Dylan Johnson",
              `role:   ${t.home.typewriterWords[0]}`,
              "age:    22",
              "lang:   FR / EN",
            ],
          };
          break;

        case cmd === "skills":
          output = {
            type: "output",
            lines: [
              `languages:   Python · Java · C# · JavaScript · SQL`,
              `frameworks:  React · pandas · scikit-learn · Weka`,
              `tools:       ${t.home.skills.aiTools}`,
              `soft skills: ${t.home.skills.softSkills}`,
            ],
          };
          break;

        case cmd === "ls" ||
          cmd === "ls projects/" ||
          cmd === "ls -la" ||
          cmd === "ls -la ./projects/":
          output = {
            type: "output",
            lines: [
              "drwxr-xr-x  project-ml-java/         [Java · Weka]",
              "drwxr-xr-x  naruto-api-manager/       [React · JS]",
              "drwxr-xr-x  basketball-manager/       [Java · OOP]",
              "drwxr-xr-x  password-manager/         [Python · WIP]",
            ],
          };
          break;

        case cmd === "cat bio.txt":
          output = { type: "output", lines: [t.home.bio] };
          break;

        case cmd === "contact":
          output = {
            type: "output",
            lines: [
              "GitHub:   github.com/Cuplan",
              "LinkedIn: linkedin.com/in/dylan-johnson-447681280",
              "Email:    johnsondylan14@gmail.com",
              "Phone:    (873) 307-0499",
            ],
          };
          break;

        case cmd === "neofetch":
          output = {
            type: "output",
            lines: [
              "       ██████████         dylan@portfolio",
              "      ████░░░░████        ─────────────────────",
              "     ████░░░░░░████       OS:       Portfolio v2.0",
              "    ████░░░░░░░░████      Shell:    zsh + React",
              "     ████░░░░░░████       Stack:    React · Python · Java",
              "      ████░░░░████        Age:      22",
              "       ██████████         Status:   ● open to work",
              "                          Location: Québec, CA",
              "                          Coffee:   ████████░░ 80%",
              "                          Build:    passing ✓",
            ],
          };
          break;

        case cmd === "man dylan":
          output = {
            type: "output",
            lines: [
              "NAME",
              "    dylan-johnson — CS student, developer",
              "",
              "SYNOPSIS",
              "    dylan [--hire] [--contact] [--collaborate]",
              "",
              "DESCRIPTION",
              "    Passionate about AI, data science, and building",
              "    things that actually work. Fast learner. Team player.",
              "    Adapts quickly to new environments and stacks.",
              "",
              "BUGS",
              "    Occasionally drinks too much coffee.",
              "    Report issues to: johnsondylan14@gmail.com",
            ],
          };
          break;

        case cmd === "pwd":
          output = { type: "output", lines: ["/home/dylan-johnson/portfolio"] };
          break;

        case cmd === "date":
          output = { type: "output", lines: [new Date().toString()] };
          break;

        case cmd.startsWith("echo "):
          output = { type: "output", lines: [raw.trim().slice(5)] };
          break;

        case cmd === "cd ~" || cmd === "cd /" || cmd === "cd":
          output = { type: "output", lines: ["→ /home"] };
          setHistory((prev) => [...prev, inputEntry, output]);
          setInput("");
          navigate("/");
          onClose();
          return;

        case cmd === "cd ./projects" ||
          cmd === "cd /projets" ||
          cmd === "cd ./projets":
          output = { type: "output", lines: ["→ /projects"] };
          setHistory((prev) => [...prev, inputEntry, output]);
          setInput("");
          navigate("/projets");
          onClose();
          return;

        case cmd === "cd ./contact" || cmd === "cd /contact":
          output = { type: "output", lines: ["→ /contact"] };
          setHistory((prev) => [...prev, inputEntry, output]);
          setInput("");
          navigate("/contact");
          onClose();
          return;

        case cmd === "crt":
          toggleCRT();
          output = { type: "output", lines: ["CRT effect toggled."] };
          break;

        case cmd === "sudo" || cmd.startsWith("sudo "):
          output = { type: "error", lines: ["Permission denied. Nice try."] };
          break;

        case cmd === "drop database portfolio;" || cmd === "drop database portfolio":
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "output",
              lines: [
                "psql (14.2)  —  connected to: portfolio",
                "DROP DATABASE portfolio;",
                "> Dropping indexes...                [OK]",
                "> DELETE FROM projects;              (4 rows deleted)",
                "> DELETE FROM skills;                (11 rows deleted)",
                "> DELETE FROM testimonials;          (3 rows deleted)",
                "> DROP TABLE experiences;            [OK]",
                '> Database "portfolio" dropped successfully.',
                "Connection terminated.",
              ],
            },
          ]);
          setInput("");
          setTimeout(() => { onClose(); onDropDB(); }, 1200);
          return;

        case cmd === "rm -rf /" ||
          cmd === "rm -rf /*" ||
          cmd === "rm -rf" ||
          cmd === ":(){ :|:& };:" ||
          cmd.startsWith("del /f") ||
          cmd.startsWith("format c"):
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "error",
              lines: [
                "rm: removing '/home/dylan-johnson/portfolio/node_modules'...",
                "rm: removing '/home/dylan-johnson/portfolio/src'...",
                "rm: removing '/usr/lib/react'...",
                "rm: removing '/usr/bin/node'...",
                "Segmentation fault (core dumped)",
                "kill: sending signal to process group failed",
              ],
            },
          ]);
          setInput("");
          setTimeout(() => { onClose(); onCrash(); }, 1000);
          return;

        case cmd === "exit" || cmd === "quit":
          onClose();
          return;

        default:
          output = {
            type: "error",
            lines: [
              `bash: ${cmd}: command not found`,
              `type "help" for available commands`,
            ],
          };
      }

      setHistory((prev) => [...prev, inputEntry, output]);
      setInput("");
    },
    [t, navigate, toggleCRT, onClose, onDropDB, onCrash]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(idx);
      setInput(cmdHistory[idx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(cmdIndex - 1, -1);
      setCmdIndex(idx);
      setInput(idx === -1 ? "" : cmdHistory[idx]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = AVAILABLE_COMMANDS.find(
        (c) => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase()
      );
      if (match) setInput(match);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm font-mono"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-2xl mx-3 shadow-2xl shadow-green-500/10">
        {/* Title bar */}
        <div className="bg-day-nav dark:bg-zinc-900 border border-zinc-600/40 dark:border-green-500/30 border-b-0 px-4 py-2 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-zinc-400/60 dark:text-green-500/40 text-xs">
              ~/dylan-johnson — interactive
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-300 transition-colors"
          >
            <FaTimes size={12} />
          </button>
        </div>

        {/* Body */}
        <div
          ref={scrollRef}
          className="bg-day-card dark:bg-black border border-zinc-600/40 dark:border-green-500/30 border-t-0 h-64 sm:h-80 overflow-y-auto p-4 space-y-0.5 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="leading-5">
              {entry.type === "input" && (
                <div className="flex items-center gap-2">
                  <span className="text-day-accent dark:text-green-500 text-xs select-none">$</span>
                  <span className="text-zinc-100 dark:text-zinc-100 text-xs">{entry.lines[0]}</span>
                </div>
              )}
              {(entry.type === "output" || entry.type === "error") &&
                entry.lines.map((line, j) => (
                  <div
                    key={j}
                    className={`text-xs pl-4 ${
                      entry.type === "error"
                        ? "text-red-400"
                        : line === ""
                        ? "h-3"
                        : "text-zinc-300 dark:text-zinc-300"
                    }`}
                  >
                    {line}
                  </div>
                ))}
            </div>
          ))}

          {/* Active input line */}
          <div className="flex items-center gap-2">
            <span className="text-day-accent dark:text-green-500 text-xs select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-zinc-100 dark:text-zinc-100 text-xs focus:outline-none caret-day-accent dark:caret-green-400"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Footer hint */}
        <div className="bg-day-nav dark:bg-zinc-900/80 border border-zinc-600/40 dark:border-green-500/30 border-t-0 px-4 py-1 flex gap-4 text-[10px] text-zinc-600 dark:text-zinc-700 select-none">
          <span>↑↓ history</span>
          <span>Tab complete</span>
          <span>Esc close</span>
        </div>
      </div>
    </div>
  );
}
