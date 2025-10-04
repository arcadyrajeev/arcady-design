import MainCTA from "./ui/mainCTA";
import SideCTA from "./ui/sideCTA";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="flex w-full h-[95dvh] bg-background-primary justify-center"
      id="hero"
    >
      <div className="relative overflow-hidden top-0 flex flex-col md:flex-row px-6 sm:px-10 md:px-16 lg:px-20 py-8 md:py-12 w-[96%] h-[96%] bg-secondary rounded-b-[2.6rem]">
        {/* Decorative Image */}
        <div
          className="absolute overflow-hidden opacity-30 z-0 
                        w-[60vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] 
                        md:w-[40vw] md:h-[60vh] 
                        xl:w-[30vw] xl:h-[40vw] 
                        right-[5%] bottom-[-10%]"
        >
          <Image
            src="/images/cards-back.png"
            alt="Hero illustration"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Left Content */}
        <div className="flex z-10 flex-col h-full pt-12 xl:pt-18">
          <h1
            className="gradient-text fontheading 
                         text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[7vh] 
                         xl:text-[5.4rem] 
                         leading-tight md:leading-[1.1] xl:leading-24"
          >
            Does Your Brand Reflect The Future?
          </h1>

          <h3
            className="w-full max-w-[60ch] sm:w-[90%] md:w-[75%] lg:w-[90%] xl:w-[68%] 
                         text-[0.8rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[2.2vh] xl:text-[1.1rem] 
                         text-justify fontbody1 text-background-primary 
                         tracking-wide md:tracking-[0.08rem] xl:tracking-wider 
                         leading-6 sm:leading-7 md:leading-8 lg:leading-[3vh] xl:leading-7 
                         mt-6 sm:mt-8 md:mt-12 xl:mt-6 ml-1 sm:ml-2"
          >
            We design future-proof brands and products for fintech, tech, and
            content-driven platforms — delivering seamless interfaces and
            exceptional user experiences.
          </h3>

          <div className="flex flex-col h-fit mt-6 sm:mt-10 md:mt-auto">
            <MainCTA
              label="LET'S WORK TOGETHER"
              destination="/"
              size="w-64 sm:w-72 md:w-80 lg:w-84 h-12 sm:h-14 md:h-15"
              fontSize="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.28rem]"
              bullet="w-2.5 h-2.5 sm:w-3 sm:h-3"
              icon={36}
            />
            <p className="fontbody text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[0.8rem] text-background-primary tracking-wide pl-2 sm:pl-4 pt-2">
              Transform your Platform with us
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex absolute bottom-0 right-0 w-[80vw] md:w-[50vw] xl:w-[36vw]  p-12 z-30 flex-col gap-4 sm:gap-6 items-end justify-end mt-8 md:mt-0">
          <SideCTA label="View Works" destination="/works" />

          <h2
            className="fontheading text-right text-white 
                         text-lg sm:text-xl md:text-2xl lg:text-3xl 
                         m-0 p-0"
          >
            Seamless Experiences, Future-Ready Brands.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
