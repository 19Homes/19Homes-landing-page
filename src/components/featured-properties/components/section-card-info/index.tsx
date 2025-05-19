import Image from "next/image";
import { cardInfoIconDetails } from "../../constants";
export default function SectionCardInfo({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  return (
    <div className="flex w-full flex-col gap-5 md:gap-6">
      <div className="flex w-full items-start justify-between gap-10.5 md:gap-[63px]">
        <h4 className="font-poppins text-black-100 text-[13px] font-semibold capitalize md:text-xl min-w-[10ch]">
          {name}
        </h4>
        <h6 className="text-gold-100 font-poppins text-[9px] font-semibold md:text-sm">
          {price}
        </h6>
      </div>
      <div className="flex items-center gap-[6px]">
        <Image
          src="/featured-properties/distance.svg"
          alt="location"
          height={20}
          width={20}
        />
        <p className="font-montserrat text-black-50 text-[9px] font-medium md:text-sm">
          34, Banana island, Lagos, Nigeria
        </p>
      </div>
      <ul className="flex items-center gap-11">
        {cardInfoIconDetails.map(({ icon, alt, value }, index) => (
          <li key={index} className="flex items-center gap-[5px]">
            <Image src={icon} alt={alt} width={15} height={15} />
            <p className="text-black-100 font-montserrat text-[8px] font-normal md:text-xs">
              {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
