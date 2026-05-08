import { V as jsxRuntimeExports } from "./server-DE5gJENa.js";
import { p as posts, L as Link } from "./router-CmWvj2WA.js";
import { N as Nav, F as Footer } from "./Footer-BITrlGsc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 mx-auto max-w-3xl px-6 py-20 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "$" }),
        " ls blog/"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl md:text-5xl font-semibold tracking-tight", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Notes on AI, automation, and the craft of technical writing." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 divide-y divide-border", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "block py-6 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-muted-foreground", children: [
          p.date,
          " · ",
          p.readTime
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-semibold group-hover:text-primary transition-colors", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground", children: [
          "#",
          t
        ] }, t)) })
      ] }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogIndex as component
};
