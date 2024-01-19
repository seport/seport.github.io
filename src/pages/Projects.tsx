import React, { createRef } from "react";
import useWindowLocation from "@/hooks/useWindowLocation";
import { handleNav } from "@/helpers/navHelpers";

import Card from "@/components/Card";
import Clients from "@/components/Clients";
import crocodentistImg from "@/public/crocodentist.gif";
import faceworkMobileImg from "@/public/facework-mobile.png";
import faceworkDesktopImg from "@/public/facework-desktop.png";
import Project from "@/components/Project";
import Carousel from "@/components/Carousel";
import CarouselPage from "@/components/CarouselPage";

export const projectsRef = createRef<HTMLDivElement>()

const Projects = () => {
  const location = useWindowLocation();

  return (
    <div id="projectswrapper" ref={projectsRef}>
      <div className="projects-scroll-wrapper">
        <Carousel isShifted={location.search.project}>
          <CarouselPage>
            <h1>Projects</h1>
            <div id="projects">
              <div
                className="project"
                onClick={() =>
                  handleNav({ target: "projects", query: { project: "chomp" } })
                }
              >
                <div className="desktop">
                  <div
                    className="screen"
                    style={{ backgroundImage: `url(${crocodentistImg})` }}
                  ></div>
                </div>
                <h1>Chomp</h1>
              </div>
              <div
                className="project"
                onClick={() =>
                  handleNav({
                    target: "projects",
                    query: { project: "facework" },
                  })
                }
              >
                <div className="mobile">
                  <div
                    className="screen"
                    style={{ backgroundImage: `url(${faceworkMobileImg})` }}
                  ></div>
                </div>
                <div className="desktop">
                  <div
                    className="screen"
                    style={{ backgroundImage: `url(${faceworkDesktopImg})` }}
                  ></div>
                </div>
                <h1>FaceWork</h1>
              </div>
            </div>
          </CarouselPage>
          <CarouselPage>
            <Card>
              <div style={{ width: "100%" }}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav({ target: "projects", query: { project: "" } });
                  }}
                >
                  Back to project list
                </a>
              </div>
              <Project project={location.search.project} />
            </Card>
          </CarouselPage>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
