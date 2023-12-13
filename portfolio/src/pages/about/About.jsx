import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import FrontEndCertificate from "../../assets/documents/Front-End-Certificate.pdf";
import JavascriptCertificate from "../../assets/documents/Javascript-Certificate.pdf";
import ReactCertificate from "../../assets/documents/React-Certificate.pdf";
const About = () => {
  return (
    <div className="text-center bg-black text-white py-5 px-5 flex flex-col">
      <header>
        <NavBar />
      </header>
      <div className="mt-10 text-center flex flex-col items-center">
        <h1 className="text-3xl mb-10">About Me</h1>
        <div className="max-w-md">
          <p>
            Hello, I'm Nika Tsuladze, a 20-year-old aspiring Front-End Developer
            based in Georgia. I recently completed my training in HTML, CSS,
            JavaScript, and React at the Academy of Digital Industries. I got
            certificate for each course which you can check on this porfolio web
            page
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl mt-10 mb-5">Education</h1>
        <h2 className="text-xl">Academy Of Digital Industires</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">Front-End Course</h2>
            <p className="bg-white text-black rounded-md px-8 py-4 ">
              <a href={FrontEndCertificate} download={FrontEndCertificate}>
                Download Certificate
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">Javascript Course</h2>
            <p className="bg-white text-black rounded-md px-8 py-4">
              <a href={JavascriptCertificate} download={JavascriptCertificate}>
                Download Certificate
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">React Course</h2>
            <p className="bg-white text-black rounded-md px-8 py-4">
              <a href={ReactCertificate} download={ReactCertificate}>
                Download Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
