import React from "react";

const ProjectCard = ({ name, image, discription, code, livePage }) => {
  return (
    <div className="text-center text-gray-400 w-[375px]">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="  rounded-b-xl pb-3 bg-gray-700 py-4">
        <h1 className="text-xl mb-1">{name}</h1>
        <p>{discription}</p>
        <div className="flex justify-around mt-3">
          <a
            className="rounded-md w-fit bg-gray-400 text-gray-700 py-2 px-5"
            href={code}
          >
            Code
          </a>
          <a
            className="rounded-md w-fit bg-gray-400 text-gray-700 py-2 px-5"
            href={livePage}
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
