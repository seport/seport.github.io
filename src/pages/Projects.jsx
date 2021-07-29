import React from 'react';

const Projects = () => <div id="projectswrapper">
<h1>Projects</h1>
<div id="projects">
    <ul>
        <li>FaceApp</li>
        <li>Crocodile Dentist</li>
        <li>Handbot</li>
    </ul>
<a href="http://www.stayloudla.com/" target="_blank"><div class="project">
    <h1>Stay Loud, LA!</h1>
    <div className="desktop">
        <div class="screen" style={{backgroundImage:"url('stayloudladesk.png')"}}></div>
    </div>
</div></a>
<a href="http://www.taskb.it/" target="_blank"><div class="project">
    <h1>taskb.it</h1>
    <div className="mobile">
        <div className="screen" style={{backgroundImage:"url('taskbitmobi.png')"}}></div>
    </div>
    <div class="desktop">
        <div class="screen" style={{backgroundImage:"url('taskbitdesk.png')"}}></div>
    </div>
</div></a>
<a href="https://github.com/seport/package-log-database" target="_blank"><div class="project">
    <h1>UCHA Package Log</h1>
    <div class="desktop">
        <div class="screen" style={{backgroundImage:"url('packagelogtab.png')"}}></div>
    </div>
</div></a>
<div class="project">
</div>
</div>
</div>

export default Projects;