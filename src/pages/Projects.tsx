import React, { createRef } from "react";
import useWindowLocation from "@/hooks/useWindowLocation";
import { handleNav } from "@/helpers/navHelpers";

import Card from "@/components/Card";
import Clients from "@/components/Clients";
import crocodentistImg from "@/public/crocodentist.gif";
import faceworkImg from "@/public/faceworkbanner.jpeg"
import faceworkMobileImg from "@/public/facework-mobile.png";
import faceworkDesktopImg from "@/public/facework-desktop.png";
import Project from "@/components/Project";
import Carousel from "@/components/Carousel";
import CarouselPage from "@/components/CarouselPage";

export const projectsRef = createRef<HTMLDivElement>()

const Projects = () => {
  const location = useWindowLocation();

  return (
    <div id="projects" ref={projectsRef}>
      <h2>I made these!</h2>
      <div className="projects-container">
      <div className="project">
          <img src={crocodentistImg} />
          <h3>Chomp</h3>
        </div>
        <div className="project">
          <a href="https://facework.app/" className="card-link"/>
          <img src={faceworkImg} />
          <h3>Facework</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
