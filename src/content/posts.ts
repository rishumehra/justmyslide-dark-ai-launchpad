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
    excerpt: "Why AI systems fail in production and the engineering patterns that keep workflows stable under real traffic.",
    tags: ["ai", "engineering", "systems"],
    readTime: "8 min",
    body: `## Prototype success is not production readiness

Building AI workflows is easy in a prototype environment. The real challenge begins when these systems enter production.

Most AI workflows fail not because models are weak, but because production environments are unpredictable. Inputs are inconsistent, APIs fail intermittently, and real-world usage does not match controlled test scenarios.

A useful mental model is simple: **the model is one dependency in a larger distributed system**. If you treat it like a complete product, your reliability profile collapses.

## The core problem

AI systems are usually designed under assumptions that do not hold in real use:

- clean inputs
- stable APIs
- predictable user behavior

Production breaks all three assumptions, often at the same time.

## What actually breaks in production

### 1) Input variability

Real users do not follow expected formats. They paste malformed JSON, partial IDs, mixed languages, and screenshots converted to noisy OCR text. If your pipeline assumes a fixed shape before an LLM call, bad input propagates into expensive and hard-to-debug failures.

Practical fix:

- Validate inputs at the boundary
- Normalize before orchestration
- Reject clearly invalid requests with actionable errors

### 2) Silent API failures

External services fail in non-obvious ways: partial timeouts, empty payloads with 200 responses, stale caches, or rate-limit headers that appear only on some paths. Without explicit checks, your workflow may continue with corrupt context.

Practical fix:

- Treat third-party calls as untrusted
- Add explicit response guards
- Capture provider latency and error taxonomy in logs

### 3) Non-deterministic flows

LLM outputs vary by token-level sampling, model version updates, and context drift. If your orchestration layer cannot enforce structure and post-conditions, identical requests may produce divergent side effects.

Practical fix:

- Use schema-constrained outputs
- Add deterministic validators after model calls
- Make side effects idempotent where possible

### 4) Missing fallback paths

Many systems assume a single success path. When one dependency fails, the entire request fails. Production-grade systems degrade gracefully: they return partial output, queue retries, or switch to backup strategies.

Practical fix:

- Define fallback behavior per workflow stage
- Add retry budgets and dead-letter handling
- Keep compensating actions explicit and testable

## What makes workflows production-safe

At JustMySlide, we optimize for reliability over demo quality. The recurring engineering patterns are:

### Deterministic orchestration around AI

We keep the control plane deterministic even when model behavior is probabilistic. Routing, preconditions, and side-effect boundaries are owned by code, not prompts.

### Strict validation before and after model calls

Input contracts prevent garbage-in. Output contracts prevent unsafe transitions. Every model call is wrapped in typed validation so downstream services can trust the result.

### Structured logging for every decision step

Each step emits consistent metadata: request ID, workflow stage, dependency, latency, retries, validation result, and fallback decisions. This turns debugging from guesswork into trace analysis.

### Fallbacks, retries, and compensation

Retries are bounded and context-aware. Fallbacks are explicit, not implicit. Compensation logic is first-class when a later stage fails after an earlier side effect succeeded.

## A minimal production wrapper

\`\`\`ts
type StageResult<T> = { ok: true; data: T } | { ok: false; reason: string };

async function runWorkflow(input: unknown) {
  const normalized = validateAndNormalizeInput(input);
  if (!normalized.ok) return fail("invalid_input", normalized.reason);

  const modelOutput = await withRetry(() =>
    callModel({
      prompt: buildPrompt(normalized.data),
      schema: OrderIntentSchema,
    }),
  );

  if (!modelOutput.ok) return fallbackToRuleEngine(normalized.data);

  const verified = verifyPostConditions(modelOutput.data);
  if (!verified.ok) return queueForManualReview(normalized.data, verified.reason);

  return executeIdempotentActions(verified.data);
}
\`\`\`

This pattern is intentionally boring, and that is exactly why it survives production.

## Key insight

**AI is not the system; the workflow around it is the system.**

A production-grade AI product is mostly:

- orchestration
- error handling
- observability

Prompt quality matters, but reliability architecture is what keeps systems alive under real traffic.`,
  },
  {
    slug: "uipath-reframework-patterns",
    title: "UiPath REFramework: 5 patterns we reuse on every bot",
    date: "2026-03-14",
    excerpt: "Five production patterns that turn REFramework from a template into a reliable automation architecture.",
    tags: ["rpa", "uipath", "automation"],
    readTime: "9 min",
    body: `## REFramework is architecture, not boilerplate

UiPath REFramework is one of the most powerful structures for scalable automation, but it is often misunderstood.

Most teams either over-engineer it into a rigid monolith or treat it like a script wrapper. Both approaches miss the point. REFramework gives you a **control architecture** for transaction processing under real operational constraints.

## Why REFramework still matters

At production scale, you need:

- transaction handling
- retry logic
- centralized exception management
- configuration-driven execution

REFramework formalizes these concerns so your bot remains auditable and maintainable after handoff, not just during initial delivery.

## Pattern 1: Transaction-first design

A bot should process one business unit at a time (invoice, claim, ticket, row), not one full end-to-end process as a single opaque run.

Why this matters:

- failures isolate to one transaction
- retries are targeted, not global
- throughput and SLAs become measurable

Design rule: if you cannot define transaction boundaries clearly, your process is not ready for REFramework.

## Pattern 2: Centralized exception handling

Teams often scatter \`Try Catch\` blocks across workflows. This hides failure semantics and causes inconsistent recovery behavior.

In REFramework, route all exceptions into a single handling layer that classifies:

- **Business exceptions** (invalid input, missing data, policy mismatch)
- **System exceptions** (timeouts, selector breaks, app crashes, transient infra issues)

Once classified, retries and alerts become deterministic.

## Pattern 3: Queue-driven architecture

Use Orchestrator queues as the source of truth for work distribution. Queue items carry payload, priority, and retry context.

Benefits:

- horizontal scale across multiple robots
- built-in retry and visibility
- operational reporting tied to queue states

This is the difference between a bot that "runs" and a bot that can be operated as a service.

## Pattern 4: Config-driven execution

Hardcoded values are the fastest route to brittle automation. Environment URLs, credential keys, feature flags, thresholds, and selectors should live in config.

We usually split config into:

- Orchestrator assets (secrets, environment-specific values)
- local config files (workflow behavior flags)
- runtime arguments (job-level overrides)

This allows controlled deployment changes without republishing the package for every minor update.

## Pattern 5: Modular reusable components

Login, navigation, extraction, validation, and posting steps should be reusable components with clear interfaces.

Good module properties:

- single responsibility
- explicit inputs/outputs
- no hidden global state
- independently testable behavior

This reduces regression risk and accelerates new process delivery.

## How we extend REFramework in real projects

REFramework works well alone, but many enterprise environments need deeper integration. Common extension points include:

- **C#** for external logic and service adapters
- **VB.NET** for legacy-heavy environments
- **Orchestrator APIs** for queue control, telemetry ingestion, and operational tooling

These extensions should remain outside core state transitions so the framework stays predictable.

## Operational guardrails we recommend

Before go-live, enforce:

- transaction-level logging with correlation IDs
- explicit retry limits per exception type
- queue aging and stuck-item alerts
- clean kill/restart procedures for unattended bots
- release checklists for selector and credential changes

## Key insight

**REFramework is not your automation logic. It is your automation architecture.**

When teams adopt that mindset, they ship bots that are easier to monitor, safer to modify, and far less painful to operate.`,
  },
  {
    slug: "docs-as-product",
    title: "Treat your docs like a product, not an afterthought",
    date: "2026-02-02",
    excerpt: "A practical framework for treating technical documentation as a versioned, measurable developer product.",
    tags: ["docs", "writing", "dx"],
    readTime: "7 min",
    body: `## Documentation is an engineering surface

Documentation is often treated as a secondary activity in engineering teams. That is a strategic mistake.

Good documentation behaves like a product:

- it has users
- it solves specific problems
- it evolves over time
- it directly affects adoption

If developers cannot find the right answer at the right moment, your product experience is broken regardless of code quality.

## Why most docs fail

Across teams, failure patterns are consistent:

- docs are written after development instead of during it
- information architecture is unclear or fragmented
- ownership is undefined
- content drifts out of sync with code

The result is high cognitive load, repeated support questions, and slow onboarding.

## What "docs as a product" means in practice

At JustMySlide, we treat documentation as an intentionally designed system.

### 1) Versioned system

Docs evolve with code, not in a parallel universe. Each release should map to versioned documentation with clear compatibility boundaries.

Practical pattern:

- docs live in the same repository or tightly coupled repos
- versioning strategy mirrors API/runtime versioning
- deprecations include migration guidance, not just warnings

### 2) Structured architecture

A docs site is an information architecture problem before it is a writing problem.

Typical baseline structure:

- **Get started**: first successful outcome in minutes
- **Concepts**: mental model and system boundaries
- **How-to guides**: task-oriented workflows
- **Reference**: exhaustive API/config behavior
- **Troubleshooting**: known failure modes and fixes

Without this hierarchy, users search randomly and lose trust.

### 3) Developer-first readability

Developers scan before they read. Documentation should optimize for rapid decision-making:

- clear headings
- short paragraphs
- explicit prerequisites
- runnable, copy-safe examples
- expected output and failure cases

Readable docs do not mean shallow docs. They mean fast comprehension under delivery pressure.

### 4) Workflow integration

Documentation quality must be part of delivery quality gates.

Recommended integrations:

- doc checks in CI (broken links, lint, schema validation)
- API reference generation from source definitions
- release PR template with required doc updates
- changelog and migration notes tied to deploys

When docs are optional, they become stale. When docs are in the pipeline, they stay relevant.

## Measuring documentation impact

Treat docs like any other product surface and track outcomes:

- time-to-first-success for new developers
- repeated support tickets per topic
- search queries with no-result or low-click outcomes
- bounce rate on critical setup pages
- update latency after breaking changes

Even lightweight metrics quickly reveal where users are getting blocked.

## Example: reducing onboarding drag

A team can ship faster without changing core architecture simply by improving docs:

1. Define one canonical quickstart path
2. Replace screenshots with executable snippets
3. Add a troubleshooting section for top five failures
4. Version references with each release

The usual outcome is fewer interruptions to core engineers and faster integration by external teams.

## Key insight

**Bad documentation slows down even the best systems.**

Docs are not decoration around engineering work. They are part of the product interface and should be designed, maintained, and measured accordingly.`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);