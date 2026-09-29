import { profile } from "../content/profile";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "./icons";

const socialIcons = { GitHub, LinkedIn } as const;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
      <h2
        id="contact-title"
        className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      >
        {profile.openToWork ? "Looking for my next team. Let's talk." : "Say hello."}
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I'm interested in frontend and full-stack roles, remote or in Los Angeles. The fastest way
        to reach me is email.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center justify-between gap-6 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-faint sm:justify-start"
        >
          <span className="flex items-center gap-3">
            <Mail className="size-5 text-accent" />
            <span className="font-medium">{profile.email}</span>
          </span>
          <ArrowUpRight className="size-4 text-faint group-hover:text-fg" />
        </a>
        <a
          href={profile.resume}
          download
          className="group inline-flex items-center justify-between gap-6 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-faint sm:justify-start"
        >
          <span className="flex items-center gap-3">
            <Download className="size-5 text-muted" />
            <span className="font-medium">Résumé (PDF)</span>
          </span>
          <ArrowUpRight className="size-4 rotate-90 text-faint group-hover:text-fg" />
        </a>
        {profile.socials.map((social) => {
          const Icon = socialIcons[social.label as keyof typeof socialIcons];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-6 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-faint sm:justify-start"
            >
              <span className="flex items-center gap-3">
                {Icon && <Icon className="size-5 text-muted" />}
                <span className="font-medium">{social.label}</span>
              </span>
              <ArrowUpRight className="size-4 text-faint group-hover:text-fg" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-faint">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
