import {
  tracker,
  mail,
  auction,
  social,
  palace,
} from "../assets/images";

export const projects = [
  {
    id: 1,
    title: "Mind Palace",
    image: palace,
    githubUrl: "https://github.com/Melvinots/mind_palace",
    demoUrl: "https://youtu.be/KYbN8I7lF18",
    description:
      "A digital platform that helps users visualize, organize, and retain information using virtual memory spaces and spatial mnemonics.",
    technologies: ["Django", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Sales Tracker",
    image: tracker,
    githubUrl: "https://github.com/Melvinots/sales-tracker/tree/main",
    demoUrl: "https://youtu.be/Wwle64ZoPvU",
    description:
      "A web application for managing sales and profits by tracking daily transactions, monitoring inventory, and visualizing business performance.",
    technologies: ["Flask", "Python", "SQLite", "Chart.js"],
  },
  {
    id: 3,
    title: "Auction Platform",
    image: auction,
    githubUrl: "https://github.com/Melvinots/auction",
    demoUrl: null,
    description:
      "An online auction platform featuring item listings, categorized navigation, bidding, comments, watchlists, and listing management.",
    technologies: ["Django", "Python", "JavaScript"],
  },
  {
    id: 4,
    title: "Emailing System",
    image: mail,
    githubUrl: "https://github.com/Melvinots/mail",
    demoUrl: null,
    description:
      "A single-page email client for sending, receiving, replying to, and archiving emails through API integration.",
    technologies: ["Django", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Social Platform",
    image: social,
    githubUrl: "https://github.com/Melvinots/network",
    demoUrl: null,
    description:
      "A social networking platform inspired by X, supporting posts, following users, liking content, and pagination.",
    technologies: ["Django", "Python", "JavaScript"],
  },
];