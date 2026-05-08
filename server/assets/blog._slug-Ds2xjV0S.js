import { V as jsxRuntimeExports } from "./server-DE5gJENa.js";
import { L as Link } from "./router-CmWvj2WA.js";
import { N as Nav, F as Footer } from "./Footer-BITrlGsc.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 mx-auto max-w-3xl px-6 py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold", children: "Post not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "mt-6 inline-block text-primary hover:underline", children: "← Back to blog" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
