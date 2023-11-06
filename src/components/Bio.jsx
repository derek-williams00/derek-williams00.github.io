import React from 'react';

import headshot from '../../public/images/headshot.jpg';

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-image">
        <img src={headshot} id="headshot" alt="Derek Williams" />
      </div>
      <div className="bio-text">
        <p>
        Hello, World! I'm Derek Williams, a Computer Science student at Oregon State University, 
        expected to graduate in December 2024. Here I showcase my journey, projects, accomplishments,
        and ongoing work. I'm eager to contribute my skills to an organization that values 
        innovation, creativity, and positive social impact.
        </p>
      </div>
    </div>
  );
};

export default Bio;
