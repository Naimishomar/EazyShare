import React, { useRef, useState } from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import InputBox from './ui/inputBox';
import { toast } from 'sonner';

function PostContent() {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('')

  const postData = async()=>{
    try {
        const response = await fetch('http://localhost:3000/share',{
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content,
            })
        });
        const data = await response.json();
        const result = data.setData.customId;
        setCode(result);
        toast.success("Sharing code generated successfully");
    } catch (error) {
        console.error("Internal Server error",error);
        toast.error(error);
    }
  }

  const handleCopy = () => {
    if (textareaRef.current) {
      navigator.clipboard.writeText(content)
        .then(() => {
          console.log("Copied successfully");
        })
        .catch((err) => console.error("Copy failed:", err));
    }
  };

  const handleErase = () => {
    setContent('');
  };

  return (
    <div className="relative w-[90vw] md:w-[70vw] mx-auto">
      <InputBox />
      {/* Title Input */}
      <h1 className='text-md font-medium'>Sharing Code:{code}</h1>
      <div className='p-[2px] rounded bg-gradient-to-r from-indigo-500 to-pink-600 mb-5'>
        <div className=' rounded'>
          <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            placeholder="Title (Optional)"
            className="w-full py-2 px-3 outline-none overflow-scroll bg-black text-white"
          />
        </div>
      </div>

      {/* Textarea */}
      <div className='p-[2px] rounded bg-gradient-to-r from-indigo-500 to-pink-600'>
        <div className='bg-black rounded'>
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Hi👋🏻You can type anything here"
            className='p-3 rounded text-md min-h-[80vh] w-full overflow-scroll no-scrollbar focus:outline-none text-white bg-black'
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-between py-1.5">
        <div
          onClick={handleCopy}
          className='flex items-center cursor-pointer border-2 border-indigo-500 hover:bg-indigo-500 hover:text-black rounded-md px-3'
        >
          <h1 className='font-bold'>Copy</h1>
          <IconButton variant="text" color="blue-gray" size="sm" className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </IconButton>
        </div>

        <Button size="sm" className="flex items-center cursor-pointer border-2 border-pink-500 hover:bg-pink-500 hover:text-black rounded-md px-5 md:px-10" onClick={postData}>Share Content</Button>

        <div className="flex gap-6">
          <Button
            onClick={handleErase}
            size="sm"
            color="red"
            variant="text"
            className='flex items-center cursor-pointer border-2 border-pink-400 hover:bg-pink-400 hover:text-black rounded-md px-3'
          >
            Erase All
          </Button>
        </div>
      </div>
      <h1 className='text-center text-2xl mt-5 font-bold'>Share This Code:{code}</h1>
    </div>
  );
}

export default PostContent;
