const ProjectCard = ({ project, changeBigProject, bigProject }) => {
  const handleClick = () => {
    if (bigProject !== project.thumbnail) {
      changeBigProject(project.thumbnail);
    }
  };

  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        bigProject === project.thumbnail
          ? "border-yellow-400 shadow-lg scale-105"
          : "border-transparent hover:scale-105 hover:border-gray-300"
      } cursor-pointer sm:flex-1 transform-gpu`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-cover p-4 rounded-xl">
        <img
          src={project.thumbnail}
          alt="project collection"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
