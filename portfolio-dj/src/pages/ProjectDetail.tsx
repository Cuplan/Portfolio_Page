import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { useLang } from "../hooks/useLang";
import { TermWindow, Prompt } from "../components/TermWindow";
import { PROJECT_DETAILS } from "../constants/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();
  const navigate = useNavigate();

  const project = t.projects.items.find((p) => p.slug === slug);
  const meta = slug ? PROJECT_DETAILS[slug] : undefined;

  if (!project || !meta) {
    return (
      <section className="min-h-screen bg-day-bg dark:bg-dj-black flex items-center justify-center font-mono">
        <div className="text-sm space-y-2">
          <p className="text-red-400">bash: {slug}: project not found</p>
          <button
            onClick={() => navigate("/projets")}
            className="text-day-accent dark:text-green-400 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            $ cd ../projects
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-day-bg dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <TermWindow title={`~/projects/${slug}`}>
          <div className="p-4 sm:p-6 space-y-6">

            {/* Back */}
            <button
              onClick={() => navigate("/projets")}
              aria-label="Retour aux projets"
              className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-600 hover:text-day-accent dark:hover:text-green-400 transition-colors"
            >
              <FaArrowLeft size={10} />
              cd ../
            </button>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-48 object-cover opacity-80"
            />

            {/* Title */}
            <div>
              <Prompt cmd={`cat ${slug}/README.md`} />
              <h1 className="text-lg font-bold text-zinc-100 dark:text-green-400 pl-5 mt-1 leading-snug">
                {project.title}
              </h1>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pl-5">
              {meta.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 border border-day-accent/30 dark:border-green-500/30 text-day-accent dark:text-green-400 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div>
              <Prompt cmd="cat description.txt" />
              <p className="text-sm text-zinc-300 dark:text-zinc-300 pl-5 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* README bullets */}
            <div>
              <Prompt cmd="cat features.txt" />
              <ul className="space-y-1.5 pl-5">
                {meta.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400 dark:text-zinc-400">
                    <span className="text-day-accent/50 dark:text-green-600/40 select-none shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub link */}
            <div className="pt-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le code source de ${project.title} sur GitHub`}
                className="inline-flex items-center gap-2 text-sm border border-zinc-600/40 dark:border-green-500/25 text-zinc-300 dark:text-green-400 px-4 py-1.5 hover:border-day-accent dark:hover:bg-green-500/10 hover:text-day-accent transition-colors duration-150"
              >
                <FaGithub size={12} />
                {t.projects.viewCode}
              </a>
            </div>

          </div>
        </TermWindow>
      </div>
    </section>
  );
}
