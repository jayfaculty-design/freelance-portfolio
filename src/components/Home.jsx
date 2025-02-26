import { faFacebook, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="p-5 mt-26">
      {/* content 1 */}
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background p-10 rounded-[20px]">
        <div className="flex justify-center items-center w-[300px] h-[300px] p-2 bg-image-background rounded-full overflow-hidden relative">
          <img
            className=" object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
            src="/avator.png"
            alt="Godfred"
            loading="lazy"
          />
        </div>
        <h2 className="text-heading-color text-[40px] font-medium leading-tight">
          Godfred Entsie
        </h2>
        <p className="leading-[28px] mt-0 mb-[1rem] w-[300px]">
          I am a Full Stack Developer based in Accra, Ghana
        </p>

        <div className="socials flex items-center justify-between py-0 px-3 w-full">
          <a
            className="text-[20px] border border-border-color px-[12px] py-[10px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[10px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[10px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="text-[20px] border border-border-color px-[12px] py-[10px] rounded-[10px]"
            href=""
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      {/* content-2 */}
      <div className="mt-5 flex flex-col gap-5 border border-card-background bg-card-background p-10 rounded-[20px]">
        <p className="leading-[28px] mt-0 mb-[1rem]">Hi There!</p>
        <p className="text-[30px] leading-[40px] mb-[20px] font-normal text-heading-color">
          I'm Godfred Entsie, a Full Stack Developer building seamless,
          user-focused web applications with clean, efficient code.
        </p>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-light-green"></div>
          <p>Available for Freelancing</p>
        </div>
        <button className="bg-primary-color border border-button-border flex items-center gap-2 justify-center w-fit text-white cursor-pointer text-[14px] font-medium leading-[20px] overflow-visible rounded-[15px] text-center transition-all duration-300 py-[12px] px-[24px]">
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
    </div>
  );
};

export default Home;
