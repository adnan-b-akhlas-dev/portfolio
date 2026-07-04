import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import {
  ArrowLeft01Icon,
  Rocket02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import NavigateButton from "@/components/buttons/NavigateButton";

interface IProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Page Under Development",
  description = "This page is currently being built. Check back soon — something exciting is on the way.",
}: IProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <Card className="border-border/50 bg-background/60 relative w-full max-w-xl overflow-hidden rounded-2xl border backdrop-blur-xl">
        <CardContent className="flex flex-col items-center px-8 py-14 text-center">
          <Badge
            variant="secondary"
            className="mb-8 gap-1.5 rounded-full px-3 py-1 font-medium"
          >
            <HugeiconsIcon icon={SparklesIcon} size={14} />
            In Progress
          </Badge>

          {/* Icon */}
          <div className="relative mb-8">
            <div className="bg-primary/30 absolute inset-0 rounded-full blur-3xl" />

            <div className="border-primary/15 from-primary/15 to-primary/5 relative flex h-24 w-24 animate-pulse items-center justify-center rounded-3xl border bg-linear-to-br">
              <HugeiconsIcon
                icon={Rocket02Icon}
                size={42}
                className="text-primary"
              />
            </div>
          </div>

          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
            {description}
          </p>

          <NavigateButton
            navigation="/"
            size="lg"
            variant="secondary"
            className="mt-10 gap-2 cursor-pointer px-8 py-6"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
            Back to Home
          </NavigateButton>
        </CardContent>
      </Card>
    </section>
  );
}
