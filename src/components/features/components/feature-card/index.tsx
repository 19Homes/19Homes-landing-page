import type { CardBase } from "@/types";
import Image from "next/image";

export default function FeatureCard({ title, description, image }: CardBase) {
  return (
    <div className="card-container" style={{ opacity: 0 }}>
      <article className="features-card flex w-full max-w-[343px] shrink-0 flex-col items-center justify-center gap-6 rounded-4xl p-4.5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:w-[450px] lg:max-w-[450px] lg:gap-8 lg:p-6">
        <div className="flex w-full flex-col items-center gap-4.5 lg:gap-6">
          <Image
            src={image}
            alt={`${title} icon`}
            aria-hidden="true"
            width={50}
            height={50}
            className="size-[38px] lg:size-[50px]"
          />
          <h2 className="text-black-100 font-poppins text-center text-[22px] font-semibold capitalize lg:text-3xl">
            {title}
          </h2>
        </div>
        <p className="text-black-100 font-montserrat font-normal text-center text-[1rem] lg:text-xl">
          {description}
        </p>
      </article>
    </div>
  );
}
