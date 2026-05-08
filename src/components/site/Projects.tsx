import { Star, GitFork, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "RishOS",
    desc: "A personal-OS framework: opinionated workflows, scripts, and dotfiles for an AI-augmented dev environment.",
    lang: "TypeScript",
    color: "var(--terminal-cyan)",
    stars: 412,
    forks: 38,
    tags: ["os", "automation", "cli"],
  },
  {
    name: "mdkit",
    desc: "Toolkit for Markdown documentation initiatives — linting, link-checking, and OpenAPI-to-MD pipelines.",
    lang: "Node",
    color: "var(--terminal-green)",
    stars: 287,
    forks: 21,
    tags: ["markdown", "docs"],
  },
  {
    name: "agent-lab",
    desc: "Experiments in AI agents and automation: planners, tool-use harnesses, and UiPath orchestrator bridges.",
    lang: "Python",
    color: "var(--terminal-amber)",
    stars: 196,
    forks: 14,
    tags: ["ai", "agents", "rpa"],
  },
  {
    name: "docforge",
    desc: "Static documentation generator with versioned API references, search, and embeddings-powered Q&A.",
    lang: "TypeScript",
    color: "var(--terminal-purple)",
    stars: 154,
    forks: 9,
    tags: ["docs", "ai"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <SectionHeader eyebrow="ls projects/" title="Selected projects" description="Open source and experimental work spanning RishOS, documentation tooling, and AI automation." />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href="#"
            className="terminal-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="font-mono text-primary">{">"}</span>
                  {p.name}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border bg-surface-elevated text-muted-foreground">
                  #{t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-xs text-muted-foreground font-mono">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                {p.lang}
              </span>
              <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {p.stars}</span>
              <span className="inline-flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {p.forks}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}