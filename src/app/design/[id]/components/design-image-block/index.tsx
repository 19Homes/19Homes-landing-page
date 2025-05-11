import Image from "next/image";
import UseGetCurrentDesign from "@/hooks/useGetCurrentDesign";
import { useState } from "react";
import { cn } from "@/utils/classnames";
export default function DesignImageBlock() {
  const currentDesign = UseGetCurrentDesign();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    currentDesign.images.imageOne,
    currentDesign.images.imageTwo,
    currentDesign.images.imageThree,
  ];
  return (
    <section className="mt-20 flex w-full max-w-[1512px] flex-col items-center gap-12 px-14">
      <div className="relative h-[747px] w-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="design"
            fill
            className={cn(
              "object-cover duration-1500",
              index === currentImage ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div className="flex justify-center gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              `border-black-100 group relative h-50 w-50 cursor-pointer overflow-hidden rounded-[10px] border-3 shadow-[0_3px_10px_rgba(0,0,0,0.2)] duration-300 hover:shadow-[0_5px_12px_rgba(0,0,0,0.5)]`,
              index === currentImage
                ? "outline-gold-100 outline-5 outline-offset-4 outline-double"
                : "outline-none",
            )}
            onClick={() => {
              setCurrentImage(index);
            }}
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
