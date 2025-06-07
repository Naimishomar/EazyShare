import React from 'react';

const InputBox = () => {
  return (
    <div className="relative flex justify-center items-center pt-10 md:py-5">
      {/* Grid Background */}
      <div className="absolute bg-[length:1rem_1rem] bg-[center_center] bg-[linear-gradient(to_right,theme(colors.gray.900)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.900)_1px,transparent_1px)] blur-sm -z-10 bg-red-400" />

      {/* Layers */}
      <div className="relative">
        <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 -z-10" />
        <div className="absolute inset-0 rounded-xl blur-sm bg-gradient-to-br from-indigo-800 via-black to-purple-900 -z-10" />

        {/* Main Input Box */}
        <div className="relative w-[90vw] md:w-[50vw] h-15 rounded-lg bg-[#010201] text-white flex items-center pl-13 pr-2">
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="url(#search)">
              <circle cx={11} cy={11} r={8} />
              <line x1={22} y1={22} x2={16.65} y2={16.65} stroke="url(#searchl)" />
              <defs>
                <linearGradient id="search" gradientTransform="rotate(50)">
                  <stop offset="0%" stopColor="#f8e7f8" />
                  <stop offset="50%" stopColor="#b6a9b7" />
                </linearGradient>
                <linearGradient id="searchl">
                  <stop offset="0%" stopColor="#b6a9b7" />
                  <stop offset="50%" stopColor="#837484" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <input
            type="text"
            name="text"
            placeholder="Want to generate from AI..."
            className="w-full bg-transparent text-white placeholder-[#c0b9c0] outline-none"
          />

          {/* Filter Icon */}
        <div>
            <button className="py-2 px-5 rounded-lg flex justify-center items-center gap-3 bg-[#1C1A1C] cursor-pointer transition-all duration-[450ms] ease-in-out hover:bg-gradient-to-t hover:from-[#A47CF3] hover:to-[#683FEA] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_0_rgba(0,0,0,0.2),0_0_0_4px_rgba(255,255,255,0.2),0_0_180px_0_#9917FF] group">
                <svg
                height={30}
                width={30}
                viewBox="0 0 24 24"
                className="fill-[#AAAAAA] transition-all duration-[800ms] ease-in-out group-hover:fill-white group-hover:scale-125"
                >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
                </svg>
                <span className="text-[#AAAAAA] font-semibold text-base group-hover:text-white transition-colors duration-300">
                Generate
                </span>
            </button>
        </div>


        </div>
      </div>
    </div>
  );
};

export default InputBox;