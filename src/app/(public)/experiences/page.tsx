import ExperienceCard from "@/components/shared/ExperienceCard";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/constants/experiences";
import { user } from "@/constants/user";
import {
  BriefcaseIcon,
  FileTextIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <Section>
      <SectionTitle
        header="Career Highlights"
        title="Roles, Projects & Achievements"
        summary="Showcasing impactful work, technical growth, and real-world problem solving."
      />
      <div className="relative space-y-6">
        <div className="h-10 w-fit">
          <Button asChild size="lg" className="absolute right-0 w-50">
            <Link
              href={user.resume}
              target="_blank"
              className="flex items-center gap-2"
            >
              <FileTextIcon />
              View Resume
            </Link>
          </Button>
        </div>
        <section>
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
                      <BriefcaseIcon
                        className="text-primary"
                        size={40}
                        weight="light"
                      />
                      <SparkleIcon
                        className="text-primary/60 absolute -top-1 -right-1 animate-pulse"
                        size={16}
                        weight="fill"
                      />
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
        </section>
      </div>
    </Section>
  );
}
