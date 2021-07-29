import React from 'react';
import githubImg from '../github.png';
import jsfiddleImg from '../jsfiddle.png';
import linkedinImg from '../linkedin.png';

const Contact = () => <div id="contact">
<div class="contactcontainer">
    <h1>Want to work on something?</h1>
    <div class="socialicons"><a href="https://github.com/seport" target="_blank"><img src={githubImg} /></a>
    <a href="https://jsfiddle.net/user/seport/fiddles/" target="_blank"><img src={jsfiddleImg} /></a>
    <a href="https://www.linkedin.com/in/seport" target="_blank"><img src={linkedinImg} /></a></div>
    <div class="contact"><a href=" + link + ">Email Me</a></div>
</div>
</div>

export default Contact;