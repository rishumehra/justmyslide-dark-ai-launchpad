export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "shipping-ai-workflows",
    title: "Shipping AI workflows that survive production",
    date: "2026-04-22",
    excerpt: "Notes from building agentic systems that handle real customer traffic without falling over.",
    tags: ["ai", "engineering"],
    readTime: "6 min",
    body: `## The boring truth about AI in production

Most AI demos die between prototype and prod. The fix isn't a smarter model — it's **observability, retries, and good prompts kept under version control**.

### Three rules we follow

1. **Treat prompts as code.** Review them, test them, version them.
2. **Cache aggressively.** LLM calls are slow and expensive.
3. **Fail loudly.** Tool calls should validate inputs and surface errors fast.

\`\`\`ts
const result = await llm.run({ prompt, schema, retries: 2 });
\`\`\`

Build small, ship often, measure everything.`,
  },
  {
    slug: "uipath-reframework-tips",
    title: "UiPath REFramework: 5 patterns we reuse on every bot",
    date: "2026-03-14",
    excerpt: "Practical patterns for building maintainable RPA processes with the Robotic Enterprise Framework.",
    tags: ["rpa", "uipath"],
    readTime: "8 min",
    body: `## Why REFramework still matters

Even in the era of AI agents, **predictable, auditable automation** wins for back-office work.

- Centralized config in Orchestrator assets
- Transaction-level retries
- Business vs system exception split
- Queue-driven dispatching
- Clean teardown to release resources

Boring is a feature.`,
  },
  {
    slug: "docs-as-product",
    title: "Treat your docs like a product, not an afterthought",
    date: "2026-02-02",
    excerpt: "How small docs investments compound into faster onboarding, fewer support tickets, and better DX.",
    tags: ["docs", "writing"],
    readTime: "5 min",
    body: `## Documentation IS the product

If your developers can't get to "hello world" in five minutes, you have a docs bug, not a product bug.

- Write the **getting started** first
- Use **runnable examples**, not screenshots
- Keep references **generated from source**
- Measure: time-to-first-call, search misses, doc bounce rate`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);