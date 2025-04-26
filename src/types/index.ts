import type { StaticImageData } from "next/image";

export type CardBase = {
  title: string;
  description: string;
  image: StaticImageData;
};
