import React from 'react';
import activities from '../data/activities.json';

const Activities = () => {
  return (
    <section id="activities" className="activities-container">
      <h2>Activities</h2>
      <ul className="timeline">
        {activities.map((a, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-content">
              <h5>
                {a.title} {a.time && <span className="time">{a.time}</span>}
              </h5>
              {a.subtitle && <h6 className="subtitle">{a.subtitle}</h6>}
              <p>{a.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
