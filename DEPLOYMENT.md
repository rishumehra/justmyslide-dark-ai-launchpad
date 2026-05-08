# JustMySlide — Deployment

This site is built on **TanStack Start (React 19) + Tailwind CSS v4**. The Lovable template targets a Cloudflare Worker for SSR — not a static-only host. Because of that, **GitHub Pages is not the recommended target** for this codebase as-is.

You have two paths:

## 1. Recommended: Publish via Lovable
Click **Publish** in the top-right of the Lovable editor. You get a `*.lovable.app` URL with SSR, edge caching, and instant rebuilds. You can attach a custom domain in Project Settings → Domains.

## 2. GitHub Pages (static export)
GitHub Pages only serves static files. To host this site there you would need to:

1. Convert routes to fully prerendered/static output (TanStack Start supports static prerender for routes without server functions — all routes in this project are static, so this works).
2. Configure Vite output for a subpath if your repo isn't a user/organization site (`base: '/<repo-name>/'`).
3. Add a workflow at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. In repo Settings → Pages, choose **GitHub Actions** as the source.

> Note: the original brief mentioned Astro. Astro is not supported in the Lovable template, so the site was built using the supported TanStack Start stack while preserving the requested aesthetic (dark theme, terminal-inspired UI, Markdown blog).