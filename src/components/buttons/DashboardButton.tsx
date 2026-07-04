import { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardSquare02Icon } from "@hugeicons/core-free-icons";

interface DashboardButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DashboardButton({ setIsOpen }: DashboardButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="h-12 w-12 transition-colors duration-300 rounded-lg hover:bg-primary hover:text-primary-foreground"
          onClick={() => setIsOpen(false)}
          variant="secondary"
          aria-label="Dashboard"
        >
          <Link href="/admin">
            <HugeiconsIcon className="size-6!" icon={DashboardSquare02Icon} />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={18}>
        Dashboard
      </TooltipContent>
    </Tooltip>
  );
}
