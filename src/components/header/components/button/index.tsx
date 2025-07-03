"use client";
import { headerButtonTypes } from "../../types";
import { cn } from "@/utils/classnames";
import { redirect } from "next/navigation";
import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

export default function HeaderButton({
  classnames,
  text,
  path,
}: headerButtonTypes) {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".header-btn", {
        opacity: [
          {
            to: 1,
            ease: "inOutSine",
            duration: 200,
          },
        ],
        scale: [
          {
            from: 0.6,
            ease: "inOutSine",
            duration: 200,
          },
        ],
        y: [
          {
            from: "40px",
            ease: "inOutSine",
            duration: 200,
          },
        ],
        delay: (_, i) => 200 * i + 700,
      });
    });
    return () => scope.current?.revert();
  }, []);
  return (
    <div ref={root}>
      <button
        className={cn(
          classnames,
          "font-montserrat header-btn animate-button-appear cursor-pointer rounded-sm p-4 text-sm font-bold capitalize opacity-0 duration-300 hover:shadow-[3px_5px_10px_#0000007f]",
        )}
        onClick={() => {
          redirect(path);
        }}
      >
        {text}
      </button>
    </div>
  );
}
