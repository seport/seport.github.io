import React from "react";
import Clients from "../components/Clients";
import crocodentistImg from "../crocodentist.gif";
import faceworkMobileImg from "../facework-mobile.png";
import faceworkDesktopImg from "../facework-desktop.png";
import packagelogtabImg from "../packagelogtab.png";
const Projects = () => (
  <div id="projectswrapper">
    <h1>Projects</h1>
    <div id="projects">
      <div class="project">
        <div className="desktop">
          <div
            class="screen"
            style={{ backgroundImage: `url(${crocodentistImg})` }}
          ></div>
        </div>
        <h1>Chomp</h1>
      </div>
      <div class="project">
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
      <div class="project">
        <div class="desktop">
          <div
            class="screen"
            style={{ backgroundImage: `url(${packagelogtabImg})` }}
          ></div>
        </div>
        <h1>UCHA Package Log</h1>
      </div>
      <div class="project"></div>
      <Clients />
    </div>
  </div>
);

export default Projects;
