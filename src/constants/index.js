import { GraduationCap, BriefcaseBusiness } from 'lucide-react';

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

import { tracker, mail, auction, social } from "../assets/images";

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
    title: "Sales Tracker",
    thumbnail: tracker,
  },
  {
    title: "Emailing System",
    thumbnail: mail,
  },
  {
    title: "Social Platform",
    thumbnail: social,
  },
  {
    title: "Auction Platform",
    thumbnail: auction,
  },
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
