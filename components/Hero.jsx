"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col px-4 pt-8 md:pt-20 lg:pt-82 gap-8 items-start justify-center sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* Title */}
          <h1 className="h1 max-w-2xl">
            Lorem ipsum dolor sit amet, ut enim ad minim veniam.
          </h1>
          {/* Subtitle */}
          <p className="md:text-xl max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          {/* Button */}
          <button className="p-4 rounded ring-1 ring-black bg-[#F6B093] z-10 hover:opacity-90">
            Get in touch
          </button>
        </div>
        {/* Image container */}
        <div className="w-full absolute bottom-0 left-0 h-1/3 xl:hidden">
          <Image
            src="/hero/herobg2.png"
            alt="hero"
            fill
            className="object-cover object-top md:object-center opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
