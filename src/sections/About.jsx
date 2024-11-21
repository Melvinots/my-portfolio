import { attainments } from "../constants";
import { Card } from "../components";

const About = () => {
  return (
    <section className="max-w-[1140px] mx-auto px-4 mb-5 md:mb-0 md:px-8 w-full flex flex-col justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-10 lg:space-x-16">
      <div className="md:max-w-xl text-center">
        <h1 className="font-code font-semibold text-2xl md:text-3xl leading-tight">
          ABOUT ME
        </h1>
        <p className="font-montserrat text-md sm:text-lg md:text-xl text-justify py-6 leading-relaxed">
          I am a Computer Engineering graduate with a keen interest in
          full stack development. I am passionate about learning new tools and
          technologies, as well as taking on new challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attainments.map(({ title, establishment, role, icon }) => (
          <Card
            key={title}
            title={title}
            establishment={establishment}
            role={role}
            Icon={icon}
          />
        ))}
      </div>

    </section>
  );
};

export default About;
