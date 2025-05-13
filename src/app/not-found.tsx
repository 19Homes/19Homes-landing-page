import image from "../../public/not-found/not-found.jpg";
import image1 from "../../public/not-found/not-found1.jpg";
import image2 from "../../public/not-found/not-found2.jpg";
import image3 from "../../public/not-found/not-found3.jpg";
import image4 from "../../public/not-found/not-found4.jpg";
import Image from "next/image";
export default function NotFound() {
  return (
    <main className="flex w-full items-center justify-between gap-12 px-14">
      <div className="grid h-[500px] w-[60%] grid-cols-3 grid-rows-4 gap-2 overflow-hidden rounded-3xl *:overflow-hidden *:rounded-3xl">
        <div className="bg-gold-75 group relative col-start-1 col-end-2 row-span-4">
          <Image
            src={image2}
            alt="image of an apartment"
            fill
            className="object-cover duration-300 group-hover:scale-[1.15]"
            placeholder="blur"
          />
        </div>
        <div className="bg-gold-75 group relative col-start-2 col-end-3 row-start-1 row-end-3">
          <Image
            src={image1}
            alt="image of an apartment"
            fill
            className="object-cover duration-300 group-hover:scale-[1.15]"
            placeholder="blur"
          />
        </div>
        <div className="bg-gold-50 group relative col-start-2 col-end-3 row-start-3 row-end-5">
          <Image
            src={image}
            alt="image of an apartment"
            fill
            className="object-cover duration-300 group-hover:scale-[1.15]"
            placeholder="blur"
          />
        </div>
        <div className="bg-gold-100 group relative col-start-3 col-end-4 row-start-1 row-end-2">
          <Image
            src={image3}
            alt="image of an apartment"
            fill
            className="object-cover duration-300 group-hover:scale-[1.15]"
            placeholder="blur"
          />
        </div>
        <div className="group bg-gold-25 relative col-start-3 col-end-4 row-start-2 row-end-5">
          <Image
            src={image4}
            alt="image of an apartment"
            fill
            className="object-cover duration-300 group-hover:scale-[1.15]"
            placeholder="blur"
          />
        </div>
      </div>
    </main>
  );
}
