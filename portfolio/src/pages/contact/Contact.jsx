import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div className="py-5 px-5  text-white h-screen">
      <header>
        <NavBar />
      </header>
      <main className=" h-[75vh] flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl">For any questions please mail me:</h1>
          <h1 className="text-3xl">info@example.com</h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
