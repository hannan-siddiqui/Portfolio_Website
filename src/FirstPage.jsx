import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "./App.css";

import SocialIcons from "./customui/Socialicons";


const FirstPage = () => {


  return (
    <div className=" min-h-screen flex justify-center items-center">
      {/* social icons */}
      <div><SocialIcons/></div>


      


    </div>
  );
};

export default FirstPage;
