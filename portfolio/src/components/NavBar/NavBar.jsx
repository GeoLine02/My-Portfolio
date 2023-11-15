import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl">Nika Tsuladze</h1>
      </div>
      <ul className="hidden gap-4">
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
      <div className="block cursor-pointer">
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
      </div>
    </nav>
  );
};

export default NavBar;
