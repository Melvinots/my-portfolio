const projects = [
  {
    title: "Finance Tracker",
    image: "/my-portfolio/images/tracker.png",    
    description:
      "A personal finance application for tracking income, expenses, and monthly budgets.",
    technologies: ["Blazor", "ASP.NET Core", "SQLite"],
    githubUrl: "https://github.com/YOUR_USERNAME/FinanceTracker",
  },
  {
    title: "Mind Palace",
    image: "/my-portfolio/images/palace.png",
    description:
      "A web application that helps users organize and remember information using spatial mnemonics.",
    technologies: ["Django", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/YOUR_USERNAME/MindPalace",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-8 py-20"
    >
      <h2 className="mb-8 border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
        Projects
      </h2>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mb-5 aspect-video w-full rounded-lg border border-gray-200 object-cover object-top"
            />            
            <h3 className="mb-3 text-xl font-bold">
              {project.title}
            </h3>

            <p className="mb-4 leading-relaxed text-gray-600">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-6 text-sm font-semibold text-[#213A57] transition hover:underline"
            >
              View on GitHub →
            </a>            
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;