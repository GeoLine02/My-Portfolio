import React from "react";
import TechStack from "../../components/TechStack/TechStack";
import MyProjects from "../../components/MyProjects/MyProjects";
const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-10 mt-10 mb-10">
        <h1 className="text-3xl max-w-sm text-center">
          Hi 👋, My name is Nika. I build things for web
        </h1>
        <div>
          <img src="" alt="Nika" />
        </div>
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <MyProjects />
      </div>
    </main>
  );
};

export default Home;
