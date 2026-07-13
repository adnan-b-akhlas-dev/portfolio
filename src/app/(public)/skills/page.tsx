import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/constants/skills";
import { appUrl, user } from "@/constants/user";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technical Stack",
  description:
    "Explore my full-stack web development capabilities including Next.js, Node.js, MERN stack, database management, backend system architecture, and DevOps tools.",
  openGraph: {
    title: `Technical Skills & Toolkit | ${user.name}`,
    description:
      "A deep dive into the engineering tools, database architectures, and development practices I use to ship production software.",
  },
};

export default function SkillsPage() {
  const accumulatedSkills = skills.flatMap((group) => group.skills);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Person",
      name: user.name,
      jobTitle: user.designation,
      url: appUrl,
      knowsAbout: accumulatedSkills,
    },
  };

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionTitle
        header="Skill Set"
        title="Tools & Technologies I Work With"
        summary="A full-stack toolkit spanning interface, server, data, and delivery — refined through real projects, not just tutorials."
        headingTag="h1"
      />

      <section className="mt-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </Section>
  );
}
