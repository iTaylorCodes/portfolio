const Project = ({ logo, description, url }) => {
  return (
    <div className="Project text-center col-4">
      <a href={url} target="_blank">
        <div className="card bg-dark text-black fw-bold">
          <img
            src={logo}
            className="card-img img-thumbnail"
            id="Project-image"
          />
          <div id="Project-text" className="card-img-overlay">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
