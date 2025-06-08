import React, { useRef, useState, useEffect } from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import InputBox from './ui/inputBox';
import { useLocation } from 'react-router-dom';

function GetContent() {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('')
  const location = useLocation();
  const dataDetails = location.state?.dataDetails || {};
  useEffect(() => {
  setTitle(dataDetails.title || 'Untitled');
  setContent(dataDetails.content || '');
  setCode(dataDetails.customId || '');
}, [dataDetails]);

  const handleCopy = () => {
    if (textareaRef.current) {
      navigator.clipboard.writeText(textareaRef.current.value)
        .then(() => {
          console.log("Copied successfully");
        })
        .catch((err) => console.error("Copy failed:", err));
    }
  };

  return (
    <div className="relative w-[90vw] md:w-[70vw] mx-auto">
      {/* Title Input */}
      <h1 className='text-4xl mt-10 mb-3 md:mt-0 font-medium text-center'>Sharing Code: <span className='text-purple-300'>{code}</span></h1>
      <div className='p-[2px] rounded bg-gradient-to-r from-indigo-500 to-pink-600 mb-5'>
        <div className='rounded'>
          <h1 className="w-full py-2 px-3 outline-none bg-black text-white">{title}</h1>
        </div>
      </div>

      {/* Textarea */}
      <div className='p-[2px] rounded bg-gradient-to-r from-indigo-500 to-pink-600'>
        <div className='bg-black rounded'>
          <textarea
            defaultValue={`${content}`}
            ref={textareaRef}
            disabled
            className='p-3 rounded text-md min-h-[80vh] w-full overflow-scroll no-scrollbar focus:outline-none text-white bg-black'
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-between py-1.5">
        <div
          onClick={handleCopy}
          className='flex items-center cursor-pointer border-2 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-black rounded-md px-3'
        >
          <h1 className='font-bold'>Copy Text</h1>
          <IconButton variant="text" color="blue-gray" size="sm" className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </IconButton>
        </div>

      </div>
      <h1 className='text-center text-2xl mt-5 font-bold'>Share This Code:<span className='text-purple-300'>{code}</span></h1>
      <label className="flex justify-center text-xl font-bold px-2 py-1 rotate-[-1deg] brutalist-label text-red-500">
        (Code Valid for only 15 minutes)
      </label>
    </div>
  );
}

export default GetContent;
