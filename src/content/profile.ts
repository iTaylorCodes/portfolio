import type { Profile } from "./types";

export const profile: Profile = {
  name: "Ian Taylor",
  title: "Software Engineer",
  location: "Los Angeles · Remote",
  openToWork: true,
  email: "iTaylorCodes@gmail.com",
  headline: "I build the tools players open in a second tab.",
  intro:
    "Software engineer at Zam, where I've spent the last few years building game tools for Wowhead with React and TypeScript. Before that, I rebuilt Fanbyte from WordPress into a Next.js and Strapi platform.",
  about: [
    "I started out leading customer service teams, which is where I learned that good tools come from caring about the people who use them. I'd always tinkered with code on the side, and in 2021 I made it official through Springboard's Software Engineering Career Track.",
    "In 2022 I joined Zam, a company that runs sites for gaming communities. My first big project was Fanbyte, where I led its rebuild off WordPress onto TypeScript, Next.js, and a headless Strapi CMS.",
    "Since 2023 I've worked on Wowhead, one of the longest-running game databases on the web. I brought React and TypeScript into its large, long-lived codebase and have spent most of my time building interactive tools for World of Warcraft and Diablo IV: talent calculators, build planners, tier lists, and more.",
    "I live in Los Angeles. Off the clock, you'll usually find me out with our golden retriever, Jake the Dog.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/iTaylorCodes",
      handle: "iTaylorCodes",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ianmichaeltaylor",
      handle: "ianmichaeltaylor",
    },
  ],
};
