import React, { useState, useEffect } from "react";
import { projects } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faCode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import NotchMotion from "./NotchMotion";

const Portfolio = () => {
  const [imageLoad, setImageLoad] = useState({});
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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

  // Filter projects based on category and search term
  useEffect(() => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(
        (project) => project.category === activeFilter
      );
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(term) ||
          project.category.toLowerCase().includes(term) ||
          (project.description &&
            project.description.toLowerCase().includes(term))
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, searchTerm]);

  return (
    <div className="mt-24 sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
      {/* Featured Projects Section */}
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
          <h1
            className="text-[24px] sm:text-[28px] md:text-[32px] 
              font-bold text-heading-color 
              leading-[30px] sm:leading-[34px] md:leading-[38px]"
          >
            Featured Projects
          </h1>
        </div>

        <p
          className="text-[14px] sm:text-[15px] md:text-[16px] 
            font-normal 
            leading-[22px] sm:leading-[24px] md:leading-[26px] 
            text-center 
            max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto"
        >
          My step-by-step guide ensures a seamless project experience, from the
          first consultation to final delivery. I handle every detail, so you
          can focus on what you do best.
        </p>

        {/* Filter and Search */}
        <div className="w-full flex flex-col sm:flex-row gap-4 mb-2 sm:mb-3">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
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

          {/* Search */}
          <div
            className={`relative flex-grow max-w-xs mx-auto sm:mx-0 sm:ml-auto transition-all duration-300
              ${isSearchFocused ? "ring-2 ring-primary-color/50" : ""}`}
          >
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-background-color border border-border-color rounded-full
                py-1.5 pl-9 pr-4 text-[13px] sm:text-[14px]
                focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
            {filteredProjects.map((project, index) => (
              <NotchMotion key={project.id} type="default" delay={index * 0.1}>
                <div
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

                    <h2
                      className="text-[16px] sm:text-[18px] 
                      leading-tight
                      font-medium text-white 
                      mb-2"
                    >
                      {project.name}
                    </h2>

                    {project.description && (
                      <p className="text-[13px] sm:text-[14px] text-gray-300 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                    )}

                    {/* Tech Stack */}
                    {project.technologies && (
                      <div className="mt-auto pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
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
              </NotchMotion>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-gray-400">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchTerm("");
              }}
              className="mt-3 text-primary-color hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Show More Button (if you have many projects) */}
        {filteredProjects.length > 6 && (
          <button
            className="mt-4 px-6 py-2 border border-primary-color text-primary-color
            rounded-full hover:bg-primary-color hover:text-white transition-colors duration-300
            text-[14px] sm:text-[15px] font-medium"
          >
            Show More Projects
          </button>
        )}
      </div>

      {/* Project Process Section */}
      <div
        className="mt-5 flex flex-col gap-5 sm:gap-6 md:gap-7
          border border-card-background bg-card-background 
          px-4 sm:px-6 md:px-8 lg:px-10
          py-6 sm:py-7 md:py-8 
          rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <div className="text-center">
          <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
            My Process
          </span>
          <h2
            className="text-[20px] sm:text-[22px] md:text-[24px] 
              text-heading-color font-bold mt-1"
          >
            How I Work
          </h2>

          <p
            className="text-[14px] sm:text-[15px] md:text-[16px] 
              mt-2 mb-4 sm:mb-5
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] 
              mx-auto"
          >
            My development process is designed to deliver high-quality results
            efficiently and transparently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
          {[
            {
              step: "1",
              title: "Discovery",
              description:
                "Understanding your goals, requirements, and vision for the project.",
            },
            {
              step: "2",
              title: "Planning",
              description:
                "Creating a detailed roadmap with timelines, milestones, and deliverables.",
            },
            {
              step: "3",
              title: "Development",
              description:
                "Building your solution with regular updates and iterative improvements.",
            },
            {
              step: "4",
              title: "Delivery",
              description:
                "Thorough testing, deployment, and ongoing support to ensure success.",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-border-color rounded-xl
                hover:border-primary-color/30 hover:bg-primary-color/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary-color/20 flex items-center justify-center mb-3">
                <span className="text-primary-color font-bold">
                  {process.step}
                </span>
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-medium text-white mb-2">
                {process.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-300">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
