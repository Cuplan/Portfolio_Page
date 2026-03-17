import ProjectCards from "../components/ProjectCards";
import { useLang } from "../hooks/useLang";

export default function Projects() {
  const { t } = useLang();

  return (
    <section className="min-h-screen bg-day-bg dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">

        {/* Terminal header */}
        <div className="mb-6 border-b border-zinc-600/25 dark:border-green-500/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-day-accent dark:text-green-600 text-sm select-none">$</span>
            <span className="text-zinc-100 dark:text-green-400 text-sm font-bold">
              ls -la ./projects/
            </span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 pl-5 mt-1">
            {t.projects.subtitle}
          </p>
          <p className="text-xs text-day-muted/60 dark:text-green-600/30 pl-5 mt-0.5 select-none">
            total {t.projects.items.length} items
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project) => (
            <ProjectCards
              key={project.repoUrl}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
              image={project.image}
              viewCode={t.projects.viewCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
