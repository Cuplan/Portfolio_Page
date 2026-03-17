import type { ReactNode } from "react";

interface TermWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function TermWindow({ title, children, className = "" }: TermWindowProps) {
  return (
    <div
      className={`border border-emerald-600/20 dark:border-green-500/20 overflow-hidden shadow-sm dark:shadow-green-500/5 ${className}`}
    >
      {/* Title bar */}
      <div className="bg-stone-200 dark:bg-zinc-900 border-b border-emerald-600/15 dark:border-green-500/15 px-4 py-2 flex items-center gap-2 select-none">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-2 text-emerald-700/50 dark:text-green-500/40 text-xs">{title}</span>
      </div>
      {/* Body */}
      <div className="bg-day-card dark:bg-black">{children}</div>
    </div>
  );
}

export function Prompt({ cmd }: { cmd: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-emerald-600 dark:text-green-600 select-none text-sm">$</span>
      <span className="text-emerald-700 dark:text-green-400 text-sm">{cmd}</span>
    </div>
  );
}
