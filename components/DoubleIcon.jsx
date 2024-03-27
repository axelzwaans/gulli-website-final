import React from "react";

const DoubleIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="w-8 h-10 rounded-[50%] bg-[#1F2937] rotate-[-30deg] absolute right-2 bottom-1" />
        <div className="w-8 h-10 border border-black rounded-[50%] bg-[#F6B093] rotate-[30deg]" />
      </div>
    </div>
  );
};

export default DoubleIcon;
