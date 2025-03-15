import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/prof_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-b from-gray-900 via-black to-black text-white border-b-2 border-red-500 shadow-md">
      {/* Profile and Title */}
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <h1 className="text-2xl font-bold">Muazam Syed's Portfolio</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-8">
        <Link
          to="/"
          className="relative inline-block px-6 py-2 font-semibold border border-red-500 text-red-500 rounded overflow-hidden group hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-red-500 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
          <span className="relative">Home</span>
        </Link>
        <Link
          to="/projects"
          className="relative inline-block px-6 py-2 font-semibold border border-red-500 text-red-500 rounded overflow-hidden group hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-red-500 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
          <span className="relative">Projects</span>
        </Link>
        <Link
          to="/contact"
          className="relative inline-block px-6 py-2 font-semibold border border-red-500 text-red-500 rounded overflow-hidden group hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-red-500 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
          <span className="relative">Contact</span>
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex gap-4 ml-8"> {/* Added ml-8 for spacing */}
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
