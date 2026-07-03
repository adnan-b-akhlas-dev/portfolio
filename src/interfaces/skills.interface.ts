import { MonitorDotIcon } from "@hugeicons/core-free-icons";

export interface ISkill {
  id: string;
  title: string;
  icon: typeof MonitorDotIcon;
  color: "primary" | "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";
  skills: string[];
}
