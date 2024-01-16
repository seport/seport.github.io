import { getVisibleSection } from "@/helpers/visibleSectionHelper";
import useScroll from "@/hooks/useScroll";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const scrollY = useScroll()
  const [currentSection, setCurrentSection] = useState('#about')

  useEffect(() => {
    const newCurrentSection = getVisibleSection(scrollY)
    if (currentSection !== newCurrentSection) {
      setCurrentSection(newCurrentSection)
    }
  }, [scrollY])

  useEffect(() => {
    if (currentSection === "about") {
      window.history.pushState({}, '', `/`)
    } else {
      window.history.pushState({}, '', `#${currentSection}`)
    }
  }, [currentSection])

  const toggleRef = useRef(null);

  const closeNav = () => {
    toggleRef.current.checked = false;
  }

  const isCurrent = (id: string) => currentSection === id ? 'current' : ''

  return (
    <div id="nav">
      <input type="checkbox" id="nav-toggle" ref={toggleRef} />
      <label htmlFor="nav-toggle">≡</label>
      <div className="nav-container" onClick={closeNav}>
        <div className="nav-close">×</div>
        <div className="menu-links">
          <ul>
            <li>
              <a href="#about" className={isCurrent('about')}>Top</a>
            </li>
            <li>
              <a href="#skills" className={isCurrent('skills')}>Skills</a>
            </li>
            <li>
              <a href="#blogs" className={isCurrent('blogs')}>Blogs</a>
            </li>
            <li>
              <a href="#projectswrapper" className={isCurrent('projectswrapper')}>Projects</a>
            </li>
            <li>
              <a href="#contact" className={isCurrent('contact')}>Contact</a>
            </li>
          </ul>
        </div>
        <ul className="social-links">
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
      </div>
    </div>
  );
};

export default Header;
