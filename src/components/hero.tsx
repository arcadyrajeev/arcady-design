import MainCTA from "./ui/mainCTA";
import SideCTA from "./ui/sideCTA";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      className=" flex w-full h-[95dvh] bg-background-primary justify-center "
      id="hero"
    >
      <div className="relative overflow-hidden top-0 flex  px-20 py-12 w-[96%] h-[96%] bg-secondary rounded-b-[2.6rem]">
        <div className="absolute overflow-hidden h-[70dvh] w-[50vh] xl:h-[40vw] xl:w-[30vw] opacity-[0.3] z-0  right-[5%] bottom-[-20%]">
          <Image
            src="/images/cards-back.png"
            alt="Hero illustration"
            fill
            priority // ensures eager loading for above-the-fold images
            className="object-contain object-center"
          />
        </div>

        <div className="flex z-5 flex-col h-full pt-18">
          <h1 className="gradient-text fontheading text-[7rem] xl:text-[5.8rem] leading-30 xl:leading-24">
            Does Your Brand Reflect The Future?
          </h1>

          <h3 className="w-[80%] xl:w-[62%] text-[1.6rem] xl:text-[0.9rem] text-justify fontbody1 text-background-primary tracking-[0.11rem] xl:tracking-wider leading-10 xl:leading-7  mt-20 xl:mt-6 ml-2">
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
            <p className="fontbody text-[1.2rem] xl:text-[0.5rem] text-background-primary tracking-wide pl-5 pt-2">
              Transform your Platform with us
            </p>
          </div>
        </div>
        <div className="flex z-5 flex-col gap-6 items-end justify-end">
          <SideCTA label="View Works" destination="/works" />

          <h2 className="fontheading text-right text-white text-2xl m-0 p-0">
            Seamless Experiences, Future-Ready Brands.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
