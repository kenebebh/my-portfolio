import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  jest,
  firebase,
  scss,
  tailwind,
  git,
  portfolio,
  repoRetriever,
  threejs,
  sumz,
  myOdyssey,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive Web Development",
    icon: backend,
  },
  {
    title: "Website Maintenance & Analytics",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS/SCSS",
    icon: scss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "My Odyssey Admin Dashboard",
    description:
      "The My Odyssey Admin Dashboard is a mockup admin dashboard that enables administrators to efficiently manage users, destinations, travel content, and other critical app operations.The dashboard was built to showcase my ability to implement real-world admin functions, with a focus on clean UI, smooth UX, and robust data management, as well as CRUD (Create, Read, Update, Delete) operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tanstack query",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "zod",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
    ],
    image: myOdyssey,
    live_link: "https://my-odyssey-dashboard.vercel.app/",
    source_code_link: "https://github.com/kenebebh/my-odyssey-dashboard",
  },
  {
    name: "Github repo retriever",
    description:
      "The Github repo retriever is a webapp that allows users to easily retrieve and explore Github repositories. The user can enter a valid Github username and get a complete list of all the user's repositories, along with detailed information on each one.The data is from the Github REST API. When any repository is clicked on, detailed information about the repo is shown.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub-Rest-API",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: repoRetriever,
    live_link: "https://github-repo-retriever.netlify.app/",
    source_code_link: "https://github.com/kenebebh/github-repo-retriever",
  },
  {
    name: "Portfolio",
    description:
      "My portfolio website is designed to showcase my skills and experience as a web developer. It has been optimized for all screens, from large desktop displays to mobile devices, ensuring that my work is accessible and user-friendly for everyone. The site is built with pixel-perfect precision, and is also fast and optimized for quick loading times.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    live_link: "https://bebh.netlify.app/",
    source_code_link: "https://github.com/kenebebh/my-portfolio",
  },
];

export { services, technologies, projects };
