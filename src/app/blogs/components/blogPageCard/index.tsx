import Image, { StaticImageData } from "next/image";
export default function BlogPageCard({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) {
  return (
    <button className="group outline-gold-75 relative shrink-0 overflow-hidden rounded-3xl shadow-xl outline-2 outline-offset-8 duration-300 hover:shadow-2xl cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-[min(80vw,350px)] aspect-square rounded-3xl object-cover duration-300 group-hover:scale-110"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#000000cc)]"></div>
      <div className="absolute right-0 bottom-4 left-3 text-white text-left">
        <p className="font-montserrat text-[16px] font-bold capitalize">
          {title}
        </p>
        <p className="font-montserrat text-xs font-normal">{text}</p>
      </div>
    </button>
  );
}