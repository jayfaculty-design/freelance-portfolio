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

const Contact = () => {
  return (
    <div className="mt-26">
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background p-5 rounded-[20px]">
        <h1 className="text-[30px] font-bold text-heading-color leading-[40px] pb-[0px]">
          Contact
        </h1>
        <p className="text-[18px] leading-[28px] mb-[1rem] text-center">
          I'm a leading creative agency for corporate branding, offering a full
          suite of services to boost search engine rankings and drive more
          traffic to your website.
        </p>

        <div className="flex w-full flex-col gap-5 items-start justify-start border border-border-color p-5 rounded-[20px]">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faPhoneFlip}
              className="text-[24px] text-white"
            />
            <p className="text-[20px] font-medium text-white">Call Me</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-light-green"></div>
            <p>Available Anytime</p>
          </div>

          <p className="text-white font-medium text-[18px] leading-[24px]">
            (+233) 240-536-268
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 items-start justify-start border border-border-color p-5 rounded-[20px]">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMailBulk}
              className="text-[24px] text-white"
            />
            <p className="text-[20px] font-medium text-white">Send Mail</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-light-green"></div>
            <p>Available 24/7</p>
          </div>

          <p className="text-white font-medium text-[18px] leading-[24px]">
            hello@gentsie.com
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-5 items-start justify-start border border-border-color p-5 rounded-[20px]">
          <SiFacebook className="text-[24px] text-white" />
          <SiInstagram className="text-[24px] text-white" />
          <FontAwesomeIcon
            className="text-[24px] text-white"
            icon={faTwitter}
          />
          <SiUpwork className="text-[24px] text-white" />
          <SiFiverr className="text-[24px] text-white" />
          <FontAwesomeIcon icon={faLinkedin} className="text-[24px]" />
        </div>

        <div className="flex w-full flex-col gap-5 items-start justify-start border border-border-color p-5 rounded-[20px]">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
