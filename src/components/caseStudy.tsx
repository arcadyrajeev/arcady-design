import React from "react";
import SideCTA from "./ui/sideCTA";

const CaseStudy = () => {
  return (
    <section
      className="flex flex-col w-full 
                 h-auto min-h-[100dvh] xl:h-[110dvh] 
                 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-10 
                 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 
                 justify-between"
    >
      {/* Heading */}
      <h1
        className="w-full fontheading 
                   text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 
                   px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        Our Work In Action
      </h1>

      {/* Case Study Preview */}
      <div
        className="w-full 
                   h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[64%] 
                   bg-gray-300 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-0"
      ></div>

      {/* CTA */}
      <div
        className="w-full flex 
                      px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 
                      mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-0"
      >
        <SideCTA
          label="View Full Case Study"
          destination="/"
          text="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem]"
          button="w-52 h-11 sm:w-64 sm:h-12 md:w-72 md:h-13 lg:w-80 lg:h-14 xl:w-90 xl:h-14"
          shineSize="w-72 h-20 sm:w-80 sm:h-24 md:w-90 md:h-26 lg:w-96 lg:h-28 xl:w-100 xl:h-30"
          icon={24}
        />
      </div>
    </section>
  );
};

export default CaseStudy;
