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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  github,
  jobit,
  studynotion,
  petgrove,
  banking,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  ];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "SP IT Academy Pvt. Ltd.",
    icon: jobit,
    iconBg: "#383E56",
    date: "Feb 2026 - Present",
    points: [
      "Spearheading project development and automation testing as a Scrum Master, ensuring product quality and faster delivery.",
      "Collaborating with cross-functional teams to plan sprints, track progress, and remove delivery blockers.",
      "Driving automation testing practices to improve release quality and reduce manual QA effort.",
      ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelance & Open Source Contributor",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Architected an open-source-inspired MERN-stack EdTech platform, implementing interactive content delivery workflows to streamline online learning administration for an EdTech startup.",
      "Developed a custom MERN-stack ERP system, integrating robust user authentication and project management modules to optimize operational resource tracking for a construction company.",
      "Active open-source contributor to projects like lichess and TestNG, with 1000+ contributions in the past year.",
      ],
  },
  ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ayush proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ayush does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ayush optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  ];

const projects = [
  {
    name: "StudyNotion",
    description:
      "Web-based platform that allows users to search, puchase, and create video lectures and study plans from various instuctors, providing a satisfying learning to all.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      ],
    image: studynotion,
    source_code_link: "https://github.com/ayushshanks/StudyNotion",
  },
  {
    name: "PetGrove",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      ],
    image: petgrove,
    source_code_link: "https://github.com/ayushshanks/PetGrove",
  },
  {
    name: "ChessImprover",
    description:
      "Deep dive into the immersive chess gameplay and GPT game improvement suggestions",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      ],
    image: banking,
    source_code_link: "https://github.com/ayushshanks/ChessImprover",
  },
  ];

export { services, technologies, experiences, testimonials, projects };
