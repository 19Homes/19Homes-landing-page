import { navigationLink } from "../types";

export const navigationLinks: navigationLink[] = [
  { text: "home", path: "/home", hasChild: false },
  { text: "about us", path: "/about", hasChild: false },
  { text: "career", path: "/career", hasChild: true },
  { text: "properties", path: "/properties", hasChild: false },
  { text: "contact", path: "/contact", hasChild: false },
];
