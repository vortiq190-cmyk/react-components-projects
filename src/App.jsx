import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import profile from "./assets/profile.jpg";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Laura Ezurike
        </h1>

         <img
          src={profile}
          alt="Laura Ezurike"
          className="mx-auto rounded-full w-48 h-48 object-cover border-4 border-cyan-500 shadow-lg"
        />

        <p className="text-center text-gray-300 mb-8">
          Badass Developer
        </p>

        <div className="flex justify-center mb-16">
          <a
            href="https://github.com/your-github-vortiq190-cmyk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 shadow-lg hover:scale-105 font-semibold"
          >
            Visit GitHub
          </a>
        </div>
      </div>
      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
    </div>
  )
}

export default App;
