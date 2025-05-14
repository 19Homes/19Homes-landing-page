import { centralImages, column1Images, column3Images } from "../../constants";
import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="grid h-[500px] w-[600px] grid-cols-5 gap-4 overflow-y-hidden rounded-xl">
      <div className="animate-card-slide flex h-full flex-col gap-4">
        {Array(2)
          .fill("")
          .map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column1Images.map((image, index) => (
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
      <div className="flex h-full flex-col gap-4 overflow-y-hidden translate-y-[-50.5%] animate-card-slide-down">
        {Array(2)
          .fill("")
          .map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column3Images.map((image, index) => (
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
      </div>
    </div>
  );
}
