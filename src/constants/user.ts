import env from "@/config/env";

export const user = {
  name: "Adnan Bin Akhlas",
  email: "adnan.b.akhlas.io@gmail.com",
  image: "/profile.jpeg",
  designation: "Full-Stack Web Developer & Software Engineer",
  bio: "Full-Stack Developer | Next.js & Node.js Engineer | Linux & Open Source Enthusiast",
  description:
    "I am a Full-Stack Web Developer specializing in building high-performance web applications, scalable backend architectures, and responsive user interfaces using the MERN stack, Next.js, and TypeScript.",
  story:
    "My software engineering journey began with a passion for systems, troubleshooting Linux environments, and understanding how applications run under the hood. Today, I architect end-to-end web applications—combining optimized React/Next.js frontends with robust Node.js/Express backend APIs and efficient database management. Driven by Test-Driven Development (TDD) principles and clean code standards, I focus on building secure, scalable, and highly available digital solutions.",
  resume:
    "https://drive.google.com/file/d/1Y_q7tCTTvB4l7CFpzdSkC--65YbpXrO2/view",
};

export const appUrl =
  env.node_env === "production"
    ? `https://${env.vercel_url}`
    : `http://${env.next_public_app_url}`;
