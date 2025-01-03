import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div>
      <style>
        {`
  
.card {
  max-width: fit-content;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
  transition: 0.5s;
}

.card:hover {
  animation: ease-out 5s;
  background: rgba(173, 173, 173, 0.05);
}

.card ul {
  padding: 1.2rem;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  
}

.card ul li {
  cursor: pointer;
}

.svg {
  transition: all 0.3s;
  /* if you find some problems change w - h : 30px*/
  padding: 1rem;
  height: 60px;
  width: 60px;
  border-radius: 100%;

  fill: currentColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
}

.text {
  opacity: 0;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.3s;
  
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 9999;
  box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
    -10px 0 1px rgba(153, 153, 153, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
}

/*isometric prooyection*/
.iso-pro {
  transition: 0.5s;
}
.iso-pro:hover a > .svg {
  transform: translate(15px, -15px);
  border-radius: 100%;
}

.iso-pro:hover .text {
  opacity: 1;
  transform: translate(25px, -2px) skew(-5deg);
}

.iso-pro:hover .svg {
  transform: translate(5px, -5px);
}

.iso-pro span {
  opacity: 0;
  position: absolute;
  color: #1877f2;
  border-color: #1877f2;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  border-radius: 50%;
  transition: all 0.3s;
  height: 60px;
  width: 60px;
}

.iso-pro:hover span {
  opacity: 1;
}

.iso-pro:hover span:nth-child(1) {
  opacity: 0.2;
}

.iso-pro:hover span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iso-pro:hover span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}

`}
      </style>

      <div className="card">
        <ul className="flex gap-8  md:flex-col w-[300px]  md:w-fit" >

          <li className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <a target="__blank" href="https://www.linkedin.com/in/hannan-siddiqui-990961258/">
              <div className="svg text-red-600 text-5xl flex justify-center items-center">
                <FaLinkedin />
              </div>
            </a>
            <div className="text text-red-700">Linkedin</div>
          </li>

          <li className="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a target="__blank" href="https://github.com/hannan-siddiqui">
            <div className="svg text-red-600 text-5xl flex justify-center items-center">
                <FaGithub />
              </div>
            </a>
            
            <div className="text text-red-700">github</div>
          </li>

          <li className="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a target="__blank" href="https://x.com/H_Siddiqui_">
            <div className="svg text-red-600 text-4xl flex justify-center items-center">
                <BsTwitterX />
              </div>
              
            </a>

            <div className="text text-red-700">Twitter</div>
          </li>

          <li className="hidden md:block lg:block iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a target="__blank" href="https://www.instagram.com/hannan_siddiqui___/">
            <div className="svg text-red-600 text-5xl flex justify-center items-center">
            <FaInstagram />
              </div>
            </a>
            <div className="text text-red-700">Instagram</div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default SocialIcons;
