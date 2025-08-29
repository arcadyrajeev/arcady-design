import Link from "next/link";

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
    shineSize: string;
  }
> = {
  xs: {
    button: "w-32 h-8",
    text: "text-[0.8rem]",
    shineSize: "h-15 w-40",
  },
  sm: {
    button: "w-40 h-10",
    text: "text-[0.92rem]",
    shineSize: "h-20 w-40",
  },
  md: {
    button: "w-48 h-12",
    text: "text-[1.12rem]",
    shineSize: "h-30 w-50",
  },
  lg: {
    button: "w-64 h-16",
    text: "text-[1.4rem]",
    shineSize: "h-35 w-60",
  },
  xl: {
    button: "w-76 h-18",
    text: "text-[1.8rem]",
    shineSize: "h-40 w-70",
  },
};

const BlackButton: React.FC<CtaProps> = ({
  label,
  destination,
  size = "md",
}) => {
  const cfg = CTA_SIZES[size];

  return (
    <Link
      href={destination}
      target="blank"
      className={`${cfg.button} group flex items-center text-white justify-center p-[1.5px] rounded-[100vw]  borderstyle`}
    >
      <div className="flex overflow-hidden relative w-full h-full bg-black items-center justify-center rounded-[100vw]">
        <div
          className={`${cfg.shineSize} buttonShine group-hover:rounded-[10vw] group-hover:scale-[1.2]`}
        ></div>
        <h1 className={`${cfg.text} fontheading2 tracking-wider `}>{label}</h1>
      </div>
    </Link>
  );
};

export default BlackButton;
