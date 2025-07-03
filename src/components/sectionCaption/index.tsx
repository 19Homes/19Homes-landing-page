"use client";
import { useEffect, useRef } from "react";
import { animate, createScope, createSpring, stagger, onScroll } from "animejs";
export default function SectionCaption({
  headText,
  subText,
}: {
  headText: string;
  subText: string;
}) {
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".head-text", {
        y: [{ to: "0", ease: createSpring({ stiffness: 100, damping: 25 }) }],
        delay: stagger(150),
        autoplay: onScroll({
          container: ".scroll-container",
          enter: "80%",
          leave: "100",
        }),
      });
      animate(".p-text", {
        y: [{ to: "0", ease: createSpring({ stiffness: 100, damping: 25 }) }],
        delay: stagger(150, { start: 450 }),
        autoplay: onScroll({
          container: ".scroll-container",
          enter: "80%",
          leave: "100",
        }),
      });
    });

    return () => scope.current?.revert();
  }, []);
  return (
    <div
      ref={root}
      className="scroll-container mb-10 flex w-full flex-col items-center gap-2.5 text-center md:mb-20"
    >
      <h3 className="text-gold-100 font-poppins overflow-y-hidden text-center text-sm font-bold capitalize md:text-2xl">
        {headText.split(" ").map((text, index) => (
          <div
            key={index}
            className="head-text mr-1 inline-block sm:mr-2"
            style={{ transform: "translateY(220%)" }}
          >
            {text}
          </div>
        ))}
      </h3>
      <p className="text-black-100 font-montserrat overflow-y-hidden text-center text-xl font-bold capitalize md:text-3xl">
        {subText.split(" ").map((text, index) => (
          <span
            key={index}
            className="p-text mr-1 inline-block sm:mr-2"
            style={{ transform: "translateY(220%)" }}
          >
            {text}
          </span>
        ))}
      </p>
    </div>
  );
}
