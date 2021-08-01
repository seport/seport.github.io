import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import projects from "../projects";

const Project = ({project}) => {

  const [currentProject, setCurrentProject] = useState(project)
  useEffect(() => {
    if(project) {
      setCurrentProject(project)
    }
  }, [project])
  
  return (
    <div id="project">
      <ReactMarkdown>{projects[currentProject]}</ReactMarkdown>
    </div>
  );
};

export default Project;
