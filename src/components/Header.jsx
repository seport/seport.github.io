import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';

const Header = () => <div id="nav">
<ul class="right">
    <li><a href="https://twitter.com/seport_">Twitter</a></li>
    <li><a href="https://github.com/seport" target="_blank">Github</a></li>
    <li><a href="https://jsfiddle.net/user/seport/fiddles/" target="_blank">JSFiddle</a></li>
    <li><a href="https://www.linkedin.com/in/seport" target="_blank">LinkedIn</a></li>
</ul>
<ScrollSpy>
  <a href="#about" ref={React.createRef()}>
    About
  </a>
  {` / `}
  <a href="#skills" ref={React.createRef()}>
    Skills
  </a>
  {` / `}
  <a href="#projectswrapper" ref={React.createRef()}>
    Projects
  </a>
  {` / `}
  <a href="#contact" ref={React.createRef()}>
    Contact
  </a>
</ScrollSpy>
</div>

export default Header;