import "../stylesheets/Skills.css";

const Skills = () => {
  return (
    <div className="Skills row">
      <div className="col-11 col-md-10 col-xl-8 transition-width">
        <p className="bg-tag">{"< h2 >"}</p>
        <h2>Skills & Experience</h2>
        <p className="bg-tag">{"< / h2 >"}</p>
        <p className="bg-tag">{"< p >"}</p>
        <div className="Skills-info">
          <p>
            Programming has always been a hobby, but after creating my first
            website, for my wedding, I knew web development was my future. Soon
            after, I enrolled in the Springboard Software Engineer Career Track
            to hone my skills and smooth my transition into software
            development.
          </p>
          <p>
            Now, a certified Full-Stack Developer, I am searching for a company
            that shares my values, where I can further grow my skillset and
            quench my insatiable thirst for knowledge.
          </p>
        </div>
        <p className="bg-tag">{"< / p >"}</p>
        <div className="Skills-graph">
          <p className="primary-skill" id="front-end">
            Front-end
            <span className="secondary-skill">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </span>
          </p>
          <p className="primary-skill" id="back-end">
            Back-end
            <span className="secondary-skill">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Python</span>
              <span>Flask</span>
            </span>
          </p>
          <p className="primary-skill" id="react">
            React.js
            <span className="secondary-skill">
              <span>Redux</span>
              <span>React-Router</span>
              <span>Jest</span>
            </span>
          </p>
          <p className="primary-skill" id="sql">
            SQL
            <span className="secondary-skill">
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
