import React from 'react';


const BackgroundImage = ({ src }) => {
  return (
    <>
        <div className="parallax" style={{ backgroundImage: `url(${src})` }}></div>
    </>
  );
};

export default BackgroundImage;
