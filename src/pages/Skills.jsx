import React, { useEffect } from "react";
import useWindowLocation from "../hooks/useWindowLocation";
import Card from "../components/Card";

/******  HANDLE NAV ********/

const handleNav = () => {
  window.history.pushState(null, "", "/?skill=react#skills");
  let myEvent = new Event("popstate");
  window.dispatchEvent(myEvent);
};

/************************* */

const SkillCard = ({ skill, sprout }) => (
  <div className="skill-card__container" onClick={() => handleNav("react")}>
    <Card height="200px" width="50px">
      <div className="skill-card">
        {sprout && <div className="skill-card__sprout"></div>}
        {skill}
      </div>
    </Card>
  </div>
);

const Skills = () => {
  const location = useWindowLocation();
  // window.addEventListener("popstate", () => {console.log(window.location)});

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div id="skills">
      <div>
        <div class={`skillscontent ${location.search.skill ? "hidden" : ""}`}>
          <h1>
            Technology is neat.
            <br />
            Here's some of my favorites.
          </h1>
          <ul>
            <li>
              <SkillCard skill="React" />
            </li>
            <li>
              <SkillCard skill="Redux" />
            </li>
            <li>
              <SkillCard skill="Node.js" />
            </li>
            <li>
              <SkillCard skill="Typescript" sprout={true} />
            </li>
            <li>
              <SkillCard skill="Ruby/Rails" />
            </li>
            <li>
              <SkillCard skill="Elixir" sprout={true} />
            </li>
            <li>
              <SkillCard skill="Cypress" />
            </li>
          </ul>
        </div>
        <div class={`skillscontent ${!location.search.skill ? "hidden" : ""}`}>
          <button type="button" onClick={() => {
            window.history.pushState(null, "", "/#skills")
            let myEvent = new Event("popstate");
            window.dispatchEvent(myEvent);
          }}>Back</button>
          <h1>React Resources</h1>
          <p>Blah blah  bblah  blah abl</p>
          <p></p>
          <p>:)</p>
          <p>The  end</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
