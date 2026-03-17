
interface ProjectCardsProps {
  title: string;
  description: string;
  repoUrl: string;
  image: string;
}

export default function ProjectCards({
  title,
  description,
  repoUrl,
  image,
}: ProjectCardsProps) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
      block
      bg-white dark:bg-dj-card
      text-stone-900 dark:text-zinc-100
      border border-stone-200 dark:border-zinc-800
      p-4 sm:p-6
      rounded-xl
      shadow-sm hover:shadow-md dark:shadow-none
      hover:scale-[1.03]
      transition-all duration-300
      w-full
      max-w-md
      mx-auto ">
        
      <img
        src={image}
        alt={`Aperçu de ${title}`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-emerald-700 dark:text-green-400">
        {title}
      </h3>

      <p className="text-stone-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </a>
  );
}
