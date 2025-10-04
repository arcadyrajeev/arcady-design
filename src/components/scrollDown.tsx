"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const ScrollDown = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center 
                 gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-8 py-6"
    >
      {/* Animated Arrows */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex w-full px-10 lg:px-40 xl:px-80 justify-between"
      >
        <MoveDown
          size={10}
          className="sm:size-2 md:size-3 lg:size-6 xl:size-5"
        />
        <MoveDown
          size={10}
          className="sm:size-2 md:size-3 lg:size-6 xl:size-5"
        />
      </motion.div>

      {/* Left Line */}
      <div
        className="bg-foreground 
                      w-10 sm:w-20 md:w-28 lg:w-32 xl:w-40 
                      h-[1px]"
      />

      {/* Text */}
      <h1
        className="fontheading2 
                   text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.8rem] 
                   tracking-[0.5rem] sm:tracking-[0.7rem] md:tracking-[0.9rem] lg:tracking-[1rem] xl:tracking-[1rem]"
      >
        SCROLL DOWN
      </h1>

      {/* Right Line */}
      <div
        className="bg-foreground 
                      w-10 sm:w-20 md:w-28 lg:w-32 xl:w-40 
                      h-[1px]"
      />
    </section>
  );
};

export default ScrollDown;
