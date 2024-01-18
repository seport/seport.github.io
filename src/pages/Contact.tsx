import React, { createRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import githubImg from "@/public/github.png";
import jsfiddleImg from "@/public/jsfiddle.png";
import linkedinImg from "@/public/linkedin.png";

export const contactRef = createRef<HTMLDivElement>()

export const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  return (
    <div className="contact-background">
      <div className="contact">
        <div className="email-cell">
          <h4>Want to work on something?</h4>
          <div className="contact-container">
            <div
              className={`form-sent-message ${formSent ? "" : "hidden"}`}
            >
              Email sent.
            </div>
            <form
              action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSdnz1bfECs0gzzUtLxDG2gnJfHL7jgFUGNJHaZSBOhMaSYsBg/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => { setFormSent(true) }}
              className={`form-sent-message ${formSent ? "hidden" : ""}`}
            >
              <input name="entry.604851797" id="entry.604851797" placeholder="Your email" />
              <TextareaAutosize
                name="entry.1975029131"
                id="entry.1975029131"
                maxRows={10}
                minRows={3}
                placeholder="Your message"
              />
              <button>Send</button>
            </form>
            <iframe hidden id="hidden_iframe" name="hidden_iframe"></iframe>
          </div>
        </div>
        <div className="socials-cell">
          <h4>Follow me!</h4>
          <div className="socialicons">
            <a href="https://github.com/seport" target="_blank">
              <img src={githubImg} />
            </a>
            <a href="https://jsfiddle.net/user/seport/fiddles/" target="_blank">
              <img src={jsfiddleImg} />
            </a>
            <a href="https://www.linkedin.com/in/seport" target="_blank">
              <img src={linkedinImg} />
            </a>
          </div>
        </div>
        <div className="archive-cell">
          <h4>Previous portfolios:</h4>
          <select>
            <option>2021</option>
            <option>2017</option>
          </select>
        </div>
        <div className="contactbottom">
          <small>(っ·ᴥ·)っ<br />
            I made this! Ⓒ 2023</small></div>
      </div>
    </div>
  );
};

const ContactSection = () => <div id="contact" ref={contactRef}>
  <Contact />
</div>

export default ContactSection;
