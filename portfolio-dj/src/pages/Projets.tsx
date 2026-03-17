import ProjectCards from "../components/ProjectCards";
import { useLang } from "../hooks/useLang";

export default function Projects() {
  const { t } = useLang();

  return (
    <section className="min-h-screen bg-day-bg dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">

        <h1 className="text-2xl font-bold text-stone-600 dark:text-green-400 mb-1">
          {t.projects.title}
        </h1>
        <p className="text-sm text-stone-500 dark:text-zinc-500 mb-6">
          {t.projects.subtitle}
        </p>

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
