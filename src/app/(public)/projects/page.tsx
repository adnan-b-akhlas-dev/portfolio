import ProjectCard from "@/components/shared/ProjectCard";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ViewResume from "@/components/shared/ViewResumeButton";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { CodeFolderIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProjectsPage() {
  return (
    <Section>
      <SectionTitle
        header="Project Spotlight"
        title="Modular Configs for Scalable Dev"
        summary="Streamlined setup, reusable scripts, instant onboarding, and maintainable architecture patterns."
      />
      <section className="relative space-y-6">
        <div className="h-10 w-fit">
          <ViewResume />
        </div>
        <div>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <Card className="py-16 overflow-hidden ring-2 ring-primary">
              <CardContent>
                <div className="text-center relative">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <div className="relative bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-2xl p-5 mx-auto w-fit">
                      <HugeiconsIcon icon={CodeFolderIcon} />
                      <HugeiconsIcon icon={SparklesIcon} />
                    </div>
                  </div>
                  <p className="text-foreground mt-6 text-2xl font-semibold tracking-tight">
                    Projects coming soon
                  </p>
                  <p className="text-muted-foreground mt-2 text-lg max-w-sm mx-auto">
                    Something&apos;s in the works. Check back for modular
                    builds, scalable APIs, and polished UIs.
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
