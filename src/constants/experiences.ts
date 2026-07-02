import { IExperience } from "@/interfaces/experience.interface";

export const experiences: IExperience[] = [
  {
    slug: "full-stack-developer-technova",
    role: "Full Stack Developer",
    company: "TechNova Solutions",
    location: "Dhaka, Bangladesh",
    startDate: "2024-06-01T00:00:00.000Z",
    endDate: null,
    description:
      "Building and maintaining full stack web applications for clients, working across the entire stack from database design to responsive UI implementation.",
    achievement: [
      "Rebuilt the company's core dashboard using Next.js, reducing page load time by 40%",
      "Designed and implemented RESTful APIs consumed by 3 internal products",
      "Introduced CI/CD pipelines that cut deployment time from 30 minutes to under 5",
      "Mentored 2 junior developers on React best practices and Git workflows",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    createdAt: "2024-06-05T09:00:00.000Z",
    updatedAt: "2025-03-10T11:20:00.000Z",
  },
  {
    slug: "software-engineer-intern-codebridge",
    role: "Software Engineer Intern",
    company: "CodeBridge Labs",
    location: "Remote",
    startDate: "2023-12-01T00:00:00.000Z",
    endDate: "2024-05-30T00:00:00.000Z",
    description:
      "Worked on the front-end team building reusable UI components and fixing bugs in a large-scale React codebase, while collaborating closely with backend engineers on API integration.",
    achievement: [
      "Shipped 15+ UI components adopted across 4 different product teams",
      "Reduced bundle size by 18% through code splitting and lazy loading",
      "Fixed 30+ reported bugs during the internship, improving app stability",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    createdAt: "2023-12-03T08:30:00.000Z",
    updatedAt: "2024-06-01T10:00:00.000Z",
  },
  {
    slug: "freelance-web-developer",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    startDate: "2022-08-01T00:00:00.000Z",
    endDate: "2023-11-30T00:00:00.000Z",
    description:
      "Delivered custom websites and small web applications for local businesses and individual clients, handling everything from requirements gathering to deployment.",
    achievement: [
      "Delivered 10+ client projects ranging from portfolio sites to small e-commerce stores",
      "Maintained a 100% client satisfaction rate across all completed projects",
      "Set up hosting, domains, and basic SEO for every client site delivered",
    ],
    tags: ["JavaScript", "React", "Express", "MongoDB", "WordPress"],
    createdAt: "2022-08-05T07:45:00.000Z",
    updatedAt: "2023-12-01T09:15:00.000Z",
  },
  {
    slug: "linux-systems-volunteer",
    role: "Linux Systems Volunteer",
    company: "Open Source Community Group",
    location: "Dhaka, Bangladesh",
    startDate: "2022-01-15T00:00:00.000Z",
    endDate: "2022-07-31T00:00:00.000Z",
    description:
      "Assisted community members with Linux system setup, troubleshooting, and self-hosting projects while contributing to local open-source meetups.",
    achievement: [
      "Helped 20+ community members migrate to Linux-based systems",
      "Wrote setup guides for self-hosting common developer tools",
      "Co-organized 3 local meetups on open-source tooling",
    ],
    tags: ["Linux", "Open Source", "Self-Hosting", "Community"],
    createdAt: "2022-01-20T06:00:00.000Z",
    updatedAt: "2022-08-01T08:00:00.000Z",
  },
];
