import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MyProjects from "../../components/MyProjects/MyProjects";

const Projects = () => {
  return (
    <div className="text-white">
      <header>
        <NavBar />
      </header>
      <main>
        <MyProjects />
      </main>
    </div>
  );
};

export default Projects;
