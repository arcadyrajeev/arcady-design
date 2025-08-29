import Link from "next/link";
import { ChevronRight } from "lucide-react";

type CtaSize = "xs" | "sm" | "md" | "lg" | "xl";

interface CtaProps {
  label: string;
  destination: string;
  size?: CtaSize; // optional, defaults to "md"
}

const CTA_SIZES: Record<
  CtaSize,
  {
    button: string;
    text: string;
    textTranslate: string;
    icon: number;
    iconWrapper: string;
    iconTranslate: string;
    shineSize: string;
  }
> = {
  xs: {
    button: "w-32 h-8",
    text: "text-[0.8rem]",
    textTranslate: "group-hover:translate-x-[0.02rem]",
    icon: 16,
    iconWrapper: "w-[1rem]",
    iconTranslate: "group-hover:translate-x-[1rem]",
    shineSize: "h-15 w-40",
  },
  sm: {
    button: "w-40 h-10",
    text: "text-[0.92rem]",
    textTranslate: "group-hover:translate-x-[0.02rem]",
    icon: 18,
    iconWrapper: "w-[1.2rem]",
    iconTranslate: "group-hover:translate-x-[1.2rem]",
    shineSize: "h-20 w-40",
  },
  md: {
    button: "w-48 h-12",
    text: "text-[1.12rem]",
    textTranslate: "group-hover:translate-x-[0.02rem]",
    icon: 25,
    iconWrapper: "w-[1.5rem]",
    iconTranslate: "group-hover:translate-x-[1.5rem]",
    shineSize: "h-30 w-50",
  },
  lg: {
    button: "w-64 h-16",
    text: "text-[1.4rem]",
    textTranslate: "group-hover:translate-x-[0.02rem]",
    icon: 35,
    iconWrapper: "w-[2rem]",
    iconTranslate: "group-hover:translate-x-[2rem]",
    shineSize: "h-35 w-60",
  },
  xl: {
    button: "w-76 h-18",
    text: "text-[1.8rem]",
    textTranslate: "group-hover:translate-x-[0.04rem]",
    icon: 50,
    iconWrapper: "w-10",
    iconTranslate: "group-hover:translate-x-14",
    shineSize: "h-40 w-70",
  },
};

const SideCTA: React.FC<CtaProps> = ({ label, destination, size = "md" }) => {
  const cfg = CTA_SIZES[size];

  return (
    <Link
      href={destination}
      target="blank"
      className={`${cfg.button} group flex items-center text-white justify-center p-[1.5px] rounded-[100vw]  borderstyle`}
    >
      <div className="flex overflow-hidden relative w-full h-full bg-black items-center justify-center rounded-[100vw]">
        <div
          className={`${cfg.shineSize} buttonShine group-hover:rounded-[100vw] group-hover:scale-[1.2]`}
        ></div>
        <h1
          className={`${cfg.text} ${cfg.textTranslate} fontheading2 tracking-wider -translate-x-3 z-[2]  transition-all duration-300 ease-in-out`}
        >
          {label}
        </h1>
        <div
          className={`${cfg.iconWrapper} flex items-center absolute right-[8%] justify-end ml-5 overflow-hidden z-[2]`}
        >
          <div
            className={`${cfg.iconTranslate} flex items-center transition-all duration-200 ease-in-out`}
          >
            <ChevronRight size={cfg.icon} />
            <ChevronRight size={cfg.icon} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SideCTA;
