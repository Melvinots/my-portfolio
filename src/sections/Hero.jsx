import { chess1 } from "../assets/images";
import { Button } from "../components";
import { Download, UserRoundPen } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-[1140px] mx-auto w-full min-h-[80vh] flex flex-col-reverse justify-center items-center space-y-10 lg:flex-row lg:space-x-36 mt-10 px-4 lg:px-8">
      <div className="relative">
        <img
          src={chess1}
          alt="Chess Piece 1"
          className="w-auto h-[300px] mt-8 md:h-[450px] md:mt-0 object-contain"
        />
      </div>
      <div className="text-left">
        <h1 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.50]">
          Hi, I am
          <br />
          <span className="font-extrabold text-5xl sm:text-6xl lg:text-7xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-300">
              Melvin
            </span>
          </span>
          <br />
          <span className="whitespace-nowrap">
            Aspiring Full Stack Developer
          </span>
        </h1>
        <div className="flex space-x-4 mt-8">
          <a
            href="/my-portfolio/Melvin_Bonde_CV.pdf"
            download="Melvin_Bonde_CV.pdf"
            className="focus:outline-0"
          >
            <Button label="Download CV" Icon={Download} />
          </a>
          <a href="#contact" className="focus:outline-0">
            <Button label="Contact Me" Icon={UserRoundPen} href="#contact" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
