import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <h4>{project.subtitle}</h4>
      {project.image ? (<img className="project-card-img" src={project.image} alt={project.title} />) : null}
      <p>{project.description}</p>

      <div className="card-footer">
        {project.github_link ? (
          <a href={project.github_link} target="_blank">
            <img className="github-img" src={'/images/github-logo.png'} alt={'Github'} />
          </a>
        ) : null}

        {project.deployment_link ? (
          <a href={project.deployment_link} target="_blank">
            <img className="deployment-img" src={'/images/deployment-logo.png'} alt={'Deployment'} />
          </a>
        ) : null}

        {project.devpost_link ? (
          <a href={project.devpost_link} target="_blank">
            <img className="devpost-img" src={'/images/devpost-logo.png'} alt={'Devpost'} />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
