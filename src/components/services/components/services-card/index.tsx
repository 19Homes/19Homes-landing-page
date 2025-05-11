"use client";
import { CardBase } from "@/types";
import Image from "next/image";
import Button from "@/components/button";

export default function ServicesCard({ title, description, image }: CardBase) {
  return (
    <article className="flex w-[450px] shrink-0 flex-col gap-2.5">
      <div className="relative h-[289px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-black-100 font-poppins text-3xl font-bold capitalize">
            {title}
          </h2>
          <p className="text-black-100 font-montserrat text-xl font-normal">
            {description}
          </p>
        </div>
        <Button text="learn more" onclick={() => {}} />
      </div>
    </article>
  );
}
