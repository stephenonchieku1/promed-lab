import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full h-screen space-x-8 p-8">
          <div className="text-left">
            <h1 className="text-5xl font-bold">Welcome to My Website</h1>
            <p className="text-xl">This is a sample homepage built with React and Tailwind CSS.</p>
          </div>
          <div className="flex items-center  pl-8">
            <div className="bg-gray-300 rounded-full h-96 w-96 overflow-hidden">
              <img src="path/to/your/image.jpg" alt="Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
