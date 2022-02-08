import Project from "./Project";
import "../stylesheets/Projects.css";
import gamrLogo from "../logos/Gamr-Logo.jpg";
import neighborhoodzLogo from "../logos/Neighborhoodz-Logo.png";
import joblyLogo from "../logos/Jobly-Logo.png";
import warblerLogo from "../logos/Warbler-Logo.png";

const Projects = () => {
  const projectsArr = [
    {
      title: "Gamr",
      logo: gamrLogo,
      description: "Meet your gaming match.",
      url: "https://app-gamr.herokuapp.com/",
    },
    {
      title: "Neighborhoodz",
      logo: neighborhoodzLogo,
      description: "Find your dream home.",
      url: "https://itaylorcodes-neighborhoodz.surge.sh/",
    },
    {
      title: "Jobly",
      logo: joblyLogo,
      description: "Discover your next job.",
      url: "https://itaylorcodes-jobly.surge.sh/",
    },
    {
      title: "Warbler",
      logo: warblerLogo,
      description: "",
      url: "https://warbler--twitter-clone.herokuapp.com/",
    },
  ];

  const projectComps = projectsArr.map((p) => {
    return <Project logo={p.logo} description={p.description} url={p.url} />;
  });

  return (
    <div className="Projects">
      <p className="bg-tag">{"< h2 >"}</p>
      <h2 className="mb-3">My Portfolio</h2>
      <p className="bg-tag">{"< / h2 >"}</p>
      <p className="bg-tag">{"< p >"}</p>
      <p className="Projects-info">
        A small gallery of some of my recent projects. Ranging from Real Estate
        and Job Board applications, to a Video Gamer Matchmaker and Social
        Network.
      </p>
      <p className="bg-tag">{"< / p >"}</p>

      <p className="bg-tag">{"< section >"}</p>
      <div className="Projects-projects row">{projectComps}</div>
      <p className="bg-tag">{"< / section >"}</p>
    </div>
  );
};

export default Projects;
