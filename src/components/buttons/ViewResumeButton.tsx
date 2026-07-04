import Link from "next/link";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { File02Icon } from "@hugeicons/core-free-icons";
import { user } from "@/constants/user";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  size?:
    | "lg"
    | "default"
    | "xs"
    | "sm"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  variant?:
    | "default"
    | "link"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined;
}

export default function ViewResume({
  className,
  size = "lg",
  variant = "default",
}: IProps) {
  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn("absolute right-0 w-50", className)}
    >
      <Link
        href={user.resume}
        target="_blank"
        className="flex items-center gap-2"
      >
        <HugeiconsIcon icon={File02Icon} />
        View Resume
      </Link>
    </Button>
  );
}
