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
    <nav className="flex h-fit gap-12">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "font-montserrat group p-2 text-sm font-medium capitalize duration-300",
            index === isActive ? "text-gold-100" : "text-black-100",
            link.hasChild ? "hover:bg-gold-25" : "hover:text-gold-75",
          )}
          onClick={() => {
            handleLinkClick(index);
          }}
        >
          {link.hasChild ? (
            <div className="flex flex-col items-center gap-2 h-[74px] group-hover:w-[161px] relative duration-300">
              <span className="flex items-center gap-2">
                <span>{link.text}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "duration-300 group-hover:rotate-180",
                    index === isActive ? "text-gold-100" : "text-[#1C1B1F]",
                  )}
                />
              </span>
              <button className="font-montserrat hidden bg-white p-2 text-sm font-medium text-black group-hover:block cursor-pointer absolute bottom-0 left-2">
                Become an Agent
              </button>
            </div>
          ) : (
            link.text
          )}
        </Link>
      ))}
    </nav>
  );
}
