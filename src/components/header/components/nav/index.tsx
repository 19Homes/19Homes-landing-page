"use client";

import Link from "next/link";
import { navigationLinks } from "../../constants";
import { useState } from "react";
import { cn } from "@/utils/classnames";

export default function Navigation() {
  const [isActive, setActiveState] = useState<number>(0);
  const handleLinkClick = (index: number) => {
    setActiveState(index);
  };
  return (
    <nav className="flex gap-14">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "font-montserrat font-medium text-sm capitalize hover:text-gold-75 duration-300",
            index === isActive ? "text-gold-100" : "text-black-100"
          )}
          onClick={() => {
            handleLinkClick(index);
          }}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
