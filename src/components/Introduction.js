import "../stylesheets/Introduction.css";
import iTLogo from "../logos/iT-logo.png";
import reactLogo from "../logos/react-logo.svg";

const Introduction = () => {
  return (
    <div className="Introduction">
      <div className="Intro-header">
        <p className="bg-tag">{"< h1 >"}</p>
        <h1>
          <span className="animate-char">H</span>
          <span className="animate-char">i</span>
          <span className="animate-char">!</span>
          <br />
          <span className="animate-char">I</span>
          <span className="animate-char">'</span>
          <span className="animate-char">m</span>
          <span> </span>
          <img src={iTLogo} className="logo" />
          <span className="animate-char">a</span>
          <span className="animate-char">y</span>
          <span className="animate-char">l</span>
          <span className="animate-char">o</span>
          <span className="animate-char">r</span>
          <span className="animate-char">,</span>
          <br />
          <span className="animate-char">a</span>
          <span> </span>
          <span className="animate-char">s</span>
          <span className="animate-char">o</span>
          <span className="animate-char">f</span>
          <span className="animate-char">t</span>
          <span className="animate-char">w</span>
          <span className="animate-char">a</span>
          <span className="animate-char">r</span>
          <span className="animate-char">e</span>
          <span> </span>
          <span className="animate-char">d</span>
          <span className="animate-char">e</span>
          <span className="animate-char">v</span>
          <span className="animate-char">e</span>
          <span className="animate-char">l</span>
          <span className="animate-char">o</span>
          <span className="animate-char">p</span>
          <span className="animate-char">e</span>
          <span className="animate-char">r</span>
        </h1>
        <p className="bg-tag">{"< / h1 >"}</p>
      </div>
      <p className="bg-tag">{"< p >"}</p>
      <div className="Intro-description">
        <img src={reactLogo} className="React-logo" />
        Front End / React Developer
        <img src={reactLogo} className="React-logo" />
      </div>
      <p className="bg-tag">{"< / p >"}</p>
      <div className="Intro-contact-me">
        <a href="#contact">
          <button className="Intro-contact-me-button">Contact me!</button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
