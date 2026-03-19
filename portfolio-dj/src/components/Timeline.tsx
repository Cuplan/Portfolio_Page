import { useLang } from "../hooks/useLang";
import { TermWindow, Prompt } from "./TermWindow";

const TAG_STYLES: Record<string, string> = {
  edu:       "text-cyan-400 border-cyan-400/40",
  work:      "text-day-accent dark:text-green-400 border-day-accent/30 dark:border-green-500/30",
  volunteer: "text-yellow-400 border-yellow-400/40",
};

export default function Timeline() {
  const { t } = useLang();

  return (
    <TermWindow title="~/timeline.log">
      <div className="px-6 py-4">
        <Prompt cmd="cat timeline.log" />
        <div className="pl-5 mt-3">
          {t.timeline.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              {/* Dot + connecting line */}
              <div className="flex flex-col items-center pt-1">
                <div className="w-2 h-2 rounded-full bg-day-accent dark:bg-green-500 shrink-0" />
                {i < t.timeline.items.length - 1 && (
                  <div className="w-px flex-grow bg-zinc-700/60 dark:bg-green-500/15 my-1" />
                )}
              </div>

              {/* Entry content */}
              <div className="pb-5">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span className="text-xs text-day-muted dark:text-zinc-500 font-mono tabular-nums">
                    {item.period}
                  </span>
                  <span className={`text-[10px] px-1.5 py-px border font-mono ${TAG_STYLES[item.type] ?? TAG_STYLES.work}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm font-semibold text-zinc-100 dark:text-green-400 leading-snug">
                  {item.org}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TermWindow>
  );
}
