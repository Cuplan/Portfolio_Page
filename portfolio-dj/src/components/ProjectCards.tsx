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
      className="
        flex flex-col
        bg-day-card dark:bg-dj-card
        text-stone-700 dark:text-zinc-100
        border border-stone-200 dark:border-zinc-800
        hover:border-emerald-400 dark:hover:border-green-600
        rounded-xl
        shadow-sm hover:shadow-md dark:shadow-none
        hover:scale-[1.02]
        transition-all duration-200
        overflow-hidden
      "
    >
      <img
        src={image}
        alt={`Aperçu de ${title}`}
        className="w-full h-36 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow gap-1">
        <h3 className="text-base font-semibold text-emerald-700 dark:text-green-400 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-stone-500 dark:text-zinc-400 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex items-center gap-1.5 mt-3 text-xs text-stone-400 dark:text-zinc-600">
          <FaGithub size={12} />
          <span>{viewCode}</span>
        </div>
      </div>
    </a>
  );
}
