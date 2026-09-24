import type { Project, Tool } from "../content/types";
import { projects } from "../content/work";
import { ArrowUpRight } from "./icons";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Tools and platforms for people who play games">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-name`}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 id={`${project.id}-name`} className="text-2xl font-semibold tracking-tight">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-accent"
                >
                  {project.name}
                  <ArrowUpRight className="size-5 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              ) : (
                project.name
              )}
            </h3>
            {project.status && (
              <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-faint">
                {project.status}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-faint">
            {project.role} · {project.period}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </header>

      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty">{project.summary}</p>

      {project.stats && (
        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-surface px-4 py-3 sm:px-5 sm:py-4">
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-6 grid gap-3 text-muted sm:grid-cols-3 sm:gap-6">
        {project.highlights.map((h) => (
          <li key={h} className="border-l-2 border-accent/60 pl-4 text-sm leading-relaxed">
            {h}
          </li>
        ))}
      </ul>

      {project.tools && (
        <div className="mt-10">
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Tools I've built</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.tools.map((tool) => (
              <li key={tool.name}>
                <ToolTile tool={tool} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function ToolTile({ tool }: { tool: Tool }) {
  const body = (
    <>
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent-2">{tool.game}</p>
      <p className="mt-1.5 flex items-center justify-between gap-2 font-medium">
        {tool.name}
        {tool.href && (
          <ArrowUpRight className="size-4 shrink-0 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
        )}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{tool.description}</p>
    </>
  );

  const className = "block h-full rounded-xl border border-line bg-bg/50 p-4";

  if (!tool.href) return <div className={className}>{body}</div>;

  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noreferrer"
      className={`group ${className} transition-colors hover:border-faint hover:bg-surface-2`}
    >
      {body}
    </a>
  );
}
