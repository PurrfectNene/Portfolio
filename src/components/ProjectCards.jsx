import projectsData from "../projects.json";
import "./ProjectCards.css";
import React, { useState } from "react";
import { Input } from "antd";

function ProjectCards() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* <div className="my-project-text">
      <img src='../../public/Images/my-projects.png' alt='my-projects'/>
</div> */}

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

      <div className="project-style">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              className="project-img"
              src={project.image}
              alt={project.project_name}
            />
            <h2>{project.project_name}</h2>
            {/* <p><strong>Date:</strong> {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).replace(' ', '-')}</p>
            <p>{project.description}</p>
            <p><strong>Technologies used:</strong> {project.technologies.join(", ")}</p> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit the project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
