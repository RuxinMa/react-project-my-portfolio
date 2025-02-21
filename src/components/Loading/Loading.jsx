// Loading.jsx
import React from 'react';
import loadingSvg from '../../assets/about.svg';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="loader mb-4">
        <img 
          src={loadingSvg} 
          alt="Loading" 
          className="w-20 h-20 animate-spin"
        />
      </div>
      <h1 className="text-xl font-semibold text-white">Loading...</h1>
      <p className="mt-2 text-gray-200">Please wait while we load the content for you.</p>
    </div>
  );
};

// 添加默认导出
export default Loading;