// Texture.js

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css"

const Texture = () => {
  const circleAnimation = useAnimation();
  const a2 = useAnimation()

  const createCircularPath = (radius, points) => {
    const x = [];
    const y = [];
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      x.push(radius * Math.cos(angle));
      y.push(radius * Math.sin(angle));
    }
    return { x, y };
  };

  const handleScroll = () => {
    const { x, y } = createCircularPath(50, 100);
    circleAnimation.start({
      x,
      y,
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    a2.start({
      x: [0, 100, 0],
      y:[0,200,0],
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

  };

useEffect(() => {
    const { x, y } = createCircularPath(50, 100);
    circleAnimation.start({
      x,
      y,
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    a2.start({
      x: [0, 100, 0],
      y:[0,200,0],
      transition: { yoyo: Infinity, repeatType: "loop", duration: 4, ease: "easeInOut" },
    });

     handleScroll();
   
  
  }, [circleAnimation]);

  return (
    <div className=" relative flex justify-center items-center min-h-screen overflow-hidden">
      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[20%] left-[30%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[8%] left-[10%] w-16 h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[10%] left-[64%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

<motion.div
        animate={circleAnimation}
        className="balls absolute top-[90%] left-[90%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

<motion.div
        animate={a2}
        className="balls absolute top-[10%] left-[90%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

<motion.div
        animate={circleAnimation}
        className="balls absolute top-[90%] left-[10%]  md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>


      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[70%] left-[34%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>


      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[50%] left-[60%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={a2}
        className="balls absolute top-[30%] left-[24%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

<motion.div
        animate={a2}
        className="balls absolute top-[50%] left-[50%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[10%] left-[44%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[80%] left-[24%] md:w-16 w-7 h-7 md:h-16 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[40%] left-[34%] w-6 h-6 rounded-full"
      ></motion.div>

      <motion.div
        animate={circleAnimation}
        className="balls absolute top-[60%] left-[20%] w-8 h-8 rounded-full"
      ></motion.div>

<motion.div
        animate={circleAnimation}
        className="balls absolute top-[60%] left-[80%] w-8 h-8 rounded-full"
      ></motion.div>

<motion.div
        animate={circleAnimation}
        className="balls absolute top-[60%] left-[90%] w-8 h-8 rounded-full"
      ></motion.div>

    </div>
  );
};

export default Texture;
