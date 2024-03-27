import React from "react";

const QualificationItems = ({ content, alignLeft }) => {
  return (
    <div className="flex justify-between items-center h-48 relative">
      {alignLeft ? (
        <div className="w-full flex justify-start">
          <div className="bg-white p-1 md:p-3 w-[40%] md:w-1/3 font-semibold rounded-b-lg rounded-s-lg max-w-xs">
            {content}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end">
          <div className="bg-white p-1 md:p-3 w-[40%] md:w-1/3 font-semibold rounded-b-lg rounded-s-lg max-w-xs">
            {content}
          </div>
        </div>
      )}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-5 rounded-full ring-4 ring-[#F6B093] bg-[#F6B093]"></div>
      </div>
    </div>
  );
};

export default QualificationItems;
