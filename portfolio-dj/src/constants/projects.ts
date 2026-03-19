interface ProjectMeta {
  tech: string[];
  fr: string[];
  en: string[];
}

export const PROJECT_DETAILS: Record<string, ProjectMeta> = {
  "ml-weka": {
    tech: ["Java 21", "Weka", "Maven", "Machine Learning"],
    fr: [
      "Charge et prétraite des fichiers de données .arff",
      "Entraîne un modèle RandomForest sur le dataset UCI Zoo",
      "Sauvegarde et réutilise le modèle entraîné",
      "Console interactive pour classifier des animaux en temps réel",
      "Affiche les statistiques et métriques de performance du modèle",
    ],
    en: [
      "Loads and preprocesses .arff dataset files",
      "Trains a RandomForest model on the UCI Zoo dataset",
      "Saves and reuses the trained model for future predictions",
      "Interactive console for real-time animal classification",
      "Displays model statistics and performance metrics",
    ],
  },
  "naruto-api": {
    tech: ["React", "JavaScript", "CSS"],
    fr: [
      "Consomme l'API REST Naruto dattebayo",
      "Layout responsive avec navigation personnalisée",
      "Modales et validation de formulaires côté client",
      "Structuré en composants réutilisables",
      "Premier vrai projet React + JavaScript",
    ],
    en: [
      "Consumes the dattebayo Naruto REST API",
      "Responsive layout with custom navigation",
      "Modals and client-side form validation",
      "Structured as reusable components",
      "First real React + JavaScript project",
    ],
  },
  "basketball-java": {
    tech: ["Java", "OOP", "Java Swing"],
    fr: [
      "Architecture trois classes : Player, Team, Main",
      "Encapsulation avec constructeurs, getters/setters",
      "Gestion des données d'équipe via ArrayList",
      "Interface graphique en Java Swing",
      "Projet synthèse POO — note parfaite",
    ],
    en: [
      "Three-class architecture: Player, Team, Main",
      "Encapsulation with constructors, getters/setters",
      "ArrayList-based team and player management",
      "Graphical UI built with Java Swing",
      "OOP capstone project — perfect grade",
    ],
  },
  "password-manager": {
    tech: ["Python", "Tkinter", "ttkbootstrap"],
    fr: [
      "Génère des mots de passe aléatoires sécurisés",
      "Stockage local des identifiants en JSON",
      "Interface à trois pages : accueil, générateur, gestionnaire",
      "Thème Darkly via ttkbootstrap",
      "En développement actif — authentification et chiffrement prévus",
    ],
    en: [
      "Generates strong random passwords",
      "Stores credentials locally in JSON",
      "Three-page UI: home, generator, manager",
      "Darkly theme via ttkbootstrap",
      "In active development — auth and encryption on the roadmap",
    ],
  },
  "steam-laravel": {
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    fr: [
      "Site transactionnel complet avec authentification utilisateur",
      "Catalogue de jeux avec achat et panier",
      "Base de données via migrations Laravel et Eloquent ORM",
      "Templates Blade pour le rendu côté serveur",
      "Projet final du cours Développement Web 3",
    ],
    en: [
      "Full transactional website with user authentication",
      "Game catalog with purchases and shopping cart",
      "Database-driven with Laravel migrations and Eloquent ORM",
      "Blade templating for server-side rendering",
      "Final project for Web Development 3",
    ],
  },
  "gesticlean": {
    tech: ["C#", "XAML", ".NET", "WPF"],
    fr: [
      "CRUD complet sur Employés, Clients, Projets, Assignations",
      "Pattern Singleton pour les opérations de base de données",
      "Compte admin avec mot de passe haché et contrôle d'accès par rôle",
      "Export CSV des données de projets",
      "IDs et numéros de projet auto-générés",
      "Empêche l'assignation d'un employé sur deux projets simultanés",
      "Projet d'équipe : Dylan Johnson & Samuel Lacoursière",
    ],
    en: [
      "Full CRUD on Employees, Clients, Projects, Assignments",
      "Singleton pattern for centralized database operations",
      "Admin account with hashed password and role-based access",
      "CSV export of project data",
      "Auto-generated IDs and project numbers",
      "Prevents double-booking employees on concurrent projects",
      "Team project: Dylan Johnson & Samuel Lacoursière",
    ],
  },
  "clanker": {
    tech: ["Python", "discord.py", "apscheduler", "Raspberry Pi"],
    fr: [
      "Commandes : !ping, !fact, !meme, !actu, !whoami, !uptime, !horaire",
      "Système anti-spam avec cooldowns, strikes et ban temporaire",
      "Journalisation automatique des événements de modération",
      "Messages de bienvenue ASCII pour les nouveaux membres",
      "Tâches planifiées via apscheduler",
      "Déployable sur PC ou Raspberry Pi, Docker optionnel",
    ],
    en: [
      "Commands: !ping, !fact, !meme, !actu, !whoami, !uptime, !horaire",
      "Anti-spam system with cooldowns, strikes and temp-ban",
      "Auto-logging of all moderation events",
      "ASCII welcome messages for new server members",
      "Scheduled tasks via apscheduler",
      "Deployable on PC or Raspberry Pi, Docker optional",
    ],
  },
};
