import p1 from "./projectpic/pr1.png";
import p2 from "./projectpic/studenthelp.jpg";
import p3 from "./projectpic/bitebuddy.avif";
import p4 from "./projectpic/batman.jpg";
import p5 from "./projectpic/static.webp";
import p6 from "./projectpic/aircraft-63032.jpg";
import "./App.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Texture from "./Texture";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { setupHoverEffect } from "./HoverCard3D";

const ThirdPage = () => {
  const updown = useAnimation();
  const du = useAnimation();
  const ud = useAnimation();
  const lefttoright = useAnimation();
  const righttoleft = useAnimation();


  const isDesktop = window.innerWidth >= 768;

  const handleScroll = () => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });

    ud.start({
      y: [-50, 50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });
  };

  useEffect(() => {
   
      setupHoverEffect(".card3d");
      
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;
  

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    ud.start({
      y: [-50, 50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [updown]);

  const cardsData = [
    { img: p6, 
      desc:"An  E-commerce Web Application. Developed using React, Next.js, and TypeScript, tailwind CSS, featuring Stripe payment integration,CMS, an admin dashboard , order tracking, and user authentication. ",

      title:
       "Hyper-Cart", link: "https://github.com/hannan-siddiqui/Hyper-Cart" },

    { 
      
      img: p1,
       desc:"Blogging Automobile Project This project is a comprehensive blogging platform tailored specifically for the automobile industry. It incorporates HTML, CSS, JavaScript for the front-end, while the back-end is powered by Python-Django framework along with a MySQLite database. The project also features an admin panel for easy content management.", 
       title: "Cruise-Chronicles", 
       link: "https://github.com/hannan-siddiqui/Cruise_Chronicles" },

    { img: p2, desc:"Student-Help is an e-learning platform designed to bridge the gap between students and recruiters. It provides a space for students to showcase their skills, projects, DSA (Data Structures and Algorithms) sheets, technical blogs, and work experience. Recruiters can utilize the platform to shortlist potential candidates for interviews.",  title: "Student-Help", link: "https://github.com/hannan-siddiqui/Student-Help" },
    { img: p3, 
      desc:"BiteBuddy is food ordering app . Build using ReactJS, tailwind css,  ReduxJS, swiggy API",
      title: "Bite-Buddy", link: "https://github.com/hannan-siddiqui/BiteBuddy" },

    { img: p4,
      desc:"Netflix-GPT - OTT Platform developed using React, Redux, FireBase, Tailwind CSS and also offers Movies recommendation system  using AI.",
      title: "Netflix GPT", link: "https://github.com/hannan-siddiqui/Netflix-Gpt" },

    { img: p5,
      desc:"Online auction System- I developed a dynamic auction platform using Django. The project incorporates HTML, CSS and JavaScript for frontend using Django framework for API functionality.",
      title: "Static", link: "https://github.com/hannan-siddiqui/Static" },
    
  ];

  

  return (
    <div className="relative py-20 bg-custom">
       {
      isDesktop &&  <div className=" absolute w-[100%] h-[100%] opacity-10">
      <Texture />
    </div>
     }

      <div>
        <div>
          <motion.h1 animate={lefttoright} className="md:text-5xl text-yellow-500 text-3xl font-bold ml-4 md:ml-[10%]">
            Portfolio
          </motion.h1>
        </div>
        <motion.div
          animate={righttoleft}
          className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"
        ></motion.div>
      </div>

      <div className="mx-auto md:mx-0 mt-10 md:mt-28 gap-16 flex flex-wrap justify-center items-center">
        {cardsData.map((card, index) => (
          isDesktop ? (
            <a
              key={index}
              href={card.link}
              target="__blank"
              className="card3d hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center group"
            >
              <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
                <img className="w-full h-full object-cover group-hover:opacity-30" src={card.img} alt={card.title} />
              </div>
              <div 
                className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
                <motion.div animate={ud} className="text-2xl font-mono font-bold">
                  {card.title}
                </motion.div>
                <motion.div animate={ud} className="mt-3 font-mono font-semibold text-white">
                  {card.desc}
                </motion.div>
                
              </div>
            </a>
          ) : (
            <div
              key={index}
              className=" hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center group"
            >
              <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
                <img className="w-full h-full object-cover group-hover:opacity-30" src={card.img} alt={card.title} />
              </div>
              <div 
                className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
                <motion.div animate={ud} className="text-2xl font-mono font-bold">
                  {card.title}
                </motion.div>
                <motion.div animate={ud} className="mt-3 font-mono font-semibold text-white">
                  {card.desc}
                </motion.div>
                <motion.div
                  animate={ud}
                  className="bg-black  text-white mt-4 text-2xl h-12 w-[100px] flex justify-center items-center rounded-lg"
                >
                  <a target="__blank" href={card.link}>
                    <FaExternalLinkAlt />
                  </a>
                </motion.div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
