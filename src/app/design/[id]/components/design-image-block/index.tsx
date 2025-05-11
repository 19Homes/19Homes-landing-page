import Image from "next/image";
import UseGetCurrentDesign from "@/hooks/useGetCurrentDesign";
export default function DesignImageBlock() {
  const currentDesign = UseGetCurrentDesign();
  const images = [
    currentDesign.images.imageOne,
    currentDesign.images.imageTwo,
    currentDesign.images.imageThree,
  ];
  return (
    <section className="mt-20 flex w-full flex-col items-center gap-12 px-14">
      <div className="relative h-[747px] w-full">
        <Image
          src={currentDesign?.images.imageOne}
          alt="design"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex justify-center gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            className="border-black-100 focus:border-gold-75 group relative h-50 w-50 cursor-pointer overflow-hidden rounded-[10px] border-3 shadow-[0_3px_10px_rgba(0,0,0,0.2)] duration-300 hover:shadow-[0_5px_12px_rgba(0,0,0,0.5)] focus:outline-none"
          >
            <Image
              src={image}
              alt={`Design ${index}`}
              fill
              className="object-cover duration-300 group-hover:scale-[1.1]"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
