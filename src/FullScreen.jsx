import React from 'react';

const FullScreen = () => {
  return (
    <div className="w-screen h-screen">
      <svg
        viewBox="0 0 700 700"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        opacity="1"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="9"
              specularConstant="3"
              specularExponent="20"
              lightingColor="#ff0000"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="177"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#000000ff"></rect>
        <rect width="100%" height="100%" fill="#ff0000" filter="url(#nnnoise-filter)"></rect>
      </svg>
    </div>
  );
};

export default FullScreen;
