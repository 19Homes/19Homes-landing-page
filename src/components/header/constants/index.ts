import { navigationLink } from "../types";

export const navigationLinks: navigationLink[] = [
  { text: "home", path: "/", hasChild: false },
  { text: "about us", path: "/about", hasChild: false },
  { text: "career", path: "/career", hasChild: true },
  { text: "designs", path: "/designs", hasChild: false },
  { text: "contact", path: "/contact", hasChild: false },
];
