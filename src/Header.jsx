import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "./App.css";
import CustomButton from "./customui/Button";


const Header = ({
  scrollToFirstPage,
  scrollToSecondPage,
  scrollToThirdPage,
  scrollToFourthPage,
}) => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    const isLaptop = window.innerWidth >= 1024;

    if (isLaptop) {
      return;
    }
    setShowItems(!showItems);
  };

  return (
    <div className="bg-[#000000] z-50 flex justify-center  items-start  font-inter ">
      <div className="  rounded-2xl    md:h-[100px]  md:pl-10 fixed z-50    md:py-8 flex md:flex-row flex-col  justify-center items-center">

        <div className=" ">
          {/* logo */}
          

            <div onClick={toggleItems} className="hidden">
              <div
                onClick={scrollToFirstPage}
                className="hidden px-8 hover:cursor-pointer w-[200px]  border border-red-700 z-30 py-4 bg-neutral-700 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-700 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
              >
                Hannan Siddiqui
              </div>
            </div> 

          {/* toggle button */}
          
          <div className="lg:hidden md:hidden  flex items-center justify-center  h-[50px]  w-screen bg-black ">

           
            <button
              
              className="text-4xl    text-white font-bold rounded-lg "
              
            >
              <div className="text-red-700 flex justify-evenly items-start ">
              <div className=" italic">Hannan</div>
              <div onClick={toggleItems} className="ml-32">{showItems ? <RxCross2 /> : <CiMenuBurger />}</div>
              </div>
               
            </button>
          </div>
        </div>
        
        <div
          className={`md:flex md:mt-10 justify-center items-start md:h-[100px] md:rounded-xl  ${
            showItems ? "flex h-screen  bg-black z-50  " : "hidden "
          } md:mt-0  w-screen `}
        >
          <ul className=" mt-6 md:mt-50 lg:mt-0 w-full  flex md:flex-row  flex-col md:gap-x-20  justify-center items-center  text-neutral-400  text-2xl ">
            <li className={`mt-10`} onClick={toggleItems}>
              <div onClick={scrollToFirstPage}>
                <CustomButton data="Home" />
              </div>
            </li>
            <li className="mt-10" onClick={toggleItems}>
              <div onClick={scrollToSecondPage}>
                <CustomButton data="Skill" />
              </div>
            </li>
            <li className="mt-10" onClick={toggleItems}>
              <div onClick={scrollToThirdPage}>
                <CustomButton data="project" />
              </div>
            </li>

            <li className="mt-10" onClick={toggleItems}>
              <div onClick={scrollToFourthPage}>
                <CustomButton data="Contact" />
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Header;
