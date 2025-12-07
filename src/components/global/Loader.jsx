import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <style>
        {`
          @keyframes loader_901 {
            0% {
              transform: scale(1);
            }
            20% {
              transform: scale(1.2);
            }
            40% {
              transform: scale(1);
            }
          }
          .loader-circle {
            animation: loader_901 1s ease-in-out infinite;
          }
        `}
      </style>
      <div 
        className="loader-circle w-3.5 h-3.5 rounded-full mx-1"
        style={{ backgroundColor: '#007aff', animationDelay: '0s' }}
      />
      <div 
        className="loader-circle w-3.5 h-3.5 rounded-full mx-1"
        style={{ backgroundColor: '#ff2d55', animationDelay: '0.25s' }}
      />
      <div 
        className="loader-circle w-3.5 h-3.5 rounded-full mx-1"
        style={{ backgroundColor: '#34c759', animationDelay: '0.5s' }}
      />
      <div 
        className="loader-circle w-3.5 h-3.5 rounded-full mx-1"
        style={{ backgroundColor: '#ff9500', animationDelay: '0.75s' }}
      />
    </div>
  );
};

export default Loader;