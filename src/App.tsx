import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <main id="main">
          <Hero />
          <Work />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
