import React from "react";
import useWindowLocation from "../hooks/useWindowLocation";
import { handleNav } from "../helpers/navHelpers";

import Card from "../components/Card";
import Clients from "../components/Clients";
import crocodentistImg from "../crocodentist.gif";
import faceworkMobileImg from "../facework-mobile.png";
import faceworkDesktopImg from "../facework-desktop.png";
import packagelogtabImg from "../packagelogtab.png";
import Project from "../components/Project";
import Carousel from "../components/Carousel";
import CarouselPage from "../components/CarouselPage";
const Projects = () => {
  const location = useWindowLocation();

  return (
    <div id="projectswrapper">
      <div class="projects-scroll-wrapper">
        <Carousel isShifted={location.search.project}>
          <CarouselPage>
            <h1>Projects</h1>
            <div id="projects">
              <div
                class="project"
                onClick={() =>
                  handleNav({ target: "projects", query: { project: "chomp" } })
                }
              >
                <div className="desktop">
                  <div
                    class="screen"
                    style={{ backgroundImage: `url(${crocodentistImg})` }}
                  ></div>
                </div>
                <h1>Chomp</h1>
              </div>
              <div
                class="project"
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
                <div class="desktop">
                  <div
                    class="screen"
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
      <Clients />
    </div>
  );
};

export default Projects;
