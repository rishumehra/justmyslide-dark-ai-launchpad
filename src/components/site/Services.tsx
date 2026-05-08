import { Brain, Bot, FileText, BookOpen, GitBranch } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Brain, name: "AI Workflow Consulting", desc: "Architect LLM pipelines, agents, and retrieval systems that actually ship to production.", tag: "ai" },
  { icon: Bot, name: "RPA with UiPath", desc: "Automate repetitive ops — back-office, ERP, finance — with maintainable UiPath bots.", tag: "rpa" },
  { icon: FileText, name: "Technical Writing", desc: "API references, runbooks, and onboarding guides written by engineers.", tag: "writing" },
  { icon: BookOpen, name: "Developer Documentation", desc: "Docs sites with versioning, search, and code samples that stay in sync with your repo.", tag: "docs" },
  { icon: GitBranch, name: "Open-Source Projects", desc: "We build and maintain OSS for documentation, automation, and AI tooling.", tag: "oss" },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <SectionHeader eyebrow="cat services.md" title="What we do" description="A focused stack of services for teams shipping AI, automation, and great documentation." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="terminal-card p-6 group hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">#{s.tag}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}