import type { Role, SkillGroup } from "./types";

export const roles: Role[] = [
  {
    company: "Zam",
    title: "Software Engineer",
    period: "2022 – Present",
    summary: "Zam builds and runs websites for gaming communities.",
    focus: [
      {
        name: "Wowhead",
        period: "2023 – Present",
        detail: "Game tools and frontend work. Brought React and TypeScript into the codebase.",
      },
      {
        name: "Fanbyte",
        period: "2022 – 2023",
        detail: "Rebuilt the site from WordPress with TypeScript, Next.js, and Strapi.",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Responsive UI", "Accessibility"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Strapi", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    label: "Tooling",
    items: ["Git", "Vite", "Webpack", "Claude Code"],
  },
];
