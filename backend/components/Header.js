import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import { BiExitFullscreen } from "react-icons/bi";


const Header = () => {
    const [isFullscreen, setisFullscreen] = useState(false);
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(()=>{
                setisFullscreen(true);
            })
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    setisFullscreen(false)
                })
                
            } 
            
        }
    }

  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>RANJIV ADMIN</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalLine />
          </div>
        </div>

        <div className="rightnav flex gap-2">
          <div onClick={toggleFullscreen}>
            {isFullscreen ? <BiExitFullscreen/> : <GoScreenFull/>}
            
          </div>
          <div className="notification">
            <img
              src="/img/notification.png"
              alt="notification"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="profilenav">
            <img
              src='/img/notification.png'
              alt="notification"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
