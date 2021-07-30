import React from 'react';
import Clients from '../components/Clients';
import crocodentistImg from '../crocodentist.gif';
import faceworkMobileImg from '../facework-mobile.png';
import faceworkDesktopImg from '../facework-desktop.png';

const Projects = () => <div id="projectswrapper">
<h1>Projects</h1>
<div id="projects">
<a href="" target="_blank"><div class="project">
    <h1>Chomp</h1>
    <div className="desktop">
        <div class="screen" style={{backgroundImage:`url(${crocodentistImg})`}}></div>
    </div>
</div></a>
<a href="" target="_blank"><div class="project">
    <h1>FaceWork</h1>
    <div className="mobile">
        <div className="screen" style={{backgroundImage:`url(${faceworkMobileImg})`}}></div>
    </div>
    <div class="desktop">
        <div class="screen" style={{backgroundImage:`url(${faceworkDesktopImg})`}}></div>
    </div>
</div></a>
<a href="" target="_blank"><div class="project">
    <h1>UCHA Package Log</h1>
    <div class="desktop">
        <div class="screen" style={{backgroundImage:"url('packagelogtab.png')"}}></div>
    </div>
</div></a>
<div class="project">
</div>
<Clients />
</div>
</div>

export default Projects;