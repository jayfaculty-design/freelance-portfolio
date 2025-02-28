import { faWordpress } from "@fortawesome/free-brands-svg-icons";
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
import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

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
    live_url: "https://www.nantisys.com/",
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
  {
    id: 3,
    school: "Udacity",
    degree: "Web Development Certification",
    year: "2017",
  },
];

export const experience = [
  {
    id: 1,
    company: "Servmark.ltd",
    job: "Senior Frontend Developer",
    year: "2021 - Present",
  },
  {
    id: 2,
    company: "Visiosculpt Labs",
    job: "Full Stack Developer",
    year: "2019 - 2021",
  },
  {
    id: 3,
    company: "Nanti",
    job: "Junior Web Developer",
    year: "2018 - 2019",
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
  {
    id: 10,
    name: "Typescript",
    icon: "typescript",
    isCustomIcon: true,
    iconName: "typescript",
  },
  {
    id: 11,
    name: "Next.js",
    icon: "next.js",
    isCustomIcon: true,
    iconName: "next.js",
  },
  {
    id: 11,
    name: "MongoDB",
    icon: "mongodb",
    isCustomIcon: true,
    iconName: "mongodb",
  },
];

export const services = [
  {
    id: 1,
    title: "Custom Website Design and Development",
    description:
      "Create fully responsive, modern websites tailored to your clients unique brand identity. Utilizing React.js and Tailwind CSS, I develop high performance, visually stunning websites that may not only look exceptional but also provide an optimal user experience across all devices",
    icon: faCode,
  },
  {
    id: 2,
    title: "Figma to Web Development",
    description:
      "Tranform your Figma designs into live websites with ease. I convert Figma designs into responsive websites using React.js and Tailwind CSS, ensuring a visually stunning and user-friendly experience across all devices",
    icon: faLaptopCode,
  },
  {
    id: 3,
    title: "Ecommerce Website Solutions",
    description:
      "Builed robust online stores that drive sales and enhance customer engagement. I create custom ecommerce websites that are fast, secure, and easy to manage. With a focus on user experience and conversion optimization, I ensure your online store is designed to maximize revenue",
    icon: faStore,
  },
  {
    id: 4,
    title: "Wordpress Website Redisign and Optimization",
    description:
      "Revamp existing Wordpress websites to improve performance, user experience and visual appeal. Services include redesigning outdated websites, optimizing site speed, and enhancing SEO to boost search engine rankings. I ensure your website is modern, user-friendly, and fully optimized for success",
    icon: faWordpress,
  },
  {
    id: 5,
    title: "Landing Page Development",
    description:
      "Create high-converting landing pages that drive traffic and increase conversions. I specialize in developing custom landing pages that are designed to capture leads and drive sales. With a focus on user experience and conversion optimization, I ensure your landing page is optimized for maximum results",
    icon: faRocket,
  },
];
