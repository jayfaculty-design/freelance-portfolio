import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <div className="mt-5 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
      <ScrollReveal direction="up" delay={0.1} distance={30} threshold={0.1}>
        <div
          className="text-center flex flex-col gap-3 sm:gap-4 
            items-center justify-center 
            border border-card-background bg-card-background 
            px-4 sm:px-6 md:px-8 lg:px-10
            py-5 sm:py-6 md:py-8 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
        >
          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <h2
              className="text-heading-color 
                text-[18px] sm:text-[22px] md:text-[26px] 
                font-poppins 
                leading-[26px] sm:leading-[30px] md:leading-[36px] 
                max-w-[300px] sm:max-w-[400px] md:max-w-[500px] 
                font-normal 
                mb-1 sm:mb-2
                text-center"
            >
              Excited to bring your project to life with a spark of innovation?
            </h2>
          </ScrollReveal>
          <ScrollReveal
            className="text-center mx-auto w-full"
            direction="left"
            delay={0.3}
            distance={20}
          >
            <p
              className="text-[13px] sm:text-[14px] md:text-[15px]
              leading-[20px] sm:leading-[22px] md:leading-[24px] 
              mb-2 sm:mb-3 md:mb-4
              text-center
              max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto lg:max-w-[60%]"
            >
              Let's connect and bring your vision to life🎈.
              <br className="hidden sm:block" />
              I'm also open to full-time or part-time opportunities to push
              creative boundaries and deliver outstanding results.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} distance={20}>
            <a
              href="/contact"
              className="bg-primary-color 
                  border-t-2 border-b-3 sm:border-b-4 border-r-3 sm:border-r-4 border-l-2 
                  border-heading-color 
                  flex items-center gap-1 sm:gap-2 
                  justify-center w-fit 
                  text-white cursor-pointer 
                  text-[14px] sm:text-[15px] md:text-[16px] 
                  font-bold 
                  leading-[20px] sm:leading-[22px] 
                  overflow-visible 
                  rounded-[10px] sm:rounded-[12px] md:rounded-[15px] 
                  text-center 
                  transition-all duration-300 
                  px-[18px] sm:px-[22px] md:px-[28px] 
                  py-2 sm:py-2.5 md:py-3
                  hover:translate-y-[-2px] hover:shadow-lg
                  active:translate-y-[1px]"
            >
              Let's Vibe
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="text-[14px] sm:text-[15px] md:text-[16px]"
              />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5} distance={15}>
            <div className="w-full mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-border-color/20 text-center">
              <p className="text-[12px] sm:text-[13px] text-gray-400">
                © {new Date().getFullYear()} Godfred Entsie. All rights
                reserved.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Footer;
