import React from 'react';
import activities from '../data/activities.json';

const Activities = () => {
  return (
    <section id="journey" className="activities-container">
      <h2>Journey</h2>
      <ul className="timeline">
        {activities.map((a, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-content">
              <h5>
                {a.title} {a.time && <span className="time">{a.time}</span>}
              </h5>
              {a.subtitle && <span className="subtitle">{a.subtitle}</span>}
              <p>{a.description}</p>
              {a.images && a.images.length === 1 && (
                <img
                  src={a.images[0]}
                  alt={a.title}
                  className="timeline-photo"
                  loading="lazy"
                />
              )}
              {a.images && a.images.length > 1 && (
                <div className="timeline-photos">
                  {a.images.map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt={`${a.title} ${j + 1}`}
                      className="timeline-photo"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
