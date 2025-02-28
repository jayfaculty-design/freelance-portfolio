import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import {
  faMailBulk,
  faPhoneAlt,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiFacebook,
  SiFiverr,
  SiInstagram,
  SiUpwork,
} from "@icons-pack/react-simple-icons";
import React from "react";
import ContactForm from "./contact-form";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="mt-26">
      <div
        className="text-center flex flex-col gap-4 sm:gap-5 
            items-center justify-center 
            border border-card-background bg-card-background 
            p-4 sm:p-5 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <h2
          className="text-[24px] sm:text-[28px] md:text-[30px] 
              font-bold 
              text-heading-color 
              leading-[32px] sm:leading-[36px] md:leading-[40px]"
        >
          Contact
        </h2>
        <p
          className="text-[15px] sm:text-[16px] md:text-[18px] 
              leading-[22px] sm:leading-[24px] md:leading-[28px] 
              mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem] 
              text-center
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto"
        >
          I'm a leading creative agency for corporate branding, offering a full
          suite of services to boost search engine rankings and drive more
          traffic to your website.
        </p>

        {/* Phone Contact Card */}
        <div
          className="flex w-full flex-col gap-3 sm:gap-4 md:gap-5 
                  items-start justify-start 
                  border border-border-color 
                  p-4 sm:p-5 
                  rounded-[15px] sm:rounded-[20px]
                  hover:border-primary-color/30
                  transition-all duration-300
                  hover:shadow-md"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-card-background p-2 rounded-full">
              <FontAwesomeIcon
                icon={faPhoneFlip}
                className="text-[18px] sm:text-[20px] md:text-[24px] text-white"
              />
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-white">
              Call Me
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-light-green animate-pulse"></div>
            <p className="text-[13px] sm:text-[14px]">Available Anytime</p>
          </div>

          <p className="text-white font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
            (+233) 240-536-268
          </p>
        </div>

        {/* Email Contact Card */}

        <div
          className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-5 
                border border-border-color 
                p-4 sm:p-5 
                rounded-[15px] sm:rounded-[20px]"
        >
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <SiFacebook className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <SiInstagram className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <FontAwesomeIcon
              className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300"
              icon={faXTwitter}
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <FontAwesomeIcon
              className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300"
              icon={faGithub}
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <SiFiverr className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center 
                        hover:text-primary-color 
                        transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[20px] sm:text-[22px] md:text-[24px] text-white hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        <div
          className="flex w-full flex-col gap-4 sm:gap-5 
                items-start justify-start 
                border border-border-color 
                rounded-[15px] sm:rounded-[20px] 
                overflow-hidden"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
