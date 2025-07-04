"use client";
import { featuresData } from "./constants";
import FeatureCard from "./components/feature-card";
import { animate, createScope, onScroll, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function Features() {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".caption-letter", {
        y: [
          {
            from: `${utils.random(5, 30)}px`,
            ease: "inOutBack",
            duration: 400,
          },
        ],
        opacity: [{ to: 1, ease: "inOut", duration: 300 }],
        filter: [{ to: "blur(0)", ease: "outQuad", duration: 400 }],
        delay: (_, i, l) => (l - i) * 50 + utils.random(-50, 200),
        autoplay: onScroll({
          container: ".features-container",
          enter: "bottom-=200",
          leave: "top",
          sync: "play play reverse reverse",
        }),
      });
    });
  }, []);
  return (
    <section
      ref={root}
      className="features-container flex w-full flex-col items-center gap-10 lg:gap-20"
    >
      <h2 className="font-poppins text-black-100 text-center text-xl font-bold capitalize lg:text-3xl">
        {"why".split("").map((letter, i) => (
          <span
            key={i}
            className="caption-letter mr-1 sm:mr-2"
            style={{ opacity: 0, filter: "blur(8px)" }}
          >
            {letter}
          </span>
        ))}{" "}
        <span className="text-gold-100">
          {"19Homes".split("").map((letter, i) => (
            <span
              key={i}
              className="caption-letter mr-1"
              style={{ opacity: 0, filter: "blur(8px)" }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h2>
      <section className="flex w-full max-w-[1512px] flex-wrap items-center justify-center gap-[25px] gap-y-5 px-6 lg:gap-y-10 lg:px-14">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </section>
    </section>
  );
}
