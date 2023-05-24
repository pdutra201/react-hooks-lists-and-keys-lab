import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const newItems = projects.map((item) => {
    return <ProjectItem key={item.id} name={item.name} about ={item.about} technologies={item.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newItems}</div>
    </div>
  );
}

export default ProjectList;
