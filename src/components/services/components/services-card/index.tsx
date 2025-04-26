import { CardBase } from "@/types";
import ServicesButton from "../services-button";
import Image from "next/image";

export default function ServicesCard({ title, description, image }: CardBase) {
  return (
    <article className="flex flex-col gap-2.5 w-[450px] shrink-0">
      <div className="w-full h-[289px] relative">
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="w-full flex flex-col gap-4 items-center">
          <h2 className="text-3xl text-black-100 font-poppins font-bold capitalize">
            {title}
          </h2>
          <p className="text-black-100 text-xl font-montserrat font-normal">
            {description}
          </p>
        </div>
        <ServicesButton />
      </div>
    </article>
  );
}
