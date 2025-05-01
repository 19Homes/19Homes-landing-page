import SectionCardInfo from "../section-card-info";
import Image from "next/image";
import { FeaturedPropertyCardType } from "../../types";

export default function SectionCard({
  image,
  name,
  price,
}: FeaturedPropertyCardType) {
  return (
    <article className="flex flex-col rounded-4xl shadow-card w-[350px] h-[591px]">
      <div className="relative w-full h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-4xl"
        />
      </div>
      <div className="w-full h-[241px] p-5">
        <SectionCardInfo name={name} price={price} />
      </div>
    </article>
  );
}
