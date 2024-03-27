"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Qualifications from "@/components/Qualifications";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#fceabb] to-[#f8b500]">
      <NavBar />
      <Hero />
      <About />
      <Expertise />
      <Qualifications />
      <Services />
      <Contact />
    </main>
  );
}
