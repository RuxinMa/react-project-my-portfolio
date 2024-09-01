import React from 'react';

const Background = ({ className = '' }) => {
  return (
    <div className={className}>
      <svg width="392" height="343" viewBox="0 0 392 343" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="196" cy="171.5" rx="196" ry="171.5" fill="url(#paint0_radial_16_10)"/>
        <defs>
          <radialGradient id="paint0_radial_16_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196 171.5) rotate(90) scale(171.5 196)">
            <stop stopColor="#763CAC"/>
            <stop offset="1" stopColor="#320F85" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Background;