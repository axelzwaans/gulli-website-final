import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import QualificationItems from "./QualificationItems";

const qualifications = [
  {
    title: "Postgraduate Diploma in Psychosynthesis Counselling",
    alignLeft: true,
  },
  { title: "Psychosynthesis Coaching Diploma", alignLeft: false },
  { title: "BSc (Hons) Psychology", alignLeft: true },
];

const Qualifications = () => {
  const qualificationsRef = useRef();
  const isInView = useInView(qualificationsRef, { margin: "-100px" });

  return (
    <div
      ref={qualificationsRef}
      className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-12 pb-12 lg:pb-20 flex flex-col gap-12 justify-center max-w-4xl"
    >
      <h2 className="h2">
        <span className="font-light">My </span>
        Qualifications
      </h2>
      <div className="relative">
        <div className="absolute h-[90%] self-center left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-600"></div>
        {qualifications.map((qualification, index) => (
          <motion.div
            key={index}
            initial={{ x: "-300px" }}
            animate={isInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
          >
            <QualificationItems
              content={qualification.title}
              alignLeft={qualification.alignLeft}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
