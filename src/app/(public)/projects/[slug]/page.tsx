import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { dummyProject } from "@/constants/projects";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DateTimeIcon,
  GithubIcon,
  LayerIcon,
  Link01Icon,
  User02Icon,
} from "@hugeicons/core-free-icons";

export default function ProjectStudyCasePage() {
  return (
    <Section>
      <SectionTitle
        header="Project Case Study"
        title={dummyProject?.title}
        summary={dummyProject?.description}
      />
      <div className="space-y-6 lg:col-span-2">
        {/* Meta info + external links */}
        <Card className="p-6">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 p-0">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {dummyProject?.client && (
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={User02Icon} className="size-4!" />
                  <span>{dummyProject.client}</span>
                </div>
              )}
              {dummyProject?.duration && (
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={DateTimeIcon} className="size-4!" />
                  <span>{dummyProject.duration}</span>
                </div>
              )}
              {dummyProject?.category && (
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={LayerIcon} className="size-4!" />
                  <span>{dummyProject.category}</span>
                </div>
              )}
            </div>

            {(dummyProject?.liveUrl || dummyProject?.githubUrl) && (
              <div className="flex gap-3">
                {dummyProject?.liveUrl && (
                  <Button asChild size="sm">
                    <Link
                      href={dummyProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon
                        icon={Link01Icon}
                        className="mr-2 size-4!"
                      />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {dummyProject?.githubUrl && (
                  <Button asChild size="sm" variant="outline">
                    <Link
                      href={dummyProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon
                        icon={GithubIcon}
                        className="mr-2 size-4!"
                      />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tech stack */}
        {dummyProject?.technologies && dummyProject.technologies.length > 0 && (
          <Card className="p-6">
            <CardContent className="flex flex-wrap gap-2 p-0">
              {dummyProject.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Thumbnail */}
        <Card className="w-full p-0">
          <CardContent className="w-full p-6">
            <div className="relative aspect-video w-full">
              <Image
                src={dummyProject?.thumbnail || ""}
                alt={dummyProject?.title || ""}
                fill
                className="rounded-xl object-cover object-center"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
              />
            </div>
          </CardContent>
        </Card>

        {/* Main write-up */}
        {dummyProject?.content && (
          <Card className="p-6">
            <CardContent className="space-y-2 p-0">
              <h3 className="text-lg font-semibold">Overview</h3>
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: dummyProject.content }}
              />
            </CardContent>
          </Card>
        )}

        {/* Challenge / Solution */}
        {(dummyProject?.challenge || dummyProject?.solution) && (
          <div className="grid gap-6 sm:grid-cols-2">
            {dummyProject?.challenge && (
              <Card className="p-6">
                <CardContent className="space-y-2 p-0">
                  <h3 className="text-lg font-semibold">The Challenge</h3>
                  <p className="text-sm text-muted-foreground">
                    {dummyProject.challenge}
                  </p>
                </CardContent>
              </Card>
            )}
            {dummyProject?.solution && (
              <Card className="p-6">
                <CardContent className="space-y-2 p-0">
                  <h3 className="text-lg font-semibold">The Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    {dummyProject.solution}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Results */}
        {dummyProject?.results && dummyProject.results.length > 0 && (
          <Card className="p-6">
            <CardContent className="space-y-3 p-0">
              <h3 className="text-lg font-semibold">Results</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {dummyProject.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Gallery */}
        {dummyProject?.images && dummyProject.images.length > 0 && (
          <Card className="p-6">
            <CardContent className="grid grid-cols-1 gap-4 p-0 sm:grid-cols-2">
              {dummyProject.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video w-full overflow-hidden rounded-xl"
                >
                  <Image
                    src={img}
                    alt={`${dummyProject?.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </Section>
  );
}
