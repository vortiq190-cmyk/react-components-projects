const SkillsSection = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
    "REST APIs",
    "Node.js",
    "MongoDB",
    "Express.js",
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;