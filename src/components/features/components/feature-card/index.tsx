import { CardBase } from "@/types";
import Image from "next/image";

export default function FeatureCard({ title, description, image }: CardBase) {
  return (
    <article className="shrink-0 flex flex-col items-center justify-center gap-8 rounded-4xl p-6 w-[450px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="w-full flex flex-col gap-6 items-center">
        <Image
          src={image}
          alt={`${title} icon`}
          aria-hidden="true"
          width={50}
          height={50}
        />
        <h2 className="capitalize text-center text-3xl text-black-100 font-poppins font-semibold">
          {title}
        </h2>
      </div>
      <p className="text-xl text-black-100 font-montserrat font-regular text-center">
        {description}
      </p>
    </article>
  );
}
