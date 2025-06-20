"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import menuClosed from "../../../../../public/menu.svg";
import menuOpen from "../../../../../public/close_small.svg";
import { navigationLinks } from "../../constants";
import Link from "next/link";
import { cn } from "@/utils/classnames";
import { getAuthUser } from "@/lib/getAuthUser";
import { JWTPayload } from "jose";
import { logout } from "@/actions/auth";
export default function MenuButton() {
  const [isMenuOpen, setMenuOpenState] = useState(false);
  const [hasEntranceAnimationRun, setEntranceAnimationRun] = useState(false);
  const handleMenuClick = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setMenuOpenState(false);
      }, 500);
    } else {
      setMenuOpenState(true);
    }
    setEntranceAnimationRun((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        className="cursor-pointer lg:hidden"
        aria-label="menu button"
        onClick={handleMenuClick}
        aria-expanded={isMenuOpen}
      >
        {hasEntranceAnimationRun ? (
          <>
            <Image src={menuOpen} alt="menu button" height={24} width={24} />
          </>
        ) : (
          <Image src={menuClosed} alt="menu button" height={24} width={24} />
        )}
      </button>
      {isMenuOpen && (
        <MenuBar
          animationState={hasEntranceAnimationRun}
          onClick={handleMenuClick}
        />
      )}
    </div>
  );
}

const MenuBar = ({
  animationState,
  onClick,
}: {
  animationState: boolean;
  onClick: () => void;
}) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<JWTPayload | null>(
    null,
  );
  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await getAuthUser();
      setAuthenticatedUser(authUser);
    };
    fetchUser();
  }, []);
  return (
    <div
      className={cn(
        `shadow-card absolute top-7.5 right-0 z-30 flex w-[min(70vw,395px)] flex-col items-start gap-7.5 bg-white p-6 pb-20`,
        animationState ? "animate-menu-appear" : "animate-menu-disappear",
      )}
    >
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="text-black-100 font-montserrat w-full text-left text-[16px] font-medium uppercase"
          onClick={onClick}
        >
          {link.text}
        </Link>
      ))}
      <div className="flex flex-col gap-7.5">
        {authenticatedUser ? (
          <form action={logout}>
            <Link
              href="/"
              className="text-black-100 font-montserrat w-full text-left text-[16px] font-medium uppercase"
              onClick={onClick}
            >
              Logout
            </Link>
          </form>
        ) : (
          <>
            <Link
              href="/login"
              className="text-black-100 font-montserrat w-full text-left text-[16px] font-medium uppercase"
              onClick={onClick}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-black-100 font-montserrat w-full text-left text-[16px] font-medium uppercase"
              onClick={onClick}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
