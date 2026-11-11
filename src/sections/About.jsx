import { attainments } from "../constants/about";

function About() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">

        {/* Introduction */}
        <div>
          <h2 className="mb-6 border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
            About Me
          </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          I'm a Junior Software Developer with professional experience
          in SQL Server, database operations, and reporting. I also enjoy
          exploring application development and modern web technologies.
        </p>
        </div>

        {/* Career Journey */}
        <div>
          <h3 className="mb-6 text-xl font-bold">
            My Journey
          </h3>

          <div className="relative space-y-8 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-gray-300">
            {attainments.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#213A57] shadow-sm">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="flex flex-wrap items-center gap-2 font-semibold text-gray-900">
                      {item.role}

                      {item.promoted && (
                        <span className="rounded-full bg-[#213A57]/10 px-2 py-0.5 text-xs font-medium text-[#213A57]">
                          Promoted
                        </span>
                      )}
                    </h4>

                    <p className="mt-1 text-sm text-gray-600">
                      {item.establishment}
                    </p>

                    <p className="mt-1 text-xs font-medium text-gray-400">
                      {item.duration}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
