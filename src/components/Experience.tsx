import { roles, skills } from "../content/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Building for gaming communities since 2022">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <ol className="flex flex-col gap-10">
          {roles.map((role) => (
            <li key={role.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.title} <span className="text-muted">at {role.company}</span>
                </h3>
                <p className="font-mono text-sm text-faint">{role.period}</p>
              </div>
              <p className="mt-2 text-muted">{role.summary}</p>

              <ol className="mt-6 flex flex-col gap-6 border-l border-line">
                {role.focus.map((f) => (
                  <li key={f.name} className="relative pl-6">
                    <span
                      aria-hidden
                      className="absolute top-2 -left-[5px] size-2.5 rounded-full border-2 border-bg bg-accent"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-medium">{f.name}</h4>
                      <p className="font-mono text-xs text-faint">{f.period}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.detail}</p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Toolkit</h3>
          <dl className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="text-sm font-medium">{group.label}</dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line px-2 py-1 text-sm text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
