import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getPost, posts } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — JustMySlide` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">← Back to blog</Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-16 w-full">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> back to blog
        </Link>
        <article className="mt-8">
          <div className="font-mono text-xs text-muted-foreground">{post.date} · {post.readTime}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t: string) => (
              <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">#{t}</span>
            ))}
          </div>
          <div className="prose-content mt-10 text-foreground/90 leading-relaxed space-y-5
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-2
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8
            [&_p]:text-foreground/85
            [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
            [&_code]:font-mono [&_code]:text-sm [&_code]:bg-surface-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:border [&_code]:border-border
            [&_pre]:terminal-card [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:p-0
            [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>
        </article>
        <div className="mt-16 border-t border-border pt-8">
          <div className="font-mono text-sm text-muted-foreground">Read more</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="terminal-card p-4 hover:border-primary/40 transition-colors">
                <div className="font-mono text-xs text-muted-foreground">{p.date}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}