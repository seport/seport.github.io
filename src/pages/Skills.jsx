import React from "react";
import Card from "../components/Card";

const SkillCard = ({ skill, sprout }) => (
  <div className="skill-card__container">
    <Card height="200px" width="50px">
      <div className="skill-card">
        {sprout && <div className="skill-card__sprout"></div>}
        {skill}
      </div>
    </Card>
  </div>
);

const Skills = () => (
  <div id="skills">
    <div class="skillscontent">
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
  </div>
);

export default Skills;
