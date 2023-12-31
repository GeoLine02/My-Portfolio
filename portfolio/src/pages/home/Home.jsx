import React from "react";
import TechStack from "../../components/TechStack/TechStack";
import MyProjects from "../../components/MyProjects/MyProjects";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";
const Home = () => {
  return (
    <div className=" text-white px-5 py-5 ">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col items-center py-5 px-5">
        <AboutMe />
        <div>
          <TechStack />
        </div>
        <div>
          <MyProjects />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
