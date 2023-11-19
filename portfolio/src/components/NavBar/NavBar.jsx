import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <nav className="flex justify-between mx-auto items-center py-4 px-4 max-w-[1240px]">
      <h1 className="text-3xl">Nika Tsuladze</h1>
      <ul className="gap-4  hidden md:flex">
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.about}>About</NavLink>
        </li>
        <li>
          <NavLink to={routes.projects}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={routes.contact}>Contact</NavLink>
        </li>
      </ul>
      <div onClick={handleBurger} className="block cursor-pointer md:hidden">
        {burger ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          burger
            ? "fixed left-0 top-28 bg-black w-full ease-in-out duration-500"
            : "fixed left-0 top-[-100%] ease-in-out duration-500 w-full bg-black"
        }
      >
        <ul className="flex flex-col gap-4 items-center py-1">
          <li className="border-b border-gray-700">
            <NavLink to={routes.home}>Home</NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink to={routes.about}>About</NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink to={routes.projects}>Projects</NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink to={routes.contact}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
