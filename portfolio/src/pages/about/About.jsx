import React from "react";

const About = () => {
  return (
    <div className="text-center h-screen">
      <div className="mt-10">
        <h1 className="text-3xl mb-10">About Me</h1>
        <p className=" max-w-sm">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl mt-10">Education</h1>
        <h2 className="text-xl">Academy Of Digital Industires</h2>
        <p>Front-End Course</p>
        <p>Javascript Course</p>
        <p>React Course</p>
      </div>
    </div>
  );
};

export default About;
