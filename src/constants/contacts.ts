import {
  BubbleChatIcon,
  Call02Icon,
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
  MapPinCheckIcon,
  NewTwitterIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/adnanakhlasofficial",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adnanakhlas",
    icon: Linkedin02Icon,
  },

  {
    label: "WhatsApp",
    href: "https://wa.me/8801776345635",
    icon: WhatsappIcon,
  },
  {
    href: "https://twitter.com/example",
    label: "X",
    icon: NewTwitterIcon,
  },
];

export const contactLinks = [
  {
    icon: Mail01Icon,
    label: "Email",
    value: "adnan.b.akhlas.io@gmail.com",
    href: "mailto:adnan.b.akhlas@gmail.com",
  },
  {
    icon: Call02Icon,
    label: "Phone",
    value: "+880 1776-345635",
    href: "tel:+8801776345635",
  },
  {
    icon: MapPinCheckIcon,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com?q=Dhaka+Bangladesh",
  },
  {
    icon: BubbleChatIcon,
    label: "Live Chat",
    value: "Available on weekdays",
    href: "/chat",
  },
];
