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
    <article className="flex flex-col items-center relative rounded-4xl shadow-card w-[350px] h-[591px] bg-white">
      <div className="relative w-full h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-4xl"
        />
      </div>
      <div className="w-full h-[241px] p-5 flex flex-col items-center">
        <SectionCardInfo name={name} price={price} />
        <CardButton />
      </div>
      <div className="absolute w-[378px] h-[595px] rounded-4xl -z-10 border-2 border-gold-25 top-[-14px] left-[-14px]"></div>
    </article>
  );
}
