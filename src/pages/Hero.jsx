import React, { useRef, useEffect } from "react";
import useScroll from "../hooks/useScroll";

export const heroRef = React.createRef();

const Hero = () => {
  const scrollY = useScroll();
  return (
    <div id="about" ref={heroRef}>
      <div
        class="about-bg"
        style={{ backgroundPosition: `0px ${-scrollY / 4}px` }}
      >
        <div class="about">
          <h1>
            Hi, I'm Sarah. 👋 <br /> I make websites and things.
          </h1>
          {/* <div class="game">
        <div class="howtoplay">
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
        <div class="gameover">
            <p class="endmessage">
            </p>
            <p class="finalscore">
            </p>
            <p>
                Press SPACE to try again
            </p>
        </div>
        <div class="gameinfo">
            <div>Score: <span class="score"></span></div>
            <div>Lives: <span class="lives"></span></div>
        </div>
        <div class="player mobi">
            <div class="screen"></div>
            </div>
        <div class="scenery">
        </div>
    </div>
    <p class="startbutton">Press START to play</p> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
