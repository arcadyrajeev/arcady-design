import React from "react";

interface sectionProps {
  text: string;
}

const InBetween: React.FC<sectionProps> = ({ text }) => {
  return (
    <div>
      <h1 className="fontheading2 flex text-[2rem] text-secondary w-full py-20 justify-center">
        {text}
      </h1>
    </div>
  );
};

export default InBetween;
