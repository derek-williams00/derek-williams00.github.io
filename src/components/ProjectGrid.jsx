import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
  ];

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
