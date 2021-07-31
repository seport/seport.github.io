import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import githubImg from "../github.png";
import jsfiddleImg from "../jsfiddle.png";
import linkedinImg from "../linkedin.png";

const Contact = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [formSent, setFormSent] = useState(false);
    return (
    <div id="contact">
      <div class="contactcontainer">
        <h1>Want to work on something?</h1>
        <div class="socialicons">
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
        <div class="contact-container">
          <div class="contact">
            <a
              className={formOpen ? "hidden" : ""}
              href=" + link + "
              onClick={(e) => {
                e.preventDefault();
                setFormOpen(true);
              }}
            >
              Email Me
            </a>
            <form
              action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSdnz1bfECs0gzzUtLxDG2gnJfHL7jgFUGNJHaZSBOhMaSYsBg/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {setFormSent(true)}}
              className={formOpen && !formSent ? "" : "hidden"}
            >
              <label>Email:</label>
              <input name="entry.604851797" id="entry.604851797" />
              <br />
              <br />
              <label>Message:</label>
              <TextareaAutosize
                name="entry.1975029131"
                id="entry.1975029131"
                maxRows={10}
                minRows={3}
              />
              <button>Send</button>
            </form>
            <div
              className={`form-sent-message ${formSent ? "" : "hidden"}`}
            >
              Email sent.
            </div>
          </div>
          <iframe hidden id="hidden_iframe" name="hidden_iframe"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
