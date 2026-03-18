export type Lang = "fr" | "en";

const fr = {
  navbar: {
    brand: "Dylan Johnson – Développeur",
    home: "Accueil",
    projects: "Projets",
    contact: "Contact",
  },
  footer: {
    madeWith: "Fait par Dylan Johnson @",
  },
  home: {
    typewriterWords: ["Salut, moi c'est Dylan Johnson !", " Hi, I'm Dylan Johnson!"],
    bio: "Étudiant en informatique passionné par l'IA et la data science. Je combine logique, créativité et curiosité pour résoudre des problèmes techniques efficacement et rapidement. Grâce à mes expériences, je peux m'adapter à n'importe quelle situation et apprendre très rapidement. Motivé pour le travail, je suis ouvert à toutes opportunités.",
    skillsTitle: "Compétences clés",
    skills: {
      ml: "Machine Learning (Weka, pandas, scikit-learn)",
      aiTools: "Outils IA (Claude, ChatGPT, Cursor…)",
      excel: "Excel & bases de données",
      teamManagement: "Gestion d'équipe",
      softSkills: "Polyvalence, écoute, esprit d'équipe",
    },
    experienceTitle: "Expériences pro",
    experiences: [
      "Transport Valois — Stage en informatique",
      "Bonbons Mélangés — Responsable IT et site web",
      "Cégep de Trois-Rivières — Tuteur en programmation",
      "PTW — Testeur de jeux vidéo",
      "Ville de Montréal — Col blanc",
      "Bénévolat — Galerie d'art du Parc",
    ],
    testimonialsTitle: "Ce qu'on dit de moi",
    testimonials: [
      {
        citation: "Toujours prêt à apprendre et à livrer du travail de qualité, même sous pression.",
        name: "Annie Thivierge",
        title: "CEO",
        company: "Bonbons Mélangés",
      },
      {
        citation: "Dylan est un bénévole fiable et efficace.",
        name: "Louise Nicolas",
        title: "Directrice générale et artistique",
        company: "Galerie d'art du Parc",
      },
      {
        citation: "Dylan s'est distingué par son sérieux, son engagement et une attitude exemplaire.",
        name: "Maxime Faucher",
        title: "Enseignant",
        company: "Cégep de Trois-Rivières",
      },
    ],
  },
  projects: {
    title: "Mes projets",
    subtitle: "Un aperçu de ce que j'ai construit — cliquez pour voir le code.",
    viewCode: "Voir le code",
    items: [
      {
        title: "Projet Machine Learning en Java",
        description: "Modèle prédictif simple avec la bibliothèque Weka. Base du machine learning en Java.",
        repoUrl: "https://github.com/Cuplan/projetML.git",
        image: "/weka.png",
      },
      {
        title: "Gestion d'API Naruto (Projet d'école)",
        description: "Site gérant l'API dattebayo. Premier vrai projet en React + JavaScript.",
        repoUrl: "https://github.com/Cuplan/ProjetDevWeb2.git",
        image: "api-naru.png",
      },
      {
        title: "Gestion d'équipe de basket en Java",
        description: "Projet synthèse POO. Gestion d'équipe de basketball et UX en Java Swing.",
        repoUrl: "https://github.com/Cuplan/BasketTeam_Poo.git",
        image: "basket.png",
      },
      {
        title: "Gestionnaire de mots de passe (Python)",
        description: "Connexions, base d'utilisateurs, génération de MDP, stockage sécurisé. Ttkinter. — EN CONSTRUCTION",
        repoUrl: "https://github.com/Cuplan/Mdp_Gestionnaire.git",
        image: "gestionmdp.jpg",
      },
    ],
  },
  contact: {
    title: "Me contacter",
    namePlaceholder: "Nom",
    emailPlaceholder: "Courriel",
    messagePlaceholder: "Ton message...",
    send: "Envoyer",
    validation: "Merci de remplir tous les champs avant d'envoyer.",
    subjectPrefix: "Message de",
    linksTitle: "Liens importants",
    downloadCV: "Télécharger mon C.V",
  },
};

const en: typeof fr = {
  navbar: {
    brand: "Dylan Johnson – Developer",
    home: "Home",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    madeWith: "Made by Dylan Johnson @",
  },
  home: {
    typewriterWords: ["Hi, I'm Dylan Johnson!", " Salut, c'est Dylan Johnson !"],
    bio: "Computer science student passionate about AI and data science. I combine logic, creativity, and curiosity to solve technical problems efficiently and quickly. Thanks to my experience, I can adapt to any situation and learn very fast. Motivated and driven, I'm open to all opportunities.",
    skillsTitle: "Key Skills",
    skills: {
      ml: "Machine Learning (Weka, pandas, scikit-learn)",
      aiTools: "AI Tools (Claude, ChatGPT, Cursor…)",
      excel: "Excel & Databases",
      teamManagement: "Team Management",
      softSkills: "Versatility, listening, teamwork",
    },
    experienceTitle: "Work Experience",
    experiences: [
      "Transport Valois — IT Internship",
      "Bonbons Mélangés — IT & Web Manager",
      "Cégep de Trois-Rivières — Programming Tutor",
      "PTW — Video Game Tester",
      "Ville de Montréal — White Collar Worker",
      "Volunteer — Galerie d'art du Parc",
    ],
    testimonialsTitle: "What people say",
    testimonials: [
      {
        citation: "Always ready to learn and deliver quality work, even under pressure.",
        name: "Annie Thivierge",
        title: "CEO",
        company: "Bonbons Mélangés",
      },
      {
        citation: "Dylan is a reliable and efficient volunteer.",
        name: "Louise Nicolas",
        title: "General & Artistic Director",
        company: "Galerie d'art du Parc",
      },
      {
        citation: "Dylan stood out for his seriousness, commitment, and exemplary attitude.",
        name: "Maxime Faucher",
        title: "Teacher",
        company: "Cégep de Trois-Rivières",
      },
    ],
  },
  projects: {
    title: "My Projects",
    subtitle: "A look at what I've built — click to see the code.",
    viewCode: "View code",
    items: [
      {
        title: "Machine Learning Project in Java",
        description: "Simple predictive model using the Weka library. ML fundamentals in Java.",
        repoUrl: "https://github.com/Cuplan/projetML.git",
        image: "/weka.png",
      },
      {
        title: "Naruto API Manager (School Project)",
        description: "Web app using the dattebayo API. My first real React + JavaScript project.",
        repoUrl: "https://github.com/Cuplan/ProjetDevWeb2.git",
        image: "api-naru.png",
      },
      {
        title: "Basketball Team Manager in Java",
        description: "OOP capstone project. Basketball team management and UX in Java Swing.",
        repoUrl: "https://github.com/Cuplan/BasketTeam_Poo.git",
        image: "basket.png",
      },
      {
        title: "Password Manager (Python)",
        description: "User login, database, password generation, secure storage. Ttkinter. — WORK IN PROGRESS",
        repoUrl: "https://github.com/Cuplan/Mdp_Gestionnaire.git",
        image: "gestionmdp.jpg",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message...",
    send: "Send",
    validation: "Please fill in all fields before sending.",
    subjectPrefix: "Message from",
    linksTitle: "Important Links",
    downloadCV: "Download my Resume",
  },
};

export const translations = { fr, en };
export type Translations = typeof fr;
