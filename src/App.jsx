import React, { useState, useEffect } from 'react';
import { design1, design2, design3 } from './assets/images';
import { Nav, Loader } from "./components";
import { About, Contact, Footer, Hero, Projects } from "./sections";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

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
        className="lg:min-h-[500px] max-sm:min-h-screen sm:px-16 px-8 -mt-10 bg-white scroll-mt-16"
      >
        <Hero />
      </section>
      <span>
        <img src={design1} alt="Splash Design" />
      </span>
      <section
        id="about"
        className="min-h-[500px] sm:px-16 px-6 py-12 bg-gradient-to-b from-[#82DCFF] to-[#70BBFF] lg:scroll-mt-56 max-sm:scroll-mt-10"
      >
        <About />
      </section>
      <span>
        <img src={design2} alt="Splash Design" />
      </span>
      <section
        id="projects"
        className="sm:px-16 px-8 py-16 md:py-5 bg-white lg:scroll-mt-48 max-sm:scroll-mt-5"
      >
        <Projects />
      </section>
      <span>
        <img src={design3} alt="Splash Design" />
      </span>
      <section
        id="contact"
        className="sm:px-16 px-8 py-16 md:py-5 bg-[#5579F3] scroll-mt-15"
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
