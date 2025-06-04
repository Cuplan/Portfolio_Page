import ProjectCards from '../components/ProjectCards';

export default function Projects() {
  return (
    <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCards
        title="Projet Machine Learning en Java"
        description="Un modèle prédictif très simple sur Java utilisant la bibliothèque Weka.
        Permet de tester rapidement la base du machine learning en Java. "
        repoUrl="https://github.com/Cuplan/projetML.git" />

      <ProjectCards
        title="Gestion d'API Naruto (Projet d'école)"
        description="Site gérant l'API dattebayo. Premier vrai projet en React + javascript."
        repoUrl="https://github.com/Cuplan/ProjetDevWeb2.git" />

         <ProjectCards
        title="Gestion d'équipe de basket en Java"
        description=" Projet synthèse de Prog Orienté Objet. Gestion d'équipe de basketball et UIX en Java Swing"
        repoUrl="https://github.com/Cuplan/BasketTeam_Poo.git" />
    </div>
  );
}
