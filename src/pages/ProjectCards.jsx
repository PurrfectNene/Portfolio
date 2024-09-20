import projectsData from "../projects.json";
import "./ProjectCards.css";
import { useState } from "react";
import reactImg from "../Icons/react.gif";
import jsImg from "../Icons/js.gif";
import cssImg from "../Icons/CSS.gif";
import htmlImg from "../Icons/HTML.gif";
import mongodbImg from "../Icons/mongodb.gif";
import postmanImg from "../Icons/postman.svg";
import githubImg from "../Icons/github.gif";
import nodejsImg from "../Icons/node.svg";
import expressjsImg from "../Icons/express.svg";

const techImages = {
  React: reactImg,
  JavaScript: jsImg,
  CSS: cssImg,
  HTML: htmlImg,
  MongoDB: mongodbImg,
  Postman: postmanImg,
  GitHub: githubImg,
  "Node.js": nodejsImg,
  "Express.js": expressjsImg,
};

function ProjectCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(
    (project) =>
      project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewMore = (projectName) => {
    const project = projectsData.find((p) => p.project_name === projectName);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {/* SEARCH BAR LOGIC */}
      {/* 
      <div className="search-bar-container">
        <div className="search-bar">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div> 
      */}

      <div className="project-style">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-img"
                src={project.image}
                alt={project.project_name}
              />
            </a>
            <h2>{project.project_name}</h2>

            <p>
              <strong>Technologies:</strong>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <div className="technology" key={idx}>
                    {techImages[tech] ? (
                      <img
                        src={techImages[tech]}
                        alt={tech}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                      />
                    ) : (
                      <span>{tech}</span>
                    )}
                  </div>
                ))}
              </div>
            </p>
            <button
              className="view-more-button"
              onClick={() => handleViewMore(project.project_name)}
            >
              View more details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.project_name}</h2>
            {/* <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">  
            <img
              src={selectedProject.image}
              alt={selectedProject.project_name}
              className="modal-project-img"
              style={{ width: "100%" }} 
            />
            </a> */}
            <p style={{ fontWeight: "500" }}>
              <div
                className="modal-description"
                dangerouslySetInnerHTML={{
                  __html: selectedProject.description,
                }}
              />
            </p>
            <div>
              <button
                className="project-link"
                style={{ width: "250px", textAlign: "center" }}
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                Visit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
