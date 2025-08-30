"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const ScrollDown = () => {
  return (
    <section className="relative w-full justify-center flex items-center gap-8">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex w-[55%] justify-between"
      >
        <MoveDown size={20} />
        <MoveDown size={20} />
      </motion.div>
      <div className="w-40 h-[1px] flex bg-foreground"></div>
      <h1 className="fontheading2 text-[0.8rem] tracking-[1rem]">
        SCROLL DOWN{" "}
      </h1>
      <div className="w-40 h-[1px] flex bg-foreground"></div>
    </section>
  );
};

export default ScrollDown;
