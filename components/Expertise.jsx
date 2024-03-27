"use client";

import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import ScrollSVG from "./ScrollSVG";
import { useRef } from "react";

const expertiseItems = [
  "Addiction",
  "ADHD",
  "Anxiety",
  "Bereavement",
  "Chronic Illness",
  "Chronic Pain",
  "Codependency",
  "Depression",
  "Domestic Abuse",
  "Family Conflict",
  "Life Coaching",
  "Life Transitions",
  "Obsessive-Compulsive (OCD)",
  "Peer Relationships",
  "Racial Identity",
  "Self-Harming",
  "Sexual Abuse",
  "Sleep or Insomnia",
  "Spirituality",
  "Stress",
  "Suicidal Ideation",
  "Trauma and PTSD",
];

const Expertise = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(
    skillRef,
    { margin: "-100px" },
    { once: true }
  );
  return (
    <div
      className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-12 pb-12 lg:pb-20 max-w-4xl flex flex-col gap-12 justify-center"
      ref={skillRef}
    >
      {/* SKILL TITLE */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <h2 className="h2">
          <span className="font-light">My </span>
          Expertise
        </h2>
      </motion.div>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {item}
          </div>
        ))}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <ScrollSVG />
    </div>
  );
};

export default Expertise;
