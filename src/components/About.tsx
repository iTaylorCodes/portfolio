import portraitWithJake from "../assets/ian-and-jake.webp";
import portrait from "../assets/ian-taylor.webp";
import { profile } from "../content/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little more about me">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-14">
        <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-muted text-pretty">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 items-start gap-3 md:grid-cols-1 md:gap-4">
          <img
            src={portrait}
            alt={profile.name}
            width={640}
            height={800}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
          <figure>
            <img
              src={portraitWithJake}
              alt="Ian with his golden retriever, Jake"
              width={640}
              height={480}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover"
            />
            <figcaption className="mt-2 font-mono text-xs text-faint">
              Jake the Dog, head of morale
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
