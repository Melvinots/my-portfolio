import { Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-8 py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 inline-block border-l-4 border-[#213A57] pl-4 text-3xl font-bold">
          Let's Connect
        </h2>

        <p className="mb-8 text-lg text-gray-600">
          Feel free to reach out if you'd like to discuss opportunities,
          projects, or software development.
        </p>

        <a
          href="mailto:bonde.melvin03@gmail.com"
          className="inline-block rounded-lg bg-[#213A57] px-7 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-[#172B42] hover:shadow-lg"
        >
          Contact Me
        </a>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Melvinots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-600 transition hover:text-[#213A57]"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-600 transition hover:text-[#213A57]"
          >
            <Linkedin size={26} />
          </a>
        </div>        
      </div>
    </section>
  );
}

export default Contact;