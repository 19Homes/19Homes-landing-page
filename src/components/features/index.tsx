"use client";
import { featuresData } from "./constants";
import FeatureCard from "./components/feature-card";
import { animate, createScope, onScroll, stagger, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function Features() {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".caption-letter", {
        y: [
          {
            from: stagger(["-80px", "80px"], { reversed: true }),
            ease: "outExpo",
            duration: 200,
          },
        ],
        opacity: [{ to: 1, ease: "inOut", duration: 300 }],
        filter: [{ to: "blur(0)", ease: "outQuad", duration: 200 }],
        delay: (_, i, l) => (l - i) * 50 + utils.random(-50, 200),
        autoplay: onScroll({
          container: ".features-container",
          enter: "bottom-=300",
          leave: "top",
          sync: "play play reverse reverse",
        }),
      });
      const $evenCards = utils.$(".card-container:nth-child(even)");
      const $oddCards = utils.$(".card-container:nth-child(odd)");
      $evenCards.forEach((card) => {
        animate(card, {
          x: [{ from: "120px", ease: "inOutBack(1.70158)", duration: 500 }],
          delay: 300,
          opacity: [{ to: 1, ease: "outCirc", duration: 500 }],
          rotate: [{ from: ".25turn", ease: "outBack(1.3)", duration: 300 }],
          autoplay: onScroll({
            container: ".features-container",
            enter: "bottom-=300 top",
            leave: "top+=400 bottom",
            sync: "play play reverse reverse",
          }),
        });
      });
      $oddCards.forEach((card) => {
        animate(card, {
          x: [{ from: "-120px", ease: "inOutBack(1.70158)", duration: 500 }],
          opacity: [{ to: 1, ease: "outCirc", duration: 500 }],
          rotate: [{ from: "-.25turn", ease: "outBack(1.3)", duration: 300 }],
          autoplay: onScroll({
            container: ".features-container",
            enter: "bottom-=300 top",
            leave: "top+=400 bottom",
            sync: "play play reverse reverse",
          }),
        });
      });
          });
    return () => scope.current?.revert();
  }, []);
  return (
    <section
      ref={root}
      className="features-container flex w-full flex-col items-center gap-10 lg:gap-20"
    >
      <h2 className="font-poppins text-black-100 text-center text-xl font-bold capitalize lg:text-3xl">
        {"why".split("").map((letter, i) => (
          <div
            key={i}
            className="caption-letter mr-0.5 inline-block sm:mr-2"
            style={{ opacity: 0, filter: "blur(8px)" }}
          >
            {letter}
          </div>
        ))}{" "}
        <span className="text-gold-100">
          {"19Homes".split("").map((letter, i) => (
            <div
              key={i}
              className="caption-letter mr-0.5 inline-block"
              style={{ opacity: 0, filter: "blur(8px)" }}
            >
              {letter}
            </div>
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
