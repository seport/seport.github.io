import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import projects from "../projects";

const Project = ({project}) => {
  return (
    <div id="project">
      <ReactMarkdown>{projects[project]}</ReactMarkdown>
    </div>
  );
};

export default Project;
