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
import { setupHoverEffect } from "./HoverCard3D";

const ThirdPage = () => {
  const cardsData = [
    {
      img: p6,
      desc: "An  E-commerce Web Application. Developed using React, Next.js, and TypeScript, tailwind CSS, featuring Stripe payment integration,CMS, an admin dashboard , order tracking, and user authentication. ",

      title: "Hyper-Cart",
      link: "https://github.com/hannan-siddiqui/Hyper-Cart",
    },

    {
      img: p7,
      desc: "Chatify - A real-time chat app built with MERN, Socket.io, and TailwindCSS. Features JWT-based authentication, online user status, global state management with Zustand, error handling, and free deployment options. Perfect for learning full-stack development with real-time messaging!",

      title: "Chatify",
      link: "https://github.com/hannan-siddiqui/Chatify",
    },

    {
      img: p1,
      desc: "This project is a comprehensive blogging platform tailored specifically for the automobile industry. It incorporates HTML, CSS, JavaScript for the front-end, while the back-end is powered by Django framework along with a MySQLite database. The project also features an admin panel for easy content management.",

      title: "Cruise-Chronicles",
      link: "https://github.com/hannan-siddiqui/Cruise_Chronicles",
    },

    {
      img: p2,
      desc: "Student-Help is an e-learning platform designed to bridge the gap between students and recruiters. It provides a space for students to showcase their skills, projects, DSA sheets, technical blogs, and work experience. Recruiters can utilize the platform to shortlist potential candidates for interviews.",
      title: "Student-Help",
      link: "https://github.com/hannan-siddiqui/Student-Help",
    },
    {
      img: p3,
      desc: "BiteBuddy is food ordering app . Build using ReactJS, tailwind css,  ReduxJS, swiggy API",
      title: "Bite-Buddy",
      link: "https://github.com/hannan-siddiqui/BiteBuddy",
    },

    {
      img: p4,
      desc: "Netflix-GPT - OTT Platform developed using React, Redux, FireBase, Tailwind CSS and also offers Movies recommendation system  using AI.",
      title: "Netflix GPT",
      link: "https://github.com/hannan-siddiqui/Netflix-Gpt",
    },

    {
      img: p5,
      desc: "Online auction System- I developed a dynamic auction platform using Django. The project incorporates HTML, CSS and JavaScript for frontend using Django framework for API functionality.",
      title: "Static",
      link: "https://github.com/hannan-siddiqui/Static",
    },
  ];

  return (
    <div className="relative py-20 bg-[#484747]">
      <div>
        <div>
          <h1 className="md:text-5xl text-yellow-500 text-3xl font-bold ml-4 md:ml-[10%]">
            Projects
          </h1>
        </div>
        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"></div>
      </div>

      <div className="mx-auto md:mx-0 mt-10 md:mt-28 gap-16 flex flex-wrap justify-center items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className=" hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center group"
          >
            <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
              <img
                className="w-full h-full object-cover group-hover:opacity-30 opacity-100"
                src={card.img}
                alt={card.title}
              />
            </div>
            <div className="opacity-80 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
              <div className="text-2xl font-mono font-bold">{card.title}</div>
              <div className="mt-3 font-mono font-semibold bg-zinc-600 p-3 text-white">
                {card.desc}
              </div>
              <div className="  m w-[100px] flex mt-44 ml-10 rounded-lg">
                <a target="__blank" href={card.link}>
                 <GithubButton/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
