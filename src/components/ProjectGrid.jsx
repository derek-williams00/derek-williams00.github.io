import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from './projects.json';

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
