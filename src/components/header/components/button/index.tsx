"use client";
import { headerButtonTypes } from "../../types";
import { cn } from "@/utils/classnames";
import { redirect } from "next/navigation";

export default function HeaderButton({
  classnames,
  text,
  path,
}: headerButtonTypes) {
  return (
    <button
      className={cn(
        classnames,
        "font-montserrat cursor-pointer rounded-sm p-4 text-sm font-bold capitalize duration-300 hover:shadow-[3px_5px_10px_#0000007f]",
      )}
      onClick={() => {
        redirect(path);
      }}
    >
      {text}
    </button>
  );
}
