import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IProject } from "@/interfaces/projects.interfaces";
import {
  Globe02Icon,
  MonitorDotIcon,
  ServerStack01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProps) {
  const {
    slug,
    title,
    description,
    category,
    thumbnail,
    liveLink,
    clientRepoLink,
    serverRepoLink,
  } = project;

  return (
    <article className="relative overflow-hidden rounded-xl h-full">
      <div
        aria-hidden="true"
        className="from-primary/25 absolute top-16 -left-32 size-100 rounded-full bg-linear-to-br to-transparent blur-2xl"
      />
      <div
        aria-hidden="true"
        className="from-chart-4/25 absolute -right-32 -bottom-32 h-100 w-85 rounded-full bg-linear-to-tl to-transparent blur-2xl"
      />

      <Card className="group border-border hover:border-primary h-full flex flex-col overflow-hidden rounded-xl border-2 pt-0 shadow-sm backdrop-blur-xl transition-all hover:shadow-md bg-transparent">
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={`${title} Project Preview Thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 z-20 font-medium">
            {category}
          </Badge>
        </div>

        <CardHeader>
          <h3 className="text-foreground line-clamp-1 text-lg font-semibold tracking-tight">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="grow">
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>

        <CardFooter className="flex-col gap-4 mt-auto">
          <div className="flex w-full items-center justify-between gap-2">
            {liveLink && (
              <Button
                className="border-b-transparent! hover:border-b-primary! border-b! text-primary hover:text-primary p-0! pb-0.5! h-fit rounded-none!"
                variant="ghost"
                asChild
              >
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} Live Production Website`}
                >
                  <HugeiconsIcon icon={Globe02Icon} aria-hidden="true" /> Live
                </a>
              </Button>
            )}

            {clientRepoLink && (
              <Button
                className="border-b-transparent! hover:border-b-primary! border-b! text-primary hover:text-primary p-0! pb-0.5! h-fit rounded-none!"
                variant="ghost"
                asChild
              >
                <a
                  href={clientRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} Frontend Source Code Repository`}
                >
                  <HugeiconsIcon icon={MonitorDotIcon} aria-hidden="true" />{" "}
                  Client
                </a>
              </Button>
            )}

            {serverRepoLink && (
              <Button
                className="border-b-transparent! hover:border-b-primary! border-b! text-primary hover:text-primary p-0! pb-0.5! h-fit rounded-none!"
                variant="ghost"
                asChild
              >
                <a
                  href={serverRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} Backend Server Source Code Repository`}
                >
                  <HugeiconsIcon icon={ServerStack01Icon} aria-hidden="true" />{" "}
                  Server
                </a>
              </Button>
            )}
          </div>

          <Button asChild className="w-full font-medium" variant="default">
            <Link
              href={`/projects/${slug}`}
              aria-label={`Read structural case study for ${title}`}
            >
              View Case Study
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
