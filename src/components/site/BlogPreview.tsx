import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { posts } from "@/content/posts";
import { SectionHeader } from "./SectionHeader";

export function BlogPreview() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <SectionHeader eyebrow="tail -n 3 blog/" title="From the blog" description="Field notes on AI, RPA, and writing for developers." />
        <Link to="/blog" className="font-mono text-sm text-primary hover:underline inline-flex items-center gap-1">
          all posts <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="terminal-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="font-mono text-xs text-muted-foreground">{p.date} · {p.readTime}</div>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">#{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}