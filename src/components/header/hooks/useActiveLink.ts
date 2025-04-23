"use client";
import { navigationLinks } from "../constants";
import { usePathname } from "next/navigation";

export default function UseActiveLinkIndex(): number {
  const pathName = usePathname();
  const activeLinkIndex = navigationLinks.findIndex(
    (link) => link.path === pathName
  );
  return activeLinkIndex;
}
