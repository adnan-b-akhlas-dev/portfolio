import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import SkillCard from "@/components/shared/SkillCard";
import { skills } from "@/constants/skills";

export default function SkillsPage() {
  return (
    <Section>
      <SectionTitle
        header="Skill Set"
        title="Tools & Technologies I Work With"
        summary="A full-stack toolkit spanning interface, server, data, and delivery — refined through real projects, not just tutorials."
      />
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </Section>
  );
}
