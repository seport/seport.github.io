import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import { heroRef } from "@/pages/Hero";

const Header = () => {
  const heroVisible = useIsVisible(heroRef);
  const toggleRef = useRef(null);

  const closeNav = () => {
    toggleRef.current.checked = false;
  }

  return (
    <div id="nav" className={heroVisible ? "hero-visible" : ""}>
      <input type="checkbox" id="nav-toggle" ref={toggleRef} />
      <label htmlFor="nav-toggle">≡</label>
      <div className="nav-container" onClick={closeNav}>
        <div className="nav-close">×</div>
        <ul className="right">
          <li>
            <a href="https://twitter.com/seport_">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/seport" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://jsfiddle.net/user/seport/fiddles/" target="_blank">
              JSFiddle
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/seport" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="left">
          <div>
            <a href="#about">About</a>
            {` / `}
          </div>
          <div>
            <a href="#skills">Skills</a>
            {` / `}
          </div>
          <div>
            <a href="#blogs">Blogs</a>
            {` / `}
          </div>
          <div>
            <a href="#projectswrapper">Projects</a>
            {` / `}
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
