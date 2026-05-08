import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground animate-rise">
          <Sparkles className="h-3 w-3 text-primary" />
          <span>v1.0 — open for collaboration</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] animate-rise">
          Building <span className="text-gradient">intelligent workflows</span><br />
          and documentation that ships.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-rise">
          JustMySlide is a small studio for AI workflow consulting, UiPath RPA automation,
          and developer-grade technical writing. Built by engineers, written for humans.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-rise">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition glow-primary">
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-elevated transition">
            See our work
          </a>
        </div>

        <div className="mt-14 max-w-3xl terminal-card overflow-hidden animate-rise">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-surface-elevated">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.83_0.16_75)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/justmyslide — zsh</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed p-5 text-foreground/90 overflow-x-auto">
<span className="text-primary">$</span> whoami{"\n"}
<span className="text-muted-foreground">justmyslide</span>{"\n"}
<span className="text-primary">$</span> ls services/{"\n"}
<span className="text-[var(--terminal-cyan)]">ai-consulting</span>  <span className="text-[var(--terminal-cyan)]">rpa-uipath</span>  <span className="text-[var(--terminal-cyan)]">tech-writing</span>  <span className="text-[var(--terminal-cyan)]">dev-docs</span>{"\n"}
<span className="text-primary">$</span> cat manifesto.md | head -1{"\n"}
<span className="text-[var(--terminal-amber)]">"Automate the boring. Document the brilliant."</span>{"\n"}
<span className="text-primary">$</span> <span className="animate-blink">▍</span>
          </pre>
        </div>
      </div>
    </section>
  );
}