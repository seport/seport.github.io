import React from "react";
// import ScrollSpy from 'react-scrollspy-navigation';
import useIsVisible from "../hooks/useIsVisible";
import { heroRef } from "../pages/Hero";

/******  HANDLE NAV ********/

const handleNav = () => {
  
}

/************************* */

const Header = () => {
  const heroVisible = useIsVisible(heroRef);

  return (
    <div id="nav" className={heroVisible ? "hero-visible" : ""}>
      <ul class="right">
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
      <a href="#about">About</a>
      {` / `}
      <a href="#skills" onClick={handleNav}>
        Skills
      </a>
      {` / `}
      <a href="#blogs">Blogs</a>
      {` / `}
      <a href="#projectswrapper">Projects</a>
      {` / `}
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Header;
