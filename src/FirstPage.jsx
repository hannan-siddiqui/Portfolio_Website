import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "./App.css";
import hannanImage from "./hannan.jpg";

import { useInView } from "react-intersection-observer";

const FirstPage = () => {


  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <div className=" relative py-10 bg-[#484747] overflow-hidden md:h-screen">
      <div className="relative mt-20 md:mt-52 md:flex justify-evenly md:gap-5 ">
        <div className=" flex justify-center items-center">
          <div className="r um border-[2px] border-neutral-600 flex justify-center items-center flex-col pb-10 w-[380px]  md:w-[700px]">
            <div
              ref={ref}
              className={`transform transition-transform duration-[1s] ease-in-out
        ${inView ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"} 
        md:mr-36 rounded-xl w-[90%] md:w-[550px] flex flex-col justify-center firstpage_i_am_coder_line mx-8 p-4 md:p-16`}
            >
              <div className="n2 overflow-hidden p-4 w-[320px] md:w-[550px] border border-zinc-500">
                <h1 className="text-xl md:text-4xl text-black font-medium">
                  I'M
                  <span className="font-bold text-3xl ml-7 md:ml-16 md:text-5xl text-red-600">
                    Hannan Siddiqui
                  </span>
                </h1>
              </div>
              <div className="h-[1px] my-6 bg-[#262222] w-[320px] md:w-[550px]"></div>
              <div className="n1 w-[320px] md:h-[200px] overflow-hidden md:w-[550px] h-[180px] mt-2 md:mt-4 p-2 text-xl font-bold md:text-3xl text-[#252323] place-content-center text-center border border-slate-700">
                "Enthusiastic software developer dedicated to continuous growth
                and adaptation in the rapidly changing tech landscape."
              </div>
            </div>
           

            {/* social links */}
            <div
            ref={ref}
            className={`transform transition-transform duration-[1s] ease-in-out
              ${inView ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"}
              border  n1   w-[320px] md:w-[550px]   md:mt-4 mt-8     flex justify-evenly items-center text-3xl md:text-7xl md:p-6 p-4 overflow-hidden  border-slate-600`}>
              <div className="rounded-2xl p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hannan_siddiqui___/?next=%2F"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hannan-siddiqui-990961258/"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="hover:hue-rotate-180 sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-neutral-900 to-black text-white">
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://github.com/hannan-siddiqui"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="hover:hue-rotate-180 sociallinkbutton rounded-2xl p-2 bg-white">
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

        <div className="card3d shadow-2xl shadow-zinc-400 hover:shadow-white border-[2px] border-neutral-600 sociallinkdiv mx-10 md:mx-0 md:p-0 mt-16 mb-10 md:mt-0 sm:w-[350px] md:w-[410px]">
          <img
            className=" aspect-[3/4]  object-cover"
            src={hannanImage}
            alt="404"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
