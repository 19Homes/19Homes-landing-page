import SectionCardInfo from "../section-card-info";
import Image from "next/image";
import { FeaturedPropertyCardType } from "../../types";
import CardButton from "../card-button";

export default function SectionCard({
  image,
  name,
  price,
}: FeaturedPropertyCardType) {
  return (
    <article
      className="shadow-card property-card relative flex h-[392px] w-[232px] flex-col items-center rounded-[21px] bg-white md:h-[591px] md:w-[350px] md:rounded-4xl"
      style={{ opacity: 0, transform: "translateY(100px) scale(0.8)" }}
    >
      <div className="relative h-[232px] w-full overflow-hidden md:h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-t-4xl object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex h-40 w-full flex-col items-center p-3 md:h-[241px] md:p-5 bg-white rounded-[21px]">
        <SectionCardInfo name={name} price={price} />
        <CardButton />
      </div>
      <div className="border-gold-25 absolute top-[-9px] right-[-9px] left-[-9px] -z-10 h-[394px] rounded-[21px] border-2 md:top-[-14px] md:left-[-14px] md:h-[595px] md:w-[378px] md:rounded-4xl"></div>
    </article>
  );
}
