import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ctaProps {
  label: string;
  destination: string;
}

const MainCTA: React.FC<ctaProps> = ({ label, destination }) => {
  return (
    <Link
      href={destination}
      className="group flex relative overflow-hidden px-2 rounded-[100vw] justify-center items-center w-80 h-15  hover:border-2  bg-accent"
    >
      <div className="absolute z-0 left-[10%] w-3 h-3 rounded-[50%] bg-accent-foreground group-hover:w-100 group-hover:h-100 group-hover:-translate-x-20 transition-all duration-250 ease-in"></div>{" "}
      <p className="z-5 fontcaps text-[1.28rem] translate-x-1 text-accent-foreground group-hover:text-foreground group-hover:-translate-x-6 transition-all duration-300 ease-in-out">
        {label}
      </p>
      <MoveRight
        size={30}
        className="absolute right-[8%] -translate-x-10 opacity-0 group-hover:opacity-100 text-accent-foreground group-hover:text-foreground  group-hover:translate-x-0 transition-all duration-350 ease-in-out"
      />
    </Link>
  );
};

export default MainCTA;
