import { Navbar } from "./components";
import { Home, About, Skills, Projects, Contact, Footer } from "./sections";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;