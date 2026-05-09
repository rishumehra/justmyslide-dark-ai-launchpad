import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { posts } from "@/content/posts";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog — JustMySlide" },
      { name: "description", content: "Field notes on AI workflows, UiPath RPA, and writing documentation developers actually read." },
      { property: "og:title", content: "Blog — JustMySlide" },
      { property: "og:description", content: "Field notes on AI, RPA, and developer documentation." },
    ],
  }),
});

function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-20 w-full">
        <div className="font-mono text-xs text-primary"><span className="text-muted-foreground">$</span> ls blog/</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-muted-foreground">Notes on AI, automation, and the craft of technical writing.</p>
        <div className="mt-12 divide-y divide-border">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="block py-6 group"
            >
              <div className="font-mono text-xs text-muted-foreground">{p.date} · {p.readTime}</div>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="mt-1 text-muted-foreground">{p.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">#{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}