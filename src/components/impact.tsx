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

    // timeline
    const tl = gsap.timeline({ repeat: -1 });

    leftItems.forEach((_, i) => {
      // scroll left down
      tl.to(
        leftRef.current,
        {
          yPercent: -(i * 94),
          duration: 0.5,
          ease: "power2.inOut",
        },
        i * 2
      );

      // scroll right up (opposite direction)
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

    // Reset to beginning before looping again
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

  return (
    <section
      className="flex flex-col w-full h-[100dvh] py-10 bg-background-primary items-center justify-between mt-10"
      id="impact"
    >
      <div>
        <h1 className="fontheading2 text-secondary text-[1rem]">
          Trusted by Fintech & SaaS Leaders
        </h1>
      </div>
      <div className="w-full overflow-hidden h-[7rem] flex  justify-center gap-10">
        {/* Left Text */}
        <div ref={leftRef} className="flex flex-col w-[40%]">
          <h1 className="w-full h-[7rem] flex items-center justify-end text-[5rem] fontheading2 text-secondary">
            Make Impact
          </h1>
          <h1 className="w-full h-[7rem] flex items-center justify-end text-[4rem] fontheading2 text-secondary">
            Create Value
          </h1>
          <h1 className="w-full h-[7rem] flex items-center justify-end text-[4.8rem] fontheading2 text-secondary">
            Stand Out
          </h1>
          <h1 className="w-full h-[7rem] flex items-center justify-end text-[5rem] fontheading2 text-secondary">
            Drive Growth
          </h1>
        </div>

        {/* Middle @ */}
        <h1 className="gradient-textdark text-[3rem] fontheading2 text-secondary mt-4">
          @
        </h1>

        {/* Right Text */}
        <div ref={rightRef} className="flex flex-col-reverse w-[40%] self-end">
          <h1 className="h-[7rem] flex items-center text-[5rem] fontheading2 text-secondary">
            First Glance
          </h1>
          <h1 className="h-[7rem] flex items-center text-[4rem] fontheading2 text-secondary">
            Every Interaction
          </h1>
          <h1 className="h-[7rem] flex items-center text-[4.8rem] fontheading2 text-secondary">
            Right Moment
          </h1>
          <h1 className="h-[7rem] flex items-center text-[5rem] fontheading2 text-secondary">
            Each Stage
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-[60%] ">
        <h3 className="text-center fontbody1 text-[1rem] ">
          Your brand has one chance to prove it belongs in the future. Trust is
          built in seconds. We design brands and digital experiences that feel
          secure, modern and inspire confidence from the very first interaction.
        </h3>
        <MainCTA
          label="Get Started"
          destination="/"
          bullet="w-3 h-3"
          size="w-60 h-12"
        />
      </div>
    </section>
  );
};

export default Impact;
