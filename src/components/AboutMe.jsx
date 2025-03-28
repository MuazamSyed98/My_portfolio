import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10">
      {/* Skills Section */}
      <div className="w-full mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Frontend", tools: "React, Tailwind CSS, JavaScript" },
            { title: "Backend", tools: "Node.js, Express, MySQL" },
            { title: "DevOps", tools: "Docker, AWS, Netlify" },
            { title: "Other Tools", tools: "Postman, Git, Agile" }
          ].map(({ title, tools }) => (
            <div
              key={title}
              className="bg-gray-800 p-6 rounded shadow hover:shadow-red-500 hover:border hover:border-red-500 transition-shadow duration-300"
            >
              <h3 className="text-primary font-bold">{title}</h3>
              <p>{tools}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Me Title Box */}
      <div className="mb-10">
        <div className="border-2 border-yellow-500 px-6 py-2 rounded-full inline-block">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 text-center">About Me</h1>
        </div>
      </div>

      {/* About Me Content */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Technology & Real Estate */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-500">Technology & Software Development</h3>
            <p className="text-gray-400 mt-2">
              I specialize in full-stack development, cloud computing, and DevOps. My stack includes Java, Python, SQL, AWS, Angular, React, C, and C#. I enjoy building scalable applications and interactive web platforms.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Real Estate & Communication</h3>
            <p className="text-gray-400 mt-2">
              As a licensed real estate agent, I focus on strong client relationships and understanding market trends. My goal is to break into commercial real estate and build a powerful network.
            </p>
          </div>

          {/* Aspirations */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300 md:col-span-2">
            <h3 className="text-xl font-semibold text-green-400">My Aspirations & Goals</h3>
            <ul className="list-disc text-gray-400 ml-6 mt-2 space-y-1">
              <li><strong>Technology:</strong> Secure a 2025 software engineering internship.</li>
              <li><strong>Real Estate:</strong> Grow a career in residential real estate.</li>
              <li><strong>Growth:</strong> Keep building my technical and interpersonal skills.</li>
            </ul>
          </div>

          {/* Values */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-red-500 transition duration-300 md:col-span-2 text-center">
            <h3 className="text-xl font-semibold text-purple-400">Creativity, Discipline, Teamwork</h3>
            <p className="text-gray-400 mt-2">
              Jiu-Jitsu and rowing taught me discipline and teamwork — values I bring into both tech and real estate.
            </p>
          </div>
        </div>
      </div>

      {/* Padding */}
      <div className="h-20 sm:h-32"></div>
    </section>
  );
}

export default AboutMe;
