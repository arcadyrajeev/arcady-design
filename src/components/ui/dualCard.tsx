import Image from "next/image";
import MainCTA from "./mainCTA";

interface cardProps {
  imgLink?: string;
  title: string;
  desc: string;
  orientation?: string;
  buttonlink?: string;
}

const DualCard: React.FC<cardProps> = ({
  imgLink = "/",
  title = "CARD Title",
  desc = "Card description",
  orientation = "xl:flex-row",
  buttonlink = "/",
}) => {
  return (
    <div
      className={`flex ${orientation} flex-col sticky top-[6%] lg:top-[10%] 
                  w-full h-[88dvh] bg-background-primary rounded-4xl 
                  p-2 `}
    >
      {/* Image Section */}
      <div
        className="relative overflow-hidden 
                      w-full  
                       landscape:h-full  portrait:h-[50%] landscape:w-[45%] portrait:w-full
                      bg-gray-300 rounded-3xl"
      >
        <Image
          src={imgLink}
          alt="Card illustration"
          width={800}
          height={800}
          priority
          className="absolute z-0 object-cover object-center w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div
        className="flex landscape:w-[55%] portrait:w-full portrait:h-[50%]
                      items-center justify-center"
      >
        <div
          className="flex flex-col 
                        w-[90%] sm:w-[88%] 
                        h-full py-8 md:py-12 lg:py-15 
                        px-3 sm:px-5 gap-3 sm:gap-8 md:gap-10"
        >
          {/* Title */}
          <h1
            className="fontheading 
                         text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] portrait:lg:text-[4vh] lg:text-[7vh] xl:text-[4rem] 
                         leading-tight md:leading-[1.1] lg:leading-[1.2] xl:leading-20"
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="w-full sm:w-[90%] 
                        text-justify fontbody1 
                        text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] portrait:lg:text-[2vh] lg:text-[2.4vh] xl:text-[0.9rem] 
                        leading-6 sm:leading-7 md:leading-8 lg:leading-[3.6vh] xl:leading-7"
          >
            {desc}
          </p>

          {/* CTA */}
          <div className="w-fit h-fit mt-auto ">
            <MainCTA
              label="EXPLORE MORE"
              destination={buttonlink}
              size="w-40 sm:w-44 md:w-48 lg:w-50 h-12 sm:h-13 md:h-14 lg:h-15"
              fontSize="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1rem]"
              bullet="w-2 h-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualCard;
