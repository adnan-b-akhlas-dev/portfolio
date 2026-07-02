import LogoIcon from "@/components/icons/LogoIcon";
import {
  BooksIcon,
  BracketsCurlyIcon,
  BriefcaseIcon,
  FoldersIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: LogoIcon,
  },
  {
    label: "About",
    href: "/about",
    icon: UserCircleIcon,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FoldersIcon,
  },
  {
    label: "Experiences",
    href: "/experiences",
    icon: BriefcaseIcon,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: BracketsCurlyIcon,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: BooksIcon,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  },
];
