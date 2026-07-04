import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { IExperience } from "@/interfaces/experience.interface";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRightBigIcon,
  Briefcase01Icon,
  CalendarsIcon,
  Certificate01Icon,
  CodeIcon,
  MapPinCheckIcon,
} from "@hugeicons/core-free-icons";

interface IProps {
  experience: IExperience;
}

export default function ExperienceCard({ experience }: IProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Top-left gradient */}
      <div className="from-primary/20 absolute -top-32 -left-32 h-75 w-75 rounded-full bg-linear-to-br to-transparent blur-2xl sm:h-125 sm:w-125" />
      {/* Bottom-right gradient */}
      <div className="from-chart-4/20 absolute -right-32 -bottom-32 h-75 w-75 rounded-full bg-linear-to-tl to-transparent blur-2xl sm:h-125 sm:w-125" />
      <Card className="hover:shadow-primary/5 hover:border-primary border-2 bg-none! backdrop-blur-xl transition-all duration-300 hover:shadow-lg bg-transparent">
        <CardContent className="p-6 md:p-8">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold transition-all duration-300 md:text-2xl">
                {experience.role}
              </h3>
              <div className="flex flex-col gap-2">
                <div className="text-primary flex items-center gap-2">
                  <HugeiconsIcon icon={Briefcase01Icon} />
                  <span className="text-lg font-semibold">
                    {experience.company}
                  </span>
                </div>
                <div className="text-chart-5 flex items-center gap-2 text-sm">
                  <HugeiconsIcon icon={MapPinCheckIcon} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <Badge className="flex w-fit items-center gap-1">
              <HugeiconsIcon icon={CalendarsIcon} />
              {format(experience.startDate, "MMM yyyy")} -{" "}
              {experience?.endDate
                ? format(experience?.endDate, "MMM yyyy")
                : "Present"}
            </Badge>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed transition-all duration-300">
            {experience.description}
          </p>

          <div className="mb-4">
            <div className="mb-3 flex items-center gap-2">
              <HugeiconsIcon icon={Certificate01Icon} />
              <span className="text-lg font-semibold">Key Achievements</span>
            </div>
            <ul className="space-y-3">
              {experience.achievement.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground hover:text-foreground flex items-start gap-2 align-top text-sm transition-all duration-300"
                >
                  <span>
                    <HugeiconsIcon icon={ArrowRightBigIcon} />
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <HugeiconsIcon icon={CodeIcon} />
              <span className="text-lg font-semibold">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-muted-foreground hover:text-foreground hover:border-primary/40 border border-transparent font-medium transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
