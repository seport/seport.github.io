import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/pages/Hero";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Blogs from "@/pages/Blogs";

const App = () => {
//   useEffect(() => {
//     const activeAnchor = window.location.hash;
//     console.log(activeAnchor)
//     if (activeAnchor) {
//       const activeElement = document.getElementById(activeAnchor.slice(1));
//       const scrollHeight = activeElement.offsetTop;
//       window.scrollTo(0, scrollHeight);
//     }
//   });
  return (
    <div>
      <Hero />
      <Header />
      <Skills />
      <Blogs />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
