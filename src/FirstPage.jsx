import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "./App.css";
import hannanImage from "./hannan.jpg";
import FrontPagePic from "./FrontPagePic";





const FirstPage = () => {


  return (
    <div className=" relative py-10 bg-[#1e1d1d] overflow-hidden ">
      <div className="relative mt-20 md:mt-52 md:flex justify-evenly md:gap-5 ">
        
        <div className=" flex justify-center items-center">
          <div className="  border-[1px] border-[#323030] rounded-2xl flex justify-center items-center flex-col pb-10 w-[380px]  md:w-[700px]">
            <div
             
              className={`
        
        md:mr-36 rounded-xl w-[90%] md:w-[550px] flex flex-col justify-center firstpage_i_am_coder_line mx-8 p-4 md:p-16`}
            >
              <div className=" overflow-hidden p-4 w-[320px] md:w-[550px]">
                <h1 className="text-xl md:text-4xl text-neutral-400 font-medium">
                  I'M
                  <span className="font-bold   rounded-lg  ml-4 text-2xl md:text-5xl text-red-600">
                    Hannan Siddiqui
                  </span>
                </h1>
              </div>
              <div className=" h-[3px] rounded-lg my-6 bg-[#ff3030] w-[320px] md:w-[550px]"></div>

              <div className="bg-[#222121] rounded-xl w-[320px] md:h-[200px] overflow-hidden md:w-[550px] h-[180px] mt-2 md:mt-4 p-2 text-xl font-bold md:text-3xl text-[#ffffff] place-content-center text-center ">
                "Passionate software developer committed to ongoing growth and adaptation in the ever-evolving tech landscape."     
              </div>
            </div>
           

            {/* social links */}
            <div
         
            className={`
            
                   w-[320px] md:w-[550px]   md:mt-4 mt-8     flex justify-evenly items-center text-3xl md:text-7xl md:p-6 p-4 overflow-hidden  bg-[#222121]  rounded-3xl `}>
             

              <div className="transition-all duration-500 ease-in-out hover:-translate-y-2  sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hannan-siddiqui-990961258/"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="transition-all duration-500 ease-in-out hover:-translate-y-2  sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-neutral-900 to-black text-white">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://github.com/hannan-siddiqui"
                >
                  <FaGithub />
                </a>
              </div>

              <div className=" transition-all duration-500 ease-in-out hover:-translate-y-2 rounded-2xl p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hannan_siddiqui___/?next=%2F"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="transition-all duration-500 ease-in-out hover:-translate-y-2  sociallinkbutton rounded-2xl p-2 bg-white">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/hannan_siddiqui"
                >
                  <FaXTwitter />
                </a>
              </div>
              
            </div>
          </div>
        </div>

        <div className="   sociallinkdiv mx-10 md:mx-0  mt-16  md:mt-0 w-[350px] md:w-[410px]">
          <FrontPagePic/>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
