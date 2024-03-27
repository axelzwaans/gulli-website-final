"use client";

import Brain from "./Brain";
import ScrollSVG from "./ScrollSVG";
import Signature from "./Signature";
import { useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="lg:flex" id="about">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-12 xl:pt-48 lg:pb-44 flex flex-col lg:w-2/3 xl:w-1/2">
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="h2">
            <span className="font-light">About </span>
            Me
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            harum quibusdam cupiditate nobis accusamus sed aut aperiam,
            reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
            suscipit! Vel doloremque numquam quam nihil.
          </p>
          <span className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="self-end">
            <Signature />
          </div>
          <ScrollSVG />
        </div>
      </div>
      <div className="hidden lg:block w-1/3 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default About;
