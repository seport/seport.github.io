import React, { useEffect } from "react";
import useWindowLocation from "../hooks/useWindowLocation";
import Card from "../components/Card";
import RecommendedReading from "../components/RecommendedReading";
import { handleNav } from "../helpers/navHelpers";

const SkillCard = ({ skill, skillId, sprout }) => (
  <div className="skill-card__container" onClick={() => handleNav(`/?skill=${skillId}#skills`)}>
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
              <SkillCard skill="React" skillId="react" />
            </li>
            <li>
              <SkillCard skill="Redux" skillId="redux" />
            </li>
            <li>
              <SkillCard skill="Node.js" skillId="node" />
            </li>
            <li>
              <SkillCard skill="Typescript" skillId="ts" sprout={true} />
            </li>
            <li>
              <SkillCard skill="Ruby/Rails" skillId="rails" />
            </li>
            <li>
              <SkillCard skill="Elixir" skillId="elixir" sprout={true} />
            </li>
            <li>
              <SkillCard skill="Cypress" skillId="cypress" />
            </li>
          </ul>
        </div>
        <div class={`skillscontent ${!location.search.skill ? "hidden" : ""}`}>
          <Card width="60vw">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav("/#skills")
              }}
            >
              x
            </a>
            <RecommendedReading language={location.search.skill} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
