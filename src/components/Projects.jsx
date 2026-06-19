const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS showcasing my skills, projects, and experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity application that allows users to create, update, and manage tasks efficiently.",
      technologies: ["React", "Local Storage", "JavaScript"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that fetches and displays real-time weather data from an external API.",
      technologies: ["React", "API", "JavaScript"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A classic two-player tic-tac-toe game built with React featuring win detection and reset functionality.",
      technologies: ["React", "Game Logic", "JavaScript"],
    },
    {
      title: "Gigsta - Cleaning Company Website",
      description:
        "A modern, responsive website for a cleaning company showcasing services, pricing, and contact information.",
      technologies: ["React", "Tailwind CSS", "UI Design"],
    },
    {
      title: "Doggo Fetch Game",
      description:
        "A fun dog breed guessing game that fetches random dog images from the Dog CEO API and challenges users to guess the correct breed.",
      technologies: ["JavaScript", "API", "Game Logic"],
    },
    {
      title: "JavaScript Quiz App",
      description:
        "An interactive quiz application that tests knowledge of JavaScript concepts with multiple-choice questions and score tracking.",
      technologies: ["React", "JavaScript", "State Management"],
    },
  ];

  return (
    <section className="skill-section py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-3">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          A collection of software development projects showcasing my
          frontend skills, logic building, and API integration.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;