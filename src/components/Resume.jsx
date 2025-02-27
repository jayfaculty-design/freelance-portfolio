import React from "react";
import { education, experience, skills } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiPostgresql, SiTailwindcss } from "@icons-pack/react-simple-icons";

const Resume = () => {
  return (
    <div className="mt-26">
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
        {/* school and experience */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-10 flex-col">
            <h1 className="text-[30px] text-left font-bold text-heading-color leading-[40px] pb-[0px]">
              Education
            </h1>
            {education.map((edu) => (
              <div className="flex items-center gap-5">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="rounded-full flex items-center justify-center bg-card-background p-[5px] border-2 border-white">
                    <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
                  </div>
                  <div className="w-[2px] h-full bg-white"></div>
                </div>
                <div key={edu.id} className="flex flex-col gap-2 items-start">
                  <h1 className="text-[20px] text-left leading-[1.4] font-medium text-white">
                    {edu.degree}
                  </h1>
                  <p className="text-left">{edu.school}</p>
                  <p className="text-left">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* experience */}
          <div className="flex gap-10 flex-col">
            <h1 className="text-[30px] text-left font-bold text-heading-color leading-[40px] pb-[0px]">
              Experience
            </h1>
            {experience.map((experiences) => (
              <div className="flex items-center gap-5">
                <div className="flex flex-col h-full items-center justify-center">
                  <div className="rounded-full flex items-center justify-center bg-card-background p-[5px] border-2 border-white">
                    <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
                  </div>
                  <div className="w-[2px] h-full bg-white"></div>
                </div>
                <div
                  key={experiences.id}
                  className="flex flex-col gap-2 items-start"
                >
                  <h1 className="text-[20px] leading-[1.4] font-medium text-white">
                    {experiences.company}
                  </h1>
                  <p>{experiences.job}</p>
                  <p>{experiences.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* skills */}
          <div className="">
            <h1 className="text-[30px] font-bold text-heading-color leading-[40px] pb-[0px]">
              Skills
            </h1>
            <div className="flex gap-5 overflow-x-auto space-x-4 py-8 no-scrollbar items-center overflow-hidden whitespace-nowrap">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col flex-shrink-0 items-center justify-center border-1 w-24 h-24 p-5 rounded-lg"
                >
                  {skill.isCustomIcon && skill.iconName === "postgresql" ? (
                    <SiPostgresql size={30} color="#4169e1" />
                  ) : skill.isCustomIcon && skill.iconName === "tailwind" ? (
                    <SiTailwindcss size={30} color="#38b2ac" />
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
                      size="2x"
                    />
                  )}
                  <p>{skill.name}</p>
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
