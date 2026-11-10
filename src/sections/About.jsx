
import { attainments } from "../constants/about";

function About() {
  return (
    <section id="about" className="bg-gray-50 px-8 py-20">
      <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">

        {/* Introduction */}
        <div>
          <h2 className="mb-6 border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            I'm a Junior Software Developer with 20 months of
            professional experience. I primarily work with SQL Server,
            database operations, and reporting, while continuing to
            explore application development and modern web technologies.
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
                    <h4 className="font-semibold text-gray-900">{item.role}</h4>

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
