import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faClipboardList,
  faHome,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons/faContactBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { NavContext } from "../contexts/NavContext";
import NotchMotion from "./NotchMotion";

const NavMenu = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  const [imageLoad, setImageLoad] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <div
        className={`w-[85%] sm:w-[70%] md:w-[60%] lg:w-[400px]
                  px-4 sm:px-5 font-space-grotesk
                  py-6 sm:py-8 
                  flex flex-col 
                  fixed 
                  overflow-y-auto 
                  top-0 bottom-0 
                  transition-all duration-300 ease-in-out 
                  ${isOpen ? "left-0" : "-left-full"} 
                  bg-card-background 
                  z-50
                  shadow-xl`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 
                    w-8 h-8 
                    flex items-center justify-center 
                    text-gray-400 hover:text-white 
                    bg-card-background/80 
                    rounded-full 
                    transition-colors"
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Profile section */}
        <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center">
          <div
            className="flex justify-center items-center 
                        w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] 
                        p-2 
                        bg-image-background 
                        rounded-full 
                        overflow-hidden 
                        relative"
          >
            {!imageLoad && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
            )}
            <img
              className="object-cover rounded-full 
                        absolute top-1/2 left-1/2 
                        transform -translate-x-1/2 -translate-y-1/3"
              src="/avator.png"
              alt="Godfred"
              loading="lazy"
              onLoad={() => setImageLoad(true)}
            />
          </div>

          <div className="text-center">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[30px] 
                          font-bold 
                          text-white font-space-grotesk
                          leading-[36px] sm:leading-[40px] md:leading-[48px]"
            >
              Godfred Entsie
            </h2>
            <p
              className="text-[14px] sm:text-[15px] 
                        font-medium 
                        leading-[20px] sm:leading-[24px] 
                        text-neutral-300 font-space-grotesk
                        tracking-wider"
            >
              FULLSTACK DEVELOPER
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            {[
              {
                icon: faFacebook,
                href: "http://facebook.com/godentsie",
                label: "Facebook",
                delay: 0.1,
              },
              {
                icon: faXTwitter,
                href: "https://x.com/jaywebs_",
                label: "Twitter",
                delay: 0.2,
              },
              {
                icon: faLinkedinIn,
                href: "https://www.linkedin.com/in/godfred-entsie-952a69223/",
                label: "LinkedIn",
                delay: 0.3,
              },
              {
                icon: faGithub,
                href: "https://github.com/jayfaculty-design",
                label: "GitHub",
                delay: 0.4,
              },
            ].map((social, index) => (
              <NotchMotion key={index} type="bounce" delay={social.delay}>
                <a
                  className="text-[16px] sm:text-[18px] 
                          border border-border-color 
                          p-2 sm:p-[10px] 
                          rounded-[8px] sm:rounded-[10px]
                          hover:border-primary-color/50
                          hover:text-primary-color
                          transition-all duration-200"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </NotchMotion>
            ))}
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-6 sm:mt-8 mb-4">
          <ul className="uppercase flex flex-col gap-2 sm:gap-3 font-noto">
            {[
              { path: "/", label: "Home", icon: faHome },
              { path: "/about", label: "About", icon: faUser },
              { path: "/portfolio", label: "Portfolio", icon: faBriefcase },
              { path: "/resume", label: "Resume", icon: faClipboardList },
              { path: "/contact", label: "Contact", icon: faContactBook },
            ].map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between
                    px-3 py-3 sm:py-4
                    rounded-lg
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-primary-color/10 text-primary-color font-medium"
                        : "hover:bg-card-background/80 hover:text-white"
                    }
                  `}
                  to={link.path}
                >
                  <span className="text-[15px] sm:text-[16px]">
                    {link.label}
                  </span>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-[16px] sm:text-[18px]"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div className="mt-auto pt-4 border-t border-border-color/30">
          <div className="flex flex-col gap-4 sm:gap-5 px-2">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] sm:text-[13px] text-gray-400">PHONE:</p>
              <p className="text-[14px] sm:text-[15px] text-white font-medium">
                +(233) 240-536-268
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[12px] sm:text-[13px] text-gray-400">EMAIL:</p>
              <p className="text-[14px] sm:text-[15px] text-white font-medium">
                hello@gentsie.com
              </p>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary-color 
                      border-t-2 border-b-4 border-r-4 border-l-2 border-heading-color 
                      flex items-center gap-2 
                      mt-2 sm:mt-3 
                      justify-center 
                      w-full 
                      text-white 
                      cursor-pointer 
                      text-[16px] sm:text-[18px] 
                      font-bold 
                      leading-[24px] 
                      overflow-visible 
                      rounded-[12px] sm:rounded-[15px] 
                      text-center 
                      transition-all duration-300 
                      py-2 sm:py-3
                      hover:translate-y-[-2px]
                      active:translate-y-[1px]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
