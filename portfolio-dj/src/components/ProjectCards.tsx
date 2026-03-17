import { FaGithub } from "react-icons/fa";

interface ProjectCardsProps {
  title: string;
  description: string;
  repoUrl: string;
  image: string;
  viewCode: string;
}

export default function ProjectCards({
  title,
  description,
  repoUrl,
  image,
  viewCode,
}: ProjectCardsProps) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col border border-zinc-600/25 dark:border-green-500/15 hover:border-day-accent/50 dark:hover:border-green-400/40 transition-all duration-200 group overflow-hidden bg-day-card dark:bg-zinc-950"
    >
      {/* Terminal title bar */}
      <div className="bg-day-nav dark:bg-zinc-900 border-b border-zinc-600/20 dark:border-green-500/10 px-3 py-1.5 flex items-center gap-1.5 shrink-0 select-none">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-1 text-zinc-500/60 dark:text-green-500/35 text-xs truncate">{title}</span>
      </div>

      {/* Preview image */}
      <img
        src={image}
        alt={`Preview: ${title}`}
        className="w-full h-32 object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-200"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-day-accent dark:text-green-600 text-xs select-none">$</span>
          <h3 className="text-sm font-semibold text-zinc-100 dark:text-green-400 leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-600 dark:text-green-600/30 group-hover:text-day-accent dark:group-hover:text-green-400 transition-colors">
          <FaGithub size={11} />
          <span>{viewCode}</span>
        </div>
      </div>
    </a>
  );
}
