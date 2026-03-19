export const ROUTES = [
  { path: "/",        cmd: "cd ~",          label: "home" },
  { path: "/projets", cmd: "cd ./projects", label: "projects" },
  { path: "/contact", cmd: "cd ./contact",  label: "contact" },
] as const;
