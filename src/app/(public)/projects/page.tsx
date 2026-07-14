import ProjectCard from "@/components/cards/ProjectCard";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ViewResume from "@/components/buttons/ViewResumeButton";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { appUrl, user } from "@/constants/user";
import { CodeFolderIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Open Source Contributions",
  description:
    "Explore a showcase of production-ready web applications, open-source utilities, scalable APIs, and full-stack development implementations.",
  openGraph: {
    title: `Software Engineering Projects Portfolio | ${user.name}`,
    description:
      "Deep dive into production builds, backend architectures, and frontend applications featuring Next.js, Go, and the MERN stack.",
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software Engineering Project Portfolio",
    description:
      "Showcase of web applications, custom developer tools, and architecture paradigms.",
    url: `${appUrl}/projects`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${appUrl}/projects/${project.slug}`,
        name: project.title,
        description: project.description,
      })),
    },
  };

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionTitle
        header="Project Spotlight"
        title="Modular Configs for Scalable Dev"
        summary="Streamlined setup, reusable scripts, instant onboarding, and maintainable architecture patterns."
        headingTag="h1"
      />

      <section className="relative space-y-6">
        <div className="h-10 w-fit">
          <ViewResume />
        </div>

        <div>
          {projects.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 list-none p-0 m-0">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <Card className="py-16 overflow-hidden ring-2 ring-primary">
              <CardContent>
                <div className="text-center relative">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <div
                      className="relative bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-2xl p-5 mx-auto w-fit"
                      aria-hidden="true"
                    >
                      <HugeiconsIcon icon={CodeFolderIcon} />
                      <HugeiconsIcon icon={SparklesIcon} />
                    </div>
                  </div>
                  <h2 className="text-foreground mt-6 text-2xl font-semibold tracking-tight">
                    Projects coming soon
                  </h2>
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
