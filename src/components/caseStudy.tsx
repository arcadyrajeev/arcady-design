import React from "react";
import SideCTA from "./ui/sideCTA";

const CaseStudy = () => {
  return (
    <section className="flex flex-col w-full h-[110dvh] py-10 mt-20 justify-between">
      <h1 className="w-full text-[6rem] fontheading px-20">
        Our Work In Action
      </h1>
      <div className="w-full h-[64%] bg-gray-300"></div>
      <div className="w-full flex px-20">
        <SideCTA
          label="View Full Case Study"
          destination="/"
          text="text-[1.2rem]"
          button="w-90 h-14"
          shineSize="w-100 h-30"
          icon={30}
        />
      </div>
    </section>
  );
};

export default CaseStudy;
