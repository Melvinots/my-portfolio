import { GraduationCap, BriefcaseBusiness } from 'lucide-react';
import { tracker, mail, auction, social, palace } from "../assets/images";

const iconMap = {
  GraduationCap,
  BriefcaseBusiness
};

import {
  html,
  css,
  javascript,
  python,
  flask,
  django,
  sqlite,
  bootstrap,
  mysql,
  react,
  tailwind,
} from "../assets/icons";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const attainments = [
  {
    title: "Education",
    establishment: "Laguna State Polytechnic University",
    role: "BS in Computer Engineering",
    icon: iconMap.GraduationCap
  },
  {
    title: "Internship",
    establishment: "Creotec Philippines Inc.",
    role: "Application Development Intern",
    icon: iconMap.BriefcaseBusiness
  }
]

export const projects = [
  {
    id: 1,
    title: "Mind Palace",
    thumbnail: palace,
    github: "https://github.com/Melvinots/mind_palace",
    youtube: "https://youtu.be/KYbN8I7lF18",
    content: "A digital platform that helps users visualize, organize, and retain information by creating virtual memory spaces and using spatial mnemonics for efficient recall across various fields.",
  },
  {
    id: 2,
    title: "Sales Tracker",
    thumbnail: tracker,
    github: "https://github.com/Melvinots/sales-tracker/tree/main",
    youtube: "https://youtu.be/Wwle64ZoPvU",
    content: "A web application that manages and monitors sales and profits for small to medium stores by recording daily sales, tracking inventory, and visualizing data through charts.",
  },
  {
    id: 3,
    title: "Auction Platform",
    thumbnail: auction,
    github: "https://github.com/Melvinots/auction",
    youtube: "",
    content: "An auction platform for buying and selling items with active listings, categories, real-time bidding, user comments, and a watchlist, with enhanced navigation for users.",
  },
  {
    id: 4,
    title: "Emailing System",
    thumbnail: mail,
    github: "https://github.com/Melvinots/mail",
    youtube: "",
    content: "A single-page email client with API integration for sending, receiving, replying to, and archiving emails, offering a clean interface and streamlined functionality for managing communication."
  },
  {
    id: 5,
    title: "Social Platform",
    thumbnail: social,
    github: "https://github.com/Melvinots/network",
    youtube: "",
    content: "A platform similar to X (formerly Twitter) that enables posting text-based content, following users, and liking posts, with pagination for smooth loading and efficient navigation.",
  }
  
];

export const toolsURL = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "Flask", icon: flask },
  { name: "Django", icon: django },
  { name: "SQLite", icon: sqlite },
  { name: "Bootstrap", icon: bootstrap },
];

export const ongoingLearning = [react, tailwind, mysql];
