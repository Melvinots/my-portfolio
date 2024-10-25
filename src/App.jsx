import React, { useState, useEffect } from 'react';
import { Nav, Loader } from "./components";
import { About, Contact, Footer, Hero, Projects } from "./sections";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative">
      <Nav />
      <section
        id="home"
        className="min-h-screen sm:px-16 px-8 -mt-10 bg-slate-100 scroll-mt-16"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-[500px] sm:px-16 px-6 py-12 bg-slate-200 scroll-mt-5"
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
        className="sm:px-16 px-8 py-16 md:py-5 bg-slate-300 scroll-mt-15"
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
