import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="font-mono">
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} JustMySlide"
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}