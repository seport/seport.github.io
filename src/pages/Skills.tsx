import React, { useEffect, useRef } from "react";
import useWindowLocation from "@/hooks/useWindowLocation";
import Card from "@/components/Card";
import RecommendedReading from "@/components/RecommendedReading";
import { handleNav } from "@/helpers/navHelpers";
import SkillList from "@/components/SkillList";
import Carousel from "@/components/Carousel";
import CarouselPage from "@/components/CarouselPage";

const Skills = () => {
  const location = useWindowLocation();

  return (
    <div id="skills">
      <Carousel isShifted={location.search.skill}>
        <CarouselPage>
          <SkillList />
        </CarouselPage>
        <CarouselPage>
          <div className="recommended-reading__container">
            <Card width="100%">
              <div style={{ width: "100%" }}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav({ target: "skills", query: { skill: "" } });
                  }}
                >
                  Back to skill list
                </a>
              </div>
              <RecommendedReading language={location.search.skill} />
            </Card>
          </div>
        </CarouselPage>
      </Carousel>
    </div>
  );
};

export default Skills;
