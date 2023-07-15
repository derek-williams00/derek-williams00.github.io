import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card project-card">

      <div className='projcet-card-header'>
        <h3 className="project-card-title">{project.title}</h3>
        <h4 className="project-card-subtitle">{project.subtitle}</h4>
      </div>

      <div className="project-card-body">
        {project.image ? (<img className="project-card-img" src={project.image} alt={project.title} />) : null}
        <p className="project-card-text">{project.description}</p>
      </div>

      <div className="project-card-footer">
        {project.github_link ? (
          <a href={project.github_link} target="_blank">
            
          </a>
        ) : null}

        {project.deployment_link ? (
          <a href={project.deployment_link} target="_blank">
            
          </a>
        ) : null}

        {project.devpost_link ? (
          <a href={project.devpost_link} target="_blank">
            
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
