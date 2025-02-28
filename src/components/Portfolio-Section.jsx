// Create a new component called PortfolioSection.jsx
import React, { useState, useEffect } from "react";
import { projects } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faCode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const PortfolioSection = () => {
  const [imageLoad, setImageLoad] = useState({});
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Handle image load state
  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  // Filter projects based on category
  useEffect(() => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(
        (project) => project.category === activeFilter
      );
    }

    // Limit to 3 or 6 projects for the home page
    filtered = filtered.slice(0, 6);

    setFilteredProjects(filtered);
  }, [activeFilter]);

  return (
    <div className="mt-5">
      <div
        className="text-center flex flex-col gap-5 sm:gap-6 md:gap-7
          items-center justify-center 
          border border-card-background bg-card-background 
          px-4 sm:px-6 md:px-8 lg:px-10
          py-6 sm:py-7 md:py-8 
          rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
            My Work
          </span>
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] 
              font-bold text-heading-color 
              leading-[30px] sm:leading-[34px] md:leading-[38px]"
          >
            Featured Projects
          </h2>
        </div>

        <p
          className="text-[14px] sm:text-[15px] md:text-[16px] 
            font-normal 
            leading-[22px] sm:leading-[24px] md:leading-[26px] 
            text-center 
            max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto"
        >
          Here are some of my recent projects. Each one represents a unique
          challenge and solution.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 text-[13px] sm:text-[14px] rounded-full transition-all duration-300
                ${
                  activeFilter === category
                    ? "bg-primary-color text-white font-medium"
                    : "bg-card-background border border-border-color text-gray-300 hover:border-primary-color/50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-[12px] sm:rounded-[14px] 
                border border-border-color 
                flex flex-col 
                overflow-hidden
                transition-all duration-300 
                hover:shadow-lg hover:border-primary-color/30
                hover:translate-y-[-3px]
                bg-card-background/50"
            >
              <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] overflow-hidden">
                {!imageLoad[project.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                )}
                <img
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2 justify-end">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-background-color/80 hover:bg-background-color p-2 rounded-full transition-colors duration-300"
                          aria-label="View source code"
                        >
                          <FontAwesomeIcon
                            icon={faCode}
                            className="text-white text-sm"
                          />
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-color/80 hover:bg-primary-color p-2 rounded-full transition-colors duration-300"
                          aria-label="View live site"
                        >
                          <FontAwesomeIcon
                            icon={faExternalLink}
                            className="text-white text-sm"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[12px] text-primary-color font-medium px-2 py-0.5 bg-primary-color/10 rounded-full">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="text-[11px] text-gray-400">
                      {project.year}
                    </span>
                  )}
                </div>

                <h3
                  className="text-[16px] sm:text-[18px] 
                    leading-tight
                    font-medium text-white 
                    mb-2"
                >
                  {project.name}
                </h3>

                {project.description && (
                  <p className="text-[13px] sm:text-[14px] text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                )}

                {/* Tech Stack */}
                {project.technologies && (
                  <div className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-[11px] px-1.5 py-0.5 bg-background-color rounded border border-border-color text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[11px] px-1.5 py-0.5 text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <Link
          to="/portfolio"
          className="mt-4 px-6 py-2 border border-primary-color text-primary-color
            rounded-full hover:bg-primary-color hover:text-white transition-colors duration-300
            text-[14px] sm:text-[15px] font-medium"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
