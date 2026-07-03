import { ISkill } from "@/interfaces/skills.interface";
import {
  Brain02Icon,
  CloudServerIcon,
  Database01Icon,
  MonitorDotIcon,
  ServerStack01Icon,
  ToolsIcon,
} from "@hugeicons/core-free-icons";

export const skills: ISkill[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: MonitorDotIcon,
    color: "primary",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: ServerStack01Icon,
    color: "chart-4",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Python"],
  },
  {
    id: "database",
    title: "Database",
    icon: Database01Icon,
    color: "chart-2",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "MySQL", "Supabase"],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: CloudServerIcon,
    color: "chart-3",
    skills: ["Docker", "AWS", "GitHub Actions", "Vercel", "Nginx", "CI/CD"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: ToolsIcon,
    color: "chart-5",
    skills: ["Git", "VS Code", "Postman", "Figma", "Jest", "Webpack"],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: Brain02Icon,
    color: "chart-1",
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Critical Thinking",
      "Time Management",
      "Adaptability",
    ],
  },
];
