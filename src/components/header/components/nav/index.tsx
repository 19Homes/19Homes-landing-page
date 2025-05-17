"use client";

import Link from "next/link";
import { navigationLinks } from "../../constants";
import { useContext } from "react";
import { cn } from "@/utils/classnames";
import { ChevronDown } from "lucide-react";
import { activeLinkContext } from "@/contexts/activeLinkContext";
export default function Navigation() {
  const { setActiveLinkIndex, activeLinkIndex } = useContext(activeLinkContext);
  const handleLinkClick = (index: number) => {
    setActiveLinkIndex(index);
  };
  return (
    <nav className="hidden lg:flex h-fit gap-12">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "font-montserrat group p-2 text-sm font-medium capitalize duration-300",
            index === activeLinkIndex ? "text-gold-100" : "text-black-100",
            link.hasChild ? "hover:bg-gold-25" : "hover:text-gold-75",
          )}
          onClick={() => {
            handleLinkClick(index);
          }}
        >
          {link.hasChild ? (
            <div className="relative flex h-[74px] flex-col items-center gap-2 duration-300 group-hover:w-[161px]">
              <span className="flex items-center gap-2">
                <span>{link.text}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "duration-300 group-hover:rotate-180",
                    index === activeLinkIndex
                      ? "text-gold-100"
                      : "text-[#1C1B1F]",
                  )}
                />
              </span>
              <button className="font-montserrat absolute bottom-0 left-2 hidden cursor-pointer bg-white p-2 text-sm font-medium text-black group-hover:block">
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
