import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Blinkit from "../assets/projects/Blinkit.png"

export const HERO_CONTENT = `I am a passionate MERN Stack Developer with hands-on experience in building dynamic, scalable, and user-friendly web applications. Skilled in React, Redux, Node.js, Express, and MongoDB, I enjoy creating reusable components and collaborating with teams to solve complex business problems. My goal is to deliver high-quality code and seamless user experiences that drive value and growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with practical experience as a MERN Stack Developer Intern. I specialize in creating responsive UI components, reusable code, and scalable back-end solutions using the MERN stack. I thrive in collaborative environments, contributing to brainstorming sessions, code reviews, and agile development practices. My background in mechanical engineering strengthens my problem-solving skills, and I enjoy continuously learning new technologies. Outside of coding, I like exploring new tools, contributing to projects, and staying active.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - July 2025",
    role: "MERN Stack Developer ",
    company: "VedanUdyog",
    description: `Collaborated with the team to build dynamic web applications using the MERN stack. Implemented responsive UI components with React, Redux, and Tailwind CSS. Created reusable components to improve development efficiency and participated in Agile practices and code reviews to enhance project quality.`,
    technologies: ["React", "Redux", "Tailwind CSS", "Node.js","Nodemailer","Twilio", "Express.js", "MongoDB"],
  },
  {
    year: "Jul 2021 - Oct 2024",
    role: "Subject Matter Expert (Mechanical Engineering)",
    company: "Chegg India",
    description: `Solved complex mechanical engineering problems, applying strong analytical and critical thinking skills to deliver accurate and high-quality solutions.`,
    technologies: ["Problem Solving", "Technical Writing","Ticket Resolving"],
  },
  {
    year: "May 2021 - Jul 2021",
    role: "Technical Assistance",
    company: "CETPA INFOTECH PVT LTD",
    description: `Assisted clients and students with troubleshooting and technical queries. Provided guidance on installation and setup for software systems.`,
    technologies: ["Technical Support", "Communication"],
  },
];


export const PROJECTS = [
  {
  title: "Blinkit Clone (Quick Commerce App)",
  image: Blinkit ,
  description:
    "A Blinkit-inspired quick commerce application enabling users to order groceries with real-time order tracking, secure authentication, cart management, and instant online payments. Designed for fast, location-based delivery experience.",
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Axios",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Google OAuth",
    "Razorpay",
    "Socket.io",
    "Leaflet"
  ],
  github: "https://github.com/CraziestAnimeLover/blinkit-clone",
  liveDemo: "https://blinkit-clone-frontend-one.vercel.app",
}
,
  {
    title: "Food Delivery App",
    image: project1,
    description:
      "A complete food delivery application with user authentication and an admin panel for managing product listings.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/CraziestAnimeLover/ShriG",
    liveDemo: "https://shri-g-seven.vercel.app",
  },

  {
    title: "Food Delivery Admin",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/CraziestAnimeLover/ShriG",
    liveDemo: "https://shri-g-admin.vercel.app/",
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
    github: "https://github.com/CraziestAnimeLover/Portpolio-React-",
    liveDemo: "https://portpolio-react-gamma.vercel.app/",
  },



  {
    title: "Flashcard App",
    image: project4,
    description:
      "An interactive flashcard web application that allows users to create, manage, and study custom flashcard sets for efficient learning.",
    technologies: ["React", "Redux", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/CraziestAnimeLover/flashcard-app", 
    liveDemo: "https://flashcard-app-beige-beta.vercel.app/", // 
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+919015088766 ",
  email: "sunny9015088766@gmail.com",
};

export const SKILLS = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "JWT","Python","Flask","Axios","Twilio","Google Authenication","REST API"],
  },
  {
    category: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "Agile Development"],
  },
  {
    category: "Full Stack Development",
    skills: ["MERN Stack"],
  },
];
