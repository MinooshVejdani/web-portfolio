// ContactLink.jsx
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import devtoLogo from "../assets/devto.svg";

export default function ContactLink() {
  return (
    <>
      <section className="flex relative py-32 bg-white z-10">
        <div className="flex absolute items-center justify-center inset-0 gap-12">
          <a
            href="https://github.com/MinooshVejdani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/minoosh-vejdani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 z-10"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://dev.to/minoosh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer z-10"
            aria-label="Dev.to"
          >
            <img src={devtoLogo} alt="Dev.to" className="w-8 h-8" />
          </a>
        </div>
      </section>
    </>
  );
}
