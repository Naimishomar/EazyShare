import React from 'react'
import SocialMedia from './ui/SocialMedia'

function Footer() {
  return (
    <div className='w-full px-10 md:px-15 py-5'> 
      <div className='flex flex-wrap justify-between items-center relative'> 
          <div className="">
              <h1 className='text-5xl md:text-5xl font-bold mx-auto'>EasyShare</h1>
              <p className='text-md font-medium text-purple-400'>Share Anything Anonymously</p>
          </div>
          <div className='mt-5 md:mt-0'>
            <SocialMedia/>
          </div>
      </div>

      <div className='flex justify-between items-center mt-10'>
        <div>
          <h1 className='text-2xl font-semibold mb-3'>Features:</h1>
          <p>Online Text Sharing</p>
          <p>Convert Image to Text</p>
          <p>Real-Time Collaboration</p>
        </div>
        <div className=''>
          <img src="/nsc.jpg" className='w-[140px] h-[140px] object-cover rounded-full' alt="" />
        </div>
      </div>
      <div>
        <img src="/bmc_qr.png" className='w-20 mx-auto mt-5' alt="" />
      </div>
      <div className='text-center mt-10'>
        <h1>Made with ❤️ with <b>Naimish Omar</b></h1>
      </div>
    </div>
  )
}

export default Footer