"use client";
import Image from "next/image";
import logo from "../../../../../public/19Homes-icon.png";
import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";
export default function Logo() {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".logo", {
        opacity: [{ to: 1, ease: "outQuad", duration: 200 }],
        y: [{ from: "20px", ease: "outQuad", duration: 200 }],
      });
    });
    return () => scope.current?.revert();
  }, []);
  return (
    <div ref={root} className="mr-auto">
      <Image
        src="/19Homes-icon.svg"
        height={56}
        width={142}
        alt="19 Homes Logo"
        className="logo hidden opacity-0 sm:block"
      />
      <div className="logo relative h-6 w-7.5 opacity-0 sm:hidden">
        <Image fill src={logo} alt="19Homes logo" />
      </div>
    </div>
  );
}
