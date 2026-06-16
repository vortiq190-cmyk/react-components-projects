import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <h1>Ebube Anyanwu</h1>

      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
    </div>
  )
}

export default App;
