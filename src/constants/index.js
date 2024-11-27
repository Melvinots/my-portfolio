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
    content: "A digital platform that helps users visualize, organize, and retain information by creating virtual memory spaces and using spatial mnemonics for efficient recall across various use cases."
  },
  {
    id: 2,
    title: "Sales Tracker",
    thumbnail: tracker,
    github: "https://github.com/Melvinots/sales-tracker/tree/main",
    youtube: "https://youtu.be/Wwle64ZoPvU",
    content: "A web application for managing sales and profits in small to medium stores by tracking daily transactions, monitoring inventory, and visualizing performance data and trends through charts."
  },
  {
    id: 3,
    title: "Auction Platform",
    thumbnail: auction,
    github: "https://github.com/Melvinots/auction",
    youtube: "",
    content: "An auction platform for buying and selling items featuring active listings, categorized navigation, bid tracking, user comments, user watchlists, and ability to set listings as ongoing or closed."
  },
  {
    id: 4,
    title: "Emailing System",
    thumbnail: mail,
    github: "https://github.com/Melvinots/mail",
    youtube: "",
    content: "A single-page email client integrated with APIs for sending, receiving, replying to, and archiving emails, featuring a clean interface for streamlined communication management."
  },
  {
    id: 5,
    title: "Social Platform",
    thumbnail: social,
    github: "https://github.com/Melvinots/network",
    youtube: "",
    content: "A platform resembling X (formerly Twitter) that supports posting text-based content, following users, liking posts, and seamless navigation with pagination for efficient user experience."
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
