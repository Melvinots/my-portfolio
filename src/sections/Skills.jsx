import { skillGroups } from "../constants/skills";

function Skills() {
  return (
    <section 
        id="skills"
        className="mx-auto max-w-5xl px-8 py-20">
        <h2 className="mb-8 border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
            Technical Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
                <div
                    key={group.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                    <h3 className="mb-4 border-b border-gray-100 pb-3 text-lg font-semibold text-[#213A57]">
                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Skills;