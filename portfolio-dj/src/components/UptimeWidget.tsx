import { useState, useEffect } from "react";
import { TermWindow, Prompt } from "./TermWindow";

export default function UptimeWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  return (
    <TermWindow title="~/status">
      <div className="px-6 py-4">
        <Prompt cmd="uptime" />
        <div className="pl-5 space-y-3">
          <p className="text-xs text-day-muted dark:text-zinc-600 select-none">
            {hh}:{mm}:{ss} up 28 years  |  load avg: 0.42, 0.38, 0.31
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1.5 text-xs">
            <div className="flex gap-3">
              <span className="text-day-accent dark:text-green-600 w-16 shrink-0 select-none">status</span>
              <span className="text-zinc-300 dark:text-zinc-300 flex items-center gap-1.5">
                <span className="text-green-400 animate-pulse">●</span>
                open to work
              </span>
            </div>

            <div className="flex gap-3">
              <span className="text-day-accent dark:text-green-600 w-16 shrink-0 select-none">location</span>
              <span className="text-zinc-300 dark:text-zinc-300">Trois-Rivières, QC, CA</span>
            </div>

            <div className="flex gap-3 sm:col-span-2">
              <span className="text-day-accent dark:text-green-600 w-16 shrink-0 select-none">stack</span>
              <span className="text-zinc-300 dark:text-zinc-300">React · Python · Java · C# · ML</span>
            </div>

            <div className="flex gap-3 sm:col-span-2">
              <span className="text-day-accent dark:text-green-600 w-16 shrink-0 select-none">coffee</span>
              <span>
                <span className="text-day-accent dark:text-green-400">████████</span>
                <span className="text-zinc-600 dark:text-zinc-700">░░</span>
                <span className="text-zinc-400 ml-1.5">80%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </TermWindow>
  );
}
