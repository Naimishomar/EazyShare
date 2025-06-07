import React from 'react';

const Loader = () => {
  return (
    <div className="p-4 rounded-2xl">
      <div className="text-gray-500 font-medium text-[25px] h-[40px] px-2 flex rounded-lg font-poppins">
        <p>loading</p>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#111] via-transparent to-[#111]"></div>
          <div className="animate-scrollWords text-[#956afa] pl-1">
            <span className="block h-full">texts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;