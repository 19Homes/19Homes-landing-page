"use client";

import { useRouter } from "next/router";
import { navigationLinks } from "../constants";

export default function UseActiveLinkIndex(): number {
  const router = useRouter();
  const pathName = router.pathname;
  const activeLinkIndex = navigationLinks.findIndex(
    (link) => link.path === pathName
  );
  return activeLinkIndex;
}
