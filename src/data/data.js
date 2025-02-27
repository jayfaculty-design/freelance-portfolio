import {
  faBootstrap,
  faCss3,
  faFigma,
  faGit,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

export const testimonials = [
  {
    id: 1,
    name: "Enoch Danso",
    quote:
      "Working with Godfred was a game-changer for our business. Their ability to transform complex ideas into seamless digital experiences is unmatched. The website they built for us is fast, intuitive, and beautifully designed!",
    job: "CEO, Visiosculpt Labs",
    avatar: "/enoch.jfif",
  },
  {
    id: 2,
    name: "Jeffery Mensah",
    quote:
      "Godfred is a highly skilled developer who understands both the technical and design aspects of web development. They delivered a pixel-perfect, high-performing platform that exceeded our expectations.",
    job: "Product Manager, Servmark",
    avatar: "/eben.jfif",
  },
  {
    id: 3,
    name: "Michael Eshun",
    quote:
      "I’ve collaborated with many developers, but Godfred stands out for their attention to detail and problem-solving skills. They took our project to the next level, improving speed, UI/UX, and functionality beyond what we imagined.",
    job: "Web Developer, Nanti",
    avatar: "/mike.jfif",
  },
  {
    id: 4,
    name: "Tanya",
    quote:
      "Godfred has an incredible ability to craft user-friendly and high-performing web applications. Their work has significantly improved our customer engagement and retention",
    job: "Ecommerce business owner",
    avatar: "tanya.webp",
  },
];

export const projects = [
  {
    id: 1,
    name: "Nanti",
    category: "Web Development",
    image: "/nanti-web.png",
    live_url: "https://nantisys.com",
  },
  {
    id: 2,
    name: "Visiosculpt",
    category: "E-commerce",
    image: "/visiosculpt.png",
    github: "https://github.com/Visiosculpt",
  },
];

export const education = [
  {
    id: 1,
    school: "Pentecost University",
    degree: "Bsc. Information Technology",
    year: "2019 - 2023",
  },

  {
    id: 2,
    school: "University Practice Senior High School",
    degree: "General Arts",
    year: "2016 - 2019",
  },
];

export const experience = [
  {
    id: 1,
    company: "Jay Webs Company Ltd.",
    job: "Web Developer",
    year: "2023 - Present",
  },
  {
    id: 2,
    company: "Nanti Systems",
    job: "Frontend Developer",
    year: "2022 - 2023",
  },
];

export const skills = [
  {
    id: 1,
    name: "React",
    icon: faReact,
  },
  {
    id: 2,
    name: "Express Js",
    icon: faNodeJs,
  },
  {
    id: 3,
    name: "HTML",
    icon: faHtml5,
  },
  {
    id: 4,
    name: "CSS",
    icon: faCss3,
  },
  {
    id: 5,
    name: "Js",
    icon: faJs,
  },

  {
    id: 6,
    name: "Bootstrap",
    icon: faBootstrap,
  },
  {
    id: 7,
    name: "Git",
    icon: faGit,
  },
  {
    id: 8,
    name: "Figma",
    icon: faFigma,
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: "postgresql",
    isCustomIcon: true,
    iconName: "postgresql",
  },
  {
    id: 10,
    name: "Tailwind",
    icon: "tailwind",
    isCustomIcon: true,
    iconName: "tailwind",
  },
];
