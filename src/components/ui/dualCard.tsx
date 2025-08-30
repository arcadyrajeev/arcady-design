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
  orientation = "flex-row",
  buttonlink = "/",
}) => {
  return (
    <div
      className={`${orientation} flex sticky top-[10%] w-full h-[82dvh]  bg-background-primary rounded-4xl p-2 `}
    >
      <div className="relative overflow-hidden w-[45%] flex h-full bg-gray-300 rounded-3xl">
        <Image
          src={imgLink}
          alt="Hero illustration"
          width={400}
          height={400}
          priority // ensures eager loading for above-the-fold images
          className="absolute  z-0 object-cover object-center w-[100%] h-[100%]"
        />
      </div>
      <div className="flex  w-[55%] h-full items-center justify-center ">
        <div className="flex flex-col w-[88%] h-full py-15 px-5 gap-15">
          <h1 className="fontheading text-[4rem] leading-20">{title}</h1>
          <p className="w-[88%] text-justify fontbody1 text-[0.95rem] leading-7">
            {desc}
          </p>
          <div className="w-fit h-fit mt-auto ">
            <MainCTA
              label="Learn more"
              destination={buttonlink}
              size="w-50 h-10"
              bullet="w-3 h-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualCard;
