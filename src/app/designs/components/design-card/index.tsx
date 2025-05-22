"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export default function DesignCard({
  image,
  id,
}: {
  image: StaticImageData;
  id: string;
}) {
  const router = useRouter();
  return (
    <div className="border-gold-25 h-[340px] w-[min(90vw,216px)] shrink-0 rounded-[18px] border-2 p-2 pb-[0.5px] lg:h-[595px] lg:w-[378px] lg:rounded-4xl lg:p-3.5 lg:pb-[1px]">
      <div className="bg-gold-50 shadow-card relative h-full w-full rounded-[18px] lg:rounded-4xl">
        <Image
          src={image}
          alt="architectural design"
          fill
          className="rounded-[18px] object-cover object-center lg:rounded-4xl"
          placeholder="blur"
        />
        <button
          className="bg-gold-100 font-montserrat hover:shadow-card hover:border-gold-25 ] absolute bottom-[-11px] left-[50%] h-[37px] w-[min(80%,129px)] translate-x-[-50%] cursor-pointer rounded-[18px] border-[3px] border-white text-[8px] font-bold text-white duration-300 lg:bottom-[-20px] lg:h-[65px] lg:w-[226px] lg:rounded-4xl lg:border-[5px] lg:text-sm"
          onClick={() => {
            router.push(`/design/${id}`);
          }}
        >
          View Design
        </button>
      </div>
    </div>
  );
}
