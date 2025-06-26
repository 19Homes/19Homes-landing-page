"use client";
import { redirect } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { createUniqueBlogPath } from "../../utils/create-unique-blog-path";
import { useCallback } from "react";
export default function BlogPageCard({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) {
  const handleButtonClick = useCallback(() => {
    redirect(`/blog/${createUniqueBlogPath(title)}`);
  }, [title]);
  return (
    <button
      className="group outline-gold-75 relative shrink-0 cursor-pointer overflow-hidden rounded-3xl shadow-xl outline-2 outline-offset-8 duration-300 hover:shadow-2xl"
      onClick={handleButtonClick}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="aspect-square w-[min(80vw,350px)] rounded-3xl object-cover duration-300 group-hover:scale-110"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#000000cc)]"></div>
      <div className="absolute right-0 bottom-4 left-3 flex max-w-[40ch] flex-col gap-1 text-left text-white">
        <p className="font-montserrat text-[16px] font-bold capitalize">
          {title}
        </p>
        <p className="font-montserrat text-xs font-normal">{text}</p>
      </div>
    </button>
  );
}
