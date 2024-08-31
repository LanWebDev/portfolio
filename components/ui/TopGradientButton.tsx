import React from "react";

interface TopGradientButtonProps {
  title: string;
  icon: React.ReactNode;
}

const TopGradientButton = ({ title, icon }: TopGradientButtonProps) => {
  return (
    <button className="relative  h-12 w-full md:mt-10  rounded-lg p-[1px] focus:outline-none  py-2   bg-black-100 text-white text-sm hover:shadow-2xl hover:shadow-purple/[0.15]  transition duration-200 border border-slate-600">
      <div className="absolute inset-x-0 h-px w-full mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-purple to-transparent" />
      <span className="inline-flex h-full cursor-pointer items-center justify-center rounded-lg  px-5 gap-2 text-sm font-medium text-white backdrop-blur-3xl ">
        {title} {icon}
      </span>
    </button>
  );
};

export default TopGradientButton;
