import Image from "next/image";

export default function CardButton() {
  return (
    <button className="bg-gold-100 px-8 py-6 flex gap-2.5 items-center justify-center font-montserrat text-sm text-white border-[5px] border-white cursor-pointer rounded-4xl mt-[30px] font-semibold">
      <Image
        src="/featured-properties/play_circle.svg"
        alt=""
        aria-hidden="true"
        height={24}
        width={25}
      />
      <span>View Property</span>
    </button>
  );
}
