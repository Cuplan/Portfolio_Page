// src/pages/Projects.tsx
import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  return (
    <section
      className="
        flex flex-col 
        min-h-screen 
        bg-yellow-50 dark:bg-gray-800 
        transition-colors duration-300
      "
    >
      {/* 
        Pour que la grille « p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 » ne colle pas 
        directement au haut de la page, tu peux ajouter un padding ou un margin-top ici.
      */}
      <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCards
          title="Projet Machine Learning en Java"
          description="Un modèle prédictif très simple sur Java utilisant la bibliothèque Weka.
            Permet de tester rapidement la base du machine learning en Java."
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
          description="Projet synthèse de Prog Orienté Objet. Gestion d'équipe de basketball et UX en Java Swing."
          repoUrl="https://github.com/Cuplan/BasketTeam_Poo.git"
          image="basket.png"
        />
      </div>

      {/* 
        Pour qu’on voie le footer tout en bas sur ce fond jaune, on peut mettre un 
        <div className="flex-grow" /> juste avant le footer dans App.tsx, 
        ou laisser simplement la section en min-h-screen (elle couvrira déjà tout l’écran).
      */}
    </section>
  );
}
