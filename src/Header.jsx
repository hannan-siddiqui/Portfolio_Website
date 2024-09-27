import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "./App.css";
import { animate, motion, useAnimation } from "framer-motion";

const Header = ({ scrollToFirstPage, scrollToSecondPage, scrollToThirdPage,scrollToExperience, scrollToFourthPage }) => {

  const btd = useAnimation();

  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    const isLaptop = window.innerWidth >= 1024 ;

    if (isLaptop) {
      return;
    }
    
    

    setShowItems(!showItems);
 

    btd.start({
      y:[-100,60,0],
      transition:{ease:"easeInOut", duration:2}
    })
  };


  return (
    <div className='bg-zinc-800 md:pl-10 fixed z-10  w-screen py-4 md:py-8 flex md:flex-row flex-col  md:justify-start justify-evenly items-center'>

      <div className='flex justify-evenly items-center '>

      <div className='flex justify-center items-center '>
        
<<<<<<< HEAD
        <div className='ml-0 md:ml-36 text-yellow-500 text-2xl md:text-5xl font-extrabold'>
=======
        <div className='ml-0 md:ml-36 text-yellow-500 text-4xl md:text-5xl font-extrabold'>
>>>>>>> origin/main
          <h1>Hannan Siddiqui</h1>
        </div>

      </div>

      <div className='lg:hidden md:hidden ml-12'>
          <button onClick={toggleItems} className='text-xl text-white font-semibold px-4 py-2 bg-gray-800 rounded-lg'>
            {showItems ? <RxCross2/> : <CiMenuBurger/>}
          </button>
      </div>

      </div>

      <div className={`md:flex ${showItems ? 'block' : 'hidden'} md:ml-8 md:mt-0 mt-6 ml-[50%] underline md:no-underline w-screen md:w-[40%]`}>
        <motion.ul 
        
        animate={btd}

        className='nav mt-6 md:mt-50 lg:mt-0 w-full  md:flex md:justify-evenly justify-center items-center  text-zinc-500 text-2xl font-serif font-semibold'>
         
          <li className='headerbtn mt-3'  onClick={toggleItems}><button  onClick={scrollToFirstPage}>Home</button></li>
          <li className='headerbtn mt-3' onClick={toggleItems}><button onClick={scrollToSecondPage}>Skill</button></li>
          <li className='headerbtn mt-3' onClick={toggleItems}><button onClick={scrollToThirdPage}>Portfolio</button></li>
          <li className='headerbtn  mt-3' onClick={toggleItems}><button onClick={scrollToFourthPage}>Contact</button></li>
          
        </motion.ul>
      </div>

    </div>
  );
}

export default Header;
