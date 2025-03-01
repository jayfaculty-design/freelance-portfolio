import React, { useEffect, useState } from "react";
import { education, experience, skills } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  faDownload,
  faLanguage,
  faCertificate,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "./ScrollReveal";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Group skills by category
  const skillCategories = {
    Frontend: skills.filter((skill) =>
      [
        "React",
        "HTML",
        "CSS",
        "Js",
        "Bootstrap",
        "tailwind",
        "Typescript",
        "Next.js",
      ].includes(skill.name || skill.iconName)
    ),
    Backend: skills.filter((skill) =>
      ["Express Js", "Node.js", "PostgreSQL", "MongoDB"].includes(
        skill.name || skill.iconName
      )
    ),
    Tools: skills.filter((skill) =>
      ["Git", "Figma", "Docker"].includes(skill.name || skill.iconName)
    ),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24 sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
      {/* Resume Header */}
      <ScrollReveal direction="up" delay={0.1} distance={30}>
        <div
          className="flex flex-col sm:flex-row justify-between items-center 
            border border-card-background bg-card-background 
            px-5 sm:px-6 md:px-8 lg:px-10
            py-6 sm:py-7 md:py-8 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]
            mb-5"
        >
          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
                My Resume
              </span>
              <h1
                className="text-[22px] sm:text-[26px] md:text-[30px] 
                  font-bold text-heading-color 
                  leading-tight mt-1"
              >
                Professional Experience
              </h1>
              <p className="text-[14px] sm:text-[15px] text-gray-300 mt-1 max-w-md">
                A summary of my education, work experience, skills, and
                qualifications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} distance={20}>
            <a
              href="/resume.pdf"
              download
              className="bg-primary-color 
                    border-t-2 border-b-3 border-r-3 border-l-2 border-heading-color 
                    flex items-center gap-2
                    justify-center w-fit text-white cursor-pointer 
                    text-[14px] sm:text-[15px]
                    font-bold leading-[20px] 
                    rounded-[12px] 
                    transition-all duration-300 
                    px-5 py-2.5
                    hover:translate-y-[-2px] active:translate-y-[1px]"
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column - Timeline */}
        <ScrollReveal
          direction="left"
          delay={0.2}
          distance={30}
          className="lg:col-span-2"
        >
          <div
            className="border border-card-background bg-card-background 
              px-5 sm:px-6 md:px-8 
              py-6 sm:py-7 md:py-8 
              rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
          >
            {/* Tab Navigation */}
            <ScrollReveal direction="up" delay={0.3} distance={20}>
              <div className="flex border-b border-border-color mb-6">
                {["experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-[15px] sm:text-[16px] font-medium capitalize
                      ${
                        activeTab === tab
                          ? "text-primary-color border-b-2 border-primary-color"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="flex flex-col gap-8">
                {experience.map((exp, index) => (
                  <ScrollReveal
                    key={exp.id}
                    direction="up"
                    delay={0.3 + index * 0.1}
                    distance={20}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-full flex-col items-center">
                        <div
                          className="rounded-full 
                                    flex items-center justify-center 
                                    bg-card-background 
                                    p-[5px] sm:p-[6px] 
                                    border-2 border-primary-color"
                        >
                          <div
                            className="bg-primary-color 
                                      w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] 
                                      rounded-full"
                          ></div>
                        </div>
                        {index !== experience.length - 1 && (
                          <div className="w-[2px] h-full bg-border-color"></div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 pb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <h3
                            className="text-[18px] sm:text-[20px] 
                                    font-medium text-white"
                          >
                            {exp.job}
                          </h3>
                          <span className="hidden sm:block text-gray-400">
                            •
                          </span>
                          <p className="text-[14px] sm:text-[15px] text-primary-color font-medium">
                            {exp.company}
                          </p>
                        </div>

                        <p className="text-[13px] sm:text-[14px] text-gray-400 italic">
                          {exp.year}
                        </p>

                        {exp.description && (
                          <p className="text-[14px] sm:text-[15px] text-gray-300 mt-1">
                            {exp.description}
                          </p>
                        )}

                        {exp.achievements && (
                          <ul className="list-disc list-inside text-[14px] sm:text-[15px] text-gray-300 mt-1 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-[12px] px-2 py-1 bg-background-color rounded-full text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="flex flex-col gap-8">
                {education.map((edu, index) => (
                  <ScrollReveal
                    key={edu.id}
                    direction="up"
                    delay={0.3 + index * 0.1}
                    distance={20}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-full flex-col items-center">
                        <div
                          className="rounded-full 
                                    flex items-center justify-center 
                                    bg-card-background 
                                    p-[5px] sm:p-[6px] 
                                    border-2 border-primary-color"
                        >
                          <div
                            className="bg-primary-color 
                                      w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] 
                                      rounded-full"
                          ></div>
                        </div>
                        {index !== education.length - 1 && (
                          <div className="w-[2px] h-full bg-border-color"></div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 pb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <h3
                            className="text-[18px] sm:text-[20px] 
                                    font-medium text-white"
                          >
                            {edu.degree}
                          </h3>
                          <span className="hidden sm:block text-gray-400">
                            •
                          </span>
                          <p className="text-[14px] sm:text-[15px] text-primary-color font-medium">
                            {edu.school}
                          </p>
                        </div>

                        <p className="text-[13px] sm:text-[14px] text-gray-400 italic">
                          {edu.year}
                        </p>

                        {edu.description && (
                          <p className="text-[14px] sm:text-[15px] text-gray-300 mt-1">
                            {edu.description}
                          </p>
                        )}

                        {edu.courses && (
                          <div className="mt-2">
                            <p className="text-[14px] font-medium text-gray-300 mb-1">
                              Relevant Courses:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, i) => (
                                <span
                                  key={i}
                                  className="text-[12px] px-2 py-1 bg-background-color rounded-full text-gray-300"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Right Column - Skills & Additional Info */}
        <div className="flex flex-col gap-5">
          {/* Skills Section */}
          <ScrollReveal direction="right" delay={0.2} distance={30}>
            <div
              className="border border-card-background bg-card-background 
                px-5 sm:px-6 
                py-6 sm:py-7 
                rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
            >
              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <h2
                  className="text-[20px] sm:text-[22px] 
                    font-bold text-heading-color 
                    mb-4"
                >
                  Skills
                </h2>
              </ScrollReveal>

              {Object.entries(skillCategories).map(
                ([category, categorySkills], categoryIndex) => (
                  <ScrollReveal
                    key={category}
                    direction="up"
                    delay={0.3 + categoryIndex * 0.1}
                    distance={20}
                  >
                    <div className="mb-5 last:mb-0">
                      <h3 className="text-[16px] font-medium text-primary-color mb-3 mt-5">
                        {category}
                      </h3>

                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
                        {categorySkills.map((skill, skillIndex) => (
                          <ScrollReveal
                            key={skill.id}
                            direction="up"
                            delay={
                              0.4 + categoryIndex * 0.1 + skillIndex * 0.05
                            }
                            distance={15}
                          >
                            <div
                              className="flex flex-col 
                                  items-center justify-center 
                                  border border-border-color 
                                  p-3 
                                  rounded-lg
                                  hover:border-primary-color/30
                                  transition-all duration-300
                                  hover:shadow-md
                                  aspect-square"
                            >
                              {skill.isCustomIcon &&
                              skill.iconName === "postgresql" ? (
                                <SiPostgresql
                                  size={24}
                                  className="sm:text-[26px]"
                                  color="#4169e1"
                                />
                              ) : skill.isCustomIcon &&
                                skill.iconName === "tailwind" ? (
                                <SiTailwindcss
                                  size={24}
                                  className="sm:text-[26px]"
                                  color="#38b2ac"
                                />
                              ) : skill.isCustomIcon &&
                                skill.iconName === "next.js" ? (
                                <SiNextdotjs
                                  size={24}
                                  className="sm:text-[26px]"
                                  color="#fff"
                                />
                              ) : skill.isCustomIcon &&
                                skill.iconName === "mongodb" ? (
                                <SiMongodb
                                  size={24}
                                  className="sm:text-[26px]"
                                  color="#4DB33D"
                                />
                              ) : skill.isCustomIcon &&
                                skill.iconName === "typescript" ? (
                                <SiTypescript
                                  size={24}
                                  className="sm:text-[26px]"
                                  color="#3178c6"
                                />
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
                                  className="text-[24px] sm:text-[26px]"
                                />
                              )}
                              <p className="text-[12px] text-center mt-2 line-clamp-1">
                                {skill.name}
                              </p>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </ScrollReveal>

          {/* Languages Section */}
          <ScrollReveal direction="right" delay={0.3} distance={30}>
            <div
              className="border border-card-background bg-card-background 
                px-5 sm:px-6 
                py-6 sm:py-7 
                rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
            >
              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faLanguage}
                    className="text-primary-color text-[18px]"
                  />
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-heading-color">
                    Languages
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-3">
                {[
                  {
                    language: "English",
                    level: "Native/Fluent",
                    proficiency: 100,
                  },
                  {
                    language: "French",
                    level: "Intermediate",
                    proficiency: 60,
                  },
                  { language: "Spanish", level: "Basic", proficiency: 30 },
                ].map((lang, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={0.4 + index * 0.1}
                    distance={15}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span className="text-[15px] font-medium">
                          {lang.language}
                        </span>
                        <span className="text-[13px] text-gray-400">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full bg-background-color rounded-full h-2">
                        <div
                          className="bg-primary-color h-2 rounded-full"
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications Section */}
          <ScrollReveal direction="right" delay={0.4} distance={30}>
            <div
              className="border border-card-background bg-card-background 
                px-5 sm:px-6 
                py-6 sm:py-7 
                rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
            >
              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-primary-color text-[18px]"
                  />
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-heading-color">
                    Certifications
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  {
                    name: "AWS Certified Developer",
                    issuer: "Amazon Web Services",
                    year: "2023",
                  },
                  {
                    name: "React Advanced Concepts",
                    issuer: "Frontend Masters",
                    year: "2022",
                  },
                  {
                    name: "Full Stack Web Development",
                    issuer: "Udacity",
                    year: "2021",
                  },
                ].map((cert, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={0.4 + index * 0.1}
                    distance={15}
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[16px] font-medium text-white">
                        {cert.name}
                      </h3>
                      <div className="flex justify-between">
                        <span className="text-[14px] text-gray-300">
                          {cert.issuer}
                        </span>
                        <span className="text-[13px] text-primary-color">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Awards Section */}
          <ScrollReveal direction="right" delay={0.5} distance={30}>
            <div
              className="border border-card-background bg-card-background 
                px-5 sm:px-6 
                py-6 sm:py-7 
                rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
            >
              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faAward}
                    className="text-primary-color text-[18px]"
                  />
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-heading-color">
                    Awards
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  {
                    name: "Best Web Application",
                    event: "Ghana Tech Summit",
                    year: "2023",
                  },
                  {
                    name: "Innovation Award",
                    event: "Africa Developer Conference",
                    year: "2022",
                  },
                ].map((award, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={0.4 + index * 0.1}
                    distance={15}
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[16px] font-medium text-white">
                        {award.name}
                      </h3>
                      <div className="flex justify-between">
                        <span className="text-[14px] text-gray-300">
                          {award.event}
                        </span>
                        <span className="text-[13px] text-primary-color">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Resume;
