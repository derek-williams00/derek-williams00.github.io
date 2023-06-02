import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.link ? (
        <h3>
          <a href={project.link}>{project.title}</a>
        </h3>
      ) : (
        <h3>{project.title}</h3>
      )}
      <p>{project.description}</p>
      {project.image ? (<img className="project-card-img" src={project.image} alt={project.title} />) : null}
    </div>
  );
};

export default ProjectCard;