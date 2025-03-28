import React from "react";
import { FaBoxOpen, FaGamepad } from "react-icons/fa";

function Projects() {
  return (
    <div className="flex flex-col items-center p-8 text-white min-h-screen bg-black">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Projects</h1>
      <p className="mb-12 text-gray-400 text-center max-w-2xl">
        Below are some of the projects I’ve worked on. Click to explore the code and features.
      </p>

      {/* Inventory Management System Project */}
      <a
        href="https://github.com/MuazamSyed98/InventoryManagementSystem"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 w-full max-w-3xl mx-auto mb-6"
      >
        <div className="bg-gray-700 p-4 rounded-xl mr-6">
          <FaBoxOpen size={40} className="text-white" />
        </div>
        <div className="flex flex-col text-left">
          <h2 className="text-xl font-bold mb-1">Project 1: Inventory Management System</h2>
          <p className="text-sm text-gray-300">
            A desktop-based product management system built with C#. Tracks inventory, categories,
            pricing, and quantity with a clean, user-friendly interface.
          </p>
        </div>
      </a>

      {/* Space Invaders Project */}
      <div className="flex items-center bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_5px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105 w-full max-w-3xl mx-auto mb-6">
        <div className="bg-gray-700 p-4 rounded-xl mr-6">
          <FaGamepad size={40} className="text-white" />
        </div>
        <div className="flex flex-col text-left flex-1">
          <h2 className="text-xl font-bold mb-1">Project 2: Space Invaders</h2>
          <p className="text-sm text-gray-300 mb-3">
            A retro-style arcade shooter game built using JavaScript, HTML, and CSS. Players control
            a spaceship to eliminate waves of enemies across 5 levels. Tracks score, handles
            enemy movement and player interactions for an engaging experience. Press Space to Shoot and arrow keys to move.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/MuazamSyed98/SpaceInvaders"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-blue-600 transition"
            >
              View Code
            </a>
            <a
              href="https://spaceinvaders02.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-green-600 transition"
            >
              Play Game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
