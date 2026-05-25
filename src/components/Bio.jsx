import React from 'react';
import headshot from '../../public/images/close_headshot.jpg';

const Bio = () => {
  return (
    <div id="home" className="bio">
      <div className="bio-header">
        <div className="bio-image">
          <img src={headshot} alt="Derek Williams" />
        </div>
        <div className="bio-header-text">
          <h1>Derek Williams</h1>
          <p className="bio-role">AI/ML Software Engineer</p>
        </div>
      </div>
      <p>
        AI engineer specializing in agentic workflows, retrieval pipelines, and domain-specific LLM systems.
        Currently building production Agentic AI systems supporting microfluidic chip manufacturing at HP Inc.
      </p>
      <p className="bio-location">
        Portland, OR - U.S. citizen, open to relocation.
      </p>
      <div className="bio-socials" aria-label="social links">
        <a href="https://github.com/derek-williams00" target="_blank" rel="noopener noreferrer">
          <img src="./images/github.svg" alt="" aria-hidden="true" className="bio-social-icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/derek-williams-116072148/" target="_blank" rel="noopener noreferrer">
          <img src="./images/LinkedIn_icon.png" alt="" aria-hidden="true" className="bio-social-icon" />
          LinkedIn
        </a>
        <a href="/Derek_Williams_Public_Resume_May_25_2026.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./images/person-circle.svg" alt="" aria-hidden="true" className="bio-social-icon" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Bio;
