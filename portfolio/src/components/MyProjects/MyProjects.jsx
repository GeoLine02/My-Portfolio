import React from "react";
import ProjectCard from "./ProjectCard";
import projectList from "../../data/projects";
const MyProjects = () => {
  return (
    <div className="text-center mb-8 mt-8">
      <h1 className="text-3xl">Projects</h1>
      <h2 className="mt-3 text-xl">Things I've built so far</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
        {projectList.map((data, index) => (
          <ProjectCard
            key={index}
            name={data.name}
            image={data.image}
            discription={data.discription}
            code={data.code}
            livePage={data.livePage}
          />
        ))}
      </div>
      <div className="mt-7">
        <div className="mb-4">
          <h1 className="text-3xl">Currently trying to improve:</h1>
          <h3 className="text-xl">React skills</h3>
        </div>
        <div>
          <h1 className="text-3xl">Currently trying to learn:</h1>
          <h3 className="text-xl">TypeScript</h3>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
