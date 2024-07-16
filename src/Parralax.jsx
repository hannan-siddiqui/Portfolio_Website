import React from 'react';
import "./create.css";

const ParallaxComponent = () => {
  return (
    <div className="parallax">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="text-xl md:text-4xl">
          I'M
          <span className="ml-4 md:ml-10 font-bold text-4xl md:text-7xl text-yellow-400">
            the coder boy
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ParallaxComponent;
