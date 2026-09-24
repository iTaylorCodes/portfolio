import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  );
}
