import React from 'react';

// <img src={src} className="background-image" alt="background" />

const BackgroundImage = ({ src }) => {
  return (
    <>
        
        <div className="parallax" style={{ backgroundImage: `url(${src})` }}></div>
    </>
  );
};

export default BackgroundImage;
