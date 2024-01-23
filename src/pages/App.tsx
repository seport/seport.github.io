import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import { useBackground } from "@/contexts/backgroundContext";
import { Providers } from "@/providers";
import { About } from "@/components/About";
import Clients from "@/components/Clients";

const App = () => {
  const backgroundColor = useBackground().color
  return (
    <div style={{ backgroundColor }}>
      <Header />
      <div className="section">
        <Hero />
        <About />
      </div>
      <Clients />
      <div className="section">
        <Skills />
        <Blogs />
        <Projects />
      </div>
      <Contact />
    </div>
  );
};

export default () => <Providers><App /></Providers>;
