import { centralImages, column1Images, column3Images } from "../../constants";
import Image, { StaticImageData } from "next/image";

export default function ImageGrid() {
  return (
    <div className="grid h-[500px] w-[600px] grid-cols-5 gap-4 overflow-y-hidden rounded-xl">
      <div className="animate-card-slide flex h-full flex-col gap-4">
        <CardColumn columnImages={column1Images} />
      </div>
      <div className="bg-gold-25 relative col-span-3 h-[500px] overflow-hidden rounded-xl">
        <Image
          alt="building"
          src={centralImages[0]}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="animate-card-slide-down flex h-full translate-y-[-50.5%] flex-col gap-4 overflow-y-hidden">
        <CardColumn columnImages={column3Images} />
      </div>
    </div>
  );
}

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
