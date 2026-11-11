import { useState } from "react";
import { projects } from "../constants/projects";
import { Github, ExternalLink } from "lucide-react";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-8 py-20"
    >
      <h2 className="mb-8 border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
        Projects
      </h2>

      <p className="mb-8 max-w-2xl leading-relaxed text-gray-600">
        A collection of personal and academic projects showcasing my experience
        with web development, application design, and different technologies.
      </p>      

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className={`flex h-full flex-col rounded-xl border bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md ${
              project.featured
                ? "border-[#213A57]/40 shadow-sm"
                : "border-gray-200"
            }`}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mb-5 aspect-video w-full rounded-lg border border-gray-200 object-cover object-top"
            />            
            <h3 className="mb-3 text-xl font-bold">
              {project.title}
            </h3>

            <p className="mb-4 flex-grow leading-relaxed text-gray-600">
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

            <div className="mt-auto flex items-center gap-6 pt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#213A57] transition hover:text-blue-700"
              >
                <Github size={17} />
                GitHub
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#213A57] transition hover:text-blue-700"
                >
                  <ExternalLink size={16} />
                  View Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {projects.length > 5 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((current) => !current)}
            className="rounded-lg border border-[#213A57] px-6 py-3 text-sm font-semibold text-[#213A57] transition hover:bg-[#213A57] hover:text-white"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}      
    </section>
  );
}

export default Projects;