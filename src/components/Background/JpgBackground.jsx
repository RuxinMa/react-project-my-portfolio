import React from 'react';
import bgImage from '../../assets/home-bg.jpg';

const JpgBackground = ({ className = '' }) => {
  return (
    <div 
      className={`${className} absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
};

export default JpgBackground;