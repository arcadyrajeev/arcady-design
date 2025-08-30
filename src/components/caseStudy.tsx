import React from "react";
import SideCTA from "./ui/sideCTA";

const CaseStudy = () => {
  return (
    <section className="flex flex-col w-full h-[100dvh] p-10 mt-10 justify-between">
      <h1 className="w-full text-[6rem] fontheading">Our Work In Action</h1>
      <div className="w-full flex justify-center">
        <SideCTA
          label="View Full Case Study"
          destination="/"
          text="text-[1.2rem]"
          button="w-90 h-14"
          shineSize="w-100 h-30"
        />
      </div>
    </section>
  );
};

export default CaseStudy;
