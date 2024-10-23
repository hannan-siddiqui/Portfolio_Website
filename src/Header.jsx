import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "./App.css";

const Header = ({
  scrollToFirstPage,
  scrollToSecondPage,
  scrollToThirdPage,
  scrollToExperience,
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
    <div className="flex justify-center   ">
      <div className="border-[2px] border-zinc-800 mt-3 w-[90%] md:h-[70px]  bg-[#1e1d1d]  md:pl-10 fixed z-50   py-4 md:py-8 flex md:flex-row flex-col  justify-start items-center">
        <div className="flex justify-evenly items-center ">
          <div className="flex justify-center items-center ">
            <div className=" text-[#9f1f1f] text-2xl md:text-4xl font-extrabold">
              <h1>Hannan </h1>
            </div>
          </div>

          <div className="lg:hidden md:hidden ml-12">
            <button
              onClick={toggleItems}
              className="text-xl ml-16 text-white font-semibold px-4 py-2 bg-gray-800 rounded-lg"
            >
              {showItems ? <RxCross2 /> : <CiMenuBurger />}
            </button>
          </div>
        </div>

        <div
          className={`md:flex ${
            showItems ? "block h-screen mt-[20%]" : "hidden h-[10px]"
          } md:ml-[20%] md:mt-0 mt-6 ml-[54%] underline md:no-underline w-screen md:w-[40%] `}
        >
          <ul className="nav mt-6  md:mt-50 lg:mt-0 w-full  md:flex md:justify-end justify-center items-center  text-neutral-400  text-2xl font-serif font-extrabold">
            
            <li className={`headerbtn  mt-3  `} onClick={toggleItems}>
              <button onClick={scrollToFirstPage}>Home</button>
            </li>
            <li className="headerbtn mt-3" onClick={toggleItems}>
              <button onClick={scrollToSecondPage}>Skill</button>
            </li>
            <li className="headerbtn mt-3" onClick={toggleItems}>
              <button onClick={scrollToThirdPage}>Project</button>
            </li>

            <li className="headerbtn  mt-3" onClick={toggleItems}>
              <button onClick={scrollToFourthPage}>Contact</button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
