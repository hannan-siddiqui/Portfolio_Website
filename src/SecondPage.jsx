import "./App.css";
import React from "react";
import Skill from "./customui/Skill";

const SecondPage = () => {
  const Language = [
    "Java",
    "Python",
    "C/C++",
    "JavaScript",
    "typescript",
    "Dart",
    "HTML",
    "CSS",
  ];

  const FrameWork = ["react.js", "node.js", "express.js", "next.js", "django", "flask", "flutter" , "tailwind"];

  const Tools = ["Git", "Docker", "Postman", "Kubernetes","Numpy", "Pandas", "AWS", "MongoDB", "FireBase", "Linux", "redux", "Zustand" , "restapi", "data structure", "algorithm"]

  return (
    <div className=" md:py-20 bg-[#1e1d1d] md:px-10 ">
      <div className="md:mt-10">
        <h1 className="md:text-5xl text-3xl text-red-700 font-bold ml-4 md:ml-[10%]">
          Skills
        </h1>
        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-red-900"></div>
      </div>

      {/* Skills cards */}

      <div className="mt-10 flex flex-wrap justify-center items-start gap-10">
        {/* language */}
        <div className=" flex flex-col justify-center items-center  ">
          {/* heading */}
          <div className="text-white  text-3xl font-bold">Languages</div>
          {/* box */}
          <div className="mt-9 flex flex-wrap gap-5 justify-center items-center w-[400px]  md:w-[500px]">
            {Language.map((language, index) => (
              <div key={index}>
                <Skill data={language} />
              </div>
            ))}
          </div>
        </div>

        {/* framework */}
        <div className=" flex flex-col justify-center items-center  ">
          {/* heading */}
          <div className="text-white  text-3xl font-bold">
            Frameworks and Libraries
          </div>
          {/* box */}
          <div className="mt-9 flex flex-wrap gap-5 justify-center items-center w-[400px]  md:w-[500px]">
            {FrameWork.map((language, index) => (
              <div key={index}>
                <Skill data={language} />
              </div>
            ))}
          </div>
        </div>

        {/* tools */}
        <div className="mt-10 flex flex-col justify-center items-center  ">
          {/* heading */}
          <div className="text-white md:ml-0 ml-8 text-3xl font-bold">
            Tool, Technology and Database
          </div>
          {/* box */}
          <div className="mt-9 flex flex-wrap gap-5 justify-center items-center w-[400px]  md:w-[800px]">
            {Tools.map((language, index) => (
              <div key={index}>
                <Skill data={language} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecondPage;
