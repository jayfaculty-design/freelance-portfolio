import React, { useState } from "react";
import { projects, testimonials } from "../data/data";
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
      <div className="text-center flex flex-col gap-5 items-center justify-center border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
        <h1 className="text-[30px] font-bold text-heading-color leading-[40px] pb-[5px] text-center">
          Featured Projects
        </h1>

        <p className="text-[18px] leading-[28px] mb-[1rem] text-center">
          My step-by-step guide ensures a seamless project experience, from the
          first consultation to final delivery. I handle every detail, so you
          can focus on what you do best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-[16px] border border-border-color flex flex-col pb-5 gap-3"
            >
              <div className="relative w-full h-[200px]">
                {!imageLoad[project.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse "></div>
                )}
                <img
                  className="py-10 bg-white h-[200px] object-cover w-full"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>
              <div className="px-5 py-5">
                <h1 className="text-left font-poppins">{project.category}</h1>
                <h1 className="text-left text-[25px] leading-[1.3] font-medium text-white">
                  {project.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
