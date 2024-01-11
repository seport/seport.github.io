import React, { useRef, useEffect } from "react";
import useScroll from "@/hooks/useScroll";

export const heroRef = React.createRef<HTMLDivElement>();

const Hero = () => {
  const scrollY = useScroll();
  return (
    <div id="about" ref={heroRef}>
      <div
        className="about-bg"
        style={{ backgroundPosition: `0px ${-scrollY / 10}px` }}
      >
        <div className="about">
          <h1>
            Hi, I'm Sarah. 👋 <br /> I make websites and things.
          </h1>
          {/* <div className="game">
        <div className="howtoplay">
            <p>
                Press SPACE to start
            </p>
            <p>
                Use your UP and DOWN arrows to change shape
            </p>
            <p>
                Collect the coins
            </p>
        </div>
        <div className="gameover">
            <p className="endmessage">
            </p>
            <p className="finalscore">
            </p>
            <p>
                Press SPACE to try again
            </p>
        </div>
        <div className="gameinfo">
            <div>Score: <span className="score"></span></div>
            <div>Lives: <span className="lives"></span></div>
        </div>
        <div className="player mobi">
            <div className="screen"></div>
            </div>
        <div className="scenery">
        </div>
    </div>
    <p className="startbutton">Press START to play</p> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
