import { IProject, IProjectDemo } from "@/interfaces/projects.interfaces";

export const projects: IProject[] = [
  {
    slug: "taskflow-project-management",
    title: "TaskFlow — Project Management App",
    description:
      "A collaborative project management tool with real-time task boards, team workspaces, and deadline tracking.",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    thumbnail: "https://picsum.photos/seed/taskflow/800/500",
    content: null,
    liveLink: "https://taskflow-demo.vercel.app",
    clientRepoLink: "https://github.com/yourname/taskflow-client",
    serverRepoLink: "https://github.com/yourname/taskflow-server",
    createdAt: "2024-11-02T10:00:00.000Z",
    updatedAt: "2025-01-15T14:30:00.000Z",
  },
  {
    slug: "shopnest-ecommerce-platform",
    title: "ShopNest — E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart, Stripe checkout, and an admin dashboard for inventory management.",
    category: "E-commerce",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    thumbnail: "https://picsum.photos/seed/shopnest/800/500",
    content: null,
    liveLink: "https://shopnest-demo.vercel.app",
    clientRepoLink: "https://github.com/yourname/shopnest-client",
    serverRepoLink: "https://github.com/yourname/shopnest-server",
    createdAt: "2024-08-20T09:15:00.000Z",
    updatedAt: "2024-12-05T11:00:00.000Z",
  },
  {
    slug: "pulseboard-analytics-dashboard",
    title: "PulseBoard — Analytics Dashboard",
    description:
      "A data visualization dashboard that aggregates API metrics and displays them through interactive charts and reports.",
    category: "Dashboard",
    tags: ["React", "TypeScript", "Recharts", "Express", "Redis"],
    thumbnail: "https://picsum.photos/seed/pulseboard/800/500",
    content: null,
    liveLink: "https://pulseboard-demo.vercel.app",
    clientRepoLink: "https://github.com/yourname/pulseboard-client",
    serverRepoLink: "https://github.com/yourname/pulseboard-server",
    createdAt: "2024-05-10T08:45:00.000Z",
    updatedAt: "2024-09-18T16:20:00.000Z",
  },
  {
    slug: "chatsphere-realtime-messaging",
    title: "ChatSphere — Real-time Messaging App",
    description:
      "A real-time chat application supporting group channels, direct messages, typing indicators, and file sharing.",
    category: "Web App",
    tags: ["Next.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
    thumbnail: "https://picsum.photos/seed/chatsphere/800/500",
    content: null,
    liveLink: "https://chatsphere-demo.vercel.app",
    clientRepoLink: "https://github.com/yourname/chatsphere-client",
    serverRepoLink: "https://github.com/yourname/chatsphere-server",
    createdAt: "2024-02-14T12:00:00.000Z",
    updatedAt: "2024-07-01T09:30:00.000Z",
  },
  {
    slug: "devlog-blogging-platform",
    title: "DevLog — Developer Blogging Platform",
    description:
      "A markdown-based blogging platform for developers with syntax highlighting, tag filtering, and SEO optimization.",
    category: "CMS",
    tags: ["Next.js", "MDX", "TypeScript", "PostgreSQL", "Prisma"],
    thumbnail: "https://picsum.photos/seed/devlog/800/500",
    content: null,
    liveLink: "https://devlog-demo.vercel.app",
    clientRepoLink: "https://github.com/yourname/devlog-client",
    serverRepoLink: "https://github.com/yourname/devlog-server",
    createdAt: "2023-11-30T07:20:00.000Z",
    updatedAt: "2024-03-22T13:10:00.000Z",
  },
];

export const dummyProject: IProjectDemo = {
  id: "1",
  title: "Fintech Dashboard Redesign",
  description:
    "A complete overhaul of a legacy financial dashboard, focused on clarity, speed, and trust.",
  thumbnail: "https://picsum.photos/id/180/1200/675",
  content: `
    <p>Northbridge Capital came to us with a dashboard that analysts had learned to
    tolerate rather than enjoy. It worked, but every workflow took more clicks and
    more squinting than it should have.</p>
    <p>Our job was to rebuild the experience around how analysts actually think:
    fast comparisons, clear hierarchies, and numbers that are trustworthy at a
    glance. We rebuilt the front end from scratch while keeping the existing data
    pipeline intact, so the migration could happen without disrupting daily
    trading operations.</p>
    <p>The result is a dashboard the team now opens first thing every morning,
    instead of the one they used to dread.</p>
  `,
  client: "Northbridge Capital",
  role: "Lead Product Designer & Frontend Engineer",
  duration: "Jan 2026 – Apr 2026 (4 months)",
  category: "Fintech · Web App",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "PostgreSQL",
    "Prisma",
  ],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/fintech-dashboard",
  challenge:
    "The existing dashboard had grown organically over five years with no consistent design system. Analysts relied on tribal knowledge to find key reports, and loading a single portfolio view could take up to 8 seconds.",
  solution:
    "We ran a two-week discovery sprint shadowing analysts, then rebuilt the information architecture around three core workflows. A new component library and virtualized data tables cut load times dramatically while giving the product room to grow.",
  results: [
    "Reduced average task completion time by 42%",
    "Cut onboarding time for new analysts from 3 weeks to 4 days",
    "Increased daily active usage by 68% within the first quarter",
    "Zero critical bugs reported in the first 90 days post-launch",
  ],
  images: [
    "https://picsum.photos/id/1/1200/675",
    "https://picsum.photos/id/20/1200/675",
    "https://picsum.photos/id/48/1200/675",
    "https://picsum.photos/id/60/1200/675",
  ],
};
