import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
  iconPosition?: string;
}

const MagicButton = ({
  title,
  icon,
  handleClick,
  otherClasses,
  iconPosition = "right",
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10  overflow-hidden rounded-lg p-[1px] focus:outline-none `}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {iconPosition === "left" && icon}
        {title}
        {iconPosition === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
