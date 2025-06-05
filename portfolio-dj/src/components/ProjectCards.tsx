import React from "react";

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
  image
}: ProjectCardsProps) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block 
        bg-yellow-100 dark:bg-gray-700 
        text-gray-900 dark:text-gray-100 
        p-6 rounded-xl 
        shadow-md dark:shadow-none 
        hover:shadow-lg 
        transition-all duration-200
      "
    >
      <img
        src={image}
        alt={`Aperçu de ${title}`}
        className=" w-full h-40 object-cover rounded-md mb-4 mx-auto"
      />

      <h3 className="text-xl font-semibold mb-2 text-amber-800 dark:text-amber-200">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
        {description}
      </p>
    </a>
  );
}
