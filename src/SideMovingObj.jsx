import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideMovingObj = ({ card }) => {
  return (
    <StyledWrapper>
      <div className="relative md:mt-0 -mt-[130px] md:opacity-100 opacity-90 card flex justify-center items-start bg-neutral-600 md:ml-10 text-2xl md:w-[450px]  w-[380px] h-[300px] px-4">
        {/* texh stack */}
        <div className=" z-10 p-2 flex flex-col mt-2 md:mt-6 ">
          <div className="text-2xl md:text-4xl font-extrabold text-center">
            {card?.title}
          </div>
          <div className="h-[1px] w-[100%] bg-neutral-500 mt-4 mb-2"></div>
          <div className="flex items-center flex-row mt-2">
            <div className="font-bold  w-[120px]" >Tech stack:</div>
            <div className="ml-2 mt-2 font-semibold text-base text-zinc-950">
              {card?.stack}
            </div>
          </div>
          <div className="mt-3 text-[12px]  md:text-lg  font-semibold md:font-bold">{card?.desc}</div>

          {/* github link button */}
          <div className="absolute  bottom-0  left-[50%] translate-x-[-50%] ">
            <button class=" border border-red-900 relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-neutral-400 rounded-md group">
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-red-600 rounded-md group-hover:translate-x-0"></span>
              
              <a target="__blank" href={card.link}><span class="relative w-full font-bold  text-left text-red-800 transition-colors duration-200 ease-in-out group-hover:text-black">
                Github Link
              </span></a>
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    background-image: linear-gradient(180deg, rgb(255, 0, 0), rgb(0, 0, 0));
    height: 100%;
    animation: rotBGimg 5s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: #918989;
    inset: 5px;
  }
`;

export default SideMovingObj;
