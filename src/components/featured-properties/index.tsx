"use client";
import SectionCaption from "../sectionCaption";
import { featuredPropertyCardDetails } from "./constants";
import SectionCard from "./components/section-card";
import { useEffect, useRef } from "react";
import { animate, createScope, onScroll, stagger } from "animejs";

export default function FeaturedProperties() {
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  useEffect(() => {
    animations();
    function animations() {
      requestAnimationFrame(() => {
        scope.current = createScope({ root }).add(() => {
          animate(".background-section", {
            opacity: [{ to: 1, ease: "outCirc", duration: 300 }],
            scale: [{ to: 1, ease: "inOutBack", duration: 400 }],
            autoplay: onScroll({
              container: ".properties-container",
              enter: "bottom-=400",
              leave: "top",
              sync: "play",
            }),
          });
          animate(".property-card", {
            opacity: 1,
            y: "0px",
            scale: 1,
            delay: stagger(200),
            ease: "inOutBack",
            duration: 800,
            autoplay: onScroll({
              container: ".properties-container",
              enter: "bottom-=400",
              leave: "top+=400 bottom",
              sync: "play play reverse reverse",
            }),
          });
        });
      });
    }

    return () => scope.current?.revert();
  }, []);
  return (
    <section
      ref={root}
      className="properties-container flex flex-col items-center justify-center overflow-x-auto px-6 py-10 md:pl-14"
    >
      <SectionCaption
        headText="our featured properties"
        subText="view our featured properties"
      />
      <section
        className="background-section flex w-full max-w-[1512px] gap-9 overflow-x-auto overflow-y-clip bg-[url('/featured-properties/graphic-vector.svg')] bg-contain bg-center bg-no-repeat py-6 pl-3 md:gap-14 md:px-4 md:py-8 lg:justify-between"
        style={{ scrollbarWidth: "none", opacity: 0, transform: "scale(0.2)" }}
      >
        {featuredPropertyCardDetails.map((card, index) => (
          <SectionCard
            key={index}
            image={card.image}
            price={card.price}
            name={card.name}
          />
        ))}
      </section>
    </section>
  );
}
