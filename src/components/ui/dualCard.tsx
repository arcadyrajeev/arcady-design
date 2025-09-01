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
  title = "CARD TItle",
  desc = "card desription",
  orientation = "xl:flex-row",
  buttonlink = "/",
}) => {
  return (
    <div
      className={` flex  ${orientation} flex-col sticky top-[10%] w-full h-[82dvh]  bg-background-primary rounded-4xl p-2 `}
    >
      <div className="relative overflow-hidden w-full h-[55%] xl:w-[45%] flex xl:h-full bg-gray-300 rounded-3xl">
        <Image
          src={imgLink}
          alt="Hero illustration"
          width={400}
          height={400}
          priority // ensures eager loading for above-the-fold images
          className="absolute  z-0 object-cover object-center w-[100%] h-[100%]"
        />
      </div>
      <div className="flex  w-full h-[42%] xl:w-[55%] xl:h-full items-center justify-center ">
        <div className="flex flex-col w-[88%] h-full py-15 px-5 gap-10">
          <h1 className="fontheading text-[4rem] leading-20">{title}</h1>
          <p className="w-[88%] text-justify fontbody1 text-[1.2rem] xl:text-[0.9rem] leading-7">
            {desc}
          </p>
          <div className="w-fit h-fit mt-auto ">
            <MainCTA
              label="EXPLORE MORE"
              destination={buttonlink}
              size="w-50 h-15"
              fontSize="text-[1rem]"
              bullet="w-2 h-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualCard;
