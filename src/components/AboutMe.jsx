import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col items-center p-8">
      {/* Skills Section (At the top) */}
      <div className="w-full px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Skill 1: Frontend */}
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-red-500 hover:shadow-lg hover:border hover:border-red-500 transition-shadow duration-300">
            <h3 className="text-primary font-bold">Frontend</h3>
            <p>React, Tailwind CSS, JavaScript</p>
          </div>

          {/* Skill 2: Backend */}
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-red-500 hover:shadow-lg hover:border hover:border-red-500 transition-shadow duration-300">
            <h3 className="text-primary font-bold">Backend</h3>
            <p>Node.js, Express, MySQL</p>
          </div>

          {/* Skill 3: DevOps */}
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-red-500 hover:shadow-lg hover:border hover:border-red-500 transition-shadow duration-300">
            <h3 className="text-primary font-bold">DevOps</h3>
            <p>Docker, AWS, Netlify</p>
          </div>

          {/* Skill 4: Other Tools */}
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-red-500 hover:shadow-lg hover:border hover:border-red-500 transition-shadow duration-300">
            <h3 className="text-primary font-bold">Other Tools</h3>
            <p>Postman, Git, Agile</p>
          </div>
        </div>
      </div>

      {/* About Me Section with Styled Box Heading */}
      <div className="relative w-full flex flex-col items-center mt-16">
        <div className="border-2 border-yellow-500 px-6 py-2 rounded-full inline-block">
          <h1 className="text-2xl font-bold text-yellow-500 text-center">About Me</h1>
        </div>
      </div>

            {/* About Me Content */}
            <div className="mt-8 text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-red-500 mb-4">What I Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Technology & Software Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-500">Technology & Software Development</h3>
            <p className="text-gray-400 mt-2">
              I specialize in full-stack development, cloud computing, and DevOps. My technical stack includes Java, Python, SQL, AWS, Angular, React, C, and C#. 
              I enjoy building scalable applications, web platforms, and especially games that bring innovative ideas to life.
            </p>
          </div>

          {/* Real Estate & Communication */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Real Estate & Communication</h3>
            <p className="text-gray-400 mt-2">
              As a Licensed real estate agent, I am passionate about learning commercial real estate in the future. I focus on building strong client relationships and understanding market trends. 
              My goal is to develop a strong professional network.
            </p>
          </div>

          {/* Aspirations & Goals */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300 col-span-2">
            <h3 className="text-xl font-semibold text-green-400">My Aspirations & Goals</h3>
            <ul className="list-disc text-gray-400 ml-6 mt-2">
              <li><strong>Technology:</strong> Secure a Summer 2025 software engineering internship.</li>
              <li><strong>Real Estate:</strong> Build a career in residential real estate and expand my network.</li>
              <li><strong>Personal Growth:</strong> Continuously improve my technical, analytical, and interpersonal skills.</li>
            </ul>
          </div>

          {/* Personal Values */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300 col-span-2 text-center">
            <h3 className="text-xl font-semibold text-purple-400">Creativity, Discipline, Resilience, and Teamwork</h3>
            <p className="text-gray-400 mt-2">
              My Past experiences in Jiu-Jitsu and rowing have shaped my determination and teamwork skills, which I apply in both my tech and real estate careers.
            </p>
          </div>

        </div>
      </div>


      {/* Extra Space for Clean Layout */}
      <div className="h-[400px]"></div>
    </section>
  );
}

export default AboutMe;
