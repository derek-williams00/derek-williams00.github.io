import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card mb-4">
      {item.image && <a href={item.deployment_link} target="_blank">
        <img src={item.image} className="card-img-top" alt={item.title} />
      </a>}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle">{item.subtitle}</h6>
        <p className="card-text">{item.description}</p>
        <div className="card-links">
            {item.deployment_link && <span className="deployment-link">
                <a href={item.deployment_link} target="_blank">
                    <img src="./images/rocket-takeoff.svg" alt="deployment link" />
                </a>
            </span>}
            {item.github_link && <span className="github-link">
                <a href={item.github_link} target="_blank">
                    <img src="./images/github.svg" alt="github link" />

                </a>
            </span>}
            {item.devpost_link && <span className="devpost-link">
                <a href={item.devpost_link} target="_blank">
                    <img src="./images/nut.svg" alt="devpost link" />
                </a>
            </span>}
        </div>
        {item.link && <a href={item.link} className="btn btn-primary">View More</a>}
      </div>
    </div>
  );
};

export default Card;
