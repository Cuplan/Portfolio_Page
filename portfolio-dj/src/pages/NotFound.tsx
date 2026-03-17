import { useNavigate, useLocation } from "react-router-dom";
import { TermWindow } from "../components/TermWindow";

const NAV_LINKS = [
  { cmd: "cd ~",          label: "home",     path: "/" },
  { cmd: "cd ./projects", label: "projects", path: "/projets" },
  { cmd: "cd ./contact",  label: "contact",  path: "/contact" },
];

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-day-bg dark:bg-dj-black px-4">
      <div className="max-w-lg w-full">
        <TermWindow title="~/error — bash">
          <div className="p-6 space-y-5 font-mono">

            <div className="text-sm space-y-1">
              <p className="text-red-400">
                bash: {location.pathname}: command not found
              </p>
              <p className="text-day-muted dark:text-zinc-600 text-xs">
                Exit code: 127
              </p>
            </div>

            <div>
              <p className="text-zinc-400 dark:text-zinc-500 text-xs mb-3">
                did you mean one of these?
              </p>
              <ul className="space-y-2">
                {NAV_LINKS.map(({ cmd, label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigate(path)}
                      className="flex items-center gap-3 group text-sm"
                    >
                      <span className="text-day-accent dark:text-green-600 text-xs select-none">$</span>
                      <span className="text-zinc-300 dark:text-zinc-300 group-hover:text-day-accent dark:group-hover:text-green-400 transition-colors">
                        {cmd}
                      </span>
                      <span className="text-day-muted dark:text-zinc-600 text-xs">
                        — {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </TermWindow>
      </div>
    </section>
  );
}
