import projectsData from "../projects.json";
import "./ProjectCards.css";
import { useState } from "react";
import { Input } from "antd";
import reactImg from '../Icons/react.gif'
import jsImg from '../Icons/js.gif'
import cssImg from '../Icons/CSS.gif'
import htmlImg from '../Icons/HTML.gif'
import mongodbImg from '../Icons/mongodb.gif'
import postmanImg from '../Icons/postman.svg'
import githubImg from '../Icons/github.gif'
import nodejsImg from '../Icons/node.svg'
import expressjsImg from '../Icons/express.svg'

const techImages = {
  "React": reactImg,
  "JavaScript": jsImg,
  "CSS": cssImg,
  "HTML": htmlImg,
  "MongoDB": mongodbImg,
  "Postman": postmanImg,
  "GitHub": githubImg,
  "Node.js": nodejsImg,
  "Express.js": expressjsImg
};


function ProjectCards() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
     
 {/* SEARCH BAR LOGIC */}
      {/* <div className="search-bar-container">
        <div className="search-bar">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div> */}

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
                        style={{ width: '30px', height: '30px', marginRight: '5px' }}
                      />
                    ) : (
                      <span>{tech}</span>
                    )}
                  </div>
                ))}
              </div>
            </p>

          
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectCards;
