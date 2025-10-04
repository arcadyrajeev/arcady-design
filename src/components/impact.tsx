"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MainCTA from "./ui/mainCTA";

const Impact = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const leftItems = leftRef.current.querySelectorAll("h1");
    const rightItems = rightRef.current.querySelectorAll("h1");

    const tl = gsap.timeline({ repeat: -1 });

    leftItems.forEach((_, i) => {
      tl.to(
        leftRef.current,
        {
          yPercent: -(i * 25),
          duration: 0.5,
          ease: "power2.inOut",
        },
        i * 2
      );
    });

    rightItems.forEach((_, i) => {
      tl.to(
        rightRef.current,
        {
          yPercent: i * 25,
          duration: 0.5,
          ease: "power2.inOut",
        },
        i * 2
      );
    });

    tl.to(
      [leftRef.current, rightRef.current],
      {
        yPercent: 0,
        duration: 0.5,
        ease: "none",
      },
      "+=2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // ✅ text + responsive class map
  const leftTexts = [
    {
      text: "Make Impact",
      size: "text-[1.2rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[5rem]",
    },
    {
      text: "Create Value",
      size: "text-[1rem] my-1 lg:my-2 sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[4rem]",
    },
    {
      text: "Stand Out",
      size: "text-[1.1rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]",
    },
    {
      text: "Drive Growth",
      size: "text-[1.2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]",
    },
  ];

  const rightTexts = [
    {
      text: "First Glance",
      size: "text-[1.2rem] sm:text-[1rem] md:text-[3rem] lg:text-[4.2rem] xl:text-[5rem]",
    },
    {
      text: "Every Interaction",
      size: "text-[1rem] lg:my-1 xl:my-0 sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[4rem]",
    },
    {
      text: "Right Moment",
      size: "text-[1.1rem] my-2 sm:text-[2.8rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4.8rem]",
    },
    {
      text: "Each Stage",
      size: "text-[1.2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]",
    },
  ];

  const baseLeft =
    "w-full h-[inherit] flex items-center justify-end fontheading2 text-secondary";
  const baseRight = "h-[inherit] flex items-center fontheading2 text-secondary";

  return (
    <section
      className="flex flex-col w-full lg:h-full
                 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-10 
                 bg-background-primary items-center justify-between 
                 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20"
      id="impact"
    >
      {/* Heading */}
      <div className="px-4">
        <h1
          className="fontheading2 text-secondary 
                       text-[0.8rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] 
                       xl:text-[1rem] text-center md:text-left"
        >
          Trusted by Visionary Fintech & SaaS Leaders
        </h1>
      </div>

      {/* Scrolling Rows */}
      <div
        className="w-full overflow-hidden 
                      h-[1.8rem] sm:h-[2rem] md:h-[6.5rem] lg:h-[5.8rem] xl:h-[7rem] 
                      flex justify-center items-center 
                      gap-4 sm:gap-6 md:gap-8 lg:gap-10 my-10 xl:my-24"
      >
        {/* Left Text */}
        <div
          ref={leftRef}
          className="flex flex-col  w-[38%] sm:w-[40%] self-start"
        >
          {leftTexts.map((item, i) => (
            <h1 key={i} className={`${baseLeft} ${item.size}`}>
              {item.text}
            </h1>
          ))}
        </div>

        {/* Middle @ */}
        <h1
          className="gradient-textdark
                       text-[1.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] 
                       xl:text-[3rem] fontheading2 text-secondary lg:-translate-y-1"
        >
          @
        </h1>

        {/* Right Text */}
        <div
          ref={rightRef}
          className="flex flex-col-reverse w-[38%] sm:w-[40%] self-end"
        >
          {rightTexts.map((item, i) => (
            <h1 key={i} className={`${baseRight} ${item.size}`}>
              {item.text}
            </h1>
          ))}
        </div>
      </div>

      {/* Description + CTA */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] mt-10 md:mt-14 lg:mt-16">
        <h3
          className="text-center fontbody1 
                       text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] 
                       xl:text-[1rem] leading-6 sm:leading-7 md:leading-8 lg:leading-9"
        >
          Your brand has one chance to prove it belongs in the future. Trust is
          built in seconds. We design brands and digital experiences that feel
          secure, modern and inspire confidence from the very first interaction.
        </h3>
        <MainCTA
          label="Get Started"
          destination="/"
          bullet="w-3 h-3"
          size="w-44 h-11 sm:w-52 sm:h-12 md:w-56 md:h-12 lg:w-60 lg:h-12"
        />
      </div>
    </section>
  );
};

export default Impact;
