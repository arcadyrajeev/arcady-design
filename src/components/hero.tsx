import React from "react";

import MainCTA from "./ui/mainCTA";
import SideCTA from "./ui/sideCTA";
import BlackButton from "./ui/blackButton";

const Hero = () => {
  return (
    <section className="flex w-full h-full border-2  bg-background justify-center ">
      <div className="top-0 flex w-[96%] h-[92%] bg-secondary rounded-b-[2.6rem]">
        <h1 className="gradient-text fontheading1 text-[7rem] leading-30">
          Does Your Brand Reflect The Future?
        </h1>
        <MainCTA label="LET'S WORK TOGETHER" destination="/" />
        <SideCTA label="Learn More" destination="/" size="md" />
        <BlackButton label="Brand Design" destination="/" size="sm" />
      </div>
    </section>
  );
};

export default Hero;
