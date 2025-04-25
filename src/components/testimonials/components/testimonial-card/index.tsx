import { TestimonialCard } from "../../types";
import Image from "next/image";
import Stars from "../stars";
export default function TestimonialCardBlock({
  name,
  image,
  text,
  role,
  stars,
}: TestimonialCard) {
  return (
    <article className="min-w-[419px] h-[257px] px-[33px] flex items-center rounded-4xl border border-black-100 shrink-0">
      <Image
        width={158}
        height={163}
        src={image}
        alt="name"
        className="relative left-[-65px] rounded-full"
      />
      <div className="flex flex-col items-center gap-[39px]">
        <div className="flex flex-col items-center gap-[11px]">
          <h5 className="font-poppins font-bold text-[16px] text-black-100 capitalize">
            <span>{name}</span> - <span>{role}</span>
          </h5>
          <p className="font-montserrat text-[12px] font-normal text-black-100 text-center max-w-[30ch]">
            {text}
          </p>
        </div>
        <Stars stars={stars} />
      </div>
    </article>
  );
}
