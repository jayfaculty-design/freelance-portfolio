import React, { useState } from "react";
import { testimonials } from "../data/data";
import { Services } from "./Services";
import NotchMotion from "./NotchMotion";

const About = () => {
  const [imageLoad, setImageLoad] = useState({});

  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="mt-24 sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* About Me Section */}
      <div
        className="text-center flex flex-col gap-5 sm:gap-6 md:gap-7
          items-center justify-center 
          border border-card-background bg-card-background 
          px-4 sm:px-6 md:px-8 lg:px-10
          py-6 sm:py-7 md:py-8 
          rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="font-medium text-primary-color text-[14px] sm:text-[15px] md:text-[16px]">
            About Me
          </span>

          <h1
            className="text-[24px] sm:text-[28px] md:text-[32px] 
              font-noto 
              leading-[30px] sm:leading-[34px] md:leading-[38px] 
              font-bold text-heading-color"
          >
            Godfred Entsie
          </h1>

          <h2
            className="text-center text-[16px] sm:text-[17px] md:text-[18px] 
              font-medium 
              leading-[22px] sm:leading-[23px] md:leading-[24px]
              text-gray-300"
          >
            Full Stack Developer
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 font-noto">
          <p
            className="text-[14px] sm:text-[15px] md:text-[16px] 
              font-normal 
              leading-[22px] sm:leading-[24px] md:leading-[26px] 
              text-center 
              pb-[10px] sm:pb-[12px] md:pb-[15px]
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto"
          >
            Hi!{" "}
            <span className="font-medium text-heading-color">I'm Godfred</span>,
            a self-taught and award-winning{" "}
            <span className="font-medium text-heading-color">
              Full Stack Developer
            </span>{" "}
            with over{" "}
            <span className="font-medium text-heading-color">
              5 years of experience
            </span>
            . I started in my childhood room and honed my skills at renowned
            tech agencies, building seamless, high-performing web applications.
          </p>

          <p
            className="text-[14px] sm:text-[15px] md:text-[16px] 
              font-normal 
              leading-[22px] sm:leading-[24px] md:leading-[26px] 
              text-center
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto"
          >
            I transform ideas into dynamic digital experiences, crafting
            innovative full-stack solutions that elevate brands and engage
            audiences worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mt-2">
          {[
            { number: "3", label: "Years Of Exp.", suffix: "+" },
            { number: "12", label: "Work Hours", suffix: "k+" },
            { number: "50", label: "Project Completions", suffix: "+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex text-heading-color 
                border border-primary-color border-dashed 
                px-4 sm:px-5 md:px-6 
                rounded-xl sm:rounded-2xl 
                py-3 sm:py-4 
                gap-2 
                items-center justify-center
                hover:bg-primary-color/5 transition-colors duration-300"
            >
              <span
                className="text-2xl sm:text-3xl md:text-4xl 
                  font-bold 
                  leading-[32px] sm:leading-[36px] md:leading-[40px] 
                  text-heading-color"
              >
                {stat.number}
              </span>
              <div className="flex leading-4 flex-col gap-0.5 justify-start items-start">
                {stat.suffix}
                <span className="text-[12px] sm:text-[13px] text-gray-300">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-5">
        <Services />
      </div>

      {/* Testimonials Section */}
      <div
        className="mt-5 text-center flex flex-col gap-6 sm:gap-7 md:gap-8 
          items-center justify-center 
          border border-card-background bg-card-background 
          px-4 sm:px-6 md:px-8 lg:px-10
          py-6 sm:py-7 md:py-8 
          rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
            Testimonials
          </span>
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] 
              text-heading-color font-bold"
          >
            Client Thoughts
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-4 sm:gap-5 md:gap-6 w-full"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex border border-border-color 
                rounded-[12px] sm:rounded-[14px] 
                px-4 sm:px-5 
                py-4 sm:py-5 
                flex-col gap-3 sm:gap-4
                transition-all duration-300
                hover:shadow-md hover:border-primary-color/30
                hover:translate-y-[-3px]
                text-left"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]">
                  {!imageLoad[testimonial.id] && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
                  )}
                  <img
                    className="inline-block w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] 
                      rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    onLoad={() => handleImageLoad(testimonial.id)}
                  />
                </div>

                <div className="flex flex-col">
                  <h3
                    className="text-[16px] sm:text-[17px] 
                      leading-tight
                      font-medium text-white"
                  >
                    {testimonial.name}
                  </h3>
                  <p className="text-[13px] text-gray-400">{testimonial.job}</p>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute top-0 left-0 w-5 h-5 text-primary-color/20 transform -translate-x-1 -translate-y-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-[14px] 
                    leading-[20px] sm:leading-[22px]
                    text-gray-300
                    pl-3 sm:pl-4"
                >
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div
        className="mt-5 flex flex-col gap-5 sm:gap-6 md:gap-7
          border border-card-background bg-card-background 
          px-4 sm:px-6 md:px-8 lg:px-10
          py-6 sm:py-7 md:py-8 
          rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <div className="text-center">
          <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
            My Skills
          </span>
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] 
              text-heading-color font-bold mt-1"
          >
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "MongoDB",
            "PostgreSQL",
            "GraphQL",
            "Docker",
          ].map((skill, index) => (
            <NotchMotion key={index} delay={index * 0.05} type="subtle">
              <div
                className="flex items-center justify-center
                border border-border-color rounded-lg
                py-2 sm:py-3
                px-3 sm:px-4
                bg-card-background/50
                hover:border-primary-color/50 hover:bg-primary-color/5
                transition-all duration-300"
              >
                <span className="text-[14px] sm:text-[15px] font-medium">
                  {skill}
                </span>
              </div>
            </NotchMotion>
          ))}
        </div>
      </div>

      {/* Education & Experience */}
      <div className="mt-5 mb-8 sm:mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education */}
        <div
          className="flex flex-col gap-5 sm:gap-6
            border border-card-background bg-card-background 
            px-4 sm:px-6 md:px-8
            py-6 sm:py-7 md:py-8 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
        >
          <div className="text-center md:text-left">
            <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
              Education
            </span>
            <h2
              className="text-[20px] sm:text-[22px] md:text-[24px] 
                text-heading-color font-bold mt-1"
            >
              Academic Background
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                degree: "BSc in Information Technology",
                school: "Pentecost University",
                years: "2019 - 2023",
                description:
                  "Focused on software engineering and web development technologies.",
              },
              {
                degree: "Web Development Certification",
                school: "Udacity",
                years: "2017",
                description:
                  "Full-stack web development with JavaScript and React.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-primary-color pl-4 py-1"
              >
                <h3 className="text-[16px] sm:text-[17px] font-medium text-white">
                  {edu.degree}
                </h3>
                <p className="text-[14px] text-gray-300 mt-1">{edu.school}</p>
                <p className="text-[13px] text-primary-color mt-1">
                  {edu.years}
                </p>
                <p className="text-[14px] text-gray-400 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          className="flex flex-col gap-5 sm:gap-6
            border border-card-background bg-card-background 
            px-4 sm:px-6 md:px-8
            py-6 sm:py-7 md:py-8 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
        >
          <div className="text-center md:text-left">
            <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
              Experience
            </span>
            <h2
              className="text-[20px] sm:text-[22px] md:text-[24px] 
                text-heading-color font-bold mt-1"
            >
              Work History
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                position: "Senior Frontend Developer",
                company: "Servmark.ltd",
                years: "2021 - Present",
                description:
                  "Leading frontend development for enterprise web applications.",
              },
              {
                position: "Full Stack Developer",
                company: "Visiosculpt Labs",
                years: "2019 - 2021",
                description:
                  "Developed and maintained full-stack web applications using React and Node.js.",
              },
              {
                position: "Junior Web Developer",
                company: "Nanti",
                years: "2018 - 2019",
                description:
                  "Built responsive websites and implemented UI designs.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-primary-color pl-4 py-1"
              >
                <h3 className="text-[16px] sm:text-[17px] font-medium text-white">
                  {exp.position}
                </h3>
                <p className="text-[14px] text-gray-300 mt-1">{exp.company}</p>
                <p className="text-[13px] text-primary-color mt-1">
                  {exp.years}
                </p>
                <p className="text-[14px] text-gray-400 mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
