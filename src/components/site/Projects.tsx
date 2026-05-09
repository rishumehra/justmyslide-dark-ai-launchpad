import { Star, GitFork, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    id: "rishos",
    name: "RishOS",
    url: "https://github.com/rishos",
    status: "Featured",
    desc: "Experimental operating system initiative for low-level systems experimentation, focused on developer tooling and lightweight workflows with an architecture-first systems programming mindset.",
    lang: "C / C++",
    color: "var(--terminal-cyan)",
    stars: 412,
    forks: 38,
    tags: ["systems", "automation", "cli", "c", "c++"],
  },
  {
    id: "rpa-automation-toolkit",
    name: "RPA Automation Toolkit",
    url: "https://github.com/rishos",
    status: "Coming Soon",
    desc: "RPA Automation Toolkit — UiPath-based workflow automation systems.",
    lang: "Node",
    color: "var(--terminal-green)",
    stars: 287,
    forks: 21,
    tags: ["rpa", "uipath", "automation"],
  },
  {
    id: "documentation-engine",
    name: "Documentation Engine",
    url: "https://github.com/rishos",
    status: "Coming Soon",
    desc: "Documentation Engine — AI-assisted developer documentation system.",
    lang: "Python",
    color: "var(--terminal-amber)",
    stars: 196,
    forks: 14,
    tags: ["docs", "ai", "developer-experience"],
  },
  {
    id: "workflow-orchestrator",
    name: "Workflow Orchestrator",
    url: "https://github.com/rishos",
    status: "Coming Soon",
    desc: "Workflow Orchestrator — API + script automation layer for internal systems.",
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
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="terminal-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="font-mono text-primary">{">"}</span>
                  {p.name}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </h3>
                <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{p.status}</p>
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