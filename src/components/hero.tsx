import MainCTA from "./ui/mainCTA";
import SideCTA from "./ui/sideCTA";
import BlackButton from "./ui/blackButton";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      className=" flex w-full h-[95dvh] bg-background-primary justify-center "
      id="hero"
    >
      <div className="relative overflow-hidden top-0 flex  px-20 py-12 w-[96%] h-[96%] bg-secondary rounded-b-[2.6rem]">
        <Image
          src="/images/cards-back.png"
          alt="Hero illustration"
          width={400}
          height={400}
          priority // ensures eager loading for above-the-fold images
          className="absolute opacity-[0.3] z-0 object-cover right-[5%] bottom-[-20%]"
        />
        <div className="flex z-5 flex-col h-full pt-18">
          <h1 className="gradient-text fontheading text-[5.8rem] leading-24">
            Does Your Brand Reflect The Future?
          </h1>

          <h3 className="w-[62%] text-sm text-justify fontbody1 text-background-primary tracking-wider leading-7 mt-6 ml-2">
            We help fintech and tech companies build premium brands, websites,
            and products - delivering results that inspire trust and growth.
          </h3>
          <div className="flex flex-col h-fit mt-auto">
            <MainCTA
              label="LET'S WORK TOGETHER"
              destination="/"
              size="w-84 h-15"
              fontSize="text-[1.28rem]"
              bullet="w-3 h-3"
              icon={40}
            />
            <p className="fontbody text-xs text-background-primary tracking-wide pl-5 pt-2">
              Transform your Platform with us
            </p>
          </div>
        </div>
        <div className="flex z-5 flex-col gap-6 items-end justify-end">
          <SideCTA label="View Works" destination="/" />

          <h2 className="fontheading text-right text-white text-2xl m-0 p-0">
            Seamless Experiences, Future-Ready Brands.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
