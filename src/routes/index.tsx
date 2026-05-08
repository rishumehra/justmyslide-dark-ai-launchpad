import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { BlogPreview } from "@/components/site/BlogPreview";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JustMySlide — AI, Automation & Documentation" },
      { name: "description", content: "AI workflow consulting, UiPath RPA automation, and developer-grade technical writing. Open-source projects including RishOS." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
