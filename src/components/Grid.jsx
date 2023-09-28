import React, {useState, useEffect} from 'react';
import Card from './Card.jsx';

const Grid = ({id, title, items}) => {
    return (
        <div id={id} className="grid-container">
          <h2>{title}</h2>
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      );
};

export default Grid;