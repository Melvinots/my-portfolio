import { Nav } from "./components";
import { About, Contact, Footer, Hero, Projects } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section
        id="home"
        className="sm:px-16 px-8 -mt-10 bg-slate-100 scroll-mt-16"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="sm:px-16 px-8 py-10 bg-slate-200 scroll-mt-16"
      >
        <About />
      </section>
      <section
        id="projects"
        className="sm:px-16 px-8 py-16 md:py-5 bg-slate-100 scroll-mt-5"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="sm:px-16 px-8 py-16 md:py-5 bg-slate-300 scroll-mt-16"
      >
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default App;
