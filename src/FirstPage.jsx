import React from "react";
import hannan from "./projectpic/Hannan.png";
import "./App.css";

import SocialIcons from "./customui/Socialicons";

 {/* <img className="w-[360px]" src={hannan} alt="" /> */}

 const FirstPage = () => {
  return (
    <div className=" pt-[35%] md:pt-0  pb-10">

      <div className=" md:min-h-screen flex flex-wrap justify-center items-center gap-20 md:gap-6">
      <div className="">

      <div className="card card border-red-700 hover:border">
          <div className="card-overlay"></div>
          <div className="card-inner md:w-[310px] md:h-[360px] px-4 py-4 ">
            Hi 👋🏻 I'm <br />
            HANNAN Siddiqui <br />
            I'm a <br />
            Software Engineer <br />

          </div>
        </div>

      </div>

      <div className="">

        <div className="card card border-red-700 hover:border">
          <div className="card-overlay"></div>
          <div className="card-inner  md:w-[500px] md:h-[360px] py-4 px-4">
            Hi 👋🏻 I'm <br />
            HANNAN Siddiqui <br />
            Software Engineer <br />

          </div>
        </div>

      </div>

      <div className="card border-red-700 hover:border">
        <SocialIcons />
      </div>

     


    </div>
    </div>
  );
};

export default FirstPage;
