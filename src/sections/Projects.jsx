import { toolsURL } from "../constants";
import { NewCard } from "../components";

const Projects = () => {

  return (
    <section className="max-w-[1140px] mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-16">
      <div className="basis-full md:basis-2/5 text-left">
        <h1 className="font-code font-semibold text-2xl md:text-3xl leading-tight">
          PROJECTS
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-left py-6 leading-relaxed">
          In this section, you'll find a collection of my personal projects,
          focused primarily on core concepts and functionality.
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
      
      <NewCard />

    </section>
  );
};

export default Projects;
