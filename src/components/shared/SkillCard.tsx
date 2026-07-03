import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ISkill } from "@/interfaces/skills.interface";
import { HugeiconsIcon } from "@hugeicons/react";

interface IProps {
  skill: ISkill;
}

// Tailwind's JIT scanner needs literal class strings, so color variants
// are mapped here rather than interpolated (e.g. `from-${color}/25`).
const ORB_CLASSES: Record<ISkill["color"], string> = {
  primary: "from-primary/25",
  "chart-2": "from-chart-2/25",
  "chart-3": "from-chart-3/25",
  "chart-4": "from-chart-4/25",
  "chart-5": "from-chart-5/25",
};

const ICON_BOX_CLASSES: Record<ISkill["color"], string> = {
  primary: "bg-primary/10 border-primary/20 text-primary",
  "chart-2": "bg-chart-2/10 border-chart-2/20 text-chart-2",
  "chart-3": "bg-chart-3/10 border-chart-3/20 text-chart-3",
  "chart-4": "bg-chart-4/10 border-chart-4/20 text-chart-4",
  "chart-5": "bg-chart-5/10 border-chart-5/20 text-chart-5",
};

export default function SkillCard({ skill }: IProps) {
  const { title, icon, color, skills } = skill;

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Top-left gradient */}
      <div
        className={`${ORB_CLASSES[color]} absolute top-16 -left-32 h-100 w-100 rounded-full bg-linear-to-br to-transparent blur-2xl`}
      />
      {/* Bottom-right gradient */}
      <div className="from-chart-4/25 absolute -right-32 -bottom-32 h-100 w-85 rounded-full bg-linear-to-tl to-transparent blur-2xl" />

      <Card className="group border-border hover:border-primary h-full gap-4 overflow-hidden rounded-xl border-2 shadow-sm backdrop-blur-xl transition-all hover:shadow-md bg-transparent">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div
              className={`${ICON_BOX_CLASSES[color]} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform group-hover:scale-105`}
            >
              <HugeiconsIcon icon={icon} size={24} />
            </div>
            <CardTitle className="text-foreground text-lg font-semibold">
              {title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-muted-foreground hover:text-foreground hover:border-primary/40 border border-transparent font-medium transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
