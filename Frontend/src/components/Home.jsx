import React,{useState} from 'react'
import RotatingText from './ui/RotatingText'
import InputBox from './ui/inputBox'
import Loader from './ui/Loader'
import GradientText from './ui/GradientText'
import ShareButton from './ui/ShareButton'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Home() {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

  const getData = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/get/${code}`,{
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            },
        });
        const data = await response.json();
        const dataDetails = data.dataDetails;
        navigate(`/get/${code}`, {state:{dataDetails}})
        toast.success("Data fetched successfully");
    } catch (error) {
        console.error("Internal Server error",error);
        toast.error(error);
    }
  }

  return (
    <div className='w-full'>
        <div className='pt-10'>
            <RotatingText
                texts={['- Just write and send', '- Paste Share Done']} 
                velocity={40}
                className="custom-scroll-text cursor-default"
            />
        </div>
        <div className='relative w-[80vw] md:w-[25vw] font-mono mx-auto py-20 flex items-center'>
            <input
                placeholder="TYPE CODE HERE"
                type="text"
                value={code}
                onChange={(e)=> setCode(e.target.value)}
                className="brutalist-input smooth-type w-full p-4 text-lg font-bold text-black bg-white border-[4px] border-black outline-none shadow-[5px_5px_0_#000,10px_10px_0_#4a90e2] placeholder:text-[#888] focus:placeholder-transparent"
            />
            <div className="relative -ml-1">
                <button className="bg-[#2389e9] p-[30px] text-white flex justify-center items-center border-none transition-all duration-500 cursor-pointer relative before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:bg-[length:100%] before:bg-no-repeat before:bg-center before:bg-[url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTczLjE4IDE5OC42MnYwbC0zOTYuMDkgNjMuNzE5Yy03Ljc1IDAuODU5MzgtOS40NzI3IDExLjE5NS0zLjQ0NTMgMTUuNWw5Ny4zMDEgNjguODgzLTE1LjUgMTEyLjhjLTAuODU5MzggNy43NSA3Ljc1IDEyLjkxNCAxMy43NzcgNy43NWw1NS4xMDktNDQuNzczIDI2LjY5MSAxMjQuODVjMS43MjI3IDcuNzUgMTEuMTk1IDkuNDcyNyAxNS41IDIuNTgybDIxNS4yNy0zMzguMzljMy40NDE0LTYuMDI3My0xLjcyNjYtMTMuNzc3LTguNjEzMy0xMi45MTR6bS0zNzIuODQgNzYuNjMzIDMxMy40Mi00OS45NDEtMjMzLjM0IDEwNy42M3ptNzQuMDUxIDE2NS4zMiAxMi45MTQtOTIuMTMzYzgwLjkzOC0zNy4wMjcgMTM5LjQ5LTY0LjU3OCAyMjkuMDQtMTA1LjkxLTEuNzE4OCAxLjcyMjctMC44NTkzNyAwLjg1OTM4LTI0MS45NSAxOTguMDR6bTg4LjY4OCA4Mi42Ni0yNC4xMDktMTEyLjggMTk5Ljc3LTE2Mi43NHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==')] before:transition-all before:duration-1000 hover:before:ml-0 hover:before:rotate-[24deg]" onClick={getData}>
                </button>
            </div>
            <label className="absolute -left-1 top-12 text-sm font-bold px-2 py-1 rotate-[-1deg] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] z-10 brutalist-label">
                Enter sharing code
            </label>
        </div>

        <div className=''>
            <GradientText
                colors={["#A47CF3", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-center"
                >
                A minimalist and fast <br /> platform to share text, <br /> code, and ideas instantly <br /> without signup
            </GradientText>
            <p className='text-center text-3xl mt-15 md:mt-5  px-5 md:text-5xl'><span className='font-semibold text-pink-500'>Type. Share. Done.</span> A lightning-fast way to share text and code — no fluff, no ads, just your words and a link.</p>
        </div>
        <Link to='/share'>
            <ShareButton/>
        </Link>
        <div className='flex justify-center items-center flex-wrap w-full px-10 py-5'>
            <img src="/collaborator.png" className='' alt="" />
            <div className=''>
                <h1 className='text-5xl font-semibold text-blue-400'>What EazyShare Offers...</h1>
                <div className='p-5'>
                    <h1 className='text-2xl font-medium'>1.Instant Paste Creation</h1>
                        <ul>
                            <li>No signup or login required.</li>
                            <li>One-click to start typing text/code.</li>
                        </ul>
                    <h1 className='text-2xl font-medium mt-5'>2.Unique URL Sharing</h1>
                        <ul>
                            <li>Generates a unique link for each paste.</li>
                            <li>Sharable across devices.</li>
                        </ul>
                    <h1 className='text-2xl font-medium mt-5'>3.Read or Edit Modes</h1>
                        <ul>
                            <li>Anyone with the link can read.</li>
                            <li>Some support editing if the URL includes a token.</li>
                        </ul>
                    <h1 className='text-2xl font-medium mt-5'>4.Minimal UI</h1>
                    <ul>
                            <li>No clutter, just a textarea.</li>
                            <li>Responsive and super fast.</li>
                        </ul> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home