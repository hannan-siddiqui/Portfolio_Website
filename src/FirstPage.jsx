import React from "react";
import hannan from "./projectpic/Hannan.png";
import "./App.css";
import SocialIcons from "./customui/Socialicons";



 {/* <img className="w-[360px]" src={hannan} alt="" /> */}

 const FirstPage = () => {
  return (
    <div className=" pt-[35%] md:pt-0  pb-10">

      <div className=" md:min-h-screen flex flex-wrap justify-center items-center gap-20 md:gap-6">

        <div className=" text-white text-center w-[90%] md:mt-20">
          <div className="py-4 text-xl text-neutral-500 font-poppins font-bold ">
          "Software engineering is not just about writing code; it's about solving problems, creating value, and building the future one line at a time."
          </div>
        </div>

      <div className="md:-mt-20">
        <div className="card card border-red-700 hover:border">
          <div className="card-overlay"></div>
          <div className="card-inner w-[300px] md:w-[310px] md:h-[360px] px-4 py-4 text-2xl md:text-4xl font-extrabold">
            Hi 👋🏻 I'm <br />
            HANNAN Siddiqui <br />
            I'm a <br />
            Software Engineer <br />

          </div>
        </div>
      </div>

      <div className="md:-mt-20">
        <div className="card card border-red-700 hover:border">
          <div className="card-overlay"></div>
          <div className="card-inner w-[300px] md:w-[500px] md:h-[360px] py-4 px-4 text-lg md:text-2xl font-semibold">
          I specialize in full-stack development, leveraging my expertise to build dynamic and scalable applications. With a **Master's in Computer Science and experience working on diverse projects and internships, I focus on creating secure, user-friendly, and impactful digital solutions. My passion lies in transforming ideas into seamless digital experiences.

          </div>
        </div>
      </div>

      <div className=" md:-mt-20 card border-red-700 hover:border">
        <SocialIcons />
      </div>

     


    </div>
    </div>
  );
};

export default FirstPage;
