import React from "react";

const SingleIcon = ({ className }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div
          className={`${className} w-6 h-8 rounded-[50%] rotate-[30deg] right-2 bottom-1 border border-black`}
        />
      </div>
    </div>
  );
};

export default SingleIcon;
