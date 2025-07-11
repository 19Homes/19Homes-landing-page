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
    <article
      className="border-black-100 testimonial-card flex h-[150px] w-[245px] shrink-0 items-center justify-end rounded-[18px] border px-5 lg:h-[257px] lg:min-w-[419px] lg:justify-end lg:rounded-4xl lg:px-[33px]"
      style={{ opacity: 0 }}
    >
      <Image
        width={158}
        height={163}
        src={image}
        alt="name"
        className="testimonial-image relative left-[-18px] h-[95px] w-[92px] rounded-full object-cover lg:left-[-32px] lg:h-[163px] lg:w-[158px]"
      />
      <div className="flex flex-col items-center gap-[22px] lg:gap-[39px]">
        <div className="flex w-max flex-col items-center gap-[7px] lg:gap-[11px]">
          <h5 className="font-poppins text-black-100 testimonial-name text-center text-[8px] font-bold capitalize lg:text-[16px]">
            <span>{name}</span> - <span>{role}</span>
          </h5>
          <p className="font-montserrat text-black-100 testimonial-text max-w-[30ch] text-center text-[7px] font-normal lg:text-[12px]">
            {text}
          </p>
        </div>
        <Stars stars={stars} />
      </div>
    </article>
  );
}
