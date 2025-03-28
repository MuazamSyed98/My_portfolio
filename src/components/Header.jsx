import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/prof_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-6 bg-gradient-to-b from-gray-900 via-black to-black text-white border-b-2 border-red-500 shadow-md space-y-4 md:space-y-0">
      
      {/* Profile and Title */}
      <div className="flex items-center justify-center md:justify-start">
        <img
          src={profileImage}
          alt="Profile"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4"
        />
        <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Muazam Syed's Portfolio</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center">
        {["/", "/projects", "/contact"].map((path, i) => {
          const labels = ["Home", "Projects", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              className="relative inline-block px-4 py-2 font-semibold border border-red-500 text-red-500 rounded overflow-hidden group hover:text-white transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-red-500 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">{labels[i]}</span>
            </Link>
          );
        })}
      </nav>

      {/* Social Media Icons */}
      <div className="flex gap-4 justify-center md:justify-end">
        <a
          href="https://github.com/MuazamSyed98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/muazam-syed/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </header>
  );
}

export default Header;
