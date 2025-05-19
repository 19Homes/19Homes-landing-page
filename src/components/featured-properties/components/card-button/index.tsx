import Image from "next/image";

export default function CardButton() {
  return (
    <button className="bg-gold-100 font-montserrat mt-[5px] flex cursor-pointer items-center justify-center gap-[7px] rounded-[21px] border-[3px] border-white px-5 py-4 text-[9px] font-semibold text-white md:mt-[30px] md:gap-2.5 md:px-8 md:py-6 md:text-sm">
      <Image
        src="/featured-properties/play_circle.svg"
        alt=""
        aria-hidden="true"
        height={24}
        width={25}
        className="hidden md:block"
      />
      <Image
        src="/featured-properties/play_circle.svg"
        alt=""
        aria-hidden="true"
        height={16}
        width={16}
        className="block md:hidden"
      />
      <span>View Property</span>
    </button>
  );
}
