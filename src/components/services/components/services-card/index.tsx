"use client";
import { CardBase } from "@/types";
import Image from "next/image";
import Button from "@/components/button";

export default function ServicesCard({ title, description, image }: CardBase) {
  return (
    <article className="flex w-full max-w-[342px] shrink-0 flex-col gap-2 lg:w-[450px] lg:max-w-[450px] lg:gap-2.5">
      <div className="relative h-[219px] w-full lg:h-[289px]">
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4.5 lg:gap-6">
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <h2 className="text-black-100 font-poppins text-[22px] font-bold capitalize lg:text-3xl text-center">
            {title}
          </h2>
          <p className="text-black-100 font-montserrat text-[16px] font-normal lg:text-xl text-center">
            {description}
          </p>
        </div>
        <Button text="learn more" onclick={() => {}} />
      </div>
    </article>
  );
}
