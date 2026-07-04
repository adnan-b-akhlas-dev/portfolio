import ExperienceCard from "@/components/shared/ExperienceCard";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ViewResume from "@/components/buttons/ViewResumeButton";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/constants/experiences";
import { Briefcase01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ExperiencesPage() {
  return (
    <Section>
      <SectionTitle
        header="Career Highlights"
        title="Roles, Projects & Achievements"
        summary="Showcasing impactful work, technical growth, and real-world problem solving."
      />
      <section className="relative space-y-6">
        <div className="h-10 w-fit">
          <ViewResume />
        </div>
        <div>
          {experiences.length > 0 ? (
            <>
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <ExperienceCard
                    key={experience.slug}
                    experience={experience}
                  />
                ))}
              </div>
            </>
          ) : (
            <Card className="py-16 overflow-hidden">
              <CardContent>
                <div className="text-center relative">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <div className="relative bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-2xl p-5 mx-auto w-fit">
                      <HugeiconsIcon icon={Briefcase01Icon} />
                      <HugeiconsIcon icon={SparklesIcon} />
                    </div>
                  </div>
                  <p className="text-foreground mt-6 text-2xl font-semibold tracking-tight">
                    No experiences listed
                  </p>
                  <p className="text-muted-foreground mt-2 text-lg max-w-sm mx-auto">
                    This section will highlight professional roles and key
                    contributions once added.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Section>
  );
}
