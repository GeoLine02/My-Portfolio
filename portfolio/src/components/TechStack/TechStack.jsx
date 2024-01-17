import React from "react";
import HTML from "../../assets/images/html-icon.svg";
import CSS from "../../assets/images/css-icon.svg";
import JS from "../../assets/images/js-icon.svg";
import react from "../../assets/images/react-icon.svg";
import redux from "../../assets/images/redux-icon.svg";
import tailwind from "../../assets/images/tailwind-icon.svg";
import SASS from "../../assets/images/sass-icon.svg";
import git from "../../assets/images/git-icon.svg";
import vsCode from "../../assets/images/vsCode-icon.svg";
import gitHub from "../../assets/images/github-icon.svg";
import Typescript from "../../assets/images/typescript.svg";

const TechStack = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">My Tech Stack</h1>
      <h2 className="text-xl"> Technologies I’ve been working with recently</h2>
      <div className="flex flex-wrap justify-center items-center mt-9 mb-9 max-w-4xl gap-5">
        <img src={HTML} alt="HTML" />
        <img src={CSS} alt="CSS" />
        <img src={JS} alt="JS" />
        <img src={Typescript} alt="TS" />
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={tailwind} alt="tailwind" />
        <img src={SASS} alt="sass" />
        <img src={git} alt="git" />
        <img src={vsCode} alt="vsCode" />
        <img src={gitHub} alt="gitHub" />
      </div>
    </div>
  );
};

export default TechStack;
