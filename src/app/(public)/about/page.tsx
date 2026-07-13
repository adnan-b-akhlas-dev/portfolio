import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/constants/stats";
import { appUrl, user } from "@/constants/user";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about my technical background, software engineering journey, and the core philosophies driving my development process.",
  openGraph: {
    title: "About Adnan Bin Akhlas | Full-Stack Web Developer",
    description:
      "Discover my software engineering history, architecture principles, and technical capabilities.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: user.name,
      jobTitle: user.designation,
      url: appUrl,
      image: `${appUrl}${user.image}`,
      description: user.description,
      knowsAbout: [
        "Full-Stack Web Development",
        "Frontend Engineering",
        "Backend Systems Architecture",
        "Next.js Framework",
        "MERN Stack",
        "TypeScript",
        "Node.js & Express",
        "Linux Systems",
        "Test-Driven Development (TDD)",
      ],
    },
  };

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionTitle
        header="About Me"
        title="Crafting Scalable Web Experiences"
        summary="I build modular, maintainable systems that blend elegant design with powerful, developer-first engineering principles."
        headingTag="h1"
      />

      <article className="grid items-start gap-8 lg:grid-cols-2">
        <div className="flex justify-between lg:justify-end">
          <div className="group relative grow">
            <Card className="overflow-hidden p-0 lg:w-md 2xl:w-xl border-2 border-primary!">
              <CardContent className="aspect-square overflow-hidden p-0 relative">
                <Image
                  src={user.image}
                  alt={`${user.name} | ${user.designation}`}
                  placeholder="blur"
                  loading="eager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                  className="rounded-lg object-cover object-[25%_100%]"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-foreground mb-2 text-3xl font-bold tracking-tight">
              {user.name}
            </h2>
            <p className="text-muted-foreground mb-4 font-medium">{user.bio}</p>
            <p className="text-foreground text-lg leading-relaxed whitespace-pre-line">
              {user.story}
            </p>
          </div>
        </div>
      </article>

      <section className="col-span-2 mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, count, icon }) => (
          <div key={label} className="relative overflow-hidden rounded-xl">
            <div className="from-primary/20 absolute top-16 -left-32 size-100 rounded-full bg-linear-to-br to-transparent blur-2xl" />
            <Card className="group border-border hover:border-primary relative border-2 bg-transparent p-6 text-center shadow-sm backdrop-blur-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/5 absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-3 flex justify-center" aria-hidden="true">
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex size-14 items-center justify-center rounded-2xl transition-all duration-300">
                    <HugeiconsIcon icon={icon} />
                  </div>
                </div>

                <div className="text-foreground text-4xl font-semibold tracking-tight">
                  {count ?? 0}
                </div>

                <div className="text-muted-foreground mt-1 text-sm font-medium tracking-wide uppercase">
                  {label}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
    </Section>
  );
}
