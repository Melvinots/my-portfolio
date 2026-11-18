import { facts } from '../constants/about';

function Home() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-8 pt-12 pb-16 md:grid-cols-2"
    >
      {/* Left Column */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Melvin Bonde
        </h1>

        <p className="mt-4 text-lg font-medium text-[#213A57] sm:text-xl">
          Junior Software Developer
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block rounded-lg bg-[#213A57] px-7 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#172B42] hover:shadow-lg"
          >
            View My Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}MelvinBonde_Resume.pdf`}
            download
            className="inline-block rounded-lg border border-[#213A57] px-7 py-3 font-semibold text-[#213A57] transition duration-200 hover:bg-[#213A57] hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column: snapshot card */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-gray-500">
              about-melvin
            </span>
          </div>

          {/* Facts */}
          <dl className="divide-y divide-gray-100 px-6">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-[#213A57]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-gray-700">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {/* Contact footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
            <a
              href="mailto:bonde.melvin03@gmail.com"
              className="text-sm font-medium text-[#213A57] hover:underline"
            >
              bonde.melvin03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;