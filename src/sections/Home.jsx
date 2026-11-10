function Home() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-8 py-16 md:grid-cols-2"
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

        <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
          I enjoy building web applications, solving problems, and
          continuously learning new technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block rounded-lg bg-[#213A57] px-7 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#172B42] hover:shadow-lg"
          >
            View My Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}MelvinBonde_CV.pdf`}
            download
            className="inline-block rounded-lg border border-[#213A57] px-7 py-3 font-semibold text-[#213A57] transition duration-200 hover:bg-[#213A57] hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center md:justify-center">
        <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-gray-100 shadow-lg sm:h-64 sm:w-64 lg:h-80 lg:w-80">
          <img
            // src="/my-portfolio/images/profile.jpg"
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Portrait of Melvin Bonde"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}

export default Home;