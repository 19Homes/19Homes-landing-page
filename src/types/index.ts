import type { StaticImageData } from "next/image";

export type CardBase = {
  title: string;
  description: string;
  image: StaticImageData;
};

export type DesignsImagesType = {
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
  imageThree: StaticImageData;
};

export type DesignsType = {
  id: string;
  images: DesignsImagesType;
};
