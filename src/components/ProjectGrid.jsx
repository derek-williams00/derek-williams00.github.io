import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from './projects.json';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectGrid = () => {
  return (
    <div className="">
      {projects.map((project, index) => (
        <div className="col col-lg">
          <ProjectCard key={index} project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
