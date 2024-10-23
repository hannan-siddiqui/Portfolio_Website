import p1 from "./projectpic/pr1.png";
import p2 from "./projectpic/studenthelp.jpg";
import p3 from "./projectpic/bitebuddy.avif";
import p4 from "./projectpic/batman.jpg";
import p5 from "./projectpic/static.webp";
import p6 from "./projectpic/aircraft-63032.jpg";
import p7 from "./projectpic/chat.webp";
import "./App.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import GithubButton from "./GithubButton";

import React, { useEffect } from "react";

const ThirdPage = () => {

  const cardsData = [
    {
      img: p6,
      desc: "An  E-commerce Web Application. Developed using React, Next.js, and TypeScript, tailwind CSS, featuring Stripe payment integration,CMS, an admin dashboard , order tracking, and user authentication.",
      stack: "Next, Typescript, MongoDB, Stripe, Tailwind",
      title: "Hyper-Cart",
      link: "https://github.com/hannan-siddiqui/Hyper-Cart",
    },

    {
      img: p7,
      desc: "Chatify - A real-time chat app built with MERN, Socket.io, and TailwindCSS. Features JWT-based authentication, online user status, global state management with Zustand, error handling, and free deployment options. Perfect for learning full-stack development with real-time messaging.",

      title: "Chatify",
      stack: "React, Node, Express, MongoDB Tailwind, Socket.io",
      link: "https://github.com/hannan-siddiqui/Chatify",
    },

    {
      img: p1,
      desc: "This project is a comprehensive blogging platform tailored specifically for the automobile industry. It incorporates HTML, CSS, JavaScript for the front-end, while the back-end is powered by Django framework along with a MySQLite database. The project also features an admin panel for easy content management.",
      stack: "React, Redux, Django, MongoDB, Firebase, Tailwind",
      title: "Cruise-Chronicles",
      link: "https://github.com/hannan-siddiqui/Cruise_Chronicles",
    },

    {
      img: p2,
      desc: "Student-Help is an e-learning platform designed to bridge the gap between students and recruiters. It provides a space for students to showcase their skills, projects, technical blogs, and work experience. Recruiters can utilize the platform to shortlist potential candidates.",
      stack: "React, Redux, Django, MongoDB, Firebase, Tailwind",
      title: "Student-Help",
      link: "https://github.com/hannan-siddiqui/Student-Help",
    },
    {
      img: p3,
      desc: "BiteBuddy is food ordering app . Build using ReactJS, tailwind css,  ReduxJS, swiggy API",
      stack: "React, Redux, Firebase, Tailwind",
      title: "Bite-Buddy",
      link: "https://github.com/hannan-siddiqui/BiteBuddy",
    },

    {
      img: p4,
      desc: "Netflix-GPT - OTT Platform developed using React, Redux, FireBase, Tailwind CSS and also offers Movies recommendation system  using AI.",
      stack: "React, OpenAI API, Firebase, Tailwind",
      title: "Netflix GPT",
      link: "https://github.com/hannan-siddiqui/Netflix-Gpt",
    },

    {
      img: p5,
      desc: "Online auction System- I developed a dynamic auction platform using Django. The project incorporates HTML, CSS and JavaScript for frontend using Django framework for API functionality.",
      stack: "HTML, CSS, Javascript,  Django, SQLite",
      title: "Static",
      link: "https://github.com/hannan-siddiqui/Static",
    },
  ];


  return (
    <div className="mt-10 py-20 px-40 bg-[#292828] ">
      <div className="text-red-500 font-extrabold ml-0 text-3xl md:text-5xl">My Projects</div>

      <div className="mt-16 flex flex-col  justify-center items-center  rounded-xl py-10">
        <div className=" flex flex-wrap gap-10 justify-center items-center">
          {cardsData.map((card, index) => {
            return (
              <div
                className=" justify-center items-center border-[2px] border-gray-500 bg-neutral-900 flex md:flex-row gap-4 flex-col text-neutral-300"
                key={index}
              >
                {/* image */}
                <div className=" w-[300px] h-[180px] md:w-[400px] md:h-[250px]">
                  <img
                    className="w-full h-full object-cover"
                    src={card.img}
                    alt=""
                  />
                </div>

                {/* info  */}
                <div className=" w-[300px] md:w-[400px]  md:px-0 px-4 ">
                  {/* title */}
                  <div className="text-red-900  font-bold text-3xl ">
                    {card.title}
                  </div>
                  {/* stack */}
                  <div className="mt-2">
                    <span className=" font-bold "> Tech stack: </span>
                    <span className=" font-semibold ml-3"> {card.stack}</span>
                  </div>
                  {/* description */}
                  <div className="mt-2 ">{card.desc}</div>
                  {/* link */}
                  <div className=" mt-4 md:mb-0 mb-6  flex justify-center items-center">
                        <button className="bg-neutral-600 w-[100px] border border-neutral-500 hover:border-red-800 font-bold text-xl h-[35px] rounded-xl">
                          <a target="__blank" href={card.link}>
                            github
                          </a>
                        </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
