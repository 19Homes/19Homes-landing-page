"use client";
import Image from "next/image";
import { useState } from "react";
import menuClosed from "../../../../../public/menu.svg";
import menuOpen from "../../../../../public/close_small.svg";
import { navigationLinks } from "../../constants";
import Link from "next/link";
export default function MenuButton() {
  const [isMenuOpen, setMenuOpenState] = useState(false);
  return (
    <div className="relative">
      <button
        className="cursor-pointer lg:hidden"
        aria-label="menu button"
        onClick={() => {
          setMenuOpenState((prev) => !prev);
        }}
      >
        {isMenuOpen ? (
          <>
            <Image src={menuOpen} alt="menu button" height={24} width={24} />
          </>
        ) : (
          <Image src={menuClosed} alt="menu button" height={24} width={24} />
        )}
      </button>
      {isMenuOpen && <MenuBar />}
    </div>
  );
}

const MenuBar = () => {
  return (
    <div className="shadow-card absolute top-7.5 right-0 z-30 flex w-[min(70vw,395px)] flex-col items-start gap-7.5 bg-white p-6 pb-20 animate-menu-appear">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="text-black-100 font-montserrat w-full text-left text-[16px] font-medium uppercase"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
