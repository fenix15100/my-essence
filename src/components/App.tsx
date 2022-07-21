import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const App = ()=> {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About/>
      <Projects/>
      <Skills/>
    </main>
  );
}

export default App;
