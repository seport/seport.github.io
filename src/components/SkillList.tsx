import React from "react";
import SkillCard from "@/components/SkillCard";

const SkillList = () => (
  <div className="skill-list">
    <div className="skill-list__container">
      <ul>
        <li>
          <SkillCard skill="React" skillId="react" />
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
  </div>
);

export default SkillList;
