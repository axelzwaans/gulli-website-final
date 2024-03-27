import React from "react";
import SingleIcon from "./SingleIcon";

const Services = () => {
  return (
    <div
      className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-12 pb-12 lg:pb-20 flex flex-col gap-y-8"
      id="services"
    >
      <h2 className="h2">
        <span className="font-light">My </span>
        Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-x-20 gap-y-10">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center gap-x-2">
            <SingleIcon className="bg-[#B0C5A4]" />
            <h3 className="text-2xl">Service 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veritatis aut aliquam cupiditate obcaecati ipsam beatae ullam nemo!
            Et ab voluptates molestiae beatae quae reprehenderit animi odio
            voluptatum sit nemo.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center gap-x-2">
            <SingleIcon className="bg-[#EBC49F]" />
            <h3 className="text-2xl">Service 2</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veritatis aut aliquam cupiditate obcaecati ipsam beatae ullam nemo!
            Et ab voluptates molestiae beatae quae reprehenderit animi odio
            voluptatum sit nemo.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center gap-x-2">
            <SingleIcon className="bg-[#F1EF99]" />
            <h3 className="text-2xl">Service 3</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veritatis aut aliquam cupiditate obcaecati ipsam beatae ullam nemo!
            Et ab voluptates molestiae beatae quae reprehenderit animi odio
            voluptatum sit nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
