import React, { useState } from "react";
import { projects, testimonials } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
const Portfolio = () => {
  const [imageLoad, setImageLoad] = useState({});
  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  return (
    <div className="mt-26">
      <div className="flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
        <h1
          className="text-[22px] sm:text-[26px] md:text-[30px] 
              font-bold text-heading-color 
              leading-[30px] sm:leading-[36px] md:leading-[40px] 
              pb-[3px] sm:pb-[4px] md:pb-[5px] 
              text-center"
        >
          Featured Projects
        </h1>

        <p
          className="text-[14px] sm:text-[16px] md:text-[18px] 
              leading-[22px] sm:leading-[24px] md:leading-[28px] 
              mb-[0.75rem] sm:mb-[1rem] 
              text-center 
              max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] 
              mx-auto"
        >
          My step-by-step guide ensures a seamless project experience, from the
          first consultation to final delivery. I handle every detail, so you
          can focus on what you do best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-[12px] sm:rounded-[14px] md:rounded-[16px] 
                border border-border-color 
                flex flex-col pb-3 sm:pb-4 md:pb-5 
                gap-2 sm:gap-3 
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                {!imageLoad[project.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-[12px] sm:rounded-t-[14px] md:rounded-t-[16px]"></div>
                )}
                <img
                  className="py-6 sm:py-8 md:py-10 
                    bg-white 
                    h-[150px] sm:h-[180px] md:h-[200px] 
                    object-cover w-full 
                    rounded-t-[12px] sm:rounded-t-[14px] md:rounded-t-[16px]"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>
              <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
                <p className="text-left font-poppins text-[12px] sm:text-[13px] md:text-[14px] text-gray-300">
                  {project.category}
                </p>
                <h2
                  className="text-left pb-2 sm:pb-3 
                      text-[18px] sm:text-[22px] md:text-[25px] 
                      leading-[1.2] sm:leading-[1.3] 
                      font-medium text-white 
                      line-clamp-2"
                >
                  {project.name}
                </h2>
                <a
                  className="w-fit text-image-background 
                    text-[13px] sm:text-[14px] md:text-[15px]
                    font-medium flex gap-1 sm:gap-2 
                    hover:underline hover:underline-offset-1 
                    items-center 
                    transition-all duration-300 
                    hover:translate-x-1"
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live site for ${project.name}`}
                >
                  Live Url
                  <FontAwesomeIcon
                    className="text-xs sm:text-sm"
                    icon={faExternalLink}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
