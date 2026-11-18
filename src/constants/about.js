import { GraduationCap, BriefcaseBusiness } from "lucide-react";

export const attainments = [
  {
    id: 1,
    title: "Internship",
    establishment: "Creotec Philippines Inc.",
    role: "Application Development Intern",
    duration: "March – May 2024",
    description:
      "Assisted in developing a mobile application for a Drone Soccer Competition scoring system.",
    icon: BriefcaseBusiness,
  },  
  {
    id: 2,
    title: "Education",
    establishment: "Laguna State Polytechnic University",
    role: "BS in Computer Engineering",
    duration: "2020 – 2024",
    icon: GraduationCap,
  },
  {
    id: 3,
    role: "Associate Software Developer",
    establishment: "Thurston Software Solutions Inc.",
    duration: "March 2025 – February 2026",
    icon: BriefcaseBusiness,
  },  
  {
    id: 4,
    title: "Professional Experience",
    establishment: "Thurston Software Solutions Inc.",
    role: "Junior Software Developer",
    duration: "February 2026 – Present",
    promoted: true,
    description: [
      "Develop and maintain SQL queries and stored procedures.",
      "Perform database operations and maintenance using SQL Server Management Studio.",
      "Develop and maintain reports using SQL Server Reporting Services (SSRS).",
      "Assist with C# and Blazor application maintenance and minor enhancements.",
    ],
    icon: BriefcaseBusiness,
  },  
].reverse();

export const facts = [
  {
    label: "Currently",
    value: "Junior Software Developer at Thurston Software Solutions Inc.",
  },
  {
    label: "Focus",
    value: "Backend and full-stack development with .NET and SQL Server",
  },
  { label: "Education", value: "BS Computer Engineering, LSPU (2024)" },
  { label: "Certified", value: "Microsoft C#, Harvard CS50x, CS50 Web" },
  { label: "Open to", value: "Junior and full-stack developer roles" },
];