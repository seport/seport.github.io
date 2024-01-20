import { getVisibleSection } from "@/helpers/visibleSectionHelper";
import useScroll from "@/hooks/useScroll";
import { Contact } from "@/pages/Contact";
import HamburgerIcon from '@/public/icon-hamburger.svg';
import XIcon from '@/public/icon-x.svg';
import cx from 'classnames';
import React, { createRef, useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const scrollY = useScroll()
  const [lastScroll, setLastScroll] = useState(0)
  const [iconAdjust, setIconAdjust] = useState(0)
  const [currentSection, setCurrentSection] = useState('#about')
  const [isNavMenuOpen, setisNavMenuOpen] = useState(false)

  const navigationRef = createRef<HTMLDivElement>()

  // set section on scroll
  useEffect(() => {
    const newCurrentSection = getVisibleSection(scrollY)
    if (currentSection !== newCurrentSection) {
      setCurrentSection(newCurrentSection)
    }
  }, [scrollY])

  // adjust menu icon on scroll
  useEffect(() => {
    if (scrollY <= lastScroll) {
      setIconAdjust(0)
    } else {
      setIconAdjust(-50)
    }
    setLastScroll(scrollY)
  }, [scrollY])

  // set url path on section change
  useEffect(() => {
    if (currentSection === "about") {
      window.history.pushState({}, '', `/`)
    } else {
      window.history.pushState({}, '', `#${currentSection}`)
    }
  }, [currentSection])

  // lock scroll on body when nav drawer is open
  const closeNav = () => {
    setisNavMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const openNav = () => {
    setisNavMenuOpen(true)
    document.body.style.overflow = "hidden"
  }

  const toggleNav = () => {
    if (isNavMenuOpen) {
      closeNav()
    } else {
      openNav()
    }
  }

  const isCurrent = (id: string) => currentSection === id ? 'current' : ''

  return (
    <div id="nav">
      <div className="nav-toggle__container">
        <button className={cx("nav-toggle", "button--plain", { ["is-open"]: isNavMenuOpen })} onClick={toggleNav}>
          <HamburgerIcon className="hamburger-icon" style={{ transform: `translateY(${iconAdjust}px)`, transition: '0.5s ease' }} />
          <XIcon className="close-icon--safari-polyfill" />
        </button>
      </div>
      <CSSTransition nodeRef={navigationRef} in={isNavMenuOpen} mountOnEnter={false} timeout={500} classNames="nav-container">
        <div className="nav-container" ref={navigationRef}>
          <div className="menu-links">
            <ul>
              <li>
                <a href="#about" className={isCurrent('about')} onClick={closeNav}>Top</a>
              </li>
              <li>
                <a href="#skills" className={isCurrent('skills')} onClick={closeNav}>Skills</a>
              </li>
              <li>
                <a href="#blogs" className={isCurrent('blogs')} onClick={closeNav}>Blogs</a>
              </li>
              <li>
                <a href="#projects" className={isCurrent('projectswrapper')} onClick={closeNav}>Projects</a>
              </li>
              <li>
                <a href="#contact" className={isCurrent('contact')} onClick={closeNav}>Contact</a>
              </li>
            </ul>
          </div>
          <ul className="social-links">
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
              <a href="https://twitter.com/seport_">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/seport" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="footer">
            <Contact />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
