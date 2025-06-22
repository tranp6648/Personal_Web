import { FaCodeBranch, FaUser } from "react-icons/fa";

const skills = [
  { name: "Frontend", percent: 90 },
  { name: "Backend", percent: 85 },
  { name: "DevOps", percent: 75 },
  { name: "Mobile", percent: 65 },
];

const tags = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "TailwindCSS",
  "Python",
  "Docker",
  "Git",
];

const AboutMe = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold inline-block relative text-white mb-1">
            About <span className="text-green-400">Me</span>
            <div className="absolute mt-1 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate developer with a love for clean code, strong coffee, and open source contributions.
          </p>
        </div>

        {/* GitHub Card */}
        <div className="bg-gray-950 rounded-lg p-4 lg:p-6 shadow-2xl border border-gray-800 mb-12">
          <div className="flex justify-between items-center border-b border-gray-700 p-4 mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/121284240?v=4"
                  className="size-8"
                  alt="avatar"
                />
              </div>
              <span className="text-gray-300 font-semibold text-sm sm:text-base">
                github.com/tranp6648
              </span>
            </div>
            <a
              href="https://github.com/tranp6648"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg border border-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaCodeBranch className="text-green-400" />
              Fork My GitHub
              <span className="bg-gray-700 text-gray-300 text-xs rounded px-2 py-0.5 ml-1">14</span>
            </a>
          </div>
          <div className="text-center mt-6 mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Trần Nguyễn Thanh Phong</h3>
            <p className="text-green-400 text-lg lg:text-xl">Java Developer</p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who I Am */}
          <div className="bg-gray-950 rounded-lg p-6 border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaUser className="text-green-400" />
              Who I Am
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Java developer with over 1 year of experience building backend services and web applications. I focus on writing clean, maintainable code and have hands-on experience with frameworks like Spring Boot and Hibernate.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              When I'm not coding, I explore new technologies, write tech blogs, and love diving deep into debugging challenges with a cup of coffee by my side.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">152</div>
                <div className="text-xs text-gray-400">Repositories</div>
              </div>
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">25</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">10+</div>
                <div className="text-xs text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Toolbox */}
          <section className="bg-[#0d1117] text-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-800 w-full">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-green-500 text-xl">{`</>`}</span>
              My <span className="text-white">Toolbox</span>
            </h2>

            {/* Skill bars */}
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tag list */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-sm text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
