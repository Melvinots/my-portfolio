import { useState } from "react";

import { projects } from "../constants";
import { toolsURL } from "../constants";
import { tracker } from "../assets/images";
import { ProjectCard } from "../components";

const Projects = () => {
  const [bigProject, setBigProject] = useState(tracker);

  return (
    <section className="max-w-[1140px] mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-16">
      <div className="basis-full md:basis-2/5 text-left">
        <h1 className="font-code font-semibold text-2xl md:text-3xl leading-tight">
          PROJECTS
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-justify py-6 leading-relaxed">
          In this section, you'll find a collection of my personal projects,
          focused primarily on core concepts and functionality. Design elements
          could still be implemented.
        </p>
        <p className="font-montserrat font-semibold text-lg md:text-xl mb-4">
          Tools I've used:
        </p>
        <div className="flex flex-wrap gap-4 mt-6 justify-start items-center">
          {toolsURL.map((tool, index) => (
            <img
              key={index}
              src={tool.icon}
              alt={tool.name}
              width={40}
              height={40}
              className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 hover:opacity-70"
            />
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center xl:min-h-screen bg-cover bg-center">
        <img
          src={bigProject}
          alt="project collection"
          width={500}
          height={500}
          className="object-contain relative shadow-xl max-md:mb-10"
        />

        <div className="flex gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-10 px-6 md:px-8 lg:px-10">
          {projects.map((project, index) => (
            <div key={index} className="text-center">
              <ProjectCard
                index={index}
                project={project}
                changeBigProject={(proj) => setBigProject(proj)}
                bigProject={bigProject}
              />
              <h1 className="font-montserrat pt-5 text-sm md:text-base lg:text-lg">
                {project.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
