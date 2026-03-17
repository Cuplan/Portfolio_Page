import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  return (
    <section className="min-h-screen bg-stone-50 dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">

        <h1 className="text-2xl font-bold text-stone-800 dark:text-green-400 mb-1">
          Mes projets
        </h1>
        <p className="text-sm text-stone-500 dark:text-zinc-500 mb-6">
          Un aperçu de ce que j'ai construit — cliquez pour voir le code.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCards
            title="Projet Machine Learning en Java"
            description="Modèle prédictif simple avec la bibliothèque Weka. Base du machine learning en Java."
            repoUrl="https://github.com/Cuplan/projetML.git"
            image="/weka.png"
          />
          <ProjectCards
            title="Gestion d'API Naruto (Projet d'école)"
            description="Site gérant l'API dattebayo. Premier vrai projet en React + JavaScript."
            repoUrl="https://github.com/Cuplan/ProjetDevWeb2.git"
            image="api-naru.png"
          />
          <ProjectCards
            title="Gestion d'équipe de basket en Java"
            description="Projet synthèse POO. Gestion d'équipe de basketball et UX en Java Swing."
            repoUrl="https://github.com/Cuplan/BasketTeam_Poo.git"
            image="basket.png"
          />
          <ProjectCards
            title="Gestionnaire de mots de passe (Python)"
            description="Connexions, base d'utilisateurs, génération de MDP, stockage sécurisé. Ttkinter. — EN CONSTRUCTION"
            repoUrl="https://github.com/Cuplan/Mdp_Gestionnaire.git"
            image="gestionmdp.jpg"
          />
        </div>
      </div>
    </section>
  );
}
