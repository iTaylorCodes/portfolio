import "./stylesheets/App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App row">
      <div className="App-navbar col-2">
        <Navbar />
      </div>
      <div className="App-content col-10">
        <p className="bg-tag-html">{"< html >"}</p>
        <p className="bg-tag-body">{"< body >"}</p>
        <div className="App-sections">
          <section id="intro">
            <Introduction />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
        <p className="bg-tag-body">{"< / body >"}</p>
        <p className="bg-tag-html">{"< / html >"}</p>
      </div>
    </div>
  );
}

export default App;
