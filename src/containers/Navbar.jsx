import React, {useState} from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../.constants";
import { useInView } from "react-intersection-observer";

import { Link } from "react-scroll";
        
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  return (
    <div className="flex  items-center justify-between w-full py-6 fixed left-0 top-0 right-0 sm:px-16 px-6 border-b-[1px] border-slate-600/50 z-50 backdrop-blur-md font-manrope">
      <div className="flex mr-8">
        <img src={logo} alt="logo" width={110} height={17} className="" />
      </div>
      <div className="tablet:flex hidden justify-between  items-center w-full ">
        <div className="flex justify-start items-center w-full max-w-[470px] space-x-6 ">
          {navLinks.map((item, index) => (
            <Link to={`${item.id}`} spy={true} smooth={true} offset={-100} duration={100} className={`text-slate-500 cursor-pointer transition-all font-bold no-wrap`}>
              <p className="text-nowrap">{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="flex space-x-6 items-center text-white font-manrope flex-[1.25] ml-6 justify-end ">
          <p className="text-nowrap">Sign In</p>
          <button className="px-6 py-2 rounded-md text-black font-bold font-manrope bg-pink-gradient min-w-[140px]">
            Get Started
          </button>
        </div>
      </div>
      <div className="tablet:hidden flex relative  justify-end items-center flex-1">
        <div className="tablet:hidden flex items-center px-6 space-x-6 max-xs:hidden">
          <p className="text-nowrap text-white font-manrope font-semibold">Sign In</p>
          <button className="px-6 py-2 rounded-md text-black font-bold font-manrope bg-pink-gradient min-w-[140px]">
            Get Started
          </button>
        </div>
        <button onClick={()=> setToggle((prev)=>!prev)} className="object-contain">
          <img
            src={toggle ? close : menu}
            className="object-contain w-[28px]"
          />
        </button>
        <div className={`${toggle?'flex': 'hidden'} flex-col items-start absolute  top-14 rounded-lg p-4 bg-cyan-gradient space-y-2 sidebar`}>
          {navLinks.map((item, index)=>(
            <a href={`#${item.id}`} className="px-4 text-nowrap text-lg text-white font-semibold">
              {item.title}
            </a>
          ))}
          <p className="px-4 text-nowrap text-lg text-white font-semibold max-xs:flex hidden">Sign In</p>
          <button className="px-6 py-2 rounded-md text-black font-bold font-manrope bg-pink-gradient min-w-[140px] w-full max-xs:flex hidden">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
