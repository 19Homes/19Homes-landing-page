import Image from "next/image";
import UseGetCurrentDesign from "@/hooks/useGetCurrentDesign";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/classnames";
export default function DesignImageBlock() {
  const currentDesign = UseGetCurrentDesign();
  const [currentImage, setCurrentImage] = useState(0);
  const images = useMemo(() => {
    return [
      currentDesign.images.imageOne,
      currentDesign.images.imageTwo,
      currentDesign.images.imageThree,
    ];
  }, [currentDesign]);
  useEffect(() => {
    const imageChangeInterval = setTimeout(() => {
      setCurrentImage((prev) => (images[prev + 1] ? prev + 1 : 0));
    }, 5000);

    return () => clearTimeout(imageChangeInterval);
  }, [images, currentImage]);
  return (
    <section className="mt-[35px] flex w-full max-w-[1512px] flex-col items-center gap-12 px-6 sm:px-8 md:px-10 lg:mt-20 lg:px-14">
      <div className="shadow-card relative aspect-[1.87/1] w-full lg:aspect-[auto] lg:h-[747px] lg:shadow-none">
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
      <div className="flex w-full justify-center gap-4 sm:gap-8">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              `border-black-100 group relative aspect-[1/1] w-[25%] cursor-pointer overflow-hidden rounded-[10px] border-2 shadow-[0_3px_10px_rgba(0,0,0,0.2)] duration-300 hover:shadow-[0_5px_12px_rgba(0,0,0,0.5)] md:border-3 lg:aspect-[auto] lg:h-50 lg:w-50`,
              index === currentImage
                ? "outline-gold-100 outline-3 outline-5 outline-offset-4 outline-double"
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
