import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/interfaces/projects.interfaces";
import {
  GlobeIcon,
  MonitorIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  project: IProject;
}

export default async function ProjectCard({ project }: IProps) {
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
    <div className="relative overflow-hidden rounded-xl">
      {/* Top-left gradient */}
      <div className="from-primary/20 absolute top-16 -left-32 h-100 w-100 rounded-full bg-linear-to-br to-transparent blur-2xl" />
      {/* Bottom-right gradient */}
      <div className="from-chart-4/20 absolute -right-32 -bottom-32 h-100 w-85 rounded-full bg-linear-to-tl to-transparent blur-2xl" />
      <Card className="group border-border hover:border-primary h-full gap-4 overflow-hidden rounded-xl border-2 bg-transparent! pt-0 shadow-sm backdrop-blur-xl transition-all hover:shadow-md">
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 z-20">{category}</Badge>
        </div>

        {/* Title */}
        <CardHeader>
          <CardTitle className="text-foreground line-clamp-1 text-lg font-semibold">
            {title}
          </CardTitle>
        </CardHeader>

        {/* Description */}
        <CardContent className="grow">
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </CardContent>

        {/* Links */}
        <CardFooter className="flex-col gap-6">
          <div className="mt-2 flex w-full items-center justify-around gap-4">
            {liveLink && (
              <Button
                className="hover:border-primary text-primary hover:text-primary h-fit gap-1 border-b border-transparent p-0! pb-0.5! hover:bg-transparent!"
                asChild
                variant={"ghost"}
              >
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <GlobeIcon className="h-5! w-5!" /> Live
                </a>
              </Button>
            )}
            {clientRepoLink && (
              <Button
                className="hover:border-primary text-primary hover:text-primary h-fit gap-1 border-b border-transparent p-0! pb-0.5! hover:bg-transparent!"
                asChild
                variant={"ghost"}
              >
                <a
                  href={clientRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MonitorIcon className="h-5! w-5!" /> Client
                </a>
              </Button>
            )}
            {serverRepoLink && (
              <Button
                className="hover:border-primary text-primary hover:text-primary h-fit gap-1 border-b border-transparent p-0! pb-0.5! hover:bg-transparent!"
                asChild
                variant={"ghost"}
              >
                <a
                  href={serverRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TerminalWindowIcon className="h-5! w-5!" /> Server
                </a>
              </Button>
            )}
          </div>
          <Button asChild className="w-full">
            <Link href={`/projects/${slug}`}>View Case Study</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
