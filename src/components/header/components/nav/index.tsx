"use client";

import Link from "next/link";
import { navigationLinks } from "../../constants";
import { useState } from "react";
import { cn } from "@/utils/classnames";
import UseActiveLinkIndex from "../../hooks/useActiveLink";
import { ChevronDown } from "lucide-react";
export default function Navigation() {
  const [isActive, setActiveState] = useState<number>(UseActiveLinkIndex());
  const handleLinkClick = (index: number) => {
    setActiveState(index);
  };
  return (
    <nav className="flex gap-14 h-fit">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "font-montserrat font-medium text-sm capitalize hover:text-gold-75 duration-300 group",
            index === isActive ? "text-gold-100" : "text-black-100"
          )}
          onClick={() => {
            handleLinkClick(index);
          }}
        >
          {link.hasChild ? (
            <span className="flex gap-2 items-center">
              <span>{link.text}</span>
              <ChevronDown
                size={16}
                className={cn(
                  "group-hover:rotate-180 duration-300 group-hover:text-gold-75",
                  index === isActive ? "text-gold-100" : "text-[#1C1B1F]"
                )}
              />
            </span>
          ) : (
            link.text
          )}
        </Link>
      ))}
    </nav>
  );
}
