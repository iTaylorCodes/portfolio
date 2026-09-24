import { profile } from "../content/profile";
import { ArrowUpRight, MapPin, Mail } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
      {profile.openToWork && (
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          Open to new opportunities
        </p>
      )}

      <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
        <span className="block text-muted">
          {profile.name}, {profile.title.toLowerCase()}.
        </span>
        <span className="block">{profile.headline}</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.intro}</p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          <Mail className="size-4" />
          Get in touch
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-faint hover:bg-surface"
        >
          See my work
          <ArrowUpRight className="size-4 rotate-90" />
        </a>
        <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-faint">
          <MapPin className="size-4" />
          {profile.location}
        </span>
      </div>
    </section>
  );
}
