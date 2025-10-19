import React from 'react';
import JpgBackground from '../Background/JpgBackground';
import Background from '../Background/Background';
import emptyImg from '../../assets/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <JpgBackground className="opacity-20" /> 
      </div>
      <div className='absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2'>
        <Background/>
      </div>
      
      {/* 404 Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <img 
            src={emptyImg} 
            alt="404 Not Found" 
            className="h-60 mb-2" 
          />
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8 text-gray-300">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-lg bg-violet-600 rounded hover:bg-violet-700 transition-colors duration-300 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;