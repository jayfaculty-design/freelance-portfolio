import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div
        className="text-center flex flex-col gap-3 sm:gap-4 md:gap-5 
            items-center justify-center 
            border border-card-background bg-card-background 
            px-4 sm:px-5 
            py-6 sm:py-8 md:py-10 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <h2
          className="text-heading-color 
                text-[20px] sm:text-[24px] md:text-[30px] 
                font-poppins 
                leading-[28px] sm:leading-[34px] md:leading-[40px] 
                w-full sm:w-80 md:w-96 
                font-normal 
                mb-[3px] sm:mb-[4px] md:mb-[5px] 
                text-center"
        >
          Excited to bring your project to life with a spark of innovation?
        </h2>
        <p
          className="text-[14px] sm:text-[15px] md:text-[16px]
              leading-[22px] sm:leading-[24px] md:leading-[28px] 
              mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem] 
              text-center
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%]"
        >
          Let's connect and bring your vision to life🎈.{" "}
          <br className="hidden sm:block" />
          I'm also open to full-time or part-time opportunities to push creative
          boundaries and deliver outstanding results
        </p>

        <button
          className="bg-primary-color 
                  border-t-2 border-b-3 sm:border-b-4 border-r-3 sm:border-r-4 border-l-2 
                  border-heading-color 
                  flex items-center gap-1 sm:gap-2 
                  mt-1 sm:mt-0 
                  justify-center w-fit 
                  text-white cursor-pointer 
                  text-[15px] sm:text-[16px] md:text-[18px] 
                  font-bold 
                  leading-[20px] sm:leading-[22px] md:leading-[24px] 
                  overflow-visible 
                  rounded-[12px] sm:rounded-[14px] md:rounded-[15px] 
                  text-center 
                  transition-all duration-300 
                  px-[20px] sm:px-[26px] md:px-[32px] 
                  py-2 sm:py-2.5 md:py-3
                  hover:translate-y-[-3px] hover:shadow-lg
                  active:translate-y-[1px]"
        >
          Let's Vibe
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="text-[14px] sm:text-[16px] md:text-[18px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Footer;
