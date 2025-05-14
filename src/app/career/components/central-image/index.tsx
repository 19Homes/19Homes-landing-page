"use client";
import { centralImages } from "../../constants";
import Image from "next/image";
import { cn } from "@/utils/classnames";
import { useState, useEffect } from "react";

export default function CentralImage() {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setVisibleImageIndex((prevIndex) =>
        prevIndex < centralImages.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);
  return (
    <div className="bg-gold-25 relative col-span-3 h-[500px] overflow-hidden rounded-xl">
      {centralImages.map((image, index) => (
        <Image
          alt="building"
          src={image}
          fill
          className={cn(
            `object-cover duration-1500`,
            index === visibleImageIndex ? "opacity-100" : "opacity-0",
          )}
          placeholder="blur"
          key={index}
        />
      ))}
    </div>
  );
}
