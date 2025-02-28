import React from "react";
import { education, experience, skills } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiPostgresql, SiTailwindcss } from "@icons-pack/react-simple-icons";

const Resume = () => {
  return (
    <div className="mt-26">
      <div className="text-center flex flex-col gap-4 sm:gap-5 
            items-center justify-center 
            border border-card-background bg-card-background 
            px-4 sm:px-5 
            py-6 sm:py-8 md:py-10 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]">
  {/* school and experience */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-10 sm:gap-15 md:gap-20 
                w-full">
    <div className="flex gap-6 sm:gap-8 md:gap-10 flex-col">
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] 
                  text-left 
                  font-bold 
                  text-heading-color 
                  leading-[30px] sm:leading-[36px] md:leading-[40px] 
                  pb-[0px]">
        Education
      </h2>
      {education.map((edu) => (
        <div key={edu.id} className="flex items-start gap-3 sm:gap-4 md:gap-5">
          <div className="flex h-full flex-col items-center">
            <div className="rounded-full 
                        flex items-center justify-center 
                        bg-card-background 
                        p-[4px] sm:p-[5px] 
                        border-2 border-white">
              <div className="bg-white animate-pulse 
                          w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] 
                          rounded-full"></div>
            </div>
            <div className="w-[2px] h-full bg-white"></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 items-start pt-0.5">
            <h3 className="text-[18px] sm:text-[20px] 
                        text-left 
                        leading-[1.3] sm:leading-[1.4] 
                        font-medium text-white">
              {edu.degree}
            </h3>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-left">
              {edu.school}
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-left text-gray-400">
              {edu.year}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* experience */}
    <div className="flex gap-6 sm:gap-8 md:gap-10 flex-col">
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] 
                  text-left 
                  font-bold 
                  text-heading-color 
                  leading-[30px] sm:leading-[36px] md:leading-[40px] 
                  pb-[0px]">
        Experience
      </h2>
      {experience.map((exp) => (
        <div key={exp.id} className="flex items-start gap-3 sm:gap-4 md:gap-5">
          <div className="flex flex-col h-full items-center">
            <div className="rounded-full 
                        flex items-center justify-center 
                        bg-card-background 
                        p-[4px] sm:p-[5px] 
                        border-2 border-white">
              <div className="bg-white w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] 
                          animate-pulse rounded-full"></div>
            </div>
            <div className="w-[2px] h-full bg-white"></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 items-start pt-0.5">
            <h3 className="text-[18px] sm:text-[20px] 
                        leading-[1.3] sm:leading-[1.4] 
                        font-medium text-white">
              {exp.company}
            </h3>
            <p className="text-[13px] sm:text-[14px] md:text-[15px]">
              {exp.job}
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-400">
              {exp.year}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* skills */}
    <div className="w-full">
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] 
                  font-bold 
                  text-heading-color 
                  leading-[30px] sm:leading-[36px] md:leading-[40px] 
                  pb-[0px] 
                  text-left md:text-center lg:text-left">
        Skills
      </h2>
      <div className="flex gap-3 sm:gap-4 md:gap-5 
                    overflow-x-auto 
                    py-5 sm:py-6 md:py-8 
                    no-scrollbar 
                    items-center 
                    overflow-hidden whitespace-nowrap">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col 
                      flex-shrink-0 
                      items-center justify-center 
                      border border-border-color 
                      w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                      p-3 sm:p-4 md:p-5 
                      rounded-lg
                      hover:border-primary-color/30
                      transition-all duration-300
                      hover:shadow-md"
          >
            {skill.isCustomIcon && skill.iconName === "postgresql" ? (
              <SiPostgresql size={24} className="sm:text-[26px] md:text-[30px]" color="#4169e1" />
            ) : skill.isCustomIcon && skill.iconName === "tailwind" ? (
              <SiTailwindcss size={24} className="sm:text-[26px] md:text-[30px]" color="#38b2ac" />
            ) : (
              <FontAwesomeIcon
                color={`${
                  skill.name === "React"
                    ? "#61dbfb"
                    : skill.name === "Express Js"
                    ? "#68A063"
                    : skill.name === "HTML"
                    ? "#e34c26"
                    : skill.name === "CSS"
                    ? "#2965f1"
                    : skill.name === "Js"
                    ? "#f0db4f"
                    : skill.name === "Bootstrap"
                    ? "#7952b3"
                    : skill.name === "Git"
                    ? "#f34f29"
                    : skill.name === "Figma"
                    ? "#f24e1e"
                    : "red"
                }`}
                icon={skill.icon}
                className="text-[24px] sm:text-[26px] md:text-[30px]"
              />
            )}
            <p className="text-[12px] sm:text-[13px] md:text-[14px] mt-1 sm:mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Resume;
