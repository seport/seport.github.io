import React, { createRef, useState } from "react";
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
import { Modal } from "@/components/Modal";
import projects from "@/projects";
import Markdown from "markdown-to-jsx";

export const projectsRef = createRef<HTMLDivElement>()

const Projects = () => {
  const location = useWindowLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<keyof typeof projects>()

  const openModal = (e: any) => {
    const id = e.target.name
    setModalContent(id)
    setModalIsOpen(true)
  }

  return (
    <div id="projects" ref={projectsRef}>
      <h2>I made these!</h2>
      <div className="projects-container">
        <div className="project">
          <button className="button--plain card-link" name="chomp" onClick={openModal}></button>
          <img src={crocodentistImg} />
          <h3>Chomp</h3>
        </div>
        <div className="project">
        <button className="button--plain card-link" name="facework" onClick={openModal}></button>
          <img src={faceworkImg} />
          <h3>Facework</h3>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} toggleOpen={() => { setModalIsOpen(!modalIsOpen) }}>
        <Markdown>
          {projects[modalContent]}
        </Markdown>
      </Modal>
    </div>
  );
};

export default Projects;
