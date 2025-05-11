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
    <div className="border-gold-25 h-[595px] w-[378px] rounded-4xl border-2 px-3.5 pt-3.5 pb-[1px] shrink-0">
      <div className="bg-gold-50 shadow-card relative h-full w-full rounded-4xl">
        <Image
          src={image}
          alt="architectural design"
          fill
          className="rounded-4xl object-cover object-center"
          placeholder="blur"
        />
        <button
          className="bg-gold-100 font-montserrat hover:shadow-card absolute bottom-[-20px] left-[50%] h-[65px] w-[226px] translate-x-[-50%] cursor-pointer rounded-4xl border-[5px] border-white text-sm font-bold text-white duration-300 hover:border-gold-25"
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
