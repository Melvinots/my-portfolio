import { qmark } from "../assets/images";

const About = () => {
  return (
    <section className="max-w-[1140px] mx-auto px-4 mb-40 md:mb-0 md:px-8 w-full flex flex-col-reverse md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-10 lg:space-x-16">
      <div className="md:max-w-xl text-left">
        <h1 className="font-code font-semibold text-2xl md:text-3xl leading-tight">
          ABOUT ME
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-justify py-6 leading-relaxed">
          I am a recent Computer Engineering graduate with a keen interest in
          full-stack development. I am passionate about learning new tools and
          technologies, as well as taking on new challenges.
          <br />
          <br />
          <span>
            In my free time, I enjoy playing chess, which helps me enhance my
            problem-solving and strategic thinking skills.
          </span>
        </p>
      </div>

      <div className="relative lg:my-0 flex-shrink-0">
        <img
          src={qmark}
          alt="Question Mark"
          className="w-auto h-[200px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-contain"
        />
      </div>
    </section>
  );
};

export default About;
