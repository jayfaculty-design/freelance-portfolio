import React, { useState } from "react";
import { testimonials } from "../data/data";
import { Services } from "./Services";

const About = () => {
  const [imageLoad, setImageLoad] = useState({});

  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  return (
    <>
      <div className="mt-26">
        <div
          className="text-center flex flex-col gap-5 sm:gap-6 md:gap-8 
            items-center justify-center 
            border border-card-background bg-card-background 
            px-4 sm:px-5 
            py-6 sm:py-8 md:py-10 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
        >
          <h1
            className="text-[24px] sm:text-[28px] md:text-[34px] 
                font-noto 
                leading-[30px] sm:leading-[36px] md:leading-[40px] 
                font-bold text-white"
          >
            <span className="font-medium text-main-color text-[14px] sm:text-[16px] md:text-[18px]">
              I'm{" "}
            </span>
            Godfred Entsie
          </h1>
          <h2
            className="text-center text-[16px] sm:text-[17px] md:text-[18px] 
                font-medium 
                leading-[22px] sm:leading-[23px] md:leading-[24px]"
          >
            Frontend Expert
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 font-noto">
            <p
              className="text-[15px] sm:text-[17px] md:text-[19px] 
                font-normal 
                leading-[22px] sm:leading-[25px] md:leading-[28px] 
                text-center 
                pb-[10px] sm:pb-[12px] md:pb-[15px]
                max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto"
            >
              Hi!{" "}
              <span className="font-medium text-heading-color">
                I'm Godfred
              </span>
              , a self-taught and award-winning{" "}
              <span className="font-medium text-heading-color">
                Full Stack Developer
              </span>{" "}
              with over{" "}
              <span className="font-medium text-heading-color">
                5 years of experience
              </span>
              . I started in my childhood room and honed my skills at renowned
              tech agencies, building seamless, high-performing web applications
            </p>

            <p
              className="text-[14px] sm:text-[16px] md:text-[18px] 
                font-normal 
                leading-[22px] sm:leading-[25px] md:leading-[28px] 
                text-center
                max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto"
            >
              I transform ideas into dynamic digital experiences, crafting
              innovative full-stack solutions that elevate brands and engage
              audiences worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
            <div
              className="flex text-heading-color 
                  border border-primary-color border-dashed 
                  px-5 sm:px-6 md:px-7 
                  rounded-2xl sm:rounded-3xl 
                  py-4 sm:py-5 
                  gap-2 
                  items-center justify-center
                  hover:bg-primary-color/5 transition-colors duration-300"
            >
              <span
                className="text-3xl sm:text-4xl md:text-5xl 
                    font-bold 
                    leading-[36px] sm:leading-[42px] md:leading-[48px] 
                    text-heading-color"
              >
                3
              </span>
              <div className="flex leading-4 flex-col gap-0.5 sm:gap-1 justify-start items-start">
                +
                <span className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Years Of Exp.
                </span>
              </div>
            </div>
            <div
              className="flex text-heading-color 
                  border border-primary-color border-dashed 
                  px-5 sm:px-6 md:px-7 
                  rounded-2xl sm:rounded-3xl 
                  py-4 sm:py-5 
                  gap-2 
                  items-center justify-center
                  hover:bg-primary-color/5 transition-colors duration-300"
            >
              <span
                className="text-3xl sm:text-4xl md:text-5xl 
                    font-bold 
                    leading-[36px] sm:leading-[42px] md:leading-[48px] 
                    text-heading-color"
              >
                12
              </span>
              <div className="flex leading-4 flex-col gap-0.5 sm:gap-1 justify-start items-start">
                k+
                <span className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Work Hours
                </span>
              </div>
            </div>
            <div
              className="flex text-heading-color 
                  border border-primary-color border-dashed 
                  px-5 sm:px-6 md:px-7 
                  rounded-2xl sm:rounded-3xl 
                  py-4 sm:py-5 
                  gap-2 
                  items-center justify-center
                  hover:bg-primary-color/5 transition-colors duration-300"
            >
              <span
                className="text-3xl sm:text-4xl md:text-5xl 
                    font-bold 
                    leading-[36px] sm:leading-[42px] md:leading-[48px] 
                    text-heading-color"
              >
                50
              </span>
              <div className="flex leading-4 flex-col gap-0.5 sm:gap-1 justify-start items-start">
                +
                <span className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Project Completions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <Services />

        {/* Testinonials */}
        <div className="mt-5 text-center flex flex-col gap-8 items-center justify-center border border-card-background bg-card-background py-10 px-5 rounded-[20px]">
          <section className="testimonials-section">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] text-primary-color font-medium">
              Testimonials
            </span>
            <h2
              className="text-[24px] sm:text-[28px] md:text-[30px] 
              text-heading-color font-bold 
              mb-[10px] sm:mb-[12px] md:mb-[15px]
              mt-2"
            >
              Client Thoughts
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-5 sm:gap-8 md:gap-10"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex border border-border-color 
                rounded-[12px] sm:rounded-[14px] md:rounded-[16px] 
                px-[15px] sm:px-[18px] md:px-[20px] 
                py-[15px] sm:py-[18px] md:py-[20px] 
                flex-col gap-4 sm:gap-5
                transition-all duration-300
                hover:shadow-md hover:border-primary-color/30
                hover:translate-y-[-3px]"
                >
                  <div className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
                    {!imageLoad[testimonial.id] && (
                      <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
                    )}
                    <img
                      className="inline-block w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] 
                      rounded-full max-w-full object-cover"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                      onLoad={() => handleImageLoad(testimonial.id)}
                    />
                  </div>

                  <div className="relative">
                    <svg
                      className="absolute top-0 left-0 w-6 h-6 text-primary-color/20 transform -translate-x-2 -translate-y-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p
                      className="mb-[20px] sm:mb-[25px] md:mb-[30px] 
                      text-left 
                      text-[14px] sm:text-[15px] md:text-[16px]
                      leading-[20px] sm:leading-[22px] md:leading-[24px]
                      text-gray-300 sm:text-gray-200
                      pl-4 sm:pl-5"
                    >
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-2 items-start">
                    <h3
                      className="text-[16px] sm:text-[18px] md:text-[20px] 
                        leading-[1.3] sm:leading-[1.4] 
                        font-medium text-white"
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-400">
                      {testimonial.job}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
