import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "../contexts/NavContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 
                px-3 sm:px-4 md:px-5 lg:px-8
                pt-3 sm:pt-4 md:pt-5 font-space-grotesk
                transition-all duration-300
                ${scrolled ? "backdrop-blur-md" : ""}`}
    >
      <nav
        className={`flex justify-between 
                  items-center 
                  py-3 sm:py-4 
                  px-4 sm:px-5 md:px-6 lg:px-8
                  rounded-[12px] sm:rounded-[16px] md:rounded-[20px] 
                  border border-border-color
                  ${
                    scrolled
                      ? "bg-card-background/80 backdrop-blur-md shadow-lg"
                      : "bg-card-background/50 backdrop-blur-sm"
                  }
                  transition-all duration-300`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="logo 
                  font-poppins 
                  text-xl sm:text-2xl 
                  font-bold 
                  text-white 
                  hover:opacity-90 
                  transition-opacity 
                  flex items-center"
          aria-label="Godfred - Home"
        >
          Godfred
          <span className="text-primary-color text-2xl sm:text-3xl">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={`text-[15px] font-medium text-white hover:text-primary-color transition-colors duration-300 relative group`}
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary-color transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="bg-primary-color 
                    border-t-2 border-b-3 border-r-3 border-l-2 border-heading-color 
                    flex items-center
                    justify-center text-white cursor-pointer 
                    text-[14px]
                    font-bold leading-[20px] 
                    rounded-[12px] 
                    transition-all duration-300 
                    px-5 py-2.5
                    hover:translate-y-[-2px] active:translate-y-[1px]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative 
                    flex flex-col 
                    items-center justify-center 
                    rounded-full 
                    p-2 sm:p-3 
                    bg-primary-color 
                    hover:bg-primary-color/90
                    active:scale-95
                    transition-all duration-200
                    w-10 h-10 sm:w-12 sm:h-12"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <div
              className={`bg-white absolute 
                        ${
                          isOpen
                            ? "transform rotate-45"
                            : "translate-y-[-5px] sm:translate-y-[-6px]"
                        }
                        transition-all ease-in-out duration-300 
                        h-[2px] sm:h-[3px] 
                        w-5 sm:w-6`}
            ></div>
            <div
              className={`bg-white absolute 
                        ${isOpen ? "opacity-0" : "opacity-100"}
                        transition-all duration-300 
                        h-[2px] sm:h-[3px] 
                        w-5 sm:w-6`}
            ></div>
            <div
              className={`bg-white absolute 
                        ${
                          isOpen
                            ? "transform -rotate-45"
                            : "translate-y-[5px] sm:translate-y-[6px]"
                        }
                        transition-all ease-in-out duration-300 
                        h-[2px] sm:h-[3px] 
                        w-5 sm:w-6`}
            ></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
