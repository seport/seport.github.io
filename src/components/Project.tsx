import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import projects from "@/projects";

const Project = ({project}: {project: keyof typeof projects}) => {
  if(!project) {
    return <></>
  }
  return (
    <div id="project">
      <Markdown>{projects[project]}</Markdown>
    </div>
  );
};

export default Project;
