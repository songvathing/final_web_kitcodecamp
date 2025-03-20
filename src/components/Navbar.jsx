import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">
          <Link to="/">REACTSITE</Link>
        </h1>
        <ul className="flex space-x-10">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
