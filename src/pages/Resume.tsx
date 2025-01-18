import { Banner } from "@/components/banner";
import { Contact } from "@/components/Contact";
import Header from "@/components/Header";
import React from "react";

const Resume = () => {
    return (
        <div>
            <Header />
            <div id="resume" className="section">
                <Banner color='info' button={<a href="/public/Sarah%20Port%20Resume.pdf" download>Download</a>}>Download as PDF</Banner>
                <div className="resume--title">
                    <h3>Sarah Port</h3>
                    <div>https://www.linkedin.com/in/seport</div>
                    <hr />
                </div>
                <h2 className="resume--header">Relevant Employment History</h2>
                <div className="resume--grid">
                    <h3 className="resume--subheader">Lead Backend Engineer</h3>
                    <div>May 2024 - Present</div>
                </div>
                <div>Malama GO</div>
                <ul>
                    <li>Built a scalable Node.js API to replace a legacy PHP backend, integrating with MySQL and supporting multiple frontends.</li>
                    <li>Developed user management systems and a custom Unix-style wildcard-based authorization framework.</li>
                    <li>Modernized a PHP app by integrating it into a React web app using pub/sub messaging for seamless migration.</li>
                </ul>
                <br />
                <div className="resume--grid">
                    <h3 className="resume--subheader">Front End Software Engineer</h3>
                    <div>February 2022 - December 2023</div>
                </div>
                <div>Soundcloud</div>
                <ul>
                    <li>Launched Soundcloud For Artists to over 50,000 users, enabling artists to identify and message top fans according to listening habits and monetary contributions.</li>
                    <li>Piloted integration with graphql in greenfield and legacy codebases.</li>
                    <li>Collaborated cross-timezone with our New York and Berlin offices.</li>
                </ul>
                <br />
                <div className="resume--grid">
                    <h3 className="resume--subheader">Full Stack Software Engineer</h3>
                    <div>December 2017 - February 2022</div>
                </div>
                <div>Carbon Five</div>
                <ul>
                    <li>Coached clients on Extreme Programming and agile software development process.</li>
                    <li>Worked as a consultant with cross-cutting teams on products ranging from prototypes to large scale data integrations and legacy codebase refactors.</li>
                </ul>
                <br />
                <div className="resume--grid">
                    <h2 className="resume--header">Freelance & Personal Projects</h2>
                    <div>More projects available at https://github.com/seport</div>
                </div>
                <h3 className="resume--subheader">Chomp</h3>
                <div>Jackbox-like interactive twitch game designed for over 100 concurrent players. It uses socket.io to drive real time events to the stream and the player's phones simultaneously.</div>
                <br />
                <h3 className="resume--subheader">Facework</h3>
                <div>Open source digital art installation by Kyle McDonald. I had the pleasure of working on it as a frontend developer alongside Evelyn Masso in Winter 2020.</div>
                <br />
                <h3 className="resume--subheader">Stay Loud, LA!</h3>
                <div>A calendar of community organization events in LA using the facebook graph api, jQuery, and PHP.</div>
                <br />
                <h2 className="resume--header">Education</h2>
                <div className="resume--grid">
                    <h3 className="resume--subheader">University of California, Los Angeles</h3>
                    <div>September 2013 - December 2015</div>
                </div>
                <ul>
                    <li>Mathematics BS, Computing Specialization</li>
                </ul>
                <br />
                <div className="resume--grid">
                    <h3 className="resume--subheader">Foothill College</h3>
                    <div>September 2009 - June 2013</div>
                </div>
                <ul>
                    <li>Mathematics AS</li>
                    <li>Attended Foothill Middle College as a High School student from 2009-2011, a program enabling students to take the majority of their high school credits at a college level.</li>
                </ul>
                <br />
                <h2 className="resume--header">Skills</h2>
                <div>Javascript, Typescript, Node.js, Next.js, MySQL, GraphQL, Cypress, Jest, React Testing Library</div>
            </div>
            <Contact />
        </div>
    );
};

export default Resume
