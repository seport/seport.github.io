import React from "react";
import Card from "./Card";
import { handleNav } from "../helpers/navHelpers";

const SkillCard = ({ skill, skillId, sprout }: {skill: string, skillId: string, sprout?: boolean}) => (
  <div
    className="skill-card__container"
    onClick={() => handleNav({target: "skills", query: {skill: skillId}})}
  >
    <Card height="200px" width="50px">
      <div className="skill-card">
        {sprout && <div className="skill-card__sprout"></div>}
        {skill}
      </div>
    </Card>
  </div>
);

export default SkillCard;
