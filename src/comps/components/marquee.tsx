import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="relative w-screen h-screen overflow-x-hidden">
        <motion.div
          className="absolute text-2xl font-bold text-black whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;