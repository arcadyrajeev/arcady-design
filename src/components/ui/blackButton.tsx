import Link from "next/link";

interface CtaProps {
  label: string;
  destination: string;
  buttonSize?: string;
  text?: string;
  shineSize?: string;
  desc?: string;
}

const BlackButton: React.FC<CtaProps> = ({
  label,
  destination,
  buttonSize = "w-30 h-7",
  text = "text-[0.6rem]",
  shineSize = "h-15 w-40",
  desc = "",
}) => {
  return (
    <Link
      href={destination}
      className={`${buttonSize} group flex items-center text-white justify-center p-[1px] rounded-[100vw]  borderstyle opacity-[0.7] hover:opacity-[1] transition-opacity duration-260 ease-in-out`}
      aria-label={`${label} – ${desc}`}
    >
      <div className="flex px-auto overflow-hidden relative w-full h-full bg-black items-center justify-center rounded-[100vw]">
        <div
          aria-hidden="true"
          className={`${shineSize} buttonShine group-hover:rounded-[10vw] group-hover:scale-[1.2]`}
        ></div>
        <span className={`${text} fontheading2 tracking-wider `}>{label}</span>
        <span className="sr-only">{desc}</span>
      </div>
    </Link>
  );
};

export default BlackButton;
