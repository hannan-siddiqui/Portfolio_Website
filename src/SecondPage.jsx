import "./App.css";
import React from "react";

import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiGraphql } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const SecondPage = () => {
  const skills = [
    { lang: "Java", logo: <FaJava /> }, 
    {lang: "Python" , logo:<FaPython/>},
    {lang:"C++", logo:<TbBrandCpp/>},
    {lang:"Javascript", logo:<SiJavascript/>},
    {lang:"React", logo:<FaReact/>},
    {lang:"Node", logo:<FaNode/>},
    {lang:"Express", logo:<SiExpress/>},
    {lang:"Next", logo:<RiNextjsFill/>},
    {lang:"Django", logo:<SiDjango/>},
    {lang:"MongoDB", logo:<SiMongodb/>},
    {lang:"SQL", logo:<TbFileTypeSql/>},
    {lang:"Git", logo:<FaGit/>},
    {lang:"Docker", logo:<FaDocker/>},
    {lang:"Linux", logo:<DiLinux/>},
    {lang:"AWS", logo:<FaAws/>},


    
    
  ];

  return (
    <div className="relative md:py-20 bg-[#1e1d1d] md:px-10 ">
      <div className="md:mt-10">
        <h1 className="md:text-5xl text-3xl text-red-700 font-bold ml-4 md:ml-[10%]">
          Skills
        </h1>
        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-red-900"></div>
      </div>

      {/* Skills cards */}
      <div className="ml-4  mr-4 md:ml-[5%] md:mr-[5%] md:mx-0 mx-auto mt-10 md:mt-28 gap-6 md:gap-16 flex flex-wrap justify-center items-center">
        {skills.map((sk, index) => (
          <div key={index} className=" sk w-[120px] h-[110px] flex flex-col justify-center items-center">
            <div className="text-7xl text-stone-800">{sk.logo}</div>
            <div className="text-2xl text-zinc-900 font-bold mt-2">{sk.lang}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
