"use client";

import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ModeToggle({ setIsOpen }: IProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsOpen(false);
  };

  useEffect(() => {
    if (theme === "light") {
      toast.info("Dark mode is recommended for a better viewing experience!");
    }
  }, [theme]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="size-12 transition-colors duration-300 rounded-lg hover:bg-primary hover:text-primary-foreground"
          onClick={toggleTheme}
          variant="secondary"
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? (
            <HugeiconsIcon icon={Moon02Icon} className="h-6! w-6!" />
          ) : (
            <HugeiconsIcon icon={Sun02Icon} className="h-6! w-6!" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={18}>
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </TooltipContent>
    </Tooltip>
  );
}
