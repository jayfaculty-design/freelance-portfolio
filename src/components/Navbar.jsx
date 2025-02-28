import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "../contexts/NavContext";
import { Link } from "react-router";

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 
                px-3 sm:px-4 md:px-5 
                pt-3 sm:pt-4 md:pt-5 
                transition-all duration-300
                ${scrolled ? 'backdrop-blur-md' : ''}`}
    >
      <nav 
        className={`flex justify-between 
                  items-center 
                  py-3 sm:py-4 
                  px-4 sm:px-5 
                  rounded-[12px] sm:rounded-[16px] md:rounded-[20px] 
                  border border-border-color
                  ${scrolled 
                    ? 'bg-card-background/80 backdrop-blur-md shadow-lg' 
                    : 'bg-card-background/50 backdrop-blur-sm'
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
          Godfred<span className="text-primary-color text-2xl sm:text-3xl">.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Optional: Desktop navigation links could go here */}
          
          {/* Menu button */}
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
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <div
              className={`bg-white absolute 
                        ${isOpen ? "transform rotate-45" : "translate-y-[-5px] sm:translate-y-[-6px]"}
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
                        ${isOpen ? "transform -rotate-45" : "translate-y-[5px] sm:translate-y-[6px]"}
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
