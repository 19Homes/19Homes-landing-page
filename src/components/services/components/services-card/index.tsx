"use client";
import { CardBase } from "@/types";
import Image from "next/image";
import Button from "@/components/button";

export default function ServicesCard({ title, description, image }: CardBase) {
  return (
    <article className="service-card flex w-full max-w-[342px] shrink-0 flex-col gap-2 lg:w-[450px] lg:max-w-[450px] lg:gap-2.5">
      <div
        className="service-card-image-holder relative h-[219px] w-full lg:h-[289px]"
        style={{ opacity: 0 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover"
        />
        <div
          className="bg-gold-100 absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(circle, #000000 0 100%, rgba(0,0,0,0.75) 0 110%, rgba(0,0,0,0.50) 0 120%, rgba(0,0,0,0.25) 0 130%, rgba(0,0,0,0) 0 140%)",
          }}
        ></div>
      </div>
      <div className="flex w-full flex-col items-center gap-4.5 lg:gap-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <h2 className="text-black-100 font-poppins text-center text-[22px] font-bold capitalize lg:text-3xl">
            {title.split(" ").map((word, i) => (
              <div key={i} className="mr-2 inline-block overflow-y-hidden">
                {word.split("").map((letter, i) => (
                  <div
                    key={i}
                    className="service-letter mr-0.5 inline-block"
                    style={{ transform: "translateY(120%)" }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            ))}
          </h2>
          <p className="text-black-100 font-montserrat text-center text-[16px] font-normal lg:text-xl">
            {description.split(" ").map((word, i) => (
              <span
                key={i}
                className="service-word mr-1.5 inline-block"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
        <div className="service-btn" style={{opacity: 0}}>
          <Button text="learn more" onclick={() => {}} />
        </div>
      </div>
    </article>
  );
}
