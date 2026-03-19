interface Props {
  dbDropped: boolean;
  crashed: boolean;
}

export default function EasterEggs({ dbDropped, crashed }: Props) {
  if (dbDropped) return (
    <div className="fixed inset-0 z-[300] bg-day-bg dark:bg-dj-black font-mono flex items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-1 text-xs">
        <p className="text-red-500 font-bold text-sm mb-4">500: Internal Server Error</p>
        <p className="text-zinc-600">────────────────────────────────────────</p>
        <p className="text-red-400">GET /api/portfolio/data</p>
        <p className="text-red-400">TypeError: Failed to fetch</p>
        <p className="text-red-400 pl-2">net::ERR_CONNECTION_REFUSED</p>
        <div className="pt-2 space-y-0.5">
          <p className="text-zinc-500">Stack trace:</p>
          <p className="text-zinc-600 pl-2">at Portfolio.fetchData (portfolio.js:42:11)</p>
          <p className="text-zinc-600 pl-2">at async renderPage (react-dom.cjs:1847:3)</p>
          <p className="text-zinc-600 pl-2">at async commitRoot (react-dom.cjs:2001:5)</p>
        </div>
        <div className="pt-2 space-y-0.5">
          <p className="text-zinc-500">Database error:</p>
          <p className="text-zinc-600 pl-2">psql: FATAL: database &quot;portfolio&quot; does not exist</p>
          <p className="text-zinc-600 pl-2">(SQLSTATE 3D000)</p>
        </div>
        <p className="text-zinc-600 pt-2">────────────────────────────────────────</p>
        <p className="text-zinc-600 pt-2 animate-pulse">Refresh to restore connection.</p>
      </div>
    </div>
  );

  if (crashed) return (
    <div className="fixed inset-0 z-[300] bg-black font-mono flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-0.5 text-xs">
        <p className="text-white">[    0.000000] Linux version 6.1.0-portfolio (dylan@portfolio)</p>
        <p className="text-red-500">[    0.000137] KERNEL PANIC: not syncing: system ran out of memory</p>
        <p className="text-zinc-400">[    0.000201] CPU: 0 PID: 31337 Comm: node Not tainted</p>
        <p className="text-zinc-400">[    0.000215] rm: removed &apos;/home/dylan-johnson/portfolio&apos;</p>
        <p className="text-zinc-400">[    0.000219] rm: removed &apos;/usr/lib/node_modules/react&apos;</p>
        <p className="text-zinc-400">[    0.000224] rm: removed &apos;/usr/bin/node&apos;</p>
        <p className="text-red-400">[    0.000230] Oops: general protection fault</p>
        <p className="text-red-400">[    0.000245] Out of memory: kill process 31337 (node) score 9001</p>
        <p className="text-red-400">[    0.000259] Killed process 31337 (node) total-vm:1048576kB</p>
        <p className="text-zinc-500">[    0.000260] ---[ end Kernel panic: not syncing ]---</p>
        <p className="text-zinc-600 pt-6 animate-pulse">Refresh to reboot.</p>
      </div>
    </div>
  );

  return null;
}
