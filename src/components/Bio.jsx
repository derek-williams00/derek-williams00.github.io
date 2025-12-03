import React from 'react';

import headshot from '../../public/images/headshot.jpg';

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-image">
        <img src={headshot} id="headshot" alt="Derek Williams" />
      </div>
      <div className="bio-text">
        <h2>Derek Williams</h2>
        <h4>Software Engineer - Developer Experience, Agentic AI Systems, Enterprise Tooling</h4>
        <p>
          Software engineer specializing in AI-driven developer experience, agentic systems, and secure enterprise tooling, with
          expertise in scalable retrieval pipelines, enterprise-context delivery, and AI integration across developer communities. I
          build secure, scalable developer tooling and AI-driven platforms focused on retrieval-augmented systems and agentic workflows,
          with experience delivering production MCP servers, vector-retrieval pipelines, and integrations that improve developer
          experience at scale.
        </p>
        <p>
          Based in Portland, OR - U.S. citizen; open to relocation across the U.S.
        </p>
        <div className="bio-socials" aria-label="social links">
          <a href="https://github.com/derek-williams00" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/derek-williams-116072148/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://devpost.com/derek-williams00" target="_blank" rel="noopener noreferrer">Devpost</a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
