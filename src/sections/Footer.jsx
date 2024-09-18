import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-montserrat bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-left gap-5 sm:gap-8 sm:flex-row flex-wrap md:justify-between items-start space-y-4 md:space-y-0">
          <div>
            <h1 className="font-code mb-2">Navigation Links</h1>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-code mb-2">Contact Information</h1>

            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>bonde.melvin03@gmail.com</span>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+63-905-374-4469</span>
            </div>

            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Duhat Sta. Cruz, Laguna, Philippines</span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <p>Feel free to reach out for collaboration or opportunities.</p>
            <a
              href="/my-portfolio/MelvinBonde_CV.pdf"
              download="MelvinBonde_CV.pdf"
              className="bg-[#0ad1c8] hover:bg-[#45dfb1] text-white py-2 px-4 rounded text-center"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {year} Melvin Bonde. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
