import { FooterCategoriesTypes } from "../types";
import { FooterServicesTypes } from "../types";
import { FooterContactTypes } from "../types";

export const footerCategories: FooterCategoriesTypes = {
  blockTitle: "Categories",
  items: [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    { name: "career", path: "/career" },
    { name: "designs", path: "/designs" },
    { name: "contact", path: "/contact" },
  ],
};

export const footerServices: FooterServicesTypes = {
  blockTitle: "services",
  items: ["house sales", "land sales", "buildings", "architectural designs"],
};

export const footerContact: FooterContactTypes = {
  blockTitle: "Contact",
  items: [
    {
      detail: "3, idumota street, Lagos Island Nigeria",
      icon: "/footer/distance.svg",
    },
    {
      detail: "+2349035064848",
      icon: "/footer/call.svg",
    },
    {
      detail: "19homesempire@gmail.com",
      icon: "/footer/mail.svg",
    },
  ],
};
