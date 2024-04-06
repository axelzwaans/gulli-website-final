"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import DoubleIcon from "./DoubleIcon";

const links = [
  { path: "/#about", title: "About" },
  { path: "/#services", title: "Services" },
  { path: "/#contact", title: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex items-center justify-between px-4 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-50 relative">
      {/* LOGO */}
      <div className="md:hidden lg:flex">
        <Link href="/" className="pl-2.5 flex items-center gap-x-2">
          <DoubleIcon />
          <span className="uppercase">Gulli Skatun</span>
        </Link>
      </div>
      {/* LINKS */}
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            scroll
            className="border-b border-black hover:border-dotted"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute z-20 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.title}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
