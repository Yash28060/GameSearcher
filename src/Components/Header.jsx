import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.jpg";
import { FaSearchengin } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)
  useEffect(() => {
    console.log("theme", theme);
  }, []);
  return (
    <>
      <div className=" flex items-center p-3">
        <img src={logo} width={60} height={60} />
        <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
          <FaSearchengin />
          <input type="text" className=" px-2 bg-transparent outline-none" />
        </div>
      <div>
          {theme == 'dark' ? <BsFillSunFill 
              className=" text-[35px] bg-slate-200 text-black cursor-pointer rounded-full p-2"
              onClick={()=>{setTheme('light'); localStorage.setItme('theme','light')}}/>
           : 
           <BsFillMoonFill
           className=" text-[35px] bg-slate-200 text-black rounded-full p-2 cursor-pointer" 
           onClick={()=>{setTheme('dark')}} />}
        </div>
      </div>
    </>
  );
}

export default Header;
