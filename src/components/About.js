import { useState } from "react";
import "../stylesheets/About.css";

const About = () => {
  const [bioLength, setBioLength] = useState(3);

  const bio = {
    1: "Ian Taylor follows his dreams.",
    2: "Ian Taylor is a Full-Stack Developer with a passion for the Front End and creating intuitive user interfaces. He loves tech and follows his dreams.",
    3: "Ian Taylor is a Full-Stack Developer with a passion for the Front End and creating intuitive user interfaces. He has had a love of technology since he was a kid, and followed his dream by becoming a software developer. He lives in Los Angeles, CA.",
    4: "Ian Taylor is a Full-Stack Developer with a passion for the Front End and creating intuitive user interfaces. He spent the early years of his career as a leader in the customer service industry, building successful teams by focusing on creating healthy environments through trust and transparency. Even as a child, Ian had a love of technology, and decided to follow his dreams and enter the tech industry as a software developer. He lives in Los Angeles, CA.",
    5: "Ian Taylor is a Full-Stack Developer with a passion for the Front End and creating intuitive user interfaces. He spent the early years of his career as a leader in the customer service industry, building successful teams by focusing on creating healthy environments through trust and transparency. Even as a child, Ian had a love of technology, and decided to follow his dreams and enter the tech industry as a software developer. He favors the PERN stack becuase JavaScript is the language that keeps on giving. He lives with his husband, Joey, and dog, Oliver, in his home city of Los Angeles, California.",
  };

  const handleRadio = (e) => {
    let length = e.target.value;
    setBioLength(length);
  };

  return (
    <div className="About row">
      <div className="col-11 col-md-10 col-xl-8 transition-width">
        <p className="bg-tag">{"< h2 >"}</p>
        <h2>About Me</h2>
        <p className="bg-tag">{"< / h2 >"}</p>
        <p className="bg-tag">{"< section >"}</p>
        <div className="About-bio-adjuster">
          <p>Adjust Bio Length:</p>
          <div className="row ms-2" onChange={handleRadio}>
            <div className="col-1">
              <input
                id="bio-1"
                type="radio"
                name="bioLength"
                value="1"
                className="form-check-input"
              />
            </div>
            <div className="col-1">
              <input
                id="bio-2"
                type="radio"
                name="bioLength"
                value="2"
                className="form-check-input"
              />
            </div>
            <div className="col-1">
              <input
                id="bio-3"
                type="radio"
                name="bioLength"
                value="3"
                className="form-check-input"
              />
            </div>
            <div className="col-1">
              <input
                id="bio-4"
                type="radio"
                name="bioLength"
                value="4"
                className="form-check-input"
              />
            </div>
            <div className="col-1">
              <input
                id="bio-5"
                type="radio"
                name="bioLength"
                value="5"
                className="form-check-input"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label htmlFor="bio-1" className="form-check-label">
                Shortest
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="bio-5" className="form-check-label">
                Longest
              </label>
            </div>
          </div>
        </div>
        <p className="bg-tag">{"< / section >"}</p>
        <p className="bg-tag">{"< p >"}</p>
        <p className="About-bio">{bio[bioLength]}</p>
        <p className="bg-tag">{"< / p >"}</p>
      </div>
    </div>
  );
};

export default About;
