"use client";
import SectionCaption from "@/components/sectionCaption";
import ServicesCard from "./components/services-card";
import { ServicesCardsData } from "./constants";
import { useEffect, useRef } from "react";
import { animate, createScope, onScroll, utils } from "animejs";

export default function Services() {
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      const $imageHolder = utils.$(".service-card-image-holder");
      const $imageCover = utils.$(".image-cover");
      $imageHolder.forEach((holder) => {
        animate(holder, {
          opacity: 1,
          duration: 500,
          ease: "outCirc",
          autoplay: onScroll({
            container: ".services-container",
            target: holder,
            enter: "bottom-=300 top",
            leave: "top+=300 bottom",
            sync: "play play reverse reverse",
          }),
        });
      });
      $imageCover.forEach((cover, index) => {
        animate(cover, {
          maskImage: [
            {
              to: "linear-gradient(to left, #000000 0 -40%, rgba(0,0,0,0.75) 0 -30%, rgba(0,0,0,0.50) 0 -20%, rgba(0,0,0,0.25) 0 -10%, rgba(0,0,0,0) 0 0%)",
              ease: "outBack",
              duration: 800,
            },
          ],
          delay: 500,
          autoplay: onScroll({
            container: ".services-container",
            target: `.service-card:nth-child(${index + 1}) .service-card-image-holder`,
            enter: "bottom-=300 top",
            leave: "top+=300 bottom",
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
      className="services-container flex flex-col items-center gap-0 px-6 lg:px-14"
    >
      <SectionCaption
        headText="our services"
        subText="view our services over the years"
      />
      <section className="flex w-full flex-wrap justify-center gap-[25px] gap-y-20">
        {ServicesCardsData.map((card, index) => (
          <ServicesCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </section>
    </section>
  );
}
