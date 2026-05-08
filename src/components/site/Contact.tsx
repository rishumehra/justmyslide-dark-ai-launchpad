import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="terminal-card p-8 md:p-12 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <SectionHeader eyebrow="./contact --new" title="Have a project in mind?" description="Tell us about your AI workflow, RPA backlog, or docs initiative. We respond within one business day." />
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@justmyslide.dev" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition glow-primary">
              <Mail className="h-4 w-4" /> hello@justmyslide.dev
            </a>
          </div>
          <div className="mt-6 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="grid gap-3 font-mono text-sm"
        >
          <label className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">name</span>
            <input className="rounded-md bg-background border border-border px-3 py-2.5 outline-none focus:border-primary transition-colors" placeholder="Ada Lovelace" />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">email</span>
            <input type="email" className="rounded-md bg-background border border-border px-3 py-2.5 outline-none focus:border-primary transition-colors" placeholder="ada@example.com" />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">message</span>
            <textarea rows={4} className="rounded-md bg-background border border-border px-3 py-2.5 outline-none focus:border-primary transition-colors resize-none" placeholder="What are you building?" />
          </label>
          <button type="submit" className="mt-2 rounded-md bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}