import "./stylesheets/default-styles.css";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="App-navbar"></div>
      <div className="App-content">
        <p className="bg-tag" style={{ marginLeft: "-40px" }}>
          {"< html >"}
        </p>
        <p className="bg-tag" style={{ marginLeft: "-30px" }}>
          {"< body >"}
        </p>
        <section id="intro">
          <Introduction />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <p className="bg-tag" style={{ marginLeft: "-30px" }}>
          {"< / body >"}
        </p>
        <p className="bg-tag" style={{ marginLeft: "-40px" }}>
          {"< / html >"}
        </p>
      </div>
    </div>
  );
}

export default App;
