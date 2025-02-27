import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faClipboard, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faClipboardList,
  faHome,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons/faContactBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { NavContext } from "../contexts/NavContext";

const NavMenu = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <div
      className={`w-[70%] pl-5 pr-5 pt-5  py-10 flex flex-col fixed overflow-scroll top-0 transition-all duration-300 ease-in-out ${
        isOpen ? "left-0" : ""
      } -left-full h-full bg-card-background z-50`}
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex justify-center items-center w-[150px] h-[150px] p-2 bg-image-background rounded-full overflow-hidden relative">
          {!imageLoad && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
          )}
          <img
            className=" object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
            src="/avator.png"
            alt="Godfred"
            loading="lazy"
            onLoad={() => setImageLoad(true)}
          />
        </div>
        <h1 className="text-[30px] font-bold text-white leading-[48px] text-center">
          Godfred Entsie
        </h1>
        <h2 className="text-center font-medium leading-[24px] text-neutral-300">
          FULLSTACK DEVELOPER
        </h2>
        <div className="flex items-center gap-5">
          <a
            className="text-[20px] border border-border-color px-[12px] py-[5px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[5px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[5px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[5px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="uppercase mt-10 flex flex-col gap-5 font-noto ">
        <NavLink
          onClick={() => setIsOpen(false)}
          className="flex px-[10px] items-center justify-between"
          to="/"
        >
          Home
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink
          onClick={() => setIsOpen(false)}
          className="flex px-[10px] items-center justify-between"
          to="/about"
        >
          About <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink
          onClick={() => setIsOpen(false)}
          className="flex px-[10px] items-center justify-between"
          to="/portfolio"
        >
          Portfolio <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>

        <NavLink
          onClick={() => setIsOpen(false)}
          className="flex px-[10px] items-center justify-between"
          to="/resume"
        >
          Resume
          <FontAwesomeIcon icon={faClipboardList} />
        </NavLink>

        <NavLink
          onClick={() => setIsOpen(false)}
          className="flex px-[10px] items-center justify-between"
          to="/contact"
        >
          Contact <FontAwesomeIcon icon={faContactBook} />
        </NavLink>
      </div>

      <div className="mt-5 flex flex-col gap-5 p-[10px]">
        <div className="flex flex-col gap-1">
          <p className="">PHONE:</p>
          <p className="text-white font-medium">+(233)240-536-268</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="">EMAIL:</p>
          <p className="text-white font-medium">hello@gentsie.com</p>
        </div>
        <button className="bg-primary-color border-t-2 border-b-4 border-r-4 border-l-2 border-heading-color flex items-center gap-2 mt-3 justify-center w-full text-white cursor-pointer text-[18px] font-bold leading-[24px] overflow-visible rounded-[15px] text-center transition-all duration-300 py-3">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
