import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CtaProps {
  label: string;
  destination: string;
  button?: string;
  text?: string;
  icon?: number;
  iconWrapper?: string;
  shineSize?: string;
}

const SideCTA: React.FC<CtaProps> = ({
  label,
  destination,
  button = "w-42 h-10",
  text = "text-[0.9rem]",
  icon = 20,
  iconWrapper = "w-5 h-full",
  shineSize = "h-20 w-60",
}) => {
  return (
    <Link
      href={destination}
      target="blank"
      className={`${button} group flex items-center text-white justify-center p-[2px] rounded-[100vw]  borderstyle`}
    >
      <div className="flex overflow-hidden relative w-full h-full bg-black items-center justify-center rounded-[100vw]">
        <div
          className={`${shineSize} buttonShine group-hover:rounded-[100vw] group-hover:scale-[1.2]`}
        ></div>
        <h1
          className={`${text} fontheading2 tracking-wider -translate-x-3 z-[2] group-hover:translate-x-[4%] transition-all duration-300 ease-in-out`}
        >
          {label}
        </h1>
        <div
          className={`${iconWrapper} flex items-center absolute right-[8%] justify-end ml-5 overflow-hidden z-[2]`}
        >
          <div
            className={`group-hover:translate-x-[50%] flex items-center transition-all duration-200 ease-in-out`}
          >
            <ChevronRight size={icon} />
            <ChevronRight size={icon} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SideCTA;
