import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projects.map(prop => 
      <ProjectItem key={prop.id} name={prop.name} about={prop.about} technologies={prop.technologies} id={prop.id} />)}
      </div>
      </div>
    
  );
}

export default ProjectList;
