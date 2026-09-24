import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "wowhead",
    name: "Wowhead",
    role: "Software Engineer",
    period: "2023 – Present",
    href: "https://www.wowhead.com",
    summary:
      "Interactive game tools for Wowhead, the database and guide site for World of Warcraft and other Blizzard games.",
    highlights: [
      "Introduced React and TypeScript into Wowhead's long-lived codebase. About 70% of the site now runs on React, and that share keeps growing.",
      "Built Wowhead's player-housing tools: community build sharing with a full build editor, a decor database, and curated decor collections.",
      "Build and maintain interactive planners and calculators, with shareable links so players can post and compare builds.",
    ],
    stats: [
      { value: "~70%", label: "of Wowhead now built in React" },
      { value: "690+", label: "housing builds shared by players" },
      { value: "2,200+", label: "decor items in the database" },
    ],
    stack: ["React", "TypeScript", "JavaScript", "CSS"],
    tools: [
      {
        name: "Talent Calculator",
        game: "World of Warcraft",
        description: "Plan class and spec talent builds, then share them with a link.",
        href: "https://www.wowhead.com/talent-calc",
      },
      {
        name: "Build Planner",
        game: "Diablo IV",
        description: "Plan a full Diablo IV character build and share it.",
        href: "https://www.wowhead.com/diablo-4/build-planner",
      },
      {
        name: "Housing Builds",
        game: "World of Warcraft",
        description:
          "A community gallery of player-housing builds, plus the editor players use to publish their own.",
        href: "https://www.wowhead.com/housing-gallery",
      },
      {
        name: "Decor Gallery",
        game: "World of Warcraft",
        description: "Browse and filter every housing decor item, with 3D previews.",
        href: "https://www.wowhead.com/decor-gallery",
      },
      {
        name: "Decor Collections",
        game: "World of Warcraft",
        description:
          "Players curate and share lists of decor, from themed sets to farming guides.",
        href: "https://www.wowhead.com/decor-collections",
      },
      {
        name: "Tier List Creator",
        game: "WoW Forever",
        description:
          "Drag-and-drop tier lists for specs, exportable as a link or an image.",
        href: "https://www.wowhead.com/forever/tier-list",
      },
      {
        name: "Legacy Calculator",
        game: "WoW Forever",
        description:
          "Spend points across the Professions, Adventure, and Resourcefulness trees.",
        href: "https://www.wowhead.com/forever/legacy-calculator",
      },
    ],
  },
  {
    id: "fanbyte",
    name: "Fanbyte",
    role: "Software Engineer",
    period: "2022 – 2023",
    status: "Site retired",
    summary:
      "A full rebuild of Fanbyte, a games news and guides publication, from WordPress to a TypeScript, Next.js, and Strapi stack.",
    highlights: [
      "Rebuilt the site from a monolithic WordPress install into a Next.js frontend backed by a headless Strapi CMS.",
      "Wrote the frontend in TypeScript end to end, from content models to page components.",
      "Gave the editorial team structured content types in Strapi in place of free-form WordPress posts.",
    ],
    stack: ["TypeScript", "Next.js", "React", "Strapi", "Node.js"],
  },
];
