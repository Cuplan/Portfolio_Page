type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl: string;
};

export default function ProjectCard({ title, description, repoUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold text-indigo-600">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded" >
        Voir sur GitHub
      </a>
    </div>
  );
}
