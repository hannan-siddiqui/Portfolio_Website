import Python from "./logo/Python";
import JS from "./logo/JS";
import NextJs from "./logo/NextJs";
import MongoDB from "./logo/MongoDB";

import AWS from "./logo/AWS";
import R from "./logo/R";
import Git from "./logo/Git";
import Java from "./logo/Java";


import "./App.css";
import React from "react";

import Linux from "./logo/Linux";
import SQL from "./logo/SQL";
import Node from "./logo/Node";
import Docker from "./logo/Docker";

import BGS from "./logo/BGS";

const SecondPage = () => {
  

  return (
    <div className="relative md:mt-20 bg-[#484747] md:px-10 ">


      <div>
        <h1
         
          className="md:text-5xl text-3xl text-yellow-500 font-bold ml-4 md:ml-[10%]"
        >
          Skills
        </h1>

        <div
          
          className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"
        ></div>
      </div>

      {/* skills cards */}
      <div className="ml-4 mr-4 md:ml-[5%] md:mr[5%] md:mx-0 mx-auto mt-10 md:mt-28 gap-4 md:gap-16 flex flex-wrap justify-center items-center">
        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative  bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-4 top-1">
            <Python />
          </div>

          <div
            
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            Python
          </div>
        </div>

        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-10 top-4">
            <Java />
          </div>

          <div
          
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            Java
          </div>
        </div>

        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-14 top-3 object-contain">
            <JS />
          </div>

          <div
            
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            JavaScript
          </div>
        </div>

        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-8 top-5 object-contain">
            <R />
          </div>

          <div
            
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            ReactJS
          </div>
        </div>

        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-8 top-3 object-contain">
            <Node />
          </div>

          <div
            
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            NodeJS
          </div>
        </div>


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-4 top-4">
            <NextJs />
          </div>

          <div
           
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            NextJS
          </div>
        </div>


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-1 top-2 object-contain">
            <MongoDB />
          </div>

          <div
          
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            MongoDB
          </div>
        </div>
        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute  md:top-16 top-2 object-contain">
            <SQL/>
          </div>

          <div
            
            className="absolute bottom-1 md:bottom-12 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            SQL
          </div>
        </div>


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-10 top-2 object-contain">
            <Docker />
          </div>

          <div
           
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold "
          >
            Docker
          </div>
        </div>


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-14 top-6 object-contain">
            <AWS />
          </div>

          <div
           
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            AWS
          </div>
        </div>


        


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div  className="absolute md:top-8 top-5 object-contain">
            <Git />
          </div>

          <div
         
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            Git
          </div>
        </div>


        <div className="border border-neutral-400 borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <div className="absolute md:top-6 top-4 object-contain">
            <Linux />
          </div>

          <div
         
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            Linux
          </div>
        </div>



      </div>
    </div>
  );
};

export default SecondPage;
