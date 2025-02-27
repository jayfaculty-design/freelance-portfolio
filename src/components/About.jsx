import React, { useState } from "react";
import { testimonials } from "../data/data";

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
        <div className="text-center flex flex-col gap-8 items-center justify-center border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
          <h1 className="text-[34px] font-noto leading-[40px] font-bold text-white">
            <span className="font-medium text-main-color text-[18px]">
              I'm{" "}
            </span>
            Godfred Entsie
          </h1>
          <h2 className="text-center text-[18px] font-medium leading-[24px]">
            Frontend Expert
          </h2>

          <div className="flex flex-col gap-5 font-noto">
            <p className="text-[19px] font-normal leading-[28px] text-center pb-[15px]">
              Hi!{" "}
              <span className="font-medium text-heading-color">
                I’m Godfred
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

            <p className="text-[18px] font-normal leading-[28px] text-center">
              I transform ideas into dynamic digital experiences, crafting
              innovative full-stack solutions that elevate brands and engage
              audiences worldwide
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex text-heading-color border border-primary-color border-dashed px-7 rounded-3xl py-5 gap-2 items-center justify-center">
              <h1 className="text-5xl font-bold leading-[48px] text-heading-color">
                3
              </h1>
              <h2 className="flex leading-4 flex-col gap-1 justify-start items-start">
                +<span>Years Of Exp.</span>
              </h2>
            </div>
            <div className="flex text-heading-color border border-primary-color border-dashed px-7 rounded-3xl py-5 gap-2 items-center justify-center">
              <h1 className="text-5xl font-bold leading-[48px] text-heading-color">
                12
              </h1>
              <h2 className="flex leading-4 flex-col gap-1 justify-start items-start">
                k+<span>Work Hours</span>
              </h2>
            </div>
            <div className="flex text-heading-color border border-primary-color border-dashed px-7 rounded-3xl py-5 gap-2 items-center justify-center">
              <h1 className="text-5xl font-bold leading-[48px] text-heading-color">
                50
              </h1>
              <h2 className="flex leading-4 flex-col gap-1 justify-start items-start">
                +<span>Project Completions</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Testinonials */}
        <div className="mt-5 text-center flex flex-col gap-8 items-center justify-center border border-card-background bg-card-background py-10 px-5 rounded-[20px]">
          <h1>Testimonials</h1>
          <h1 className="text-[30px] text-heading-color font-bold mb-[15px]">
            Client Thoughts
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex border border-border-color rounded-[16px] px-[20px] py-[20px] flex-col gap-5"
              >
                <div className="relative w-[60px] h-[60px]">
                  {!imageLoad[testimonial.id] && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
                  )}
                  <img
                    className="inline-block w-[60px] h-[60px] rounded-full max-w-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    onLoad={() => handleImageLoad(testimonial.id)}
                  />
                </div>

                <p className="mb-[30px] text-left">{testimonial.quote}</p>

                <div className="flex flex-col gap-2 items-start">
                  <h1 className="text-[20px] leading-[1.4] font-medium text-white">
                    {testimonial.name}
                  </h1>
                  <p>{testimonial.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
