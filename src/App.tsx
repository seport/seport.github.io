import React from "react";
import Header from "@/components/Header";
import Hero from "@/pages/Hero";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Blogs from "@/pages/Blogs";
import { useBackground } from "@/contexts/backgroundContext";
import { Providers } from "@/providers";

const App = () => {
  const backgroundColor = useBackground().color
  return (
    <div style={{ backgroundColor}}>
      <Header />
      <Hero />
      <Skills />
      <Blogs />
      <Projects />
      <Contact />
    </div>
  );
};

export default () => <Providers><App /></Providers>;
