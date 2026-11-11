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

        <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-600">
          I'm open to discussing software development opportunities,
          collaborating on projects, and connecting with fellow developers.
          Feel free to reach out!
        </p>

        <a
          href="mailto:bonde.melvin03@gmail.com"
          className="inline-flex items-center justify-center rounded-lg bg-[#213A57] px-6 py-3 font-semibold text-white transition hover:bg-[#172c43]"
        >
          Get in Touch
        </a>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Melvinots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-500 transition hover:text-[#213A57]"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/melvin-bonde-8645a728b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-500 transition hover:text-[#213A57]"
          >
            <Linkedin size={26} />
          </a>
        </div>             
      </div>
    </section>
  );
}

export default Contact;