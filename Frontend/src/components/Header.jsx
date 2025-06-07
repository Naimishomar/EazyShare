import React,{useState, useEffect} from 'react'
import CircularText from './ui/CircularText.jsx'
import BackgroundSwitch from './ui/BackgroundSwitch.jsx'
import { Link } from 'react-router-dom';

function Header() {
    const [changeBackground, setChangeBackground] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = changeBackground ? '#ffffff' : '#000000';
        document.body.style.color = changeBackground ? '#000000' : '#ffffff';

        return () => {
            // Optional cleanup: reset to default if needed
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [changeBackground]);

  return (
    <>
        <div className={`w-full h-25 flex space-x-10 items-center justify-between px-10 py-2 ${changeBackground ? "bg-white text-black" : "bg-black text-white"}`}>
            <Link to='/'>
                <div className=''>
                    <CircularText
                        text="EAZYSHARE*SHARE ANYTHING*"
                        changeBackground = {changeBackground}
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />
                </div>
            </Link>
            <div>
                <a href="https://www.buymeacoffee.com/naimishomar"><img src="https://img.buymeacoffee.com/button-api/?text=Contribute to This Project&emoji=&slug=naimishomar&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
            </div>
            <div>
                <BackgroundSwitch onChange={() => setChangeBackground((prev) => !prev)}/>
            </div>
        </div>
    </>
  )
}

export default Header