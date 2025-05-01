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
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-start gap-[63px] w-full">
        <h4 className="text-xl font-semibold font-poppins text-black-100 capitalize">
          {name}
        </h4>
        <h6 className="text-sm text-gold-100 font-poppins font-semibold">
          {price}
        </h6>
      </div>
      <div className="flex gap-[6px] items-center">
        <Image
          src="/featured-properties/distance.svg"
          alt="location"
          height={20}
          width={20}
        />
        <p className="font-montserrat font-medium text-black-50 text-sm">
          34, Banana island, Lagos, Nigeria
        </p>
      </div>
      <ul className="flex gap-11 items-center">
        {cardInfoIconDetails.map(({ icon, alt, value }, index) => (
          <li key={index} className="flex items-center gap-[5px]">
            <Image src={icon} alt={alt} width={15} height={15} />
            <p className="text-xs text-black-100 font-montserrat font-normal">
              {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
