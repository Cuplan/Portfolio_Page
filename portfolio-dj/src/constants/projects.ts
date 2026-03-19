interface ProjectMeta {
  tech: string[];
  bullets: string[];
}

export const PROJECT_DETAILS: Record<string, ProjectMeta> = {
  "ml-weka": {
    tech: ["Java 21", "Weka", "Maven", "Machine Learning"],
    bullets: [
      "Loads and preprocesses .arff dataset files",
      "Trains a RandomForest model on the UCI Zoo dataset",
      "Saves and reuses the trained model for future predictions",
      "Interactive console for real-time animal classification",
      "Displays model statistics and performance metrics",
    ],
  },
  "naruto-api": {
    tech: ["React", "JavaScript", "CSS"],
    bullets: [
      "Consumes the dattebayo Naruto REST API",
      "Responsive layout with custom navigation",
      "Modals and client-side form validation",
      "Structured as reusable components",
      "First real React + JavaScript project",
    ],
  },
  "basketball-java": {
    tech: ["Java", "OOP", "Java Swing"],
    bullets: [
      "Three-class architecture: Player, Team, Main",
      "Encapsulation with constructors, getters/setters",
      "ArrayList-based team and player management",
      "Graphical UI built with Java Swing",
      "Received perfect marks as OOP capstone project",
    ],
  },
  "password-manager": {
    tech: ["Python", "Tkinter", "ttkbootstrap"],
    bullets: [
      "Generates strong random passwords",
      "Stores credentials locally in JSON",
      "Three-page UI: home, generator, manager",
      "Darkly theme via ttkbootstrap",
      "In active development — roadmap includes auth and encryption",
    ],
  },
  "steam-laravel": {
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    bullets: [
      "Full transactional website with user authentication",
      "Game catalog with purchases and shopping cart",
      "Database-driven with Laravel migrations and Eloquent ORM",
      "Blade templating for server-side rendering",
      "Final project for Web Development 3",
    ],
  },
  "gesticlean": {
    tech: ["C#", "XAML", ".NET", "WPF"],
    bullets: [
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
    bullets: [
      "Commands: !ping, !fact, !meme, !actu, !whoami, !uptime, !horaire",
      "Anti-spam system with cooldowns, strikes and temp-ban",
      "Auto-logging of all moderation events",
      "ASCII welcome messages for new server members",
      "Scheduled tasks via apscheduler",
      "Deployable on PC or Raspberry Pi, Docker optional",
    ],
  },
};
