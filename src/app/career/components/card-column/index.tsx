import Image from "next/image";
import type { StaticImageData } from "next/image";

const CardColumn = ({ columnImages }: { columnImages: StaticImageData[] }) => {
  return (
    <>
      {Array(2)
        .fill("")
        .map((_, index) => (
          <div key={index} className="flex flex-col gap-4">
            {columnImages.map((image, index) => (
              <div
                key={index}
                className="bg-black-25 relative h-[110px] w-full shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt="a beautiful apartment"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default CardColumn;
