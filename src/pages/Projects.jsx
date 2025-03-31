import React from "react";
import { FaBoxOpen, FaGamepad, FaSatelliteDish } from "react-icons/fa";

function Projects() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10 text-white min-h-screen bg-black">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6 text-center">Projects</h1>
      <p className="mb-12 text-gray-400 text-center max-w-2xl text-sm sm:text-base">
        Below are some of the projects I’ve worked on. Click to explore the code and features.
      </p>

      {/* Inventory Management System Project */}
      <a
        href="https://github.com/MuazamSyed98/InventoryManagementSystem"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 w-full max-w-3xl mb-6"
      >
        <div className="bg-gray-700 p-4 rounded-xl mb-4 sm:mb-0 sm:mr-6">
          <FaBoxOpen size={40} className="text-white" />
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <h2 className="text-xl font-bold mb-1">Project 1: Inventory Management System</h2>
          <p className="text-sm text-gray-300">
            A desktop-based inventory manager built using C#. Tracks products, pricing,
            stock levels, and categories with a modern and efficient interface.
          </p>
        </div>
      </a>

      {/* Space Invaders Project */}
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_5px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105 w-full max-w-3xl mb-6">
        <div className="bg-gray-700 p-4 rounded-xl mb-4 sm:mb-0 sm:mr-6">
          <FaGamepad size={40} className="text-white" />
        </div>
        <div className="flex flex-col flex-1 text-center sm:text-left">
          <h2 className="text-xl font-bold mb-1">Project 2: Space Invaders</h2>
          <p className="text-sm text-gray-300 mb-4">
            A classic space shooter game built with HTML, CSS, and JavaScript. Control a spaceship
            to defeat waves of enemies, track score, and progress through increasing levels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href="https://github.com/MuazamSyed98/SpaceInvaders"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-blue-600 transition text-center"
            >
              View Code
            </a>
            <a
              href="https://spaceinvaders02.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-green-600 transition text-center"
            >
              Play Game
            </a>
          </div>
        </div>
      </div>

      {/* OrbitalDoc Project */}
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_5px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105 w-full max-w-3xl mb-6">
        <div className="bg-gray-700 p-4 rounded-xl mb-4 sm:mb-0 sm:mr-6">
          <FaSatelliteDish size={40} className="text-white" />
        </div>
        <div className="flex flex-col flex-1 text-center sm:text-left">
          <h2 className="text-xl font-bold mb-1">Project 3: OrbitalDoc</h2>
          <p className="text-sm text-gray-300 mb-4">
            A full-stack satellite image comparison tool using React, Flask, TensorFlow, and Leaflet.
            Users can select dates and areas to compare land change, powered by AI-based classification
            and cloud filtering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href="https://github.com/MuazamSyed98/OrbitalDoc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-red-600 transition text-center"
            >
              View Code
            </a>
            <a
              href="https://orbitaldoc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-red-600 transition text-center"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
