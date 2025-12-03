import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card mb-4">
      {item.image && <a href={item.deployment_link} target="_blank" rel="noopener noreferrer">
        <img src={item.image} className="card-img-top" alt={item.title} loading="lazy" />
      </a>}
      <div className="card-body">
        <h6 className="card-time">{item.time}</h6>
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle">{item.subtitle}</h6>
        <p className="card-text">{item.description}</p>
        <div className="card-links">
            {item.deployment_link && <span className="deployment-link">
                <a href={item.deployment_link} target="_blank" rel="noopener noreferrer">
                  <img src="./images/rocket-takeoff.svg" alt="deployment link" loading="lazy" />
                  Deployment
                </a>
            </span>}
            {item.github_link && <span className="github-link">
                <a href={item.github_link} target="_blank" rel="noopener noreferrer">
                  <img src="./images/github.svg" alt="github link" loading="lazy" />
                  Repo
                </a>
            </span>}
            {item.devpost_link && <span className="devpost-link">
                <a href={item.devpost_link} target="_blank" rel="noopener noreferrer">
                  <img src="./images/nut.svg" alt="devpost link" loading="lazy" />
                  Post
                </a>
            </span>}
        </div>
        {item.link && <a href={item.link} className="btn btn-primary">View More</a>}
      </div>
    </div>
  );
};

export default Card;
