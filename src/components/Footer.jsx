import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5">
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
        <h1 className="text-heading-color text-[30px] font-poppins leading-[40px] w-72 font-normal mb-[5px] text-center">
          Excited to bring your project to life with a spark of innovation?
        </h1>
        <p className="leading-[28px] mb-[1rem] text-center">
          Let’s connect and bring your vision to life🎈. <br /> I’m also open to
          full-time or part-time opportunities to push creative boundaries and
          deliver outstanding results
        </p>
        <button className="bg-primary-color border border-button-border flex items-center gap-2 justify-center w-fit text-white cursor-pointer text-[14px] font-medium leading-[20px] overflow-visible rounded-[15px] text-center transition-all duration-300 py-[12px] px-[24px]">
          Let's Vibe
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
