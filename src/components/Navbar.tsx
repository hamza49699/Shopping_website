"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-gray-400 py-2 px-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="text-5xl font-extrabold">Fasco</div>

        <ul className="gap-10 lg:gap-16 hidden md:flex font-bold text-2xl">
          <li className="menuLink">
            <a href="#hero">Home</a>
          </li>
          <li className="menuLink">
            <a href="#NewArrivals">New Arrivals</a>
          </li>
          <li className="menuLink">
            <a href="#Deals">Deals</a>
          </li>
          <li className="menuLink">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <TfiMenuAlt
          className="md:hidden cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-200 mt-2">
          <ul className="flex flex-col font-bold text-2xl">
            <li className="menuLink">
              <a href="#hero">Home</a>
            </li>
            <li className="menuLink">
              <a href="#NewArrivals">New Arrivals</a>
            </li>
            <li className="menuLink">
              <a href="#Deals">Deals</a>
            </li>
            <li className="menuLink">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
