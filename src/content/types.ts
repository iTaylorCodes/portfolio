export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  openToWork: boolean;
  email: string;
  headline: string;
  intro: string;
  about: string[];
  socials: SocialLink[];
};

export type Tool = {
  name: string;
  game: string;
  description: string;
  href?: string;
};

export type Project = {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  /** Headline numbers. Keep these to figures that can be checked. */
  stats?: { value: string; label: string }[];
  stack: string[];
  /** Omit for projects that are no longer live. */
  href?: string;
  status?: string;
  tools?: Tool[];
};

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
  focus: { name: string; period: string; detail: string }[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};
