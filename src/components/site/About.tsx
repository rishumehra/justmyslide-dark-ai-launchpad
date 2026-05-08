import { SectionHeader } from "./SectionHeader";

const stats = [
  { k: "5+", v: "years shipping" },
  { k: "40+", v: "projects delivered" },
  { k: "12", v: "open-source repos" },
  { k: "100%", v: "remote-first" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <SectionHeader eyebrow="cat about.md" title="A studio at the intersection of AI, automation and docs." description="We're a small team of engineers and writers helping companies design AI workflows, automate operations with UiPath, and produce documentation developers actually read." />
          <div className="mt-8 terminal-card p-5 font-mono text-sm">
            <div><span className="text-muted-foreground">$</span> <span className="text-primary">cat</span> stack.txt</div>
            <div className="mt-2 text-muted-foreground leading-7">
              <span className="text-[var(--terminal-cyan)]">core</span>: TypeScript, Python, Node{"\n"}
              <span className="text-[var(--terminal-cyan)]">ai</span>: OpenAI, Anthropic, LangChain, RAG{"\n"}
              <span className="text-[var(--terminal-cyan)]">rpa</span>: UiPath Studio, Orchestrator, REFramework{"\n"}
              <span className="text-[var(--terminal-cyan)]">docs</span>: Markdown, MDX, Astro, Docusaurus
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.v} className="terminal-card p-6">
              <div className="text-3xl md:text-4xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}