import { Link } from "@tanstack/react-router";
import { Terminal, Github } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary border border-primary/30">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight text-foreground">justmyslide</span>
          <span className="text-muted-foreground">/~$</span>
          <span className="text-primary animate-blink">▍</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>
        <a
          href="https://github.com/rishos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs font-mono text-foreground hover:bg-secondary transition-colors"
        >
          <Github className="h-3.5 w-3.5" />
          <span>github</span>
        </a>
      </div>
    </header>
  );
}