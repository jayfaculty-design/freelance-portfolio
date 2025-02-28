import { faFacebook, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Portfolio from "./Portfolio";

const Home = () => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <div className="mt-26">
      {/* content 1 */}
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background p-10 rounded-[20px]">
        <div
          className="flex justify-center items-center 
            w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]
            p-2 bg-image-background rounded-full overflow-hidden relative
            mx-auto"
        >
          {!imageLoad && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
          )}
          <img
            className="object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3
              w-[90%] h-auto"
            src="/avator.png"
            alt="Godfred"
            loading="lazy"
            onLoad={() => setImageLoad(true)}
          />
        </div>

        <h2 className="text-heading-color text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-tight">
          Godfred Entsie
        </h2>
        <p className="leading-[28px] mt-0 mb-[1rem] w-full max-w-[300px] text-[14px] sm:text-[16px] md:text-[18px]">
          I am a Full Stack Developer based in Accra, Ghana
        </p>

        <div className="socials flex items-center justify-between py-0 px-3 w-full max-w-[300px] sm:max-w-[320px] md:max-w-[350px] mx-auto">
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] border border-border-color 
              px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] md:px-[12px] md:py-[10px] 
              rounded-[8px] md:rounded-[10px]
              hover:bg-border-color hover:text-background-color transition-colors duration-300"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] border border-border-color 
              px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] md:px-[12px] md:py-[10px] 
              rounded-[8px] md:rounded-[10px]
              hover:bg-border-color hover:text-background-color transition-colors duration-300"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] border border-border-color 
              px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] md:px-[12px] md:py-[10px] 
              rounded-[8px] md:rounded-[10px]
              hover:bg-border-color hover:text-background-color transition-colors duration-300"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="text-[16px] sm:text-[18px] md:text-[20px] border border-border-color 
              px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] md:px-[12px] md:py-[10px] 
              rounded-[8px] md:rounded-[10px]
              hover:bg-border-color hover:text-background-color transition-colors duration-300"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      {/* content-2 */}
      <div
        className="mt-5 flex flex-col gap-3 sm:gap-4 md:gap-5 
            border border-card-background bg-card-background 
            p-4 sm:p-6 md:p-8 lg:p-10 
            rounded-[15px] md:rounded-[20px]"
      >
        <p className="leading-[24px] sm:leading-[28px] mt-0 mb-[0.5rem] sm:mb-[1rem] text-[14px] sm:text-[16px]">
          Hi There!
        </p>
        <p
          className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] 
              leading-[26px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
              mb-[10px] sm:mb-[15px] md:mb-[20px] 
              font-normal text-heading-color"
        >
          I'm Godfred Entsie, a Full Stack Developer building seamless,
          user-focused web applications with clean, efficient code.
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-light-green animate-pulse"></div>
          <p className="text-[13px] sm:text-[14px] md:text-[16px]">
            Available for Freelancing
          </p>
        </div>
        <button
          className="bg-primary-color 
                  border-t-2 border-b-3 sm:border-b-4 border-r-3 sm:border-r-4 border-l-2 border-heading-color 
                  flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0 
                  justify-center w-fit text-white cursor-pointer 
                  text-[12px] sm:text-[13px] md:text-[14px] 
                  font-bold leading-[18px] sm:leading-[20px] 
                  overflow-visible rounded-[10px] sm:rounded-[12px] md:rounded-[15px] 
                  text-center transition-all duration-300 
                  px-[20px] sm:px-[26px] md:px-[32px] 
                  py-2 sm:py-2.5 md:py-3
                  hover:translate-y-[-2px] active:translate-y-[1px]"
        >
          Download CV
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>

      {/* companies */}
      <div className="mt-5 flex flex-col gap-5 border border-card-background bg-card-background p-10 rounded-[20px]">
        <h2 className="mb-[10px] text-[22px] text-heading-color font-medium leading-[1.2] ">
          Companies I worked With
        </h2>
        <Marquee>
          <div className="flex items-center gap-5">
            <p className="servmark text-2xl ml-10">Servmark.ltd</p>
            <img
              className="w-20 ml-10"
              src="/visio.png"
              alt="visiosculpt labs"
            />
            <p className="text-2xl ml-10 mt-1">Nanti</p>
          </div>
        </Marquee>
      </div>

      {/* Projects */}
      <div className="-mt-20">
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
