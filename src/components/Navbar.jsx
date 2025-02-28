import React, { useContext, useState } from "react";
import { NavContext } from "../contexts/NavContext";
import { Link } from "react-router";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <div className="pl-5 pr-5 pt-5 fixed top-0 left-0 right-0 z-40">
      <div className="flex justify-between rounded-[20px] bg-card-background/50 backdrop-blur-md items-center py-4 px-5 border border-border-color">
        <Link
          to="/"
          className="logo font-poppins text-2xl font-bold text-white"
        >
          Godfred<span className="text-primary-color text-3xl">.</span>
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="menu-cta relative flex flex-col items-center justify-center gap-1.5 px-auto py-1 rounded-full p-5 bg-primary-color w-13 h-13"
        >
          <div
            className={`bg-red-50 absolute ${
              isOpen ? "transform rotate-45" : "translate-y-[-6px]"
            } transition-all ease-in-out duration-300 cursor-pointer h-[3px] w-7`}
          ></div>
          <div
            className={`bg-red-50 absolute ${
              isOpen ? "opacity-0" : "opacity-100"
            } transition-transform duration-300 cursor-pointer h-[3px] w-7`}
          ></div>
          <div
            className={`bg-red-50 absolute ${
              isOpen ? "transform -rotate-45" : "translate-y-[6px]"
            } transition-all ease-in-out duration-300 cursor-pointer h-[3px] w-7`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
