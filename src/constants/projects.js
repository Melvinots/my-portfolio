import { tracker, mail, auction, social, palace } from "../assets/images";

export const projects = [
  {
    id: 1,
    title: "Finance Tracker",
    featured: true,
    image: tracker, // Replace with dedicated screenshot
    githubUrl: "https://github.com/Melvinots/finance-tracker",
    demoUrl: null,
    description:
      "A personal finance application for managing income, expenses, and monthly budgets. Features a dashboard for tracking transactions, monitoring spending, and reviewing budget performance.",
    technologies: ["C#", "Blazor", "ASP.NET Core", "Entity Framework Core", "SQLite", "JWT"],
  },
  {
    id: 2,
    title: "World Explorer App",
    featured: true,
    image: social, // Replace with dedicated screenshot
    githubUrl: "https://github.com/Melvinots/world-explorer-app",
    demoUrl: null,
    description:
      "An interactive world exploration application featuring country browsing with information on capitals, populations, and national flags, alongside a currency explorer with exchange rate data.",
    technologies: ["C#", "Blazor", "External APIs"],
  },
  {
    id: 3,
    title: "Mind Palace",
    image: palace,
    githubUrl: "https://github.com/Melvinots/mind_palace",
    demoUrl: "https://youtu.be/KYbN8I7lF18",
    description:
      "A digital platform that helps users organize and retain information through virtual memory spaces and spatial mnemonics.",
    technologies: ["Python", "Django", "JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    title: "Sales Tracker",
    image: tracker,
    githubUrl: "https://github.com/Melvinots/sales-tracker/tree/main",
    demoUrl: "https://youtu.be/Wwle64ZoPvU",
    description:
      "A sales management application for tracking daily transactions, monitoring inventory, and visualizing sales and profit performance.",
    technologies: ["Python", "Flask", "SQLite", "Chart.js"],
  },
  {
    id: 5,
    title: "Auction Platform",
    image: auction,
    githubUrl: "https://github.com/Melvinots/auction",
    demoUrl: null,
    description:
      "An online auction platform featuring item listings, category browsing, bidding, user comments, watchlists, and listing management.",
    technologies: ["Python", "Django", "JavaScript"],
  },
  {
    id: 6,
    title: "Emailing System",
    image: mail,
    githubUrl: "https://github.com/Melvinots/mail",
    demoUrl: null,
    description:
      "A single-page email client that supports sending, receiving, replying to, and archiving emails through API integration.",
    technologies: ["Python", "Django", "JavaScript"],
  },
  {
    id: 7,
    title: "Social Platform",
    image: social,
    githubUrl: "https://github.com/Melvinots/network",
    demoUrl: null,
    description:
      "A social networking application inspired by X, allowing users to create posts, follow other users, like content, and browse posts through pagination.",
    technologies: ["Python", "Django", "JavaScript"],
  },
];
