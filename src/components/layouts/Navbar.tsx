"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/constants/navlinks";
import { cn } from "@/lib/utils";
import {
  Cancel01Icon,
  DashboardSquare02Icon,
  Menu04Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoIcon from "@/components/icons/LogoIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [admin, _setAdmin] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground fixed top-6 right-6 z-50 shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <HugeiconsIcon icon={Cancel01Icon} />
        ) : (
          <HugeiconsIcon icon={Menu04Icon} />
        )}
      </Button>

      <TooltipProvider delayDuration={100}>
        <nav
          className={`fixed top-1/2 left-6 z-40 -translate-y-1/2 transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"
          } `}
        >
          <div className="bg-background/80 border-border flex rounded-xl flex-col gap-3 border p-3 shadow-2xl backdrop-blur-md transition-all duration-300">
            {navLinks.map((item, index) => {
              const Icon = item.icon as IconSvgElement;
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      className={cn(
                        "h-12 w-12 transition-colors duration-300 rounded-lg hover:bg-primary hover:text-primary-foreground",
                        {
                          "bg-primary text-primary-foreground":
                            item.href === pathname,
                        },
                      )}
                      onClick={() => setIsOpen(false)}
                      variant="secondary"
                      aria-label={item.label}
                    >
                      <Link href={item.href}>
                        {item.label === "Home" ? (
                          <LogoIcon />
                        ) : (
                          <HugeiconsIcon icon={Icon} />
                        )}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={18}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}

            {admin && (
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
                      <HugeiconsIcon icon={DashboardSquare02Icon} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={18}>
                  Dashboard
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </nav>
      </TooltipProvider>

      {isOpen && (
        <div
          className="bg-background/80 fixed inset-0 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
