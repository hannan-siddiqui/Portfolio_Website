import { motion, useAnimation } from "framer-motion";
import Python from "./logo/Python";
import JS from "./logo/JS";
import NextJs from "./logo/NextJs";
import MongoDB from "./logo/MongoDB";
import Flutter from "./logo/Flutter";
import AWS from "./logo/AWS";
import R from "./logo/R";
import Git from "./logo/Git";
import Java from "./logo/Java";
import { TbFileTypeSql } from "react-icons/tb";

import "./App.css";
import React, { useEffect } from "react";
import Texture from "./Texture";
import Linux from "./logo/Linux";
import SQL from "./logo/SQL";

const SecondPage = () => {
  const updown = useAnimation();
  const du = useAnimation();
  const ud = useAnimation();
  const lefttoright = useAnimation();
  const righttoleft = useAnimation();
  const bounce = useAnimation();
  const bouncerev = useAnimation();

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
        repeatType: "loop",
      },
    });

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lefttoright]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
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

    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [updown]);

  const isDesktop = window.innerWidth >= 768;
  

  return (
    <div className="relative py-20 bg-custom">
       {
      isDesktop &&  <div className=" absolute w-[100%] h-[100%] opacity-10">
      <Texture />
    </div>
     }

      <div>
        <motion.h1
          animate={lefttoright}
          className="md:text-5xl text-3xl text-yellow-500 font-bold ml-4 md:ml-[10%]"
        >
          My Skills
        </motion.h1>

        <motion.div
          animate={righttoleft}
          className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"
        ></motion.div>
      </div>

      {/* skills cards */}
      <div className="ml-4 mr-4 md:ml-[5%] md:mr[5%] md:mx-0 mx-auto mt-10 md:mt-28 gap-4 md:gap-16 flex flex-wrap justify-center items-center">
        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-4 top-1">
            <Python />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            Python
          </motion.div>
        </div>

        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-10 top-4">
            <Java />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            Java
          </motion.div>
        </div>

        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-14 top-3 object-contain">
            <JS />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            JavaScript
          </motion.div>
        </div>

        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-8 top-5 object-contain">
            <R />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            ReactJS
          </motion.div>
        </div>


        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-4 top-4">
            <NextJs />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] flex justify-center items-starttext-lg md:text-3xl font-medium md:font-semibold"
          >
            NextJS
          </motion.div>
        </div>


        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-1 top-2 object-contain">
            <MongoDB />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            MongoDB
          </motion.div>
        </div>
        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute  md:top-16 top-2 object-contain">
            <SQL/>
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-12 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            SQL
          </motion.div>
        </div>


        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-14 top-6 object-contain">
            <AWS />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            AWS
          </motion.div>
        </div>


        


        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-8 top-5 object-contain">
            <Git />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            Git
          </motion.div>
        </div>


        <div className="borderhovereffect2 hover:rotate-12 transition ease-in-out innermorphic hover:bg-[#9f851e] relative bg-[#4d4c4c] w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex flex-col justify-center items-center rounded-2xl">
          <motion.div animate={ud} className="absolute md:top-6 top-4 object-contain">
            <Linux />
          </motion.div>

          <motion.div
            animate={du}
            className="absolute bottom-1 md:bottom-16 w-[90px] md:w-[250px] text-white flex justify-center items-start text-lg md:text-3xl font-medium md:font-semibold"
          >
            Linux
          </motion.div>
        </div>



      </div>
    </div>
  );
};

export default SecondPage;
